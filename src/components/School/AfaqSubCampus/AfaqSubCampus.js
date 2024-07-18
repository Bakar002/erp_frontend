import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../Assets/Img/dg.png"; // Replace with your actual logo path

import schoolportallogo6 from "../../../Assets/Img/afaq.jpeg"; // Replace with your actual school portal logo pathafaq.jpeg







// import "./AfaqSubCampus.css"

const AfaqSubCampus = () => {
  const schools = [
    
    {
      name: "Afaq School Campus 1 Landu Masjid Campus",
      logo: schoolportallogo6, // Replace with your actual school logo path
      link: "/admin-login", // Replace with the actual login link
    },
    {
        name: "Afaq School Campus 2 401 Campus",
        logo: schoolportallogo6, // Replace with your actual school logo path
        link: "/admin-login", // Replace with the actual login link
      },
    
  ];

  return (
    <div className="container pt-3 mx-auto">
      <div className="text-center d-flex justify-content-center items-center">
        <h1 className="text-center school text-3xl font-bold">Belike Edu. Software</h1>
        <img
          alt="Belike Edu. Logo"
          className="ms-lg-2 logo ml-3"
          src={Logo}
          style={{
            height: "70px",
            width: "70px",
          }}
        />
      </div>
      <h3 className="text-center fw-bold text-xl mt-6">Our Partner Schools</h3>
      <div className="row flex justify-center gap-4 flex-wrap mt-10">
        {schools.map((school, index) => (
          <NavLink
            to={school.link}
            key={index}
            className="text-decoration-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2"
          >
            <div className="bg-white h-40 overflow-hidden flex flex-col justify-center items-center gap-2 cursor-pointer rounded shadow-lg p-4 transform hover:scale-105 transition-transform duration-300">
              <img
                src={school.logo}
                alt={school.name}
                className="w-20 h-20 object-contain"
              />
              <h1 className="text-black text-center text-base font-semibold">{school.name}</h1>
            </div>
          </NavLink>
        ))}
      </div>



      
    </div>
  );
};

export default AfaqSubCampus;
