import './App.css';
import React, { useEffect } from 'react';
import Sellerprofile from './components/counselorProfile-CreateService-Creation/profile1';
import { Route, Routes } from 'react-router-dom';
import ReactGA from "react-ga4";
import ReactPixel from 'react-facebook-pixel';
// importing service creation pages
import Service from './components/counselorProfile-CreateService-Creation/createService';
import CompAppSupport from './components/counselorProfile-CreateService-Creation/createCompleteAppSupport';
import UniversityShortListing from './components/counselorProfile-CreateService-Creation/createUnivShort';
import Visa from './components/counselorProfile-CreateService-Creation/createVisaAssistance';
import Resume from './components/counselorProfile-CreateService-Creation/createResume';
import ProfileEval from './components/counselorProfile-CreateService-Creation/createProfileEvaluation';
import EssayEdit from './components/counselorProfile-CreateService-Creation/createEssayEdit';
import CreateSop from './components/counselorProfile-CreateService-Creation/createSop';
import Scholarship from './components/counselorProfile-CreateService-Creation/createScholarship'

// importing userjourney pages
import UserDash from './components/user/userDash';
import HowUser from './components/how-it-works/how-user';
import ServiceBuy from './components/buyService/serviceCardLanding';


// importing static pages
import Privacy from './components/static/privacy';
import TermCondition from './components/static/Term';
import BecomeAseller from './components/become-a-counselor/BecomeAseller';
import About from './components/aboutus/About';
import Contact from './components/contactUs/contact.js';
import Blog from './components/blogs/blog';
import BlogInsideView from './components/blogs/blogInsideView';
import CookiePolicy from './components/static/cookiePolicy';
import RefundPolicy from './components/static/refund-policy';

import Header from './components/header/header';
import Home from './components/home/home';

import SellerPersonal from './components/sellerProfileView/sellerPersonal';
import ProjectTimeLine from './components/timeline/projectTimeLine';
import UserLandingPage from './components/user/userLanding';
import Signup from './components/auth/signup';
import ServiceSop from './components/individualservice/service-Sop';
import CounsellerLanding from './components/individualservice/counselorLanding';
import ServiceVisa from './components/individualservice/service-visa';
import ServiceScholarShip from './components/individualservice/Servicescholorship';
import ServiceSupport from './components/individualservice/service-support';
import ServiceUniversity from './components/individualservice/serviceUniversity';
import ServiceEssay from './components/individualservice/service-essay';
import ServiceEvaluations from "./components/individualservice/serviceEvaluation"
import HowSeller from './components/how-it-works/how-seller';
import AllServices from './components/individualservice/allservice';

import PayNow from './components/buyService/payNow';

import Chat from './components/chatUi';
import SDashboard from './components/sellerDashBoard/sellerDash';
import Myorders from './components/orders/myorder';
import ServiceResumes from './components/individualservice/service-resume2';
import RingLoader from 'react-spinners/RingLoader'
import Order from "./components/orders/order";
import ForgotPassword from './components/forgot';
import Signin from './components/auth/login';
import Otp from './components/otp';
import OrderCounselor from './components/orders/openOrders';
import ServiceAllService from './components/sellerProfileView/view-all-seller-service';
import AllHostedServices from './components/individualservice/AllHostedServices';
import AllOngoingSeller from './components/sellerDashBoard/AllSellerOngoing';
import AllHostedSeller from './components/individualservice/AllHostedServices';
import AllDraftedSeller from './components/sellerDashBoard/AllSellerDrafted';
import BlogForm from './components/adminblogs';
import MentorLanding from './components/individualservice/mentors';
import Ielts from './components/ielts/ielts';
import IndividualService from './components/ielts/individualservice';
import OrderPage from './components/ielts/orderpage';
import IndividualD from './components/ielts/detailsOfIndividual';
ReactGA.initialize('G-K2MS70B9WB');
const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: false, // enable logs
};
// ReactPixel.init('390972365769622',  options);


// ReactPixel.pageView();

