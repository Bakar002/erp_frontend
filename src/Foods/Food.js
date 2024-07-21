import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/Welfares/welfare/foods.webp"
import e1 from "../Assets/Welfares/welfare/restruant.webp"
import e2 from "../Assets/Welfares/welfare/cafee.webp";
import e3 from "../Assets/Welfares/welfare/hotel.webp";
import e4 from "../Assets/Welfares/welfare/ffood.webp"
import e5 from "../Assets/Welfares/welfare/desifood.webp"
import e6 from "../Assets/Welfares/welfare/chincesfood.webp"
import e7 from "../Assets/Welfares/welfare/arabicfood.webp"
import e8 from "../Assets/Welfares/welfare/italnicfod.png"
import e9 from "../Assets/Welfares/welfare/radlicfood.jpg"
import e10 from "../Assets/Welfares/welfare/afghanidishes.jpg"
import e11 from "../Assets/Welfares/welfare/irandishes.webp"
import e12 from "../Assets/Welfares/welfare/reminder.webp"
import e13 from "../Assets/Welfares/welfare/onlineorder.webp"
import e14 from "../Assets/Welfares/welfare/pickdrop.webp"
import e15 from "../Assets/Welfares/welfare/discount.webp"
import e16 from "../Assets/Welfares/welfare/specialorder.webp"
import e17 from "../Assets/Welfares/welfare/family.webp"
import e18 from "../Assets/Welfares/welfare/event.webp"
import e19 from "../Assets/Welfares/welfare/marriage.webp"
import e20 from "../Assets/Welfares/welfare/copperration.webp"


const Food = () => {
    const services =[
        { name: "Our partner restaurant", img: e1 },
    { name: "Our partner cafe", img: e2 },
    { name: "Our Hotel", img: e3 },
    { name: "Fast food", img: e4 },
    { name: "Dasi food", img: e5 },
    { name: "Chinese food", img: e6 },
    { name: "Arabic food", img: e7 },
    { name: "Italian food", img: e8 },
    { name: "Radian food", img: e9 },
    { name: "Afghani dishes", img: e10 },
    { name: "Iran dishes", img: e11 },
    { name: "Reminder message", img: e12 },
    { name: "Online order", img: e13 },
    { name: "Pick-up order", img: e14 },
    { name: "Discount offer", img: e15 },
    { name: "Special order", img: e16 },
    { name: "Family", img: e17 },
    { name: "Event", img: e18 },
    { name: "Marriage", img: e19 },
    { name: "Cooperate", img: e20 }
      ];

    return (
        <div className="container pt-6">
            <div className="text-center d-flex justify-content-center align-items-center mb-4">
                <h1 className="medical-heading">Food</h1>
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

export default Food;
