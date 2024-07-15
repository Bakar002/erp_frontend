import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./ItService.css"; // Import your custom styles
import Logo from "../Assets/Medical/medical/patner.jpg";
import addmission from "../Assets/IT/it/addmission.png";
import fee from "../Assets/IT/it/fee.png";
import time from "../Assets/IT/it/time.png";
import feedback from "../Assets/IT/it/feedback.png";
import reminder from "../Assets/IT/it/reminder.png";
import course from "../Assets/IT/it/course.jpg";
import progress from "../Assets/IT/it/progress.png";
import meeting from "../Assets/IT/it/meeting.jpg";


const services = {
    "Our Attributes": [
        { name: "Admission", img: addmission },
        { name: "Fee", img: fee },
        { name: "Time Table", img:time  },
        { name: "Feedback", img: feedback },
        { name: "reminder", img: reminder },
        { name: "course", img: course },
        { name: "Progress", img: progress },
        { name: "Meeting", img: meeting }, 
    ],
    
};

const ItService = () => {
  const navigate = useNavigate();

  return (
    <div className="container pt-3">
      <div className="text-center d-flex justify-content-center align-items-center mb-4">
        <h1 className="medical-heading">IT Course</h1>
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
                  to={`/${service.name.toLowerCase().replace(/\s+/g, "-")}it`}
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

export default ItService;
