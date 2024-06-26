import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/Img/dg.png"; // Replace with your actual logo path
import clientseo1 from "../../Assets/clients/seo/clientseo1.jpeg"; // Replace with your actual client logo path
import schoolportallogo2 from "../../Assets/Img/s2.jpg"; // Replace with your actual client logo path
import schoolportallogo3 from "../../Assets/Img/s3.jpg"; // Replace with your actual client logo path
import schoolportallogo4 from "../../Assets/Img/s4.jpg"; // Replace with your actual client logo path
import schoolportallogo5 from "../../Assets/Img/s5.jpg"; // Replace with your actual client logo path
import schoolportallogo6 from "../../Assets/Img/afaq.jpeg"; // Replace with your actual client logo path

const clients = [
  {
    name: "K2 Spice",
    logo: clientseo1,
    service: "SEO Optimization",
    category: "SEO",
    review: "Excellent service with noticeable improvement in our SEO ranking.",
    rating: 4,
  },

  // Add more clients as needed
];

const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, index) => (
    <span key={index}>
      {index < rating ? "★" : "☆"}
    </span>
  ));
};

const categorizedClients = clients.reduce((acc, client) => {
  if (!acc[client.category]) acc[client.category] = [];
  acc[client.category].push(client);
  return acc;
}, {});

const SchoolBlock2 = () => {
  return (
    <div className="container pt-3 mx-auto">
      <div className="text-center d-flex justify-content-center items-center">
        <h1 className="text-center text-3xl font-bold">Our Clients & Reviews</h1>
        <img
          alt="Company Logo"
          className="ms-lg-2 logo ml-3"
          src={Logo}
          style={{
            height: "70px",
            width: "70px",
          }}
        />
      </div>
      {Object.keys(categorizedClients).map((category) => (
        <div key={category} className="mt-10">
          <h2 className="text-center text-2xl font-bold">{category}</h2>
          <div className="row flex justify-center gap-4 flex-wrap mt-4">
            {categorizedClients[category].map((client, index) => (
              <div
                key={index}
                className="bg-white h-auto overflow-hidden flex flex-col justify-center items-center gap-2 cursor-pointer rounded shadow-lg p-4 transform hover:scale-105 transition-transform duration-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-30 h-30 object-contain"
                />
                <h1 className="text-black text-center text-base font-semibold">{client.name}</h1>
                <p className="text-center text-sm text-black">{client.service}</p>
                <p className="text-center text-xs italic text-black">"{client.review}"</p>
                <div className="text-yellow-500">{renderStars(client.rating)}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SchoolBlock2;
