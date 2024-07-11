import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../Assets/Img/dg.png"; // Replace with your actual logo path
import payment2 from "../../../Assets/Property/payment/payment2.png";
import payment11 from "../../../Assets/Property/payment/payment11.png";// Replace with your actual net payment icon path
import "./PaymentPlain.css";

const PaymentPlain = () => {
    const services = [
      
        {
            name: "Payment Plain ",
            img: payment2,
            email: "support@netpayment.com",
            contact: "+923045678910",
        },
        {
            name: "Agrement ",
            img: payment11,
            email: "support@netpayment.com",
            contact: "+923045678910",
        },
       
        
        // Add more payment methods as needed
    ];

    return (
        <div className="container pt-6">
            <div className="text-center d-flex justify-content-center align-items-center mb-4">
                <h1 className="medical-heading">Plains</h1>
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

export default PaymentPlain;
