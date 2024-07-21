import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/Medical/medical/patner.jpg";

import e1 from "../Assets/Welfares/welfare/localarea.jpg"
import e2 from "../Assets/Welfares/welfare/partner.webp"
import e3 from "../Assets/Welfares/welfare/foundation.png"
import e4 from "../Assets/Welfares/welfare/hotel.webp"
import e5 from "../Assets/Welfares/welfare/restruant.webp"
import e6 from "../Assets/Welfares/welfare/point.webp"
import e7 from "../Assets/Welfares/welfare/jeep.webp"
import e8 from "../Assets/Welfares/welfare/international.webp"
import e9 from "../Assets/Welfares/welfare/airline.webp"
import e10 from "../Assets/Welfares/welfare/cou.webp"
import e11 from "../Assets/Welfares/welfare/place.webp"
import e12 from "../Assets/Welfares/welfare/city.webp"
import e13 from "../Assets/Welfares/welfare/local.webp"
import e14 from "../Assets/Welfares/welfare/tour.webp"
import e15 from "../Assets/Welfares/welfare/document.webp"
import e16 from "../Assets/Welfares/welfare/booking.webp"
import e17 from "../Assets/Welfares/welfare/stop.webp"
import e18 from "../Assets/Welfares/welfare/haj.webp"
import e19 from "../Assets/Welfares/welfare/reminder.webp"
import "./Travel.css";

const Travel = () => {                                                        
    const services =[
        {
            name: "Local Area",
            img: e1,
        },
        {
            name: "Our partner companies",
            img: e2,
        },
        {
            name: "Foundation",
            img: e3,
        },
        {
            name: "Hotel",
            img: e4,
        },
        {
            name: "Restaurant",
            img: e5,
        },
        {
            name: "Points",
            img: e6,
        },
        {
            name: "Jeep",
            img: e7,
        },
        {
            name: "International tours",
            img: e8,
        },
        {
            name: "Airlines",
            img: e9,
        },
        {
            name: "Countries",
            img: e10,
        },
        {
            name: "Places",
            img: e11,
        },
        {
            name: "City",
            img: e12,
        },
        {
            name: "Local transport",
            img: e13,
        },
        {
            name: "Tour guide",
            img: e14,
        },
        {
            name: "Documents",
            img: e15,
        },
        {
            name: "Advance booking",
            img: e16,
        },
        {
            name: "Sop's",
            img: e17,
        },
        {
            name: "Hajj and umrah",
            img: e18,
        },
        {
            name: "Reminder message",
            img: e19,
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
