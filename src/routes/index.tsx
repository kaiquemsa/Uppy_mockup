import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./../pages/Home";
import { DetailsProduct } from "../pages/Details-Product";
import { Template } from "../pages/Template";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details-product/:productName" element={<DetailsProduct />} />
        <Route path="/novidades" element={<Template/>} />
        <Route path="/produtos" element={<Template/>} />
        <Route path="/mais-vendidos" element={<Template/>} />
        <Route path="/atendimento" element={<Template/>} />
        <Route path="/minha-conta" element={<Template/>} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
