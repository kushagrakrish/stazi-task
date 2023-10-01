import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import carsData from "./cars.json";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage cars={carsData} />} />
        <Route path='/page/:page' element={<HomePage cars={carsData} />} />
      </Routes>
    </>
  );
};

export default App;
