import { Box, Pagination, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useProducts } from "../../contexts/CrudContextProvider";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          my: "35px",
          justifyContent: "space-evenly",
        }}
      >
        <ProductCard />
      </Box>
      {/* <Box sx= {{textAlign: 'center'}}>

    <Typography>Page: {page}</Typography>
    <Box my={3} display="flex" justifyContent="center">
    <Pagination count={count} page={page} onChange={handleChange} />
    </Box>
    </Box> */}
    </>
  );
};

export default ProductList;
