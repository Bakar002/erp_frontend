import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/Welfares/welfare/legallaw.webp"
import e1 from "../Assets/Welfares/welfare/partner.webp"
import e2 from "../Assets/Welfares/welfare/advocate.webp";
import e3 from "../Assets/Welfares/welfare/lawer.webp";
import e4 from "../Assets/Welfares/welfare/crimnal.webp"
import e5 from "../Assets/Welfares/welfare/tax.webp"
import e6 from "../Assets/Welfares/welfare/property.webp"
import e7 from "../Assets/Welfares/welfare/family.webp"
import e8 from "../Assets/Welfares/welfare/environment.webp"
import e9 from "../Assets/Welfares/welfare/coperation.webp"
import e10 from "../Assets/Welfares/welfare/constitulation.webp"
import e11 from "../Assets/Welfares/welfare/estate.webp"
import e12 from "../Assets/Welfares/welfare/inst.webp"
import e13 from "../Assets/Welfares/welfare/bankcurpt.jpg"
import e14 from "../Assets/Welfares/welfare/civil.webp"
import e15 from "../Assets/Welfares/welfare/healthlaw.webp"
import e16 from "../Assets/Welfares/welfare/international.webp"
import e17 from "../Assets/Welfares/welfare/animallaw.webp"
import e18 from "../Assets/Welfares/welfare/reminder.webp"
import e19 from "../Assets/Welfares/welfare/payment.webp"
import e20 from "../Assets/Welfares/welfare/schudle.webp"
import e21 from "../Assets/Welfares/welfare/SMM.webp"
import e22 from "../Assets/Welfares/welfare/city.webp"
import e23 from "../Assets/Welfares/welfare/expericendcourt.webp"
import e24 from "../Assets/Welfares/welfare/suprem.webp"
import e25 from "../Assets/Welfares/welfare/highcourt.webp"
import e26 from "../Assets/Welfares/welfare/session.webp"
import e27 from "../Assets/Welfares/welfare/legallaw.webp"



const Legal = () => {
    const services =[
        { name: "Our partner chambers", img: e1 },
        { name: "Our partner advocate", img: e2 },
        { name: "Types of lawyers", img: e3 },
        { name: "Criminal", img: e4 },
        { name: "Tax", img: e5 }, // Assuming "Text" was meant to be "Tax"
        { name: "Property", img: e6 },
        { name: "Family", img: e7 },
        { name: "Environmental", img: e8 },
        { name: "Corporate", img: e9 }, // Assuming "Cooperate" was meant to be "Corporate"
        { name: "Constitutional", img: e10 },
        { name: "Estate planning", img: e11 }, // Assuming "E state planing" was meant to be "Estate planning"
        { name: "Intellectual property", img: e12 },
        { name: "Bankruptcy", img: e13 },
        { name: "Civil liberties and political rights", img: e14 }, // Assuming "Civil line and political right" was meant to be "Civil liberties and political rights"
        { name: "Health law", img: e15 },
        { name: "International", img: e16 },
        { name: "Animal law", img: e17 }, // Assuming "Animal" was meant to be "Animal law"
        { name: "Reminder message", img: e18 },
        { name: "Payment schedule", img: e19 },
        { name: "Case schedule", img: e20 },
        { name: "Digital marketing", img: e21 },
        { name: "City", img: e22 },
        { name: "Experienced courts", img: e23 },
        { name: "Supreme court", img: e24 },
        { name: "High court", img: e25 },
        { name: "Session court", img: e26 },
        { name: "Civil court", img: e27 }
      ];

    return (
        <div className="container pt-6 ">
            <div className="text-center d-flex justify-content-center align-items-center mb-4">
                <h1 className="medical-heading">Legal-Services</h1>
                <img
                    alt="Logo"
                    className="medical-logo ms-lg-2"
                    src={Logo}
                    style={{ height: "70px", width: "70px" }}
                />
            </div>

            <div className="services-grid">
                {services.map((service) => (
                    <div key={service.name} className="service-card ">
                        <NavLink
                            className="text-reset text-decoration-none text-center "
                            to={`/${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                            <div className="medical-img-container mb-3 ">
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

export default Legal;
