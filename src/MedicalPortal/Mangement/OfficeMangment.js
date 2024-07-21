import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/Welfares/welfare/admin1.webp"
import e1 from "../../Assets/Welfares/welfare/account.webp"
import e2 from "../../Assets/Welfares/welfare/employment.webp";
import e3 from "../../Assets/Welfares/welfare/salary.webp"
import e4 from "../../Assets/Welfares/welfare/fee.webp";
import e5 from "../../Assets/Welfares/welfare/reminder.webp"
import e6 from "../../Assets/Welfares/welfare/feedback.webp";
import e7 from "../../Assets/Welfares/welfare/admin.webp"
import e8 from "../../Assets/Welfares/welfare/metting.png";


const OfficeManagement = () => {
    const services = [
      
        {
            name: "Account ",
            img: e1,
        },
        {
            name: "Employment ",
            img: e2,
           
        },
        {
            name: "Salary ",
            img: e3,
           
        },
        {
            name: "Fee Schedule ",
            img: e4,
           
        },
        {
            name: "Reminder ",
            img: e5,
           
        },
        {
            name: "FeedBack ",
            img: e6,
           
        },
        {
            name: "Admin Panel ",
            img: e7,
           
        },
        {
            name: "Meeting ",
            img: e8,
           
        },
       
        
        // Add more payment methods as needed
    ];

    return (
        <div className="container pt-6">
            <div className="text-center d-flex justify-content-center align-items-center mb-4">
                <h1 className="medical-heading">Office-management</h1>
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

export default OfficeManagement;
