import React, { useState, useEffect } from "react";
import Drawer from "react-modern-drawer";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import "react-modern-drawer/dist/index.css";
import logo from "../images/logo-no-background.png";
import logo2 from "../images/hamburger.png";
import Dashboard from "./dash-one";

const App2 = () => {
  const [side, setSide] = useState(false);
  const [visitors, setVisitors] = useState([]);
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
            <div style={{ width: "100%", height: "400px" }}>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default App2;




// 

