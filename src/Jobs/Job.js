import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/Welfares/welfare/logojob.webp"
import t1 from "../Assets/Welfares/welfare/pjob.webp"
import e2 from "../Assets/Welfares/welfare/full.webp";
import e4 from "../Assets/Welfares/welfare/city.webp"
import e5 from "../Assets/Welfares/welfare/company.webp"
import e6 from "../Assets/Welfares/welfare/jobuploading].webp"
import e7 from "../Assets/Welfares/welfare/salary.png"
import e8 from "../Assets/Welfares/welfare/jobpost.webp"
import e9 from "../Assets/Welfares/welfare/onlinejonb.webp"
import e10 from "../Assets/Welfares/welfare/jobprofession.webp"



const Job = () => {
    const services = [
      
        { name: "Part time job", img: t1 },
  { name: "Full time job", img: e2 },
  { name: "City", img: e4 },
  { name: "Company name ", img: e5 },
  { name: "Job uploading ", img: e6 },
  { name: "Salary ", img: e7 },
  { name: "Job post", img: e8 },
  { name: "Online job", img: e9 },
  { name: "Job professional", img: e10 },
 
        
        // Add more payment methods as needed
    ];

    return (
        <div className="container pt-6">
            <div className="text-center d-flex justify-content-center align-items-center mb-4">
                <h1 className="medical-heading">Jobs</h1>
                <img
                    alt="Logo"
                    className="medical-logo ms-lg-2"
                    src={Logo}
                    style={{ height: "70px", width: "70px" }}
                />
            </div>

            <div className="services-grid">
                {services.map((service) => (
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
    );
};

export default Job;
