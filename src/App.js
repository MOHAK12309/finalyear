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
import LandingPage from "./components/landingpage";


// importing service creation pages

// ReactPixel.init('390972365769622',  options);

// ReactPixel.pageView();

function App() {
  return (
    <div>
      <div className="App">
        <Routes>
          <Route path="/renderhome" element={<RenderHome />}></Route>
          <Route path="/" element={<Log />}></Route>
       
          <Route path="/home" element={<Home />}></Route>
          <Route path="/dashtwo" element={<Dashtwo />}></Route>
          <Route path="/otp" element={<About/>}></Route>
          <Route path="/dashboard" element={<App2/>}/>
          <Route path="/landingpage" element={<LandingPage />}></Route>

        </Routes>
      </div>
    </div>
  );
}

export default App;

