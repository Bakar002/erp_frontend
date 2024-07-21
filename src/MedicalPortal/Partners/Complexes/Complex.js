import React from "react";
import Logo from "../../../Assets/Img/dg.png";
import complex1 from "../../../Assets/Medical/complex/complex1.png";

const Complex = () => {
    const complexes = [
        {
            id: 1, // Unique identifier
            name: "Complex One",
            logo: complex1,
            email: "complexone@example.com",
            contact: "+923045678930",
            location: "https://maps.google.com/?q=31.473951,74.241264",
        },
        {
            id: 2, // Unique identifier
            name: "Complex Two",
            logo: complex1,
            email: "complextwo@example.com",
            contact: "+923045678931",
            location: "https://maps.google.com/?q=31.473952,74.241265",
        },
        
        // Add more complex entries as needed
    ];

    return (
        <div className="max-w-screen-xl mx-auto p-5 box-border">
            <div className="flex items-center justify-center gap-2.5 mb-8">
                <h1 className="text-2xl font-bold">Belike Edu. Software</h1>
                <img src={Logo} alt="Belike Edu. Logo" className="h-16 w-16" />
            </div>
            <h3 className="text-center font-bold text-xl mb-8">Our Partner Complexes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {complexes.map((complex) => (
                    <div key={complex.id} className="flex flex-col md:flex-row items-center justify-center bg-white shadow-lg rounded-lg overflow-hidden p-4 transition-transform transform hover:scale-105">
                        <div className="flex items-center justify-center w-full md:w-1/2 p-4 md:p-10">
                            <img
                                src={complex.logo}
                                alt={`${complex.name} Logo`}
                                className="w-40 h-40 object-cover rounded-full border bg-white border-black"
                            />
                            <h1 className="ml-4 text-xl font-semibold text-black">{complex.name}</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4">
                            <p className="text-lg text-black">{complex.email}</p>
                            <p className="text-lg text-black">{complex.contact}</p>
                            <button
                                className="mt-4 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition duration-200 ease-in-out"
                                onClick={() => window.open(complex.location, "_blank")}
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

export default Complex;
