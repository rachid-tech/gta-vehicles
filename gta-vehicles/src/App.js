import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./Components/Header";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
