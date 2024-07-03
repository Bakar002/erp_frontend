import React from "react";
import "./Medical.css"; // Import your custom styles
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../Assets/Medical/client.png"; // Replace with actual logo path
import Logo1 from "../Assets/Medical/medical/appointment.png"; // Replace with actual logo path
import Logo2 from "../Assets/Medical/medical/patientrecord.png"; // Replace with actual logo path
import Logo3 from "../Assets/Medical/medical/doctorlist.png"; // Replace with actual logo path
import Logo4 from "../Assets/Medical/medical/remindermsg.png"; // Replace with actual logo path
// import Logo5 from "../Assets/Medical/medical/"; // Replace with actual logo path
// import Logo6 from "../Assets/Medical/medical/"; // Replace with actual logo path
// import Logo7 from "../Assets/Medical/medical/"; // Replace with actual logo path
// import Logo8 from "../Assets/Medical/medical/"; // Replace with actual logo path
// import Logo9 from "../Assets/Medical/medical/"; // Replace with actual logo path
import Logo10 from "../Assets/Medical/medical/contactus.jpg"; // Replace with actual logo path
import Logo11 from "../Assets/Medical/medical/SMM.png"; // Replace with actual logo path
import Logo12 from "../Assets/Medical/medical/previousclient.png"; // Replace with actual logo path
// import Logo13 from "../Assets/Medical/medical/"; // Replace with actual logo path

const services = {
  "Our Partners": [
    { name: "Partners", img: Logo },
  ],
  "Specialist": [
    { name: "Appointments", img: Logo1 },
    { name: "Patient Slips", img: Logo2 },
    { name: "Doctor's Panel", img: Logo3 },
    { name: "Reminder Messages", img: Logo4 },
  ],
  "Patients": [
    { name: "Patient Panel", img: Logo },
    { name: "Patient Record", img: Logo },
    { name: "Emergency", img: Logo },
    { name: "Appointment Forms", img: Logo },
  ],
  "Managements": [
    { name: "Office Management", img: Logo },
    { name: "Contact Info", img: Logo10 },
    { name: "SMM", img: Logo11 },
    { name: "Client Services", img: Logo12 },
    { name: "Medical Camp", img: Logo },
  ],
};

const MedicalPortal = () => {
  const navigate = useNavigate();

  return (
    <div className="container pt-3">
      <div className="text-center d-flex justify-content-center align-items-center mb-4">
        <h1 className="medical-heading">Medical Portal</h1>
        <img
          alt="Logo"
          className="medical-logo ms-lg-2"
          src={Logo}
          style={{ height: "70px", width: "70px" }} // Adjust as needed
        />
      </div>

      {Object.entries(services).map(([heading, blocks]) => (
        <div key={heading} className="service-section">
          <h3 className="text-center fw-bold service-heading">{heading}</h3>
          <div className="services-grid">
            {blocks.map((service) => (
              <div
                key={service.name}
                className="service-card"
              >
                <NavLink
                  className="text-reset text-decoration-none text-center"
                  to={`/${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="medical-img-container mb-3">
                    <img
                      src={service.img}
                      alt={`${service.name} Logo`}
                      className="service-img" // Adjust size here
                    />
                  </div>
                  <h1 className="service-name">
                    {service.name}
                  </h1>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MedicalPortal;
