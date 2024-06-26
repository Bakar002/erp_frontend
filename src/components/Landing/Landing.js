import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import Footer from "../Footer/Footer.js";
import Navbar from "../Navbar/Navbar.js";
import heroimg from "../../Assets/hero-section-img.webp";
import schoolimg from "../../Assets/school.webp";
import collegeimg from "../../Assets/college.webp";
import universityimg from "../../Assets/uni.webp";
import intduimg from "../../Assets/int-edu.webp";
import Itskillimg from "../../Assets/it.webp";
import travelimg from "../../Assets/travel.webp";
import marketimg from "../../Assets/market.webp";
import foodimg from "../../Assets/food1.webp";
import donationimg from "../../Assets/donate.webp";
import belikecustomimg from "../../Assets/bgp.webp";
import belikecustomimg2 from "../../Assets/Images/customer.jpeg";
import belikeproperty from "../../Assets/property.png";


import ecomimg from "../../Assets/e-com.webp";
import jobimg from "../../Assets/jobs.webp";
import healthimg from "../../Assets/health.webp";
import { NavLink } from "react-router-dom";
const Landingpage = () => {
  return (
    <>
      <div className="bg-white">
        {/* Navbar Menu */}
        <Navbar />

        {/* ######################## hero Section ##################################### */}
        <div className="h-[100vh] mt-8 flex flex-col items-center justify-center bg-white">
          <div className="mt-4 w-[95%] md:flex md:items-center">
            <div className="md:w-[50%] ">
              <h1 className="text-center md:text-left text-4xl font-bold">
                <span className="text-[#40b08c]">
                  Focus on how to be social,
                </span>
                <br />
                <span className="text-[#033e71]">not how to do social.</span>
              </h1>
              <p className="text-[#033e71] text-center md:text-left mt-2">
                Belike Group architects of brand stories, blending innovation
                and strategy to create compelling digital narratives that
                resonate with customers and leave a lasting imprint on the
                business landscape.
              </p>
            </div>
            <div className="md:w-[50%]  flex flex-col items-center">
              <div>
                <img src={heroimg} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* ################################ Services ################################### */}
        <div
          className="flex flex-col justify-center items-center mt-8 bg-white"
          id="servicesSection"
        >
          <h1 className="text-[#40b08c] text-5xl font-bold">Services</h1>
          <div className="  flex flex-wrap justify-center gap-5 w-[85%] mt-4">


          <Link to={"/schoolblock2"}>

<div className="servcard flex flex-col items-center">
  <div className=" w-[10rem] h-[10rem]">
    <img src={belikecustomimg} alt="" />
  </div>
  <div>
    <h2>Our IT Clients</h2>
  </div>
</div></Link>

            <Link to={"/school-portal-home"}>
              <div className="servcard flex flex-col items-center">
                <div className=" w-[10rem] h-[10rem]">
                  <img src={schoolimg} alt="" />
                </div>
                <div>
                  <h2>Schools</h2>
                </div>
              </div>
            </Link>
            <Link to={"/schoolblocks"}>

            <div className="servcard flex flex-col items-center">
              <div className=" w-[10rem] h-[10rem]">
                <img src={collegeimg} alt="" />
              </div>
              <div>
                <h2>Colleges</h2>
              </div>
            </div>

            </Link>
            <Link to={"/uni-portal-home"}>

            <div className="servcard flex flex-col items-center">
              <div className=" w-[10rem] h-[10rem]">
                <img src={universityimg} alt="" />
              </div>
              <div>
                <h2>Universities</h2>
              </div>
            </div>
            </Link>


            <div className="servcard flex flex-col items-center">
              <div className=" w-[10rem] h-[10rem]">
                <img src={healthimg} alt="" />
              </div>
              <div>
                <h2>Health</h2>
              </div>
            </div>


            <div className="servcard flex flex-col items-center">
              <div className=" w-[10rem] h-[10rem]">
                <img src={belikeproperty} alt="" />
              </div>
              <div>
                <h2> Property Services</h2>
              </div>
            </div>
            <div className="servcard flex flex-col items-center">
              <div className=" w-[10rem] h-[10rem]">
                <img src={Itskillimg} alt="" />
              </div>
              <div>
                <h2>It Skills</h2>
              </div>
            </div>
            <div className="servcard flex flex-col items-center">
              <div className=" w-[10rem] h-[10rem]">
                <img src={travelimg} alt="" />
              </div>
              <div>
                <h2>Travel</h2>
              </div>
            </div>
            <div className="servcard flex flex-col items-center">
              <div className=" w-[10rem] h-[10rem]">
                <img src={ecomimg} alt="" />
              </div>
              <div>
                <h2>Ecommerce</h2>
              </div>
            </div>
            <div className="servcard flex flex-col items-center">
              <div className=" w-[10rem] h-[10rem]">
                <img src={jobimg} alt="" />
              </div>
              <div>
                <h2>Jobs</h2>
              </div>
            </div>
            
            <div className="servcard flex flex-col items-center">
              <div className=" w-[10rem] h-[10rem]">
                <img src={marketimg} alt="" />
              </div>
              <div>
                <h2>Marketing</h2>
              </div>
            </div>
            <div className="servcard flex flex-col items-center">
              <div className="w-[10rem] h-[10rem]">
                <img src={foodimg} alt="" />
              </div>
              <div>
                <h2>Food</h2>
              </div>
            </div>
            <div className="servcard flex flex-col items-center">
              <div className=" w-[10rem] h-[10rem]">
                <img src={donationimg} alt="" />
              </div>
              <div>
                <h2>Donation</h2>
              </div>
            </div>

            <div className="servcard flex flex-col items-center">
              <div className=" w-[10rem] h-[10rem]">
                <img src={belikecustomimg2} alt="" />
              </div>
              <div>
                <h2> Legal Service</h2>
              </div>
            </div>
            <div className="servcard flex flex-col items-center">
              <div className=" w-[10rem] h-[10rem]">
                <img src={intduimg} alt="" />
              </div>
              <div>
                <h2>Int.Edu</h2>
              </div>
            </div>


           
          </div>
          <div className="w-full flex flex-col items-center mt-8">
            <div className="w-[40%] border-2 border-b-black"></div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-4 p-8">
          <div className=" text-center">
            <h2 className="text-xl text-[#033e71]">
              Belike Group services involve SEO, social media, PPC advertising,
              content marketing, and email campaigns. These strategies aim to
              boost online visibility, engage audiences, and drive business
              growth by leveraging various online platforms and analytics for
              optimization.
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landingpage;
