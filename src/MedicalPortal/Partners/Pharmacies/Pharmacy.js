import React from "react";
import Logo from "../../../Assets/Img/dg.png"; // Replace with your actual logo path
import pharmacy1 from "../../../Assets/Medical/pharmacy/pharmacy1.jpg"; // Replace with your actual pharmacy logo path
import "./Pharmacy.css";

const Pharmacy = () => {
    const pharmacies = [
        {
            name: "Aslam & Sons", 
            logo: pharmacy1,
            email: "Alihaider03005@gmail.com",
            contact: "+923044823161",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: "Aslam & Sons", 
            logo: pharmacy1,
            email: "Alihaider03005@gmail.com",
            contact: "+923044823161",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: "Aslam & Sons", 
            logo: pharmacy1,
            email: "Alihaider03005@gmail.com",
            contact: "+923044823161",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: "Aslam & Sons", 
            logo: pharmacy1,
            email: "Alihaider03005@gmail.com",
            contact: "+923044823161",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: "Aslam & Sons", 
            logo: pharmacy1,
            email: "Alihaider03005@gmail.com",
            contact: "+923044823161",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: "Aslam & Sons", 
            logo: pharmacy1,
            email: "Alihaider03005@gmail.com",
            contact: "+923044823161",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: "Aslam & Sons", 
            logo: pharmacy1,
            email: "Alihaider03005@gmail.com",
            contact: "+923044823161",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: "Aslam & Sons", 
            logo: pharmacy1,
            email: "Alihaider03005@gmail.com",
            contact: "+923044823161",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: "Aslam & Sons", 
            logo: pharmacy1,
            email: "Alihaider03005@gmail.com",
            contact: "+923044823161",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: "Aslam & Sons", 
            logo: pharmacy1,
            email: "Alihaider03005@gmail.com",
            contact: "+923044823161",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: "Aslam & Sons", 
            logo: pharmacy1,
            email: "Alihaider03005@gmail.com",
            contact: "+923044823161",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: "Aslam & Sons", 
            logo: pharmacy1,
            email: "Alihaider03005@gmail.com",
            contact: "+923044823161",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: "Aslam & Sons", 
            logo: pharmacy1,
            email: "Alihaider03005@gmail.com",
            contact: "+923044823161",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: "Aslam & Sons", 
            logo: pharmacy1,
            email: "Alihaider03005@gmail.com",
            contact: "+923044823161",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: "Aslam & Sons", 
            logo: pharmacy1,
            email: "Alihaider03005@gmail.com",
            contact: "+923044823161",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: "Aslam & Sons", 
            logo: pharmacy1,
            email: "Alihaider03005@gmail.com",
            contact: "+923044823161",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: "Aslam & Sons", 
            logo: pharmacy1,
            email: "Alihaider03005@gmail.com",
            contact: "+923044823161",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: "Aslam & Sons", 
            logo: pharmacy1,
            email: "Alihaider03005@gmail.com",
            contact: "+923044823161",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: "Aslam & Sons", 
            logo: pharmacy1,
            email: "Alihaider03005@gmail.com",
            contact: "+923044823161",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        {
            name: "Aslam & Sons", 
            logo: pharmacy1,
            email: "Alihaider03005@gmail.com",
            contact: "+923044823161",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        
       
        

    ];

    return (
        <div className="pharmacy-container">
            <div className="pharmacy-title">
                <h1>Belike Edu.Software</h1>
                <img src={Logo} alt="Belike Edu. Logo" />
            </div>
            <h3 className="pharmacy-text-center pharmacy-fw-bold pharmacy-text-xl pharmacy-mt-6">Our Partner Pharmacies</h3>
            <div className="pharmacy-partner-pharmacies">
                {pharmacies.map((pharmacy, index) => (
                    <div key={index} className="pharmacy-card-container" onClick={() => window.open(pharmacy.location, "_blank")}>
                        <div className="pharmacy-card">
                            <div className="pharmacy-card-face pharmacy-card-front">
                                <img src={pharmacy.logo} alt={pharmacy.name} />
                                <h1>{pharmacy.name}</h1>
                            </div>
                            <div className="pharmacy-card-face pharmacy-card-back">
                                <p>{pharmacy.email}</p>
                                <p>{pharmacy.contact}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pharmacy;
