import { Grid } from "@mui/material";
import React from "react";
import ProductList from "../Components/crud/ProductList";
// import SideBar from "../Components/crud/SideBar";

const ProductsPage = () => {
  return (
    <Grid sx={{ display: "flex" }}>
      <Grid item md={3} sx={{ margin: "50px" }}>
        {/* <SideBar /> */}
      </Grid>
      <Grid item md={6}>
        <ProductList />
      </Grid>
    </Grid>
  );
};

export default ProductsPage;
