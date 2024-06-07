import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/Img/dg.png"; // Replace with your actual logo path
import schoolportallogo1 from "../../Assets/Img/s1.jpg"; // Replace with your actual school portal logo path
import schoolportallogo2 from "../../Assets/Img/s2.jpg"; // Replace with your actual school portal logo path
import schoolportallogo3 from "../../Assets/Img/s3.jpg"; // Replace with your actual school portal logo path
import schoolportallogo4 from "../../Assets/Img/s4.jpg"; // Replace with your actual school portal logo path


import "./SchoolBlocks.css"

const SchoolBlocks = () => {
  const schools = [
    {
      name: "School 1",
      logo: schoolportallogo1, // Replace with your actual school logo path
      link: "/login", // Replace with the actual login link
    },
    {
      name: "School 2",
      logo: schoolportallogo2, // Replace with your actual school logo path
      link: "/login", // Replace with the actual login link
    },
    // Add more schools as needed

    {
      name: "School 3",
      logo: schoolportallogo3, // Replace with your actual school logo path
      link: "/login", // Replace with the actual login link
    },
    
    {
      name: "School 4",
      logo: schoolportallogo4, // Replace with your actual school logo path
      link: "/login", // Replace with the actual login link
    },
    

  ];

  return (
    <div className="container pt-3">
      <div className="text-center d-flex justify-content-center">
        <h1 className="text-center school">Belike Edu. Software</h1>
        <img
          alt=""
          className="ms-lg-2 logo"
          src={Logo}
          style={{
            height: "70px",
            width: "70px",
          }}
        />
      </div>
      <h3 className="text-center fw-bold">Our Partners School</h3>
      <div className="row flex justify-content-center gap-2 flex-wrap mt-5">
        {schools.map((school, index) => (
          <NavLink to={school.link} key={index} className="text-decoration-none">
            <div className="bg-white xl:w-2/12 w-6/12 h-40 overflow-hidden flex flex-col justify-center items-center gap-2 cursor-pointer rounded">
              <img src={school.logo} alt={school.name} height={50} />
              <h1 className="text-black text-center">{school.name}</h1>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SchoolBlocks;
