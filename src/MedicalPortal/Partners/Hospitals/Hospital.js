import React from "react";
import Logo from "../../../Assets/Img/dg.png"; // Replace with your actual logo path
import hospital1 from "../../../Assets/Medical/hospital/hospital1.png";
// Replace with your actual hospital logo path
import "./Hospital.css";

const Hospital = () => {
    const hospitals = [
        {
            name: " Hospital",
            logo: hospital1,
            email: "info@cityhospital.com",
            contact: "+923045678910",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: " Hospital",
            logo: hospital1,
            email: "info@generalhospital.com",
            contact: "+923045678910",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: " Hospital",
            logo: hospital1,
            email: "info@communityhospital.com",
            contact: "+923045678910",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: " Hospital",
            logo: hospital1,
            email: "info@childrenshospital.com",
            contact: "+923045678910",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: "Hospital",
            logo: hospital1,
            email: "info@universityhospital.com",
            contact: "+923045678910",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: " Hospital",
            logo: hospital1,
            email: "info@universityhospital.com",
            contact: "+923045678910",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: " Hospital",
            logo: hospital1,
            email: "info@universityhospital.com",
            contact: "+923045678910",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: " Hospital",
            logo: hospital1,
            email: "info@universityhospital.com",
            contact: "+923045678910",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: " Hospital",
            logo: hospital1,
            email: "info@universityhospital.com",
            contact: "+923045678910",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: " Hospital",
            logo: hospital1,
            email: "info@universityhospital.com",
            contact: "+923045678910",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: " Hospital",
            logo: hospital1,
            email: "info@universityhospital.com",
            contact: "+923045678910",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: " Hospital",
            logo: hospital1,
            email: "info@universityhospital.com",
            contact: "+923045678910",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: " Hospital",
            logo: hospital1,
            email: "info@universityhospital.com",
            contact: "+923045678910",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: "University Hospital",
            logo: hospital1,
            email: "info@universityhospital.com",
            contact: "+923045678910",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: "Hospital",
            logo: hospital1,
            email: "info@universityhospital.com",
            contact: "+923045678910",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: " Hospital",
            logo: hospital1,
            email: "info@universityhospital.com",
            contact: "+923045678910",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: " Hospital",
            logo: hospital1,
            email: "info@universityhospital.com",
            contact: "+923045678910",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: " Hospital",
            logo: hospital1,
            email: "info@universityhospital.com",
            contact: "+923045678910",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: " Hospital",
            logo: hospital1,
            email: "info@universityhospital.com",
            contact: "+923045678910",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: " Hospital",
            logo: hospital1,
            email: "info@universityhospital.com",
            contact: "+923045678910",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
    ];

    return (
        <div className="hospital-container">
            <div className="hospital-title">
                <h1>Belike Edu.Software</h1>
                <img src={Logo} alt="Belike Edu. Logo" />
            </div>
            <h3 className="hospital-text-center hospital-fw-bold hospital-text-xl hospital-mt-6">Our Partner Hospitals</h3>
            <div className="hospital-partner-hospitals">
                {hospitals.map((hospital, index) => (
                    <div key={index} className="hospital-card-container" onClick={() => window.open(hospital.location, "_blank")}>
                        <div className="hospital-card">
                            <div className="hospital-card-face hospital-card-front">
                                <img src={hospital.logo} alt={hospital.name} />
                                <h1>{hospital.name}</h1>
                            </div>
                            <div className="hospital-card-face hospital-card-back">
                                <p>{hospital.email}</p>
                                <p>{hospital.contact}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hospital;
