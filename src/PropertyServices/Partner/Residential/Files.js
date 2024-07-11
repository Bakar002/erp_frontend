import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../Assets/Img/dg.png"; // Replace with your actual logo path
import payment4 from "../../../Assets/Property/payment/payment4.jpg";
import payment5 from "../../../Assets/Property/payment/payment5.png";
import payment3 from "../../../Assets/Property/payment/payment3.png";
import payment6 from "../../../Assets/Property/payment/payment6.png";  
import payment1 from "../../../Assets/Property/payment/payment1.jpg"; 
import payment7 from "../../../Assets/Property/payment/payment7.png"; // Replace with your actual net payment icon path
import "./Files.css";

const Files = () => {
    const services = [
        {
            name: "Plot",
            img: payment4,
            email: "support@netpayment.com",
            contact: "+923045678910",
        },
        {
            name: "Home",
            img: payment3,
            email: "support@netpayment.com",
            contact: "+923045678910",
        },
        {
            name: "Files",
            img: payment5,
            email: "support@netpayment.com",
            contact: "+923045678910",
        },
        {
            name: "Instalment Plan",
            img: payment6,
            email: "support@netpayment.com",
            contact: "+923045678910",
        },
        {
            name: "Payment Plain ",
            img: payment1,
            email: "support@netpayment.com",
            contact: "+923045678910",
        },
        {
            name: " Reminder",
            img: payment7,
            email: "support@netpayment.com",
            contact: "+923045678910",
        },
        // Add more payment methods as needed
    ];

    return (
        <div className="container pt-6">
            <div className="text-center d-flex justify-content-center align-items-center mb-4">
                <h1 className="medical-heading">Residential Services</h1>
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

export default Files;
