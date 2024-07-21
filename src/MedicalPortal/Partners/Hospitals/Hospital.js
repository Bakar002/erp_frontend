import React from "react";
import Logo from "../../../Assets/Img/dg.png"; // Replace with your actual logo path
import hospital1 from "../../../Assets/Medical/hospital/hospital1.png"; // Replace with your actual hospital logo path

const Hospital = () => {
    const hospitals = [
        {
            name: "City Hospital",
            logo: hospital1,
            email: "info@cityhospital.com",
            contact: "+923045678910",
            location: "https://maps.google.com/?q=31.473951,74.241249", // Replace with actual location link
        },
       
    ];

    return (
        <div className="max-w-screen-xl mx-auto p-5 box-border">
            <div className="flex items-center justify-center gap-2.5 mb-8">
                <h1 className="text-2xl font-bold">Belike Edu. Software</h1>
                <img src={Logo} alt="Belike Edu. Logo" className="h-16 w-16"/>
            </div>
            <h3 className="text-center font-bold text-xl mb-8">Our Partner Hospitals</h3>
            <div className="grid grid-cols-1 gap-5">
                {hospitals.map((hospital, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-center justify-center bg-white shadow-lg rounded-lg overflow-hidden p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="flex items-center justify-center w-full md:w-1/2 p-10">
                            <img src={hospital.logo} alt={hospital.name} className="w-40 h-40 object-contain rounded-full border border-gray-300 transform transition-transform duration-300 hover:scale-105"/>
                            <h1 className="ml-4 text-xl font-semibold text-black">{hospital.name}</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4">
                            <p className="text-lg text-black">{hospital.email}</p>
                            <p className="text-lg text-black">{hospital.contact}</p>
                            <button 
                                className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition duration-200 ease-in-out hover:shadow-lg hover:scale-105"
                                onClick={() => window.open(hospital.location, "_blank")}
                            >
                                Go to Location
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hospital;
