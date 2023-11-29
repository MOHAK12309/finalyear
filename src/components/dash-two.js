import React from "react";
import { useState } from "react";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "../styles/OTP.css";
import "react-modern-drawer/dist/index.css";
import Dashboard from "./dash-one";

const App2 = () => {
  const [side, setSide] = useState(false);
  const toggleMode = () => {
    setSide(!side);
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        {/* left bar */}
        <div className={`sideRight ${
            side ? 'sideLeft':""
          }`}>
    
          <div    >
            
            <div  className={`sidesec ${
            side ? '':""
          }`} style={{ textAlign: "left" }}>
            <div className={`logosec ${
            side ? 'sidesec3':""
          }`} >
              <h2 
               className={` ${
                side ? 'sidesec2':""
              }`} 
              
              
              
              
              style={{ textAlign: "center" }}>Logo here</h2>
            </div>
              <button  className="button-dashboard"><span     className={` ${
                side ? 'sidesec2':""
              }`} >Dashboard</span></button>
              <h6  className={`side-head ${
                side ? 'sidesec2':""
              }`} >Analysis</h6>
              <button className="button-dashboard"><span    className={` ${
                side ? 'sidesec2':""
              }`} >Report</span></button>
              <button className="button-dashboard"><span    className={` ${
                side ? 'sidesec2':""
              }`} >Real time Analysis</span></button>
            </div>
          </div>

        </div>
        {/*right   */}
        <div style={{ width: "100%" }}>
          <div className="nav2" style={{ padding: "13px" }}>
            <div>
                
              <h4   onClick={toggleMode}style={{ cursor: "pointer" }}>hamburger</h4>
            </div>
            <div>
              <button className="logout">Logout</button>
            </div>
          </div>
          {/* dahsboard */}
          <div style={{ maxHeight: "92vh", overflowY: "scroll" }}>
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  );
};

export default App2;
