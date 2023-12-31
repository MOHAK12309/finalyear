import React from "react";
import { Link } from "react-router-dom";
import "../styles/landingpage.css"

function LandingPage() {
  return (
    // <>
    //   <div className="">
    //     Hello
    //   </div>
    // </>
    // <div className="top">
    //   <div className="header">
    //     <div className="buttons-container">
    //       <button className="header-button">SignUp</button>
    //       <button className="header-button">SignUp</button>
    //     </div>
    //   </div>
    //   <div className="content">
    //     <p>This is the text between the page.</p>
    //   </div>
    // </div>
    <div className="main-content">
    <div className="top">
     
      <main className="">
        <section>
          <h2>Your data with</h2> <h2>Real-Time Analytics </h2>
          <p>
            "Elevate your online strategy with MetaMetrics, a dynamic analytics platform. <br></br> Real-time insights, customizable dashboards, and user-friendly interface empower users to make informed decisions.<br></br> 
            Track website performance effortlessly and drive success with data-driven precision."
          </p>
        </section>   
       <Link to="/dashboard"><button className="get-button">Get Started</button></Link> 
        </main>
    </div>
    </div>
  );
}
export default LandingPage;