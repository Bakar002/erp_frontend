import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/Welfares/welfare/cservices.webp"
import e1 from "../../Assets/Welfares/welfare/social.webp"
import e2 from "../../Assets/Welfares/welfare/seo.webp";
import e3 from "../../Assets/Welfares/welfare/graphic.webp"
import e4 from "../../Assets/Welfares/welfare/web.webp";
import e5 from "../../Assets/Welfares/welfare/blo.webp"
import e6 from "../../Assets/Welfares/welfare/custmor.webp";



const Client = () => {
    const services = [
      
        {
            name: "SMM  ",
            img: e1,
        },
        {
            name: "SEO ",
            img: e2,
           
        },
        {
            name: "Graphics designing",
            img: e3,
           
        },
        {
            name: "Web development  ",
            img: e4,
           
        },
        {
            name: "Blogging  ",
            img: e5,
           
        },
        {
            name: "Customer support",
            img: e6,
           
        },
      
       
        
        // Add more payment methods as needed
    ];

    return (
        <div className="container pt-6">
            <div className="text-center d-flex justify-content-center align-items-center mb-4">
                <h1 className="medical-heading">Client-Services</h1>
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

export default Client;
