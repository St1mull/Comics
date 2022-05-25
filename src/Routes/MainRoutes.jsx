import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../Components/aboutUs/AboutUs";
import AdminPage from "../Page/AdminPage";

import HomePage from "../Page/HomePage";
import NotFoundPage from "../Page/NotFoundPage";
import ProductsPage from "../Page/ProductsPage";
import RegisterPage from "../Page/RegisterPage";
import AuthPage from "../Page/AuthPage";
import Verify from "../Components/register/Verify";
import Madalka from "../Components/register/Madalka";
import PaymentPage from "../Page/PaymentPage";
import ContactUsPage from "../Page/ContactUsPage";
import Moshennik from "../Components/moshennik/Moshennik";
import Cart from "../Components/Cart/Cart";
import ProductDetailsPage from "../Page/ProductDetailsPage";
import EditProductPage from "../Page/EditProductPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/products",
      element: <ProductsPage />,
      id: 1,
    },
    {
      link: "/",
      element: <HomePage />,
      id: 2,
    },
    {
      link: "/login",
      element: <AuthPage />,
      id: 3,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 4,
    },
    {
      link: "/payment",
      element: <PaymentPage />,
      id: 5,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 6,
    },
    {
      link: "/contacts",
      element: <ContactUsPage />,
      id: 7,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 8,
    },
    {
      link: "/register",
      element: <RegisterPage />,
      id: 8,
    },
    {
      link: "/about",
      element: <AboutUs />,
      id: 9,
    },
    {
      link: "/moshennik",
      element: <Moshennik />,
      id: 11,
    },
    {
      link: "/products/:id",
      element: <ProductDetailsPage />,
      id: 12,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 13,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id}></Route>
      ))}
    </Routes>
  );
};

export default MainRoutes;
