import React from "react";
import { Link } from "react-router-dom";
import "../styles/log.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Toastcontainer2, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUserIdFromAuth } from "../Redux/actions/GetSellerIdFromAuthActionCreators";
const illus = new URL("../images/image2.jpg", import.meta.url);
const baseUrl = "https://server.careerclassroom.in";
function Log() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpasswod] = useState("");
  const [confirm_password, setconfirm_passwod] = useState("");
  const [token, settoken] = useState("");
  const [OTP, setOTP] = useState("");
  const [sign, setsign] = useState("signup");
  const navigate = useNavigate("");
  const [forgot, setforgot] = useState("login");
  const dispatch = useDispatch("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/api/v1/user/signup`, {
        name: name,
        lastname: lastname,
        email: email,
        password: password,
        confirm_password: confirm_password,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.statusbar === "success") {
        dispatch(
          getUserIdFromAuth(
            response.data.data.user._id,
            response.data.data.user.lastname,
            response.data.data.user.name,
            response.data.data.user.email
          )
        );
        toast("Otp Sent to mail");
        navigate("/otp");
        settoken(response.data.token);

        console.log(response.data.data.user.name);
        settoken(response.data.token);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}/api/v1/user/login`, {
        // lastname:lastname,
        email: email,
        password: password,

        headers: {
          Authorization: `Bearer ${token}`,
        },

        // isEmailVerified: isEmailVerified
      });
      console.log("hi");
      if (response.data.status === "false") {
        toast(" Please verify your mail ");
        navigate("/otp");
      }
      if (response.data.statusbar === "success") {
        dispatch(
          getUserIdFromAuth(
            response.data.data.user._id,
            response.data.data.user.lastname,
            response.data.data.user.name,
            response.data.data.user.email
          )
        );
        toast("Login successfull");

        navigate("/");
      }
      // if (response.data.statusbar === "success") {
      //   dispatch(getUserIdFromAuth(response.data.data.user._id, response.data.data.user.lastname, response.data.data.user.name, response.data.data.user.email));
      //   navigate("/home")
      // }
    } catch (error) {
      console.log(error);
      // if (error.message === "Request failed with status code 403") {
      //   setsign("OTP")

      // }
    }
  };
  return (
    // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

    <>
      <div className="login-signup">
        <div className="container2">
          <input type="checkbox" id="flip" />
          <div className="cover">
            <div className="front">
              <img src={illus} alt="" />
              <div className="text">
                <span className="text-1">MetaMetrics</span>
                <span className="text-2">Let's get connected</span>
              </div>
            </div>
            <div className="back">
              <img className="backImg" src={illus} alt="" />
              <div className="text2">
                <span className="text-3">
                  Complete miles of journey <br></br> with one step
                </span>
                <span className="text-4">Let's get started</span>
              </div>
            </div>
          </div>
          <div className="forms">
            <div className="form-content">
              <div className="login-form">
                <div className="title">Login</div>
                {/* login for got switching */}
                {forgot === "login" && (
                  <form onSubmit={handleLogin}>
                    <div className="input-boxes">
                      <div className="input-box">
                        <i className="fas fa-envelope"></i>
                        <input
                          type="text"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="input-box">
                        <i className="fas fa-lock"></i>
                        <input
                          type="password"
                          placeholder="Enter your password"
                          required
                          value={password}
                          onChange={(e) => setpasswod(e.target.value)}
                        />
                      </div>
                      <div className="text">
                        <a onClick={() => setforgot("forgot")} href="#">
                          Forgot password?
                        </a>
                      </div>
                      <div className="button input-box">
                        <input type="submit" value="Submit" />
                      </div>
                      <div className="text sign-up-text">
                        Don't have an account?{" "}
                        <label for="flip">Sigup now</label>
                      </div>
                    </div>
                  </form>
                )}

                {forgot === "forgot" && (
                  <form onSubmit={handleLogin}>
                    <div className="input-boxes">
                      <div className="input-box">
                        <i className="fas fa-envelope"></i>
                        <input
                          type="text"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      {/* <div className="text">
                        <a onClick={() => setforgot("ResetPassword")} href="#">
                          Forgot password?
                        </a>
                      </div> */}
                      <div className="button input-box">
                        <input
                          onClick={() => setforgot("ResetPassword")}
                          type="submit"
                          value="Submit"
                        />
                      </div>
                      <div className="text sign-up-text">
                        Don't have an account?{" "}
                        <label for="flip">Sigup now</label>
                      </div>
                    </div>
                  </form>
                )}
                {forgot === "ResetPassword" && (
                  <form onSubmit={handleLogin}>
                    <div className="input-boxes">
                      <div className="input-box">
                        <i className="fas fa-lock"></i>
                        <input
                          type="password"
                          placeholder="Enter new password"
                          required
                          value={password}
                          onChange={(e) => setpasswod(e.target.value)}
                        />
                      </div>
                      <div className="input-box">
                        <i className="fas fa-lock"></i>
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          required
                          value={password}
                          onChange={(e) => setpasswod(e.target.value)}
                        />
                      </div>
                      <div className="button input-box">
                        <input
                          type="submit"
                          value="Submit"
                        />
                      </div>
                      <div className="text sign-up-text">
                        Don't have an account?{" "}
                        <label for="flip">Sigup now</label>
                      </div>
                    </div>
                  </form>
                )}
              </div>
              <div className="signup-form">
                <div className="title">Signup</div>
                <form onSubmit={handleSignUp}>
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fas fa-user"></i>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-envelope"></i>
                      <input
                        type="text"
                        placeholder="Enter your email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock"></i>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        required
                        value={password}
                        onChange={(e) => setpasswod(e.target.value)}
                      />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock"></i>
                      <input
                        type="password"
                        placeholder="Confirm password"
                        required
                        value={confirm_password}
                        onChange={(e) => setconfirm_passwod(e.target.value)}
                      />
                    </div>
                    <div className="button input-box">
                      <input type="submit" value="Submit" />
                    </div>
                    <div className="text sign-up-text">
                      Already have an account?{" "}
                      <label for="flip">Login now</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Log;
