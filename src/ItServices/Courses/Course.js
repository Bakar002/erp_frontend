import React from "react";
import { NavLink } from "react-router-dom";
import c1 from "../../Assets/IT/course/c11.jpg";
import c2 from "../../Assets/IT/course/c2.jpg";
import c3 from "../../Assets/IT/course/c3.png";
import c4 from "../../Assets/IT/course/c4.png";
import c5 from "../../Assets/IT/course/c5.jpg";
import c6 from "../../Assets/IT/course/c6.jpg";
import c7 from "../../Assets/IT/course/c7.png";
import c8 from "../../Assets/IT/course/c8.jpg";
import c9 from "../../Assets/IT/course/c9.png";
import c12 from "../../Assets/IT/course/c12.jpg";
import c13 from "../../Assets/IT/course/c13.png";
import c14 from "../../Assets/IT/course/c14.jpg";
import c15 from "../../Assets/IT/course/c15.webp";
import c16 from "../../Assets/IT/course/c16.png";
import c17 from "../../Assets/IT/course/c17.jpg";
import c18 from "../../Assets/IT/course/c18.jpg";
import c19 from "../../Assets/IT/course/c19.jpg";
import c20 from "../../Assets/IT/course/c20.jpg";
import c21 from "../../Assets/IT/course/c21.webp";
import c22 from "../../Assets/IT/course/c22.webp";
import c23 from "../../Assets/IT/course/c23.webp";

//import c4 from "../../Assets/IT/course/c4.png";

const Course = () => {
    const services = [
        {
            name: "Digital Marketing",
            img: c1,
            videoUrl: "https://youtube.com/playlist?list=PLL8Jor6F4yITk61FzDLfi2GtTEtrWEghN&si=yKYSZG4js5ot01gq" // Replace with the actual video URL
        },
        {
            name: "SMM (Social Media Marketing)",
            img: c2,
            videoUrl: "https://www.youtube.com/" // Replace with the actual video URL
        },
        {
            name: "SEO (Search Engine Optimization)",
            img: c3,
            videoUrl: "https://youtube.com/playlist?list=PLL8Jor6F4yITEo3b3nIlkFEDWu7ZDoVP7&si=nGTPXbibtCQLaWvr" // Replace with the actual video URL
        },
        {
            name: "Blogging",
            img: c4,

            videoUrl: "https://www.youtube.com/" // Replace with the actual video URL
        },
        {
            name: "Freelancing",
            img: c5,
            videoUrl: "https://www.youtube.com/" // Replace with the actual video URL
        },
        {
            name: "Web Development",
            img: c6,
            videoUrl: "https://youtube.com/playlist?list=PLL8Jor6F4yIQpH05Mr0xrufrZql5kNDme&si=0Z7Neudknnu_JUAO" // Replace with the actual video URL
        },
        {
            name: "Front End Development",
            img: c7,
            videoUrl: "https://www.youtube.com/" // Replace with the actual video URL
        },
        {
            name: "Backend Development",
            img: c8,
            videoUrl: "https://www.youtube.com/" // Replace with the actual video URL
        },
        {
            name: "Graphics Designing",
            img: c9,
            videoUrl: "https://youtube.com/playlist?list=PLL8Jor6F4yISnfhaSWbGYqphTC8JKE63s&si=mgYdHhAncsKfJYGG" // Replace with the actual video URL
        },
        {
            name: "Video Editing",
            img: c12,
            videoUrl: "https://www.youtube.com/" // Replace with the actual video URL
        },
        {
            name: "Fashion Designing",
            img: c13,
            videoUrl: "https://www.youtube.com/" // Replace with the actual video URL
        },
        {
            name: "Artificial Intelligence",
            img: c14,
            videoUrl: "https://youtube.com/playlist?list=PLL8Jor6F4yITLfYFIzY2O2UCV3tG8VCmj&si=qiLNOm-y0RaXUzQ_" // Replace with the actual video URL
        },
        {
            name: "E-commerce",
            img: c15,
            videoUrl: "https://www.youtube.com/" // Replace with the actual video URL
        },
        {
            name: "Amazon",
            img: c16,
            videoUrl: "https://youtube.com/playlist?list=PLL8Jor6F4yIRByHBiECuC5zU1kPtY4AWE&si=fJgEa0xzzKuBbcDl" // Replace with the actual video URL
        },
        {
            name: "Guest Posting",
            img: c17,
            videoUrl: "https://www.youtube.com/" // Replace with the actual video URL
        },
        {
            name: "Spoken English",
            img: c18,
            videoUrl: "https://www.youtube.com/" // Replace with the actual video URL
        },
        {
            name: "PTE (Pearson Test of English)",
            img: c19,
            videoUrl: "https://www.youtube.com/" // Replace with the actual video URL
        },
        {
            name: "IELTS",
            img: c20,
            videoUrl: "https://www.youtube.com/" // Replace with the actual video URL
        },
        
        {
            name: "Daraz",
            img: c21,
            videoUrl: "https://www.youtube.com/" // Replace with the actual video URL
        },
        {
            name: "Ebay",
            img: c22,
            videoUrl: "https://youtube.com/playlist?list=PLL8Jor6F4yIThIAbtF258F53l7rWvpnHO&si=Vm1aQ28tY83qCjzG" // Replace with the actual video URL
        },
        {
            name: "Shopify",
            img: c23,
            videoUrl: "https://youtube.com/playlist?list=PLL8Jor6F4yIT6hPMGkhCSMzjxIxE-EKQ7&si=UhVhuCOp-7C92NO4" // Replace with the actual video URL
        },
        // Add more courses as needed
    ];

    const handleVideoClick = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div className="container pt-6">
            <div className="text-center d-flex justify-content-center align-items-center mb-4">
                <h1 className="medical-heading">Our Course</h1>
            </div>

            <div className="services-grid">
                {services.map((service) => (
                    <div key={service.name} className="service-card">
                        {service.videoUrl ? (
                            <div
                                className="text-reset text-decoration-none text-center"
                                onClick={() => handleVideoClick(service.videoUrl)}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="medical-img-container mb-3">
                                    <img
                                        src={service.img}
                                        alt={`${service.name}`}
                                        className="service-img"
                                    />
                                </div>
                                <h1 className="service-name">{service.name}</h1>
                            </div>
                        ) : (
                            <NavLink
                                className="text-reset text-decoration-none text-center"
                                to={`/${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                            >
                                <div className="medical-img-container mb-3">
                                    <img
                                        src={service.img}
                                        alt={`${service.name}`}
                                        className="service-img"
                                    />
                                </div>
                                <h1 className="service-name">{service.name}</h1>
                            </NavLink>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Course;
