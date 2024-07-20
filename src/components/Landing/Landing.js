import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer.js";
import Navbar from "../Navbar/Navbar.js";
import heroimg from "../../Assets/hero-section-img.webp";
import schoolimg from "../../Assets/school.webp";
import collegeimg from "../../Assets/college.webp";
import universityimg from "../../Assets/uni.webp";
import intduimg from "../../Assets/int-edu.webp";
import Itskillimg from "../../Assets/it.webp";
import travelimg from "../../Assets/travel.webp";
import internationalimg from "../../Assets/international.webp";
import marketimg from "../../Assets/market.webp";
import foodimg from "../../Assets/food1.webp";
import donationimg from "../../Assets/donate.webp";
import belikecustomimg from "../../Assets/bgp.webp";
import belikecustomimg2 from "../../Assets/Images/customer.jpeg";
import belikeproperty from "../../Assets/property.png";
import ecomimg from "../../Assets/e-com.webp";
import jobimg from "../../Assets/jobs.webp";
import healthimg from "../../Assets/health.webp";
import advertisementImg from "../../Assets/adban.jpg"; // Import the advertisement image

const Landingpage = () => {
  return (
    <>
      <div className="bg-white">
        <Navbar />

        {/* Advertisement Section */}
        <div className="flex justify-center mt-4">
          <img src={advertisementImg} alt="Advertisement" className="w-[70%] h-auto" />
        </div>

        {/* ################################ Services ################################### */}
        <div className="flex flex-col justify-center items-center mt-8 bg-white" id="servicesSection">
          <h1 className="text-[#40b08c] text-5xl font-bold">Services</h1>
          <div className="flex flex-wrap justify-center gap-5 w-[85%] mt-4">
            <Link to="/schoolblock2">
              <div className="servcard flex flex-col items-center p-4 rounded-lg shadow hover:shadow-lg">
                <div className="w-[10rem] h-[10rem]">
                  <img src={belikecustomimg} alt="Our IT Clients" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">Our IT Clients</h2>
                </div>
              </div>
            </Link>

            <Link to="/school-portal-home">
              <div className="servcard flex flex-col items-center p-4 rounded-lg shadow hover:shadow-lg">
                <div className="w-[10rem] h-[10rem]">
                  <img src={schoolimg} alt="Schools" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">Schools</h2>
                </div>
              </div>
            </Link>

            <Link to="/schoolblocks">
              <div className="servcard flex flex-col items-center p-4 rounded-lg shadow hover:shadow-lg">
                <div className="w-[10rem] h-[10rem]">
                  <img src={collegeimg} alt="Colleges" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">Colleges</h2>
                </div>
              </div>
            </Link>

            <Link to="/uni-portal-home">
              <div className="servcard flex flex-col items-center p-4 rounded-lg shadow hover:shadow-lg">
                <div className="w-[10rem] h-[10rem]">
                  <img src={universityimg} alt="Universities" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">Universities</h2>
                </div>
              </div>
            </Link>

            <Link to="/health-portal-home">
              <div className="servcard flex flex-col items-center p-4 rounded-lg shadow hover:shadow-lg">
                <div className="w-[10rem] h-[10rem]">
                  <img src={healthimg} alt="Health" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">Health</h2>
                </div>
              </div>
            </Link>

            <Link to="/ser-portal-home">
              <div className="servcard flex flex-col items-center p-4 rounded-lg shadow hover:shadow-lg">
                <div className="w-[10rem] h-[10rem]">
                  <img src={belikeproperty} alt="Property Services" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">Property Services</h2>
                </div>
              </div>
            </Link>

            <Link to="/it-portal-home">
              <div className="servcard flex flex-col items-center p-4 rounded-lg shadow hover:shadow-lg">
                <div className="w-[10rem] h-[10rem]">
                  <img src={Itskillimg} alt="IT Skills" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">IT Skills</h2>
                </div>
              </div>
            </Link>

            <Link to="donation-portal-home">
              <div className="servcard flex flex-col items-center p-4 rounded-lg shadow hover:shadow-lg">
                <div className="w-[10rem] h-[10rem]">
                  <img src={donationimg} alt="Welfare Activities" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">Welfare Activities</h2>
                </div>
              </div>
            </Link>

            <Link to="tra-portal-home">
              <div className="servcard flex flex-col items-center p-4 rounded-lg shadow hover:shadow-lg">
                <div className="w-[10rem] h-[10rem]">
                  <img src={travelimg} alt="Travel" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">Travel</h2>
                </div>
              </div>
            </Link>

            <Link to="Consultant-portal-home">
              <div className="servcard flex flex-col items-center p-4 rounded-lg shadow hover:shadow-lg">
                <div className="w-[10rem] h-[10rem]">
                  <img src={intduimg} alt="International Consultant" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">International Consultant</h2>
                </div>
              </div>
            </Link>

            <div className="servcard flex flex-col items-center p-4 rounded-lg shadow hover:shadow-lg">
              <div className="w-[10rem] h-[10rem]">
                <img src={ecomimg} alt="Ecommerce" />
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">Ecommerce</h2>
              </div>
            </div>

            <div className="servcard flex flex-col items-center p-4 rounded-lg shadow hover:shadow-lg">
              <div className="w-[10rem] h-[10rem]">
                <img src={jobimg} alt="Jobs" />
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">Jobs</h2>
              </div>
            </div>

            <div className="servcard flex flex-col items-center p-4 rounded-lg shadow hover:shadow-lg">
              <div className="w-[10rem] h-[10rem]">
                <img src={marketimg} alt="Marketing" />
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">Marketing</h2>
              </div>
            </div>

            <div className="servcard flex flex-col items-center p-4 rounded-lg shadow hover:shadow-lg">
              <div className="w-[10rem] h-[10rem]">
                <img src={foodimg} alt="Food" />
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">Food</h2>
              </div>
            </div>

            <div className="servcard flex flex-col items-center p-4 rounded-lg shadow hover:shadow-lg">
              <div className="w-[10rem] h-[10rem]">
                <img src={belikecustomimg2} alt="Legal Service" />
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">Legal Service</h2>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center mt-8">
            <div className="w-[40%] border-2 border-b-black"></div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-4 p-8">
          <div className="text-center">
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
