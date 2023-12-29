
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/log.css'

import { getUserIdFromAuth } from "../Redux/actions/GetSellerIdFromAuthActionCreators";

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
  const dispatch = useDispatch("");
  const baseUrls = "http://localhost:8000";
  const baseUrl = "https://server.careerclassroom.in";

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

        // isEmailVerified: isEmailVerified
      });
      // dispatch(getUserIdFromAuth(response.data.data.user._id, response.data.data.user.name, response.data.data.user.email));
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
        setsign("OTP");
        settoken(response.data.token);

        console.log(response.data.data.user.name);
        settoken(response.data.token);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const google = async () => {
    const popup = window.open(`${baseUrl}/auth/google`);
  };


  const handleAuthentication = async () => {
    try {
      const response = await axios.get(`${baseUrl}/auth/google`); // Make a GET request to your Express.js route
      const user = await response;

      // Dispatch the loginUser action with the authenticated user data
      dispatch(user.data.userCheck._id);
    } catch (error) {
      console.error(error);
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
        setsign("OTP");
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

        navigate("/dashboard");

        // mohak233334@gmail.com
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
  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/api/v1/user/verify`, {
        // lastname:lastname,
        OTP: OTP,

        // isEmailVerified: isEmailVerified
      });
      if (response.data.statusbar === "true") {
        console.log("verified");
        window.alert("User Created ");
        setsign("login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleRegiter = async (e) => {
    e.preventDefault();
    toast("Reset password email sent to your email");
    try {
      const response = await axios.post(`${baseUrl}/api/v1/user/forgot`, {
        // lastname:lastname,
        email: email,

        // isEmailVerified: isEmailVerified
      });
      if (response.data.statusbar === "success") {
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="sign-main">
      <div className="auth-logo">
      
      </div>

      <div className="auth-main">
        {sign == "signup" && (
          <div>
            <div className="sign-head">Sign Up </div>
            {/* <button onClick={google}>google</button> */}
            <form onSubmit={handleSignUp}>
              <input
                required
                className="sign-form"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="First name"
              ></input>
              <input
                required
                className="sign-form"
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last name"
              ></input>

              <input
                required
                className="sign-form"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email address"
              ></input>

              <input
                required
                className="sign-form"
                value={password}
                onChange={(e) => setpasswod(e.target.value)}
                type="password"
                placeholder="Password"
              ></input>

              <input
                required
                className="sign-form"
                value={confirm_password}
                onChange={(e) => setconfirm_passwod(e.target.value)}
                type="password"
                placeholder="Confirm password"
              ></input>
              <br></br>
              <button className="sign-btn" type="submit">
                Sign up
              </button>
            </form>
            <h5 style={{ marginTop: "20px", color: "white" }}>Or</h5>
            <button className="sign-switch" onClick={() => setsign("login")}>
              Have an account ?
            </button>
          </div>
        )}

        {sign == "login" && (
          <div>
            <h4 className="sign-head">Login </h4>
            <form onSubmit={handleLogin}>
              {/* <input onChange={(e)=>setLastName(e.target.value)} type='text' placeholder='last Name' ></input> */}

              <input
                required
                className="sign-form"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email address"
              ></input>

              <input
                required
                className="sign-form"
                value={password}
                onChange={(e) => setpasswod(e.target.value)}
                type="password"
                placeholder="Password"
              ></input>

              <button className="sign-btn" type="submit">
                Login{" "}
              </button>
            </form>
            <button
              onClick={() => setsign("forgot")}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                marginTop: "10px",
              }}
            >
              Forgot Password?
            </button>
            <br></br>
            <h5 style={{ marginTop: "10px", color: "white" }}>Or</h5>

            <button className="sign-switch" onClick={() => setsign("signup")}>
              {" "}
              Create your account{" "}
            </button>
          </div>
        )}
        {sign == "OTP" && (
          <div>
            <h4 className="sign-head">Verify Your Account</h4>
            <form onSubmit={handleVerify}>
              {/* <input onChange={(e)=>setLastName(e.target.value)} type='text' placeholder='last Name' ></input> */}

              <input
                required
                className="sign-form"
                value={OTP}
                onChange={(e) => setOTP(e.target.value)}
                type="text"
                placeholder="otp"
              ></input>

              <button className="sign-btn" type="submit">
                Verify{" "}
              </button>
            </form>
            <h5 style={{ color: "white", marginTop: "20px" }}>Or</h5>
            <button className="sign-switch" onClick={() => setsign("login")}>
              Back to login
            </button>
          </div>
        )}

        {sign == "forgot" && (
          <div>
            <h5 style={{}} className="sign-head">
              Forgot Password?
            </h5>
            <h6 className="sign-head">
              Please Enter your email to get your reset password link{" "}
            </h6>
            <form onSubmit={handleRegiter}>
              {/* <input onChange={(e)=>setLastName(e.target.value)} type='text' placeholder='last Name' ></input> */}

              <input
                required
                className="sign-form"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email address"
              ></input>

              <button className="sign-btn" type="submit">
                Submit{" "}
              </button>
            </form>

            <button
              className="sign-switch"
              style={{ marginTop: "20px" }}
              onClick={() => setsign("signup")}
            >
              {" "}
              Back to login{" "}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Log;
