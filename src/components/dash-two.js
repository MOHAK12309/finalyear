import React from "react";
import { useState } from "react";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "../styles/OTP.css";
import "react-modern-drawer/dist/index.css";
import Dashboard from "./dash-one";
const logo = new URL("../images/logo-no-background.png", import.meta.url);
const logo2 = new URL("../images/hamburger.png", import.meta.url);
const App2 = () => {
  const [side, setSide] = useState(false);
  const toggleMode = () => {
    setSide(!side);
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        {/* left bar */}
        <div className={`sideRight ${side ? "sideLeft" : ""}`}>
          <div>
            <div
              className={`sidesec ${side ? "" : ""}`}
              style={{ textAlign: "left" }}
            >
              <div className={`logosec ${side ? "sidesec3" : ""}`}>
                <h2
                  className={` ${side ? "sidesec2" : ""}`}
                  style={{ textAlign: "center" }}
                >
                  <img
                    src={logo}
                    alt="Logo"
                    style={{ width: "100px", height: "35px" }}
                  />
                </h2>
              </div>
              <button className="button-dashboard">
                <span className={` ${side ? "sidesec2" : ""}`}>Dashboard</span>
              </button>
              <h6 className={`side-head ${side ? "sidesec2" : ""}`}>
                Analysis
              </h6>
              <button className="button-dashboard">
                <span className={` ${side ? "sidesec2" : ""}`}>Report</span>
              </button>
              <button className="button-dashboard">
                <span className={` ${side ? "sidesec2" : ""}`}>
                  Real time Analysis
                </span>
              </button>
            </div>
          </div>
        </div>
        {/*right   */}
        <div style={{ width: "100%" }}>
         
          {/* dahsboard */}
          <div className="dashboardmain">
          
          <div className="nav2" style={{ padding: "13px" }}>
      <div className="left-section">
        <h4 onClick={toggleMode} style={{ cursor: "pointer" }}><img src={logo2} width="30px"></img> </h4>
        <button className="user-button">User</button>
        <button className="settings-button">Settings</button>
      </div>
      
      <div className="right-section">
        <button className="notifications">Notifications</button>
        <button className="email">Email</button>
        <button className="logout">Logout</button>
      </div>
    </div>
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  );
};

export default App2;
