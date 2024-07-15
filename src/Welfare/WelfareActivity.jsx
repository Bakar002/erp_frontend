import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/Medical/medical/patner.jpg";
import e1 from "../Assets/Welfares/welfare/e1.png"
import e2 from "../Assets/Welfares/welfare/e2.jpg";
import e3 from "../Assets/Welfares/welfare/e3.png"

import "./WelfareActivity.css";

const WelfareActivity = () => {
    const services = [
      
        {
            name: "Youth Societies ",
            img: e1,
        },
        {
            name: "Welfare Organization ",
            img: e2,
           
        },
        {
            name: "Foundation ",
            img: e3,
           
        },
       
        
        // Add more payment methods as needed
    ];

    return (
        <div className="container pt-6">
            <div className="text-center d-flex justify-content-center align-items-center mb-4">
                <h1 className="medical-heading">Welfare Activity</h1>
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

export default WelfareActivity;
