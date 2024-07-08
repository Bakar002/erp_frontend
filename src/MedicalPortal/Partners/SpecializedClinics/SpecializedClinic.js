import React from "react";
import Logo from "../../../Assets/Img/dg.png"; // Replace with your actual logo path
import clinic1 from "../../../Assets/Medical/clinic/clinic1.png"; // Replace with your actual clinic logo path
import "./SpecializedClinic.css";

const SpecializedClinic = () => {
    const clinics = [
        {
            name: "Clinic One",
            logo: clinic1,
            email: "clinicone@example.com",
            contact: "+923045678950",
            location: "https://maps.google.com/?q=31.473951,74.241280", // Replace with actual location link
        },
        {
            name: "Clinic Two",
            logo: clinic1,
            email: "clinictwo@example.com",
            contact: "+923045678951",
            location: "https://maps.google.com/?q=31.473951,74.241281", // Replace with actual location link
        },
        {
            name: "Clinic One",
            logo: clinic1,
            email: "clinicone@example.com",
            contact: "+923045678950",
            location: "https://maps.google.com/?q=31.473951,74.241280", // Replace with actual location link
        },
        {
            name: "Clinic One",
            logo: clinic1,
            email: "clinicone@example.com",
            contact: "+923045678950",
            location: "https://maps.google.com/?q=31.473951,74.241280", // Replace with actual location link
        },
        {
            name: "Clinic One",
            logo: clinic1,
            email: "clinicone@example.com",
            contact: "+923045678950",
            location: "https://maps.google.com/?q=31.473951,74.241280", // Replace with actual location link
        },
        {
            name: "Clinic One",
            logo: clinic1,
            email: "clinicone@example.com",
            contact: "+923045678950",
            location: "https://maps.google.com/?q=31.473951,74.241280", // Replace with actual location link
        },
        {
            name: "Clinic One",
            logo: clinic1,
            email: "clinicone@example.com",
            contact: "+923045678950",
            location: "https://maps.google.com/?q=31.473951,74.241280", // Replace with actual location link
        },
        {
            name: "Clinic One",
            logo: clinic1,
            email: "clinicone@example.com",
            contact: "+923045678950",
            location: "https://maps.google.com/?q=31.473951,74.241280", // Replace with actual location link
        },
        {
            name: "Clinic One",
            logo: clinic1,
            email: "clinicone@example.com",
            contact: "+923045678950",
            location: "https://maps.google.com/?q=31.473951,74.241280", // Replace with actual location link
        },
        {
            name: "Clinic One",
            logo: clinic1,
            email: "clinicone@example.com",
            contact: "+923045678950",
            location: "https://maps.google.com/?q=31.473951,74.241280", // Replace with actual location link
        },
        {
            name: "Clinic One",
            logo: clinic1,
            email: "clinicone@example.com",
            contact: "+923045678950",
            location: "https://maps.google.com/?q=31.473951,74.241280", // Replace with actual location link
        },
        {
            name: "Clinic One",
            logo: clinic1,
            email: "clinicone@example.com",
            contact: "+923045678950",
            location: "https://maps.google.com/?q=31.473951,74.241280", // Replace with actual location link
        },
        {
            name: "Clinic One",
            logo: clinic1,
            email: "clinicone@example.com",
            contact: "+923045678950",
            location: "https://maps.google.com/?q=31.473951,74.241280", // Replace with actual location link
        },
        {
            name: "Clinic One",
            logo: clinic1,
            email: "clinicone@example.com",
            contact: "+923045678950",
            location: "https://maps.google.com/?q=31.473951,74.241280", // Replace with actual location link
        },
        {
            name: "Clinic One",
            logo: clinic1,
            email: "clinicone@example.com",
            contact: "+923045678950",
            location: "https://maps.google.com/?q=31.473951,74.241280", // Replace with actual location link
        },
        
        {
            name: "Clinic One",
            logo: clinic1,
            email: "clinicone@example.com",
            contact: "+923045678950",
            location: "https://maps.google.com/?q=31.473951,74.241280", // Replace with actual location link
        },
        {
            name: "Clinic One",
            logo: clinic1,
            email: "clinicone@example.com",
            contact: "+923045678950",
            location: "https://maps.google.com/?q=31.473951,74.241280", // Replace with actual location link
        },
        {
            name: "Clinic One",
            logo: clinic1,
            email: "clinicone@example.com",
            contact: "+923045678950",
            location: "https://maps.google.com/?q=31.473951,74.241280", // Replace with actual location link
        },
        {
            name: "Clinic One",
            logo: clinic1,
            email: "clinicone@example.com",
            contact: "+923045678950",
            location: "https://maps.google.com/?q=31.473951,74.241280", // Replace with actual location link
        },
        {
            name: "Clinic One",
            logo: clinic1,
            email: "clinicone@example.com",
            contact: "+923045678950",
            location: "https://maps.google.com/?q=31.473951,74.241280", // Replace with actual location link
        },
        

        // Add more clinic entries as needed
    ];

    return (
        <div className="clinic-container">
            <div className="clinic-title">
                <h1>Belike Edu. Specialized Clinics</h1>
                <img src={Logo} alt="Belike Edu. Logo" />
            </div>
            <h3 className="clinic-text-center clinic-fw-bold clinic-text-xl clinic-mt-6">Our Partner Specialized Clinics</h3>
            <div className="clinic-partner-clinics">
                {clinics.map((clinic, index) => (
                    <div key={index} className="clinic-card-container" onClick={() => window.open(clinic.location, "_blank")}>
                        <div className="clinic-card">
                            <div className="clinic-card-face clinic-card-front">
                                <img src={clinic.logo} alt={clinic.name} />
                                <h1>{clinic.name}</h1>
                            </div>
                            <div className="clinic-card-face clinic-card-back">
                                <p>{clinic.email}</p>
                                <p>{clinic.contact}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpecializedClinic;
