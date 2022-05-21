import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../Components/aboutUs/AboutUs";
import AdminPage from "../Page/AdminPage";

import HomePage from "../Page/HomePage";
import NotFoundPage from "../Page/NotFoundPage";
import ProductsPage from "../Page/ProductsPage";
import RegisterPage from "../Page/RegisterPage";
import AuthPage from "../Page/AuthPage";

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
      link: "/admin",
      element: <AdminPage />,
      id: 6,
    },
    {
      link: "/register",
      element: <RegisterPage />,
      id: 9,
    },
    {
      link: "/about",
      element: <AboutUs />,
      id: 10,
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
