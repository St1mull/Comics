import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/CrudContextProvider";
import "../crud/styleCrud.css";

const AddProduct = () => {
  const { addProduct } = useProducts();

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    category: "",
    price: "",
    image: "",
    author: "",
  });

  const handleInp = (e) => {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  };

  // const [age, setAge] = React.useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <div className="addProduct">
      <Box sx={{ width: "60vw", margin: "0 auto" }}>
        <TextField
          sx={{
            marginBottom: "10px",
            borderColor: "black",
            backgroundColor: "whitesmoke",
          }}
          fullWidth
          id="outlined-basic"
          label="Category"
          variant="outlined"
          name="category"
          size="small"
          onChange={handleInp}
        />

        {/* <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          // label="Age"
          name="category"
          onChange={handleInp}
        >
          <MenuItem value={10}>sssss</MenuItem>
          <MenuItem value={20}>nnnnn</MenuItem>
          <MenuItem value={30}>qqqqq</MenuItem>
        </Select>
      </FormControl> */}

        <TextField
          sx={{
            marginBottom: "10px",
            borderColor: "black",
            backgroundColor: "whitesmoke",
          }}
          fullWidth
          id="outlined-basic"
          label="Title"
          variant="outlined"
          name="title"
          size="small"
          onChange={handleInp}
        />
        <TextField
          sx={{
            marginBottom: "10px",
            borderColor: "black",
            backgroundColor: "whitesmoke",
          }}
          fullWidth
          id="outlined-basic"
          label="Price"
          variant="outlined"
          name="price"
          size="small"
          onChange={handleInp}
        />
        <TextField
          sx={{
            marginBottom: "10px",
            borderColor: "black",
            backgroundColor: "whitesmoke",
          }}
          fullWidth
          id="outlined-basic"
          label="image"
          variant="outlined"
          name="image"
          size="small"
          onChange={handleInp}
        />
        <TextField
          sx={{
            marginBottom: "10px",
            borderColor: "black",
            backgroundColor: "whitesmoke",
          }}
          fullWidth
          id="outlined-basic"
          label="Author"
          variant="outlined"
          name="Author"
          size="small"
          onChange={handleInp}
        />
        {/* <TextField
      
      sx={{marginBottom: '10px', borderColor: 'black',backgroundColor: 'whitesmoke' }}
        fullWidth
        id="outlined-helperText"

        helperText="Вставьте картинку"
        name='picture'
        size="small"
        onChange={handleInp}
        type='file'
      
      /> */}

        <Button
          sx={{
            marginBottom: "10px",
            borderColor: "black",
            color: "black",
            backgroundColor: "whitesmoke",
          }}
          variant="outlined"
          fullWidth
          size="large"
          onClick={() => addProduct(product)}
        >
          Add product
        </Button>
      </Box>
    </div>
  );
};

export default AddProduct;
