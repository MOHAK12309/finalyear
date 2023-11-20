import "./App.css";
import React, { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import ReactGA from "react-ga4";
import ReactPixel from "react-facebook-pixel";
import Home from "./components/home";
import RenderHome from "./components/renderhome";
import Log from "./components/log";
import Dashboard from "./components/dash-one";
import Dashtwo from "./components/dash-two";
import About from "./components/OTP";
import App2 from "./components/dash-two";

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
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/dashtwo" element={<Dashtwo />}></Route>
          <Route path="/otp" element={<About/>}></Route>
          <Route path="/dash2" element={<App2/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;

