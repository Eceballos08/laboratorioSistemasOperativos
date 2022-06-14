import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Laboratorios } from "../components/Laboratorios";
import { Interrupcion } from "../components/Interrupcion";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Laboratorios />} />
        <Route path="/interrupcion" element={<Interrupcion />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
