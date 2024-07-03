import React from "react";
import Logo from "../../../Assets/Img/dg.png"; // Replace with your actual logo path
import pharmacy1 from "../../../Assets/Medical/pharmacy/pharmacy1.jpg"; // Replace with your actual school portal logo path
// import schoolportallogo2 from "../../../Assets/Img/s2.jpg"; // Replace with your actual school portal logo path
// import schoolportallogo3 from "../../../Assets/Img/s3.jpg"; // Replace with your actual school portal logo path
// import schoolportallogo4 from "../../../Assets/Img/s4.jpg"; // Replace with your actual school portal logo path
// import schoolportallogo5 from "../../../Assets/Img/s5.jpg"; // Replace with your actual school portal logo path
// import schoolportallogo6 from "../../../Assets/Img/afaq.jpeg"; // Replace with your actual school portal logo path
import "./Pharmacy.css";

const Pharmacy = () => {
  const schools = [
    {
      name: "Aslam & Sons",
      logo: pharmacy1,
      email: "Alihaider03005@gmail.com",
      contact: "+923044823161",
      location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
    },
    
  ];

  return (
    <div className="container">
      <div className="title">
        <h1>Belike Edu. Software</h1>
        <img src={Logo} alt="Belike Edu. Logo" />
      </div>
      <h3 className="text-center fw-bold text-xl mt-6">Our Partner Pharmacies</h3>
      <div className="partner-schools">
        {schools.map((school, index) => (
          <div
            key={index}
            className="card-container"
            onClick={() => window.open(school.location, "_blank")}
          >
            <div className="card">
              <div className="card-face card-front">
                <img src={school.logo} alt={school.name} />
                <h1>{school.name}</h1>
              </div>
              <div className="card-face card-back">
                <p>{school.email}</p>
                <p>{school.contact}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pharmacy;
