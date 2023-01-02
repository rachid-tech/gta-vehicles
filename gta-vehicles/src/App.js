import React from "react";
import "./App.css";

import Header from "./Components/Header";
import MainPage from "./Pages/MainPage";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VehiclePage from "./Pages/VehiclePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Box style={{ height: 20 }} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="vehicle" element={<VehiclePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
