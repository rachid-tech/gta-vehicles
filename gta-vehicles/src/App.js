import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

import Header from "./Components/Header";
import MainPage from "./Pages/MainPage";
import { Box } from "@mui/material";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Box style={{ height: 20 }} />
        <MainPage />
      </div>
    </Provider>
  );
}

export default App;
