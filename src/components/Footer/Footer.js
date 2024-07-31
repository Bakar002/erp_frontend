import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between">

        {/* Logo and Menu */}
        <div className="flex flex-col mb-4 sm:mb-0">
          <div className="mb-4 sm:mb-0">
            <img className="h-14 mx-12" src="https://www.belikegroup.org/static/media/logo.3a3cb8d082342adf9151.png" alt="Logo" />
          </div>
          <h1 className="text-1xl font-bold  mx-12 py-0 hover:text-blue-600">Menu</h1>
          <p className="mx-12 py-1">____________________________</p>
          {/* Navigation */}
          <nav className="space-y-3 mx-12">
            <a href="/" className="block  hover:text-blue-600">Home</a>
            <a href="/" className="block  hover:text-blue-600">Service</a>
            <a href="/" className="block  hover:text-blue-600">Projects</a>
            <a href="/" className="block  hover:text-blue-600">Contact Us</a>
            <a href="/" className="block  hover:text-blue-600">About Us</a>
          </nav>
        </div>

        {/* Join Section */}
        <div className="flex flex-col items-center sm:flex-row sm:items-center ml-4 ">
          <div className="text-center text-white bg-bg-inherit m-2 rounded-xl pr-12 border-2 bg-gray-900 p-4 border-gray-900">
            <h1 className=" text-1xl font-bold">JOIN OUR OF INVESTOR TODAY</h1>
            <p className="">Belike Group services involve SEO, social media  PPC<br/>advertising content marketing, and email<br/>campaigns and email campaigns..</p>
            <button className="bg-green-400 px-4 py-2 rounded-md mt-4 text-black hover:bg-white">
              <a href="/" className="hover:text-blue-400">Join Now</a>
            </button>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center mt-4">
        <a href="https://facebook.com" className=" mx-2 hover:text-blue-400">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com" className="mx-2 hover:text-blue-400">
          <FaTwitter size={24} />
        </a>
        <a href="https://instagram.com" className=" mx-2 hover:text-blue-400">
          <FaInstagram size={24} />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center text-white py-4 bg-gray-900 m-2 hover:text-blue-400">
        <button>
          <a href="/" className="hover:text-blue-400 text-green-600 text-xl">© 2024 Belike Group. All rights reserved.</a>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
