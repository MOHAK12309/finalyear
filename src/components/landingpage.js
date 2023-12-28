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
    <div className="top">
      <header className="top-header">
        <div className="buttons-container">
           <button className="header-button">SignUp</button>
           <button className="header-button">SignUp</button>
        </div>
      </header>
      <main className="top-main">
        <section>
          <h2>Your data with</h2> <h2>Real-Time Analytics </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Proin eget tortor risus. Integer at accumsan ex.
          </p>
        </section>   
        <button className="get-button">Get Started</button>
        </main>
    </div>
  );
}
export default LandingPage;