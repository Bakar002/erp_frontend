import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/Img/dg.png"; // Replace with your actual logo path
import schoolportallogo1 from "../../Assets/Img/s1.jpg"; // Replace with your actual school portal logo path
import schoolportallogo2 from "../../Assets/Img/s2.jpg"; // Replace with your actual school portal logo path
import schoolportallogo3 from "../../Assets/Img/s3.jpg"; // Replace with your actual school portal logo path
import schoolportallogo4 from "../../Assets/Img/s4.jpg"; // Replace with your actual school portal logo path
import schoolportallogo5 from "../../Assets/Img/s5.jpg"; // Replace with your actual school portal logo pathafaq.jpeg
import schoolportallogo6 from "../../Assets/Img/afaq.jpeg"; // Replace with your actual school portal logo pathafaq.jpeg
import schoolportallogo7 from "../../Assets/Img/UIES.jpg"; // Replace with your actual school portal logo pathafaq.jpeg
import schoolportallogo8 from "../../Assets/Img/syed.jpg"; // Replace with your actual school portal logo pathafaq.jpeg
import schoolportallogo9 from "../../Assets/Img/cgs.jpeg"; // Replace with your actual school portal logo pathafaq.jpeg
import schoolportallogo10 from "../../Assets/Img/greenacademy.png"; // Replace with your actual school portal logo pathafaq.jpeg
import schoolportallogo11 from "../../Assets/Img/tp.jpg"; // Replace with your actual school portal logo pathafaq.jpeg
import schoolportallogo12 from "../../Assets/Img/arqam.jpg"; // Replace with your actual school portal logo pathafaq.jpeg



// import "./SchoolBlocks.css"

const SchoolBlocks = () => {
  const schools = [
    {
      name: "CBS Academy",
      logo: schoolportallogo1, // Replace with your actual school logo path
      link: "/admin-login", // Replace with the actual login link
    },
    {
      name: "Al-Kitab School System",
      logo: schoolportallogo2, // Replace with your actual school logo path
      link: "/admin-login", // Replace with the actual login link
    },
    // Add more schools as needed

    {
      name: "Pak Knowledge School System",
      logo: schoolportallogo3, // Replace with your actual school logo path
      link: "/pak-sub-campus", // Replace with the actual login link
    },
    
    {
      name: "The Learning Way School System",
      logo: schoolportallogo4, // Replace with your actual school logo path
      link: "/lwss-sub-campus", // Replace with the actual login link
    },
    

    {
      name: "Amal Academy",
      logo: schoolportallogo5, // Replace with your actual school logo path
      link: "/admin-login", // Replace with the actual login link
    },
    
    {
      name: "Afaq School",
      logo: schoolportallogo6, // Replace with your actual school logo path
      link: "/afaq-sub-campus", // Replace with the actual login link
    },
    {
      name: "Al Syed School/Academy",
      logo: schoolportallogo8, // Replace with your actual school logo path
      link: "/admin-login", // Replace with the actual login link
    },
    {
      name: "UIES Tajbagh Chapter Academy",
      logo: schoolportallogo7, // Replace with your actual school logo path
      link: "/admin-login", // Replace with the actual login link
    },
    {
      name: "The Concept Grammer High School",
      logo: schoolportallogo9, // Replace with your actual school logo path
      link: "/admin-login", // Replace with the actual login link
    },
    {
      name: "Tafakur-e-Pakistan",
      logo: schoolportallogo11, // Replace with your actual school logo path
      link: "/admin-login", // Replace with the actual login link
    },
    {
      name: "Green Academy",
      logo: schoolportallogo10, // Replace with your actual school logo path
      link: "/admin-login", // Replace with the actual login link
    },
    {
      name: "The Arqam School Officers Colony #2 Madina Town Faisalabad",
      logo: schoolportallogo12, // Replace with your actual school logo path
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

export default SchoolBlocks;