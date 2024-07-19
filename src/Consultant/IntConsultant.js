import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/Medical/medical/patner.jpg";
import e1 from "../Assets/Welfares/welfare/p1.webp"
import e2 from "../Assets/Welfares/welfare/p2.jpg";
import e3 from "../Assets/Welfares/welfare/cou.webp"
import e4 from "../Assets/Welfares/welfare/a1.webp"
import e5 from "../Assets/Welfares/welfare/r1.webp"
import e6 from "../Assets/Welfares/welfare/s1.webp"
import e7 from "../Assets/Welfares/welfare/r2.jpg"
import e8 from "../Assets/Welfares/welfare/c5.webp"
import e9 from "../Assets/Welfares/welfare/o1.webp"
import e10 from "../Assets/Welfares/welfare/f1.webp"
import e11 from "../Assets/Welfares/welfare/re1.webp"
import e12 from "../Assets/Welfares/welfare/ap1.webp"
import e13 from "../Assets/Welfares/welfare/s2.webp"
import e14 from "../Assets/Welfares/welfare/s3.webp";

import "./IntConsultant.css";

const IntConsultant = () => {
    const services = [
      
        {
            name: "Our partner consultancies ",
            img: e1,
        },
        {
            name: "Our partner universities",
            img: e2,
           
        },
        {
            name: "Countries ",
            img: e3,
           
        },
        {
            name: "Application documents ",
            img: e4,
           
        },
        {
            name: "Reminder messages ",
            img: e5,
           
        },
        {
            name: "Selection ",
            img: e6,
           
        },
        {
            name: "Rejection ",
            img: e7,
           
        },
        {
            name: "Condition letter ",
            img: e8,
           
        },
       
        {
            name: "Offer letter ",
            img: e9,
           
        },
        
        {
            name: "Fee record ",
            img: e10,
           
        },
       
        {
            name: "Refund fee ",
            img: e11,
           
        },
       
        {
            name: "Application fee ",
            img: e12,
           
        },
        {
            name: "Success story ",
            img: e13,
           
        },
        {
            name: "SOPS ",
            img: e14,
           
        },
        

        // Add more payment methods as needed
    ];

    return (
        <div className="container pt-6">
            <div className="text-center d-flex justify-content-center align-items-center mb-4">
                <h1 className="medical-heading">International Consultant</h1>
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

export default IntConsultant;
