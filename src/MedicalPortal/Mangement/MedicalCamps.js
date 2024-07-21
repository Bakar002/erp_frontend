import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/Welfares/welfare/medical.webp"
import e1 from "../../Assets/Welfares/welfare/leader.webp"
import e2 from "../../Assets/Welfares/welfare/date.webp";
import e3 from "../../Assets/Welfares/welfare/doctorlist.jpg"
import e4 from "../../Assets/Welfares/welfare/city.webp";
import e5 from "../../Assets/Welfares/welfare/area.webp"
import e6 from "../../Assets/Welfares/welfare/traveling.webp";
import e7 from "../../Assets/Welfares/welfare/accoumdation.webp";
import e8 from "../../Assets/Welfares/welfare/arrangment.webp";
import e9 from "../../Assets/Welfares/welfare/support.png";


const MedicalCamp = () => {
    const services = [
      
        {
            name: "Camp leader ",
            img: e1,
        },
        {
            name: "Date ",
            img: e2,
           
        },
        {
            name: "Doctors list",
            img: e3,
           
        },
        {
            name: "City  ",
            img: e4,
           
        },
        {
            name: "Area  ",
            img: e5,
           
        },
        {
            name: "Traveling",
            img: e6,
           
        },
        {
            name: "Accomodations",
            img: e7,
           
        },
        {
            name: "Arrangements ",
            img: e8,
           
        },
        {
            name: "Medicine support",
            img: e9,
           
        },

       
        
        // Add more payment methods as needed
    ];

    return (
        <div className="container pt-6">
            <div className="text-center d-flex justify-content-center align-items-center mb-4">
                <h1 className="medical-heading">Medical-Camp</h1>
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

export default MedicalCamp;
