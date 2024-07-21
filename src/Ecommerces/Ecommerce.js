import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/Welfares/welfare/ecommerce.webp"
import e1 from "../Assets/Welfares/welfare/partner.webp"
import e2 from "../Assets/Welfares/welfare/company.webp";
import e3 from "../Assets/Welfares/welfare/product.webp";
import e4 from "../Assets/Welfares/welfare/city.webp"
import e5 from "../Assets/Welfares/welfare/warehouse.webp"
import e6 from "../Assets/Welfares/welfare/wholesale.webp"
import e7 from "../Assets/Welfares/welfare/self.webp"
import e8 from "../Assets/Welfares/welfare/onlineorder.webp"
import e9 from "../Assets/Welfares/welfare/pickup.webp"
import e10 from "../Assets/Welfares/welfare/delivery.webp"
import e11 from "../Assets/Welfares/welfare/payment.webp"
import e12 from "../Assets/Welfares/welfare/reminder.webp"
import e13 from "../Assets/Welfares/welfare/orderdelivery.webp"
import e14 from "../Assets/Welfares/welfare/reiew.webp"
import e15 from "../Assets/Welfares/welfare/orderschudle.webp"
import e16 from "../Assets/Welfares/welfare/partner.webp"
import e17 from "../Assets/Welfares/welfare/shopify.webp"
import e18 from "../Assets/Welfares/welfare/amazon.webp"
import e19 from "../Assets/Welfares/welfare/ebay.webp"
import e20 from "../Assets/Welfares/welfare/walat.webp"
import e21 from "../Assets/Welfares/welfare/daraz.webp"
import e22 from "../Assets/Welfares/welfare/etsy.webp"
import e23 from "../Assets/Welfares/welfare/sijy.webp"
import e24 from "../Assets/Welfares/welfare/alibaba.webp"
import e25 from "../Assets/Welfares/welfare/aliexpress.webp"



import "./Ecommerce.css";

const Ecommerce = () => {
    const services =[
        { name: "Belike partner stores", img: e1 },
        { name: "Company name", img: e2 },
        { name: "Products specialist", img: e3 },
        { name: "City", img: e4 },
        { name: "Warehouse", img: e5 },
        { name: "Wholesale", img: e6 },
        { name: "Self products", img: e7 },
        { name: "Online order", img: e8 },
        { name: "Pick-up", img: e9 },
        { name: "Delivery services", img: e10 },
        { name: "Payment mouthed", img: e11 },
        { name: "Reminder message", img: e12 },
        { name: "Order delivered", img: e13 },
        { name: "Review", img: e14 },
        { name: "Order schedule", img: e15 },
        { name: "Partners stores", img: e16 },
        { name: "Shopify", img: e17 },
        { name: "Amazon", img: e18 },
        { name: "Ebay", img: e19 },
        { name: "Walmart", img: e20 },
        { name: "Daraz", img: e21 },
        { name: "Etsy", img: e22 },
        { name: "Sijy", img: e23 },
        { name: "Ali baba", img: e24 },
        { name: "Ali express", img: e25 }
      ];

    return (
        <div className="container pt-6">
            <div className="text-center d-flex justify-content-center align-items-center mb-4">
                <h1 className="medical-heading">E-commerce</h1>
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

export default Ecommerce;
