import React from "react";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import FavoritePage from "./pages/FavoritePage";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./components/productDetail/ProductDetail";

function App() {
  return (
    <Box>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
