import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./ProService.css"; // Import your custom styles
import Logo from "../Assets/Medical/medical/patner.jpg";
import Logo14 from "../Assets/Property/property/construction.png";
import Logo16 from "../Assets/Property/property/commercial.jpg";
import Logo19 from "../Assets/Property/property/realestate.png";
import Logo18 from "../Assets/Property/property/residential.jpg";
const services = {
    "Our Partners": [
        { name: "Commercial", img: Logo16 },
        { name: "Real Estate", img: Logo19 },
        { name: "Residential", img: Logo18 },
        { name: "Construction", img: Logo14 },
    ],
    
};

const PropertyServices = () => {
  const navigate = useNavigate();

  return (
    <div className="container pt-3">
      <div className="text-center d-flex justify-content-center align-items-center mb-4">
        <h1 className="medical-heading">Properity Services</h1>
        <img
          alt="Logo"
          className="medical-logo ms-lg-2"
          src={Logo}
          style={{ height: "70px", width: "70px" }}
        />
      </div>

      {Object.entries(services).map(([heading, blocks]) => (
        <div key={heading} className="service-section">
          <h3 className="text-center fw-bold service-heading">{heading}</h3>
          <div className="services-grid">
            {blocks.map((service) => (
              <div key={service.name} className="service-card">
                <NavLink
                  className="text-reset text-decoration-none text-center"
                  to={`/${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="medical-img-container mb-3">
                    <img
                      src={service.img}
                      alt={`${service.name} Logo`}
                      className="service-img"
                    />
                  </div>
                  <h1 className="service-name">{service.name}</h1>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyServices;
