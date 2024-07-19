import React from "react";
import Logo from "../../../Assets/Img/dg.png"; // Replace with your actual logo path
import complex1 from "../../../Assets/Medical/complex/complex1.png"; // Replace with your actual medical complex logo path
import "./Complex.css";

const Complex = () => {
    const complexes = [
        {
            name: "Complex One",
            logo: complex1,
            email: "complexone@example.com",
            contact: "+923045678930",
            location: "https://maps.google.com/?q=31.473951,74.241264", // Replace with actual location link
        },
       
        {
            name: "Complex One",
            logo: complex1,
            email: "complexone@example.com",
            contact: "+923045678930",
            location: "https://maps.google.com/?q=31.473951,74.241264", // Replace with actual location link
        },
       
        
        // Add more complex entries as needed
    ];

    return (
        <div className="complex-container">
            <div className="complex-title">
                <h1>Belike Edu. Medical Complex</h1>
                <img src={Logo} alt="Belike Edu. Logo" />
            </div>
            <h3 className="complex-text-center complex-fw-bold complex-text-xl complex-mt-6">Our Partner Medical Complexes</h3>
            <div className="complex-partner-complexes">
                {complexes.map((complex, index) => (
                    <div key={index} className="complex-card-container" onClick={() => window.open(complex.location, "_blank")}>
                        <div className="complex-card">
                            <div className="complex-card-face complex-card-front">
                                <img src={complex.logo} alt={complex.name} />
                                <h1>{complex.name}</h1>
                            </div>
                            <div className="complex-card-face complex-card-back">
                                <p>{complex.email}</p>
                                <p>{complex.contact}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Complex;
