import React from "react";
import "./Medical.css"; // Import your custom styles
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../Assets/Medical/client.png"; // Replace with actual logo path

const services = [
  { name: "Client Services", img: Logo },
  { name: "Appointments", img: Logo },
  { name: "Emergency", img: Logo },
  { name: "Medical Schedule", img: Logo },
  { name: "Payment Method", img: Logo },
  { name: "Previous Clients", img: Logo },
  { name: "Office Management", img: Logo },
  { name: "Reminder Messages", img: Logo },
  { name: "Patient Record", img: Logo },
  { name: "Doctor List", img: Logo },
  { name: "Hospitals", img: Logo },
  { name: "Clinics", img: Logo },
  { name: "Laboratory", img: Logo },
  { name: "Pharmacy", img: Logo },
  { name: "Ambulance", img: Logo },
  { name: "Medical Camp", img: Logo },
  { name: "SMM", img: Logo },
  { name: "Contact Info", img: Logo },
];

const MedicalPortal = () => {
  const navigate = useNavigate();

  const adminPanelNavigator = () => {
    navigate("/admin-dashboard");
  };

  return (
    <div className="container pt-3">
      <div className="text-center d-flex justify-content-center">
        <h1 className="medical-heading">Medical Portal</h1>
        <img
          alt="Logo"
          className="medical-logo ms-lg-2"
          src={Logo}
          style={{ height: "70px", width: "70px" }} // Adjust as needed
        />
      </div>
      <h3 className="text-center fw-bold medical-subheading">Our Services</h3>
      <div className="row flex justify-content-center gap-2 flex-wrap mt-5">
        {services.map((service) => (
          <div
            key={service.name}
            className="bg-white xl:w-2/12 w-6/12 h-40 overflow-hidden flex flex-col justify-center items-center gap-2 cursor-pointer rounded shadow-lg transform transition-transform duration-300 hover:scale-105 medical-card"
          >
            <NavLink
              className="text-reset text-decoration-none text-center"
              to={`/${service.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="medical-img-container">
                <img
                  src={service.img}
                  alt={`${service.name} Logo`}
                  className="h-24 w-24 object-contain mb-2 medical-img" // Adjust size here
                />
              </div>
              <h1 className="text-black text-center text-lg font-semibold medical-btn">
                {service.name}
              </h1>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalPortal;
