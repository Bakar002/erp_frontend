import React from "react";
import Logo from "../../../Assets/Img/dg.png"; // Replace with your actual logo path
import lab1 from "../../../Assets/Medical/laboratory/lab1.jpg"; // Replace with your actual laboratory logo path
import "./Laboratory.css";

const Laboratory = () => {
    const laboratories = [
        {
            name: "Lab",
            logo: lab1,
            email: "labone@example.com",
            contact: "+923045678940",
            location: "https://maps.google.com/?q=31.473951,74.241270", // Replace with actual location link
        },
        {
            name: "Lab",
            logo: lab1,
            email: "labone@example.com",
            contact: "+923045678940",
            location: "https://maps.google.com/?q=31.473951,74.241270", // Replace with actual location link
        },
        {
            name: "Lab",
            logo: lab1,
            email: "labone@example.com",
            contact: "+923045678940",
            location: "https://maps.google.com/?q=31.473951,74.241270", // Replace with actual location link
        },
        {
            name: "Lab",
            logo: lab1,
            email: "labone@example.com",
            contact: "+923045678940",
            location: "https://maps.google.com/?q=31.473951,74.241270", // Replace with actual location link
        },
        {
            name: "Lab",
            logo: lab1,
            email: "labone@example.com",
            contact: "+923045678940",
            location: "https://maps.google.com/?q=31.473951,74.241270", // Replace with actual location link
        },
        {
            name: "Lab",
            logo: lab1,
            email: "labone@example.com",
            contact: "+923045678940",
            location: "https://maps.google.com/?q=31.473951,74.241270", // Replace with actual location link
        },
        {
            name: "Lab",
            logo: lab1,
            email: "labone@example.com",
            contact: "+923045678940",
            location: "https://maps.google.com/?q=31.473951,74.241270", // Replace with actual location link
        },
        {
            name: "Lab",
            logo: lab1,
            email: "labone@example.com",
            contact: "+923045678940",
            location: "https://maps.google.com/?q=31.473951,74.241270", // Replace with actual location link
        },
        {
            name: "Lab",
            logo: lab1,
            email: "labone@example.com",
            contact: "+923045678940",
            location: "https://maps.google.com/?q=31.473951,74.241270", // Replace with actual location link
        },
        {
            name: "Lab",
            logo: lab1,
            email: "labone@example.com",
            contact: "+923045678940",
            location: "https://maps.google.com/?q=31.473951,74.241270", // Replace with actual location link
        },
        {
            name: "Lab",
            logo: lab1,
            email: "labone@example.com",
            contact: "+923045678940",
            location: "https://maps.google.com/?q=31.473951,74.241270", // Replace with actual location link
        },
        {
            name: "Lab",
            logo: lab1,
            email: "labone@example.com",
            contact: "+923045678940",
            location: "https://maps.google.com/?q=31.473951,74.241270", // Replace with actual location link
        },
        {
            name: "Lab",
            logo: lab1,
            email: "labone@example.com",
            contact: "+923045678940",
            location: "https://maps.google.com/?q=31.473951,74.241270", // Replace with actual location link
        },
        {
            name: "Lab",
            logo: lab1,
            email: "labone@example.com",
            contact: "+923045678940",
            location: "https://maps.google.com/?q=31.473951,74.241270", // Replace with actual location link
        },
        {
            name: "Lab",
            logo: lab1,
            email: "labone@example.com",
            contact: "+923045678940",
            location: "https://maps.google.com/?q=31.473951,74.241270", // Replace with actual location link
        },
        {
            name: "Lab",
            logo: lab1,
            email: "labone@example.com",
            contact: "+923045678940",
            location: "https://maps.google.com/?q=31.473951,74.241270", // Replace with actual location link
        },
        {
            name: "Lab",
            logo: lab1,
            email: "labone@example.com",
            contact: "+923045678940",
            location: "https://maps.google.com/?q=31.473951,74.241270", // Replace with actual location link
        },
        {
            name: "Lab",
            logo: lab1,
            email: "labone@example.com",
            contact: "+923045678940",
            location: "https://maps.google.com/?q=31.473951,74.241270", // Replace with actual location link
        },
        {
            name: "Lab",
            logo: lab1,
            email: "labone@example.com",
            contact: "+923045678940",
            location: "https://maps.google.com/?q=31.473951,74.241270", // Replace with actual location link
        },
        {
            name: "Lab",
            logo: lab1,
            email: "labone@example.com",
            contact: "+923045678940",
            location: "https://maps.google.com/?q=31.473951,74.241270", // Replace with actual location link
        },
        // Add more laboratory entries as needed
    ];

    return (
        <div className="laboratory-container">
            <div className="laboratory-title">
                <h1>Belike Edu. Laboratory</h1>
                <img src={Logo} alt="Belike Edu. Logo" />
            </div>
            <h3 className="laboratory-text-center laboratory-fw-bold laboratory-text-xl laboratory-mt-6">Our Partner Laboratories</h3>
            <div className="laboratory-partner-laboratories">
                {laboratories.map((laboratory, index) => (
                    <div key={index} className="laboratory-card-container" onClick={() => window.open(laboratory.location, "_blank")}>
                        <div className="laboratory-card">
                            <div className="laboratory-card-face laboratory-card-front">
                                <img src={laboratory.logo} alt={laboratory.name} />
                                <h1>{laboratory.name}</h1>
                            </div>
                            <div className="laboratory-card-face laboratory-card-back">
                                <p>{laboratory.email}</p>
                                <p>{laboratory.contact}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Laboratory;
