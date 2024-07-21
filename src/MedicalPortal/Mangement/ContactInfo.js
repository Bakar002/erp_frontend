import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        subject: '',
        message: ''
    });

    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Uncomment the following line to display a success message
        // setSuccessMessage('Form submitted successfully!');
        // Reset form
        setFormData({
            name: '',
            email: '',
            contact: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="bg-blue-500 items-center py-12">
            <h1 className="text-black text-5xl font-bold mb-8 text-center">Contact Us</h1>
            <div className="flex flex-col lg:flex-row justify-center items-start space-x-0 lg:space-x-10 space-y-10 lg:space-y-0 bg-blue-500 my-20 px-4 lg:px-0">
                <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 w-full lg:w-1/2">
                    <div className="flex flex-col lg:flex-row mb-4 space-x-0 lg:space-x-4">
                        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded-lg w-full py-4 px-3 bg-white leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded-lg w-full py-4 px-3 bg-white leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row mb-4 space-x-0 lg:space-x-4">
                        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="contact">
                                Contact
                            </label>
                            <input
                                type="text"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded-lg w-full py-4 px-3 bg-white leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your contact number"
                                required
                            />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="subject">
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded-lg w-full py-4 px-3 bg-white leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter the subject"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded-lg w-full py-10 px-3 bg-white leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your message"
                            required
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="ml-0 lg:ml-60 bg-blue-600 text-white font-bold text-xl px-4 p-3 rounded-2xl w-32 focus:outline-none focus:shadow-outline"
                        >
                            Send
                        </button>
                    </div>
                    {successMessage && <p className="text-green-500 text-xs italic mt-4">{successMessage}</p>}
                </form>
                <div className=" bg-white border rounded-xl p-6 m-80">
                    <p className="text-black text-lg font-bold">Want to reach us directly?</p>
                    <p className="text-black">Reach out to our team for support. We're here to help<br /> you with all your health needs.</p>
                    <p className="text-black pl-9">
                        <i>+92 3475800705</i>
                    </p>
                    <p className="text-black pl-9">
                        <i>belikegroup35@gmail.com</i>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
