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

const AddProduct = () => {
  const { addProduct } = useProducts();

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    price: 0,
    image: "",
    category: "",
    description: "",
  });

  const handleInp = (e) => {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  };

  return (
    <div className="addProduct">
      <Box sx={{ width: "60vw", margin: "0 auto" }}>
        <TextField
          sx={{
            marginTop: "10px",
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
          id="outlined-helperText"
          name="image"
          size="small"
          onChange={handleInp}
          type="file"
        />
        <FormControl fullWidth
          sx={{
            marginBottom: "10px",
            borderColor: "black",
            backgroundColor: "whitesmoke",
          }}
        >
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={category}
            label="Category"
            name="category"
            onChange={handleInp}
          >
            <MenuItem value={"Манга"}>Манга</MenuItem>
            <MenuItem value={"МангаМанхва"}>МангаМанхва</MenuItem>
          </Select>
        </FormControl>
        <TextField
          sx={{
            marginBottom: "10px",
            borderColor: "black",
            backgroundColor: "whitesmoke",
          }}
          fullWidth
          id="outlined-basic"
          label="Description"
          variant="outlined"
          name="description"
          size="small"
          onChange={handleInp}
        />
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
          onClick={() => {
            addProduct(product);
            navigate('/products');
          }}
        >
          Add product
        </Button>
      </Box>
    </div>
  );
};

export default AddProduct;
