import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/Welfares/welfare/in1.webp"
import t1 from "../Assets/Welfares/welfare/t1.webp"
import e2 from "../Assets/Welfares/welfare/y1.webp";
import e4 from "../Assets/Welfares/welfare/payment.webp"
import e5 from "../Assets/Welfares/welfare/online.webp"
import e6 from "../Assets/Welfares/welfare/physical.webp"
import e7 from "../Assets/Welfares/welfare/schudle.webp"
import e8 from "../Assets/Welfares/welfare/reminder.webp"
import e9 from "../Assets/Welfares/welfare/pre.webp"
import e10 from "../Assets/Welfares/welfare/facebook.webp"
import e11 from "../Assets/Welfares/welfare/insta.webp"

import "./Influencer.css";

const Influencer = () => {
    const services = [
      
        { name: "TikTokers", img: t1 },
  { name: "YouTubers", img: e2 },
  { name: "Payment", img: e4 },
  { name: "Online Marketing", img: e5 },
  { name: "Physical Marketing", img: e6 },
  { name: "Schedule", img: e7 },
  { name: "Reminder", img: e8 },
  { name: "Previous Record", img: e9 },
  { name: "FaceBook", img: e10 },
  { name: "Instagram", img: e11 },
       
        
        // Add more payment methods as needed
    ];

    return (
        <div className="container pt-6">
            <div className="text-center d-flex justify-content-center align-items-center mb-4">
                <h1 className="medical-heading">Influencer/Blogger</h1>
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

export default Influencer;
