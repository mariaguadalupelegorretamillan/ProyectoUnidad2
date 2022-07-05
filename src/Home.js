import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import App from "./App.js"

const Home = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/pokemons" element={<App />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Home;