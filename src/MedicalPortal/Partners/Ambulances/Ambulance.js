import React from "react";
import Logo from "../../../Assets/Img/dg.png"; // Replace with your actual logo path
import ambulance1 from "../../../Assets/Medical/ambulance/ambulance1.png"; // Replace with your actual ambulance logo path
import "./Ambulance.css";

const Ambulance = () => {
    const ambulances = [
        {
            name: "Ambulance",
            logo: ambulance1,
            email: "cityambulance@example.com",
            contact: "+923045678910",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
        
        // Add more ambulance entries as needed
    ];

    return (
        <div className="ambulance-container">
            <div className="ambulance-title">
                <h1>Belike Edu.Software</h1>
                <img src={Logo} alt="Belike Edu. Logo" />
            </div>
            <h3 className="ambulance-text-center ambulance-fw-bold ambulance-text-xl ambulance-mt-6">Our Partner Ambulances</h3>
            <div className="ambulance-partner-ambulances">
                {ambulances.map((ambulance, index) => (
                    <div key={index} className="ambulance-card-container" onClick={() => window.open(ambulance.location, "_blank")}>
                        <div className="ambulance-card">
                            <div className="ambulance-card-face ambulance-card-front">
                                <img src={ambulance.logo} alt={ambulance.name} />
                                <h1>{ambulance.name}</h1>
                            </div>
                            <div className="ambulance-card-face ambulance-card-back">
                                <p>{ambulance.email}</p>
                                <p>{ambulance.contact}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ambulance;
