import React, { createContext, useContext, useReducer } from 'react';

import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';
// import { API} from '../helpers/Consts'
const APIID = 'https://comicskatana.herokuapp.com/api/v1/comics/'

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

    const { data } = await axios(`${APIID}`)
    dispatch({
      type: 'GET_PRODUCTS',
      payload: data.results
    })

  }
  const getProductDetails = async (id) => {
    const { data } = await axios(`${APIID}${id}`);
    dispatch({
      type: 'GET_PRODUCT_DETAILS',
      payload: data,
    });
  };

  const addProduct = async (newProduct) => {
    let token = JSON.parse(localStorage.getItem('token'));
    const Authorization = `Bearer ${token.access}`;


    const config ={
      headers: {'Content-Type':'multipart/form-data',Authorization},
  };
  
    let formData = new FormData()
    formData.append('title', newProduct.title)
    formData.append('price', newProduct.price)
    formData.append('image', newProduct.image)
    formData.append('category', newProduct.category)
    formData.append('description', newProduct.description)
    
    await axios.post(`${APIID}`, formData,config)
    getProducts()
  }

  const deleteProduct = async (id) => {
    await axios.delete(`${APIID}${id}`);
    getProducts();
  };

  const saveEditedProduct = async (newProduct) => {
    const config ={
      headers: {'Content-Type': 'multipart/form-data'},
    };
    let formData = new FormData()
    formData.append('title', newProduct.title)
    formData.append('price', newProduct.price)
    formData.append('image', newProduct.image)
    formData.append('category', newProduct.category)
    // formData.append('author', newProduct.author)
    formData.append('id', newProduct.id)
    let id = formData.get('id')
    console.log(id);
    await axios.patch(`${APIID}${id}/`, formData,config);
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