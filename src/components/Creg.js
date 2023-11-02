import React from "react";
import { Link } from "react-router-dom";
import "../styles/Creg.css";
//const illus = new URL("../images/image1.jpg", import.meta.url);

function Reg() {
  return (
    <>
      <div className="wrapper">
        <form action="">
          <h1>Registration</h1>
          <div className="input-box">
            <div className="input-field">
              <input type="text" placeholder="Name" required></input>
            </div>
          </div>
          <div className="input-box">
            <div className="input-field">
              <input type="text" placeholder="Company Name" required></input>
            </div>
          </div>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Company Type
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button class="dropdown-item" type="button">
                Action
              </button>
              <button class="dropdown-item" type="button">
                Another action
              </button>
              <button class="dropdown-item" type="button">
                Something else here
              </button>
            </div>
          </div>
          <div className="input-box">
            <div className="input-field">
              <input
                type="Number"
                placeholder="Phone Number (Optional)"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Reg;