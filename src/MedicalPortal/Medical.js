import React from "react";
import "./Medical.css"; // Import your custom styles
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../Assets/Medical/medical/patner.jpg";
import Logo14 from "../Assets/Medical/medical/ambulance.png";
import Logo15 from "../Assets/Medical/medical/pharmancy.jpg";
import Logo16 from "../Assets/Medical/medical/ho.jpg";
import Logo17 from "../Assets/Medical/medical/labortary.png";
import Logo18 from "../Assets/Medical/medical/specialclinic.png";
import Logo19 from "../Assets/Medical/medical/medicalcomplex.jpg";
import Logo1 from "../Assets/Medical/medical/appointment.png"; // Replace with actual logo path
import Logo2 from "../Assets/Medical/medical/patientrecord.png"; // Replace with actual logo path
import Logo3 from "../Assets/Medical/medical/doctorlist.png"; // Replace with actual logo path
import Logo4 from "../Assets/Medical/medical/remindermsg.png"; // Replace with actual logo path
//import Logo5 from "../Assets/Medical/medical/patientpannel.jpg"; // Replace with actual logo path
import Logo6 from "../Assets/Medical/medical/pr.png"; // Replace with actual logo path
import Logo7 from "../Assets/Medical/medical/emergency.jpg"; // Replace with actual logo path
import Logo8 from "../Assets/Medical/medical/appointmentform.png"; // Replace with actual logo path
import Logo9 from "../Assets/Medical/medical/office mangemnet.png"; // Replace with actual logo path
import Logo10 from "../Assets/Medical/medical/contactus.jpg"; // Replace with actual logo path
import Logo11 from "../Assets/Medical/medical/SMM.png"; // Replace with actual logo path
import Logo12 from "../Assets/Medical/medical/previousclient.png"; // Replace with actual logo path
import Logo13 from "../Assets/Medical/medical/medicalcamp.png"; // Replace with actual logo path

const services = {
  "Our Partners": [
    { name: "Hospital", img: Logo16 },
    { name: "Medical Complex", img: Logo19 },
    { name: "Specialized Clinic", img: Logo18 },
    { name: "Ambulance", img: Logo14 },
    { name: "Pharmacy", img: Logo15 },
    { name: "Laboratory", img: Logo17 },
  ],
  "Specialist": [
    { name: "Appointments", img: Logo1 },
    { name: "Patient Slips", img: Logo2 },
    { name: "Doctor's Panel", img: Logo3 },
    { name: "Reminder Messages", img: Logo4 },
  ],
  "Patients": [
    { name: "Patient Record", img: Logo6 },
    { name: "Emergency", img: Logo7 },
    { name: "Appointment Forms", img: Logo8 },
  ],
  "Managements": [
    { name: "Office Management", img: Logo9 },
    { name: "Contact Info", img: Logo10 },
    { name: "SMM", img: Logo11 },
    { name: "Client Services", img: Logo12 },
    { name: "Medical Camp", img: Logo13 },
  ],
};

const MedicalPortal = () => {
  const navigate = useNavigate();

  return (
    <div className="container pt-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <img
            alt="Logo"
            className="medical-logo ms-lg-2"
            src={Logo}
            style={{ height: "70px", width: "70px" }} // Adjust as needed
          />
        <div className="d-flex align-items-center">
          <h1 className="medical-heading">Medical Portal</h1>
          
        </div>
        <button
          className="btn btn-primary"
          onClick={() => navigate('/health-login')}
        >
          Login
        </button>
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
                      className="service-img" // Adjust size here
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

export default MedicalPortal;
