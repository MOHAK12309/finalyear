import React, { useState, useEffect } from "react";
import Drawer from "react-modern-drawer";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import "react-modern-drawer/dist/index.css";
import logo from "../images/logo-no-background.png";
import logo2 from "../images/hamburger.png";
import Dashboard from "./dash-one";
import SettingsIcon from '@mui/icons-material/Settings';
import Icon from '@mui/material/Icon'
import NotificationsPausedIcon from '@mui/icons-material/NotificationsPaused';
import Avatar from '@mui/material/Avatar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
const App2 = () => {
  const [side, setSide] = useState(false);
  const [visitors, setVisitors] = useState([]);
  const [show,setShow]=useState("dashboard")
  const illus = new URL("../images/image2.jpg", import.meta.url);

  const toggleMode = () => {
    setSide(!side);
  };
  

  useEffect(() => {
    // Fetch visitor data from the API
    const fetchVisitorData = async () => {
      try {
        const response = await axios.get("https://metainsights.onrender.com/api/v1/visitors");
        setVisitors(response.data.visitors.value);
      } catch (error) {
        console.error("Error fetching visitor data:", error);
      }
    };

    fetchVisitorData();
  }, []); // Run this effect only once, on component mount

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
              <button onClick={()=>setShow("dashboard")}  className="button-dashboard">
              <DashboardIcon/>
                <span style={{position:"relative",left:"40px"}} className={` ${side ? "sidesec2" : ""}`}>Dashboard</span>
              </button>
              <h6 className={`side-head ${side ? "sidesec2" : ""}`}>
                Analysis
              </h6>
              <button onClick={()=>setShow("map")} className="button-dashboard">
                <AddLocationIcon></AddLocationIcon>
                <span style={{position:"relative",left:"40px"}} className={` ${side ? "sidesec2" : ""}`}>User Location</span>
              </button>
              <button className="button-dashboard">
                <CenterFocusStrongIcon></CenterFocusStrongIcon>
                <span style={{position:"relative",left:"40px"}} className={` ${side ? "sidesec2" : ""}`}>
                  Real-time Analysis
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* right */}
        <div style={{ width: "100%" }}>
          {/* dashboard */}
          <div className="dashboardmain">
            <div className="nav2" style={{ padding: "13px" }}>
              <div className="left-section">
                <h4 onClick={toggleMode} style={{ cursor: "pointer" }}>
                  <img src={logo2} width="30px" alt="Hamburger Menu" />
                </h4>
              
              
               < SettingsIcon className="settings-button"></SettingsIcon>
              </div>

              <div className="right-section">
               
                <NotificationsPausedIcon className="notifications"></NotificationsPausedIcon>
             
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </div>
            </div>
            { show ==="dashboard"&&
            <div>
                 <Dashboard />
            </div>
         
}
            { show==="map"&&
              <div style={{ width: "100%", height: "100vh" }}>
              <MapContainer
                center={[0, 0]}
                zoom={2}
                style={{ width: "100%", height: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {visitors.map((visitor) => (
                  <Marker
                    key={visitor._id}
                    position={[
                      visitor.metaData.location.latitude || 0,
                      visitor.metaData.location.longitude || 0
                    ]}
                    
                  >
                    <Popup>
                      <div>
                        {/* <h3>{visitor.sID}</h3> */}
                        <p>Browser: {visitor.metaData.browserName}</p>
                        <p>Mobile: {visitor.metaData.isMobile.toString()}</p>
                        <p>Timestamp: {visitor.timestamp}</p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
}
          </div>
        </div>
      </div>
    </>
  );
};

export default App2;




// 

