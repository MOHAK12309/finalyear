import "./App.css";
import React, { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import ReactGA from "react-ga4";
import ReactPixel from "react-facebook-pixel";
import Home from "./components/home";
import RenderHome from "./components/renderhome";
import Log from "./components/log";
import Dashboard from "./components/dash-one";
// importing service creation pages

// ReactPixel.init('390972365769622',  options);

// ReactPixel.pageView();

function App() {
  return (
    <div>
      <div className="App"> 
        <Routes>
          <Route path="/renderhome" element={<RenderHome />}></Route>
          <Route path="/log" element={<Log />}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

