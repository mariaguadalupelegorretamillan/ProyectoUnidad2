import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import App from "./App.js"
import Informacion from "./Informacion.js";

const Home = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/pokemons" element={<App />}></Route>
          <Route path="/info" element={<Informacion />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Home;