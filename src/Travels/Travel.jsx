import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/Medical/medical/patner.jpg";


import e3 from "../Assets/Welfares/welfare/e3.png"

import "./Travel.css";

const Travel = () => {                                                        
    const services =[
        {
            name: "Local Area",
            img: e3,
        },
        {
            name: "Our partner companies",
            img: e3,
        },
        {
            name: "Foundation",
            img: e3,
        },
        {
            name: "Hotel",
            img: e3,
        },
        {
            name: "Restaurant",
            img: e3,
        },
        {
            name: "Points",
            img: e3,
        },
        {
            name: "Jeep",
            img: e3,
        },
        {
            name: "International tours",
            img: e3,
        },
        {
            name: "Airlines",
            img: e3,
        },
        {
            name: "Countries",
            img: e3,
        },
        {
            name: "Places",
            img: e3,
        },
        {
            name: "City",
            img: e3,
        },
        {
            name: "Local transport",
            img: e3,
        },
        {
            name: "Tour guide",
            img: e3,
        },
        {
            name: "Documents",
            img: e3,
        },
        {
            name: "Advance booking",
            img: e3,
        },
        {
            name: "Sop's",
            img: e3,
        },
        {
            name: "Hajj and umrah",
            img: e3,
        },
        {
            name: "Reminder message",
            img: e3,
        }
    ];
    

    return (
        <div className="container pt-6">
            <div className="text-center d-flex justify-content-center align-items-center mb-4">
                <h1 className="medical-heading">Travel Services</h1>
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

export default Travel;
