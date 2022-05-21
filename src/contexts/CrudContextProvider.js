import React, { createContext, useContext, useReducer } from 'react';

import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';
// import { API} from '../helpers/Consts'
const API = 'https://comicskatana.herokuapp.com/api/v1/comics/'

export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  productDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return { ...state, products: action.payload }
    case 'GET_PRODUCT_DETAILS':
      return { ...state, productDetails: action.payload }
    default:
      return state
  }
}

const CrudContextProvider = ({ children }) => {

  const location = useLocation();
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, INIT_STATE)

  const getProducts = async () => {


    const { data } = await axios(`${API}`)
    dispatch({
      type: 'GET_PRODUCTS',
      payload: data
    })
  }
  const getProductDetails = async (id) => {
    const { data } = await axios(`${API}${id}`);
    dispatch({
      type: 'GET_PRODUCT_DETAILS',
      payload: data,
    });
  };

  const addProduct = async (newProduct) => {
    const config ={
      headers: {'Content-Type':'multipart/form-data',
    },
  };
  
  let newProduct2 = new FormData()
  newProduct2.append('title', newProduct.title)
  newProduct2.append('category', newProduct.category)
  newProduct2.append('price', newProduct.price)
  newProduct2.append('image', newProduct.image)
  newProduct2.append('author', newProduct.author)




    
    await axios.post(`${API}`, newProduct2,config)
    getProducts()
  }

  const deleteProduct = async (id) => {
    await axios.delete(`${API}${id}`);
    getProducts();
  };

  const saveEditedProduct = async (newProduct) => {
    const config ={
      headers: {'Content-Type': 'multipart/form-data'},
    };
    let newProduct2 = new FormData()
    newProduct2.append('title', newProduct.title)
    newProduct2.append('category', newProduct.category)
    newProduct2.append('price', newProduct.price)
    newProduct2.append('image', newProduct.image)
    newProduct2.append('author', newProduct.author)
    newProduct2.append('id', newProduct.id)
    let id = newProduct2.get('id')
    console.log(id);
    await axios.patch(`${API}${id}/`, newProduct2,config);
    getProducts()

  }

  return <productContext.Provider value={{
    products: state.products,
    productDetails: state.productDetails,
    addProduct,
    getProducts,
    deleteProduct,
    saveEditedProduct,
    getProductDetails,
  
    
  }}
  >{children}</productContext.Provider>
};

export default CrudContextProvider;