function App() {
  return (
    <div>
      <div className='App'>
        <Header />
        <Routes>
          {/* header routing */}
          <Route path='/' element={<Home />}></Route>
          {/* how it works routing */}
          <Route path='/how-it-works-counselor' element={<HowSeller />}></Route>
          <Route path='/how-it-works-user' element={<HowUser />}></Route>
          {/* get started routing */}
          <Route path='/userLanding' element={<UserLandingPage />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          {/* explore routing */}
          <Route path='/education-counselors' element={<CounsellerLanding />}></Route>
          <Route path='/education-mentors' element={<MentorLanding/>}></Route>
          {/* <Route path='/all-service' element={<AllServices />}></Route> */}

          {/* create services routing */}
          <Route path='/create-service' element={<Service />}></Route>
          <Route path='/create-service-comp-app-support' element={<CompAppSupport />}></Route>
          <Route path='/create-service-university-shortlisting' element={<UniversityShortListing />}></Route>
          <Route path='/create-service-visa' element={<Visa />}></Route>
          <Route path='/create-service-scholarship-assistance' element={<Scholarship />}></Route>
          <Route path='/create-service-profile-evaluation' element={<ProfileEval />}></Route>
          <Route path='/create-service-resume' element={<Resume />}></Route>
          <Route path='/create-service-essay-editing' element={<EssayEdit />}></Route>
          <Route path='/create-service-sop' element={<CreateSop />}></Route>

          {/*  static pages routing */}
          <Route path='/term-condition' element={<TermCondition />}></Route>
          <Route path='/become-a-counselor' element={<BecomeAseller />}></Route>
          <Route path='/privacy-policy' element={<Privacy />}></Route>
          <Route path='/contact-us' element={<Contact />}></Route>
          <Route path='/about-us' element={<About />}></Route>
          <Route path='/all-blogs' element={<Blog />}></Route>
          <Route path='/blog' element={<BlogInsideView />}></Route>
          <Route path='/cookie-policy' element={<CookiePolicy />}></Route>
          <Route path='/refund-policy' element={<RefundPolicy />}></Route>

          {/* services pages routing */}
          <Route path='/statement-of-purpose' element={<ServiceSop />}></Route>
          <Route path='/visa-services' element={<ServiceVisa />}></Route>
          <Route path='/scholarship-application' element={<ServiceScholarShip />}></Route>
          <Route path='/resume' element={<ServiceResumes />}></Route>
          <Route path='/college-applications' element={<ServiceSupport />}></Route>
          <Route path='/university-shortlisting' element={<ServiceUniversity />}></Route>
          <Route path='/essays' element={<ServiceEssay />}></Route>
          <Route path='/profile-evaluation' element={< ServiceEvaluations />}></Route>
          <Route path='/seller-all-services' element={<ServiceAllService />}></Route>
          <Route path='/all-counselor-services' element={<AllHostedServices />}></Route>

          {/* <Route path='/counselerdash' element={<CounsellerDashBoard />}></Route> */}
          <Route path='/counselor-profile' element={<SellerPersonal />}></Route>
          {/* <Route path='/counsellerDash1' element={<CounsellerDashBoard1 />}></Route> */}
          <Route path='/projectTimeLine' element={<ProjectTimeLine />}></Route>
          <Route path='/buy-service' element={<ServiceBuy />}></Route>
          <Route path='/payNow' element={<PayNow />}></Route>
          <Route path='/create-counselor-profile' element={<Sellerprofile />}></Route>
          <Route path='/chatWithMe' element={<Chat />}></Route>
          <Route path='/counselor-dashboard' element={<SDashboard />}></Route>
          <Route path='/myorders' element={<Myorders />}></Route>
          <Route path='/counselor-order' element={<OrderCounselor />}></Route>
          <Route path='/userDash' element={<UserDash />} ></Route>
          <Route path='/my-orders' element={<Order />}></Route>
          <Route path='/admin-blogs' element={<BlogForm />}></Route>
          {/* forgot password */}
          <Route path='/login' element={<Signin />}></Route>
          <Route path='/forgot-password' element={<ForgotPassword />}></Route>
          <Route path='/otp' elemet={<Otp />}> </Route>
          <Route path='/all-hosted-services' element={<AllHostedSeller />}></Route>
          <Route path='/all-ongoing-services' element={<AllOngoingSeller />}></Route>
          <Route path='/all-drafted-services' element={<AllDraftedSeller />}></Route>
          {/*  */}
          
          <Route path='/ielts' element={<Ielts />}></Route>
          <Route path='/individual-service' element={<IndividualService />}></Route>
          <Route path='/order-completed' element={< OrderPage/>}></Route>
          <Route path='/order-completed' element={< OrderPage/>}></Route>
          <Route path='/individual-details' element={< IndividualD/>}></Route>
          
       
        </Routes>


      </div>


    </div>
  );
}

export default App;
