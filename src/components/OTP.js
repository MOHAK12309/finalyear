import React from 'react'
import { Link } from "react-router-dom";
import "../styles/OTP.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUserIdFromAuth } from '../Redux/actions/GetSellerIdFromAuthActionCreators';
import OtpInput from "react-otp-input";
function About (){
  const navigate = useNavigate("");
  const dispatch = useDispatch("");
  const baseUrl = "https://server.careerclassroom.in"
  const [OTP, setOTP] = useState("");
  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/api/v1/user/verify`, {

        // lastname:lastname,
        OTP: OTP,




        // isEmailVerified: isEmailVerified
      });
      if (response.data.statusbar === "true") {
        navigate('/')
        console.log("verified")
     
      }
    } catch (error) {
      console.log(error)

    }



  }
    return (
      <div className='back'>

      
        <div class="container">
      <header>
        <i class="bx bxs-check-shield"></i>
      </header>
      <h4>Enter OTP Code</h4>
      <form onSubmit={handleVerify}>
        <div class="input-field">
               <input type='text' value={OTP} onChange={(e)=>setOTP(e.target.value)} ></input>
        </div>
        <button className='button-71' type='submit'>Verify OTP</button>
      </form>
    </div>
    </div>
    )
}
export default About 
