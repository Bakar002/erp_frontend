import React from "react";
import "./Medical.css"; // Import your custom styles
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../Assets/Medical/client.png"; // Replace with actual logo path

const services = {
  "Our Partners": [
    { name: "Partners", img: Logo },
  ],
  "Specialist": [
    { name: "Appointments", img: Logo },
    { name: "Patient Slips", img: Logo },
    { name: "Doctor's Panel", img: Logo },
    { name: "Reminder Messages", img: Logo },
  ],
  "Patients": [
    { name: "Patient Panel", img: Logo },
    { name: "Patient Record", img: Logo },
    { name: "Emergency", img: Logo },
    { name: "Appointment Forms", img: Logo },
  ],
  "Managements": [
    { name: "Office Management", img: Logo },
    { name: "Contact Info", img: Logo },
    { name: "SMM", img: Logo },
    { name: "Client Services", img: Logo },
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
