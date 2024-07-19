import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'; // Import icons

const DoctorList = () => {
    const doctors = {
        "Our Doctors": [
            {
                name: "Dr. Ali",
                specialty: "Gynecologist, Obstetrician",
                qualifications: "MBBS, MCPS (Gynecology and Obstetrician)",
                experience: 5,
                satisfiedPatients: "100% (101)",
                image: "https://avatars.mds.yandex.net/i?id=260403c653728ea0f4d404e48015c06cbfe86aaa60050716-9678500-images-thumbs&n=13",
                onlineConsultation: true,
                onlineStatus: "Online -- PMC verified",
                discountAvailable: true,
                discountPercentage: 50
            },
            {
                name: "Dr. Sarah",
                specialty: "Pediatrician",
                qualifications: "MBBS, MCPS (Gynecology and Obstetrician)",
                experience: 8,
                satisfiedPatients: "95% (76)",
                image: "https://randomuser.me/api/portraits/women/11.jpg",
                onlineConsultation: true,
                onlineStatus: "Online -- PMC verified ",
                discountAvailable: true,
                discountPercentage: 50
            },
            {
                name: "Dr. Ahmed",
                specialty: "Cardiologist",
                qualifications: "MBBS, FCPS (Cardiology)",
                experience: 12,
                satisfiedPatients: "98% (123)",
                image: "https://randomuser.me/api/portraits/men/1.jpg",
                onlineConsultation: true,
                onlineStatus: "Online -- PMC verified",
                discountAvailable: true,
                discountPercentage: 40
            },
            {
                name: "Dr. Fatima",
                specialty: "Dermatologist",
                qualifications: "MBBS, MD (Dermatology)",
                experience: 10,
                satisfiedPatients: "99% (87)",
                image: "https://randomuser.me/api/portraits/women/22.jpg",
                onlineConsultation: true,
                onlineStatus: "Online -- PMC verified",
                discountAvailable: true,
                discountPercentage: 30
            },
            {
                name: "Dr. Hassan",
                specialty: "Orthopedic Surgeon",
                qualifications: "MBBS, FCPS (Orthopedics)",
                experience: 15,
                satisfiedPatients: "97% (65)",
                image: "https://randomuser.me/api/portraits/men/3.jpg",
                onlineConsultation: true,
                onlineStatus: "Online -- PMC verified",
                discountAvailable: false,
                discountPercentage: 0
            },
            {
                name: "Dr. Ayesha",
                specialty: "ENT Specialist",
                qualifications: "MBBS, MS (ENT)",
                experience: 7,
                satisfiedPatients: "94% (112)",
                image: "https://randomuser.me/api/portraits/women/33.jpg",
                onlineConsultation: true,
                onlineStatus: "Online -- PMC verified",
                discountAvailable: false,
                discountPercentage: 0
            },
            {
                name: "Dr. Bilal",
                specialty: "Neurologist",
                qualifications: "MBBS, PhD (Neurology)",
                experience: 18,
                satisfiedPatients: "96% (54)",
                image: "https://randomuser.me/api/portraits/men/5.jpg",
                onlineConsultation: true,
                onlineStatus: "Online -- PMC verified",
                discountAvailable: true,
                discountPercentage: 20
            }
        ]
    };

    return (
        <div className="flex flex-wrap justify-center">
            {doctors["Our Doctors"].map((doctor, index) => (
                <div key={index} className="relative bg-white shadow-md rounded-lg overflow-hidden w-full max-w-screen-lg mx-auto m-4">
                    <div className="absolute top-0 right-0 bg-blue-600 text-white px-2 py-1 rounded-tl-lg">
                        <p className="text-xs font-semibold">Online Status: {doctor.onlineStatus}</p>
                    </div>
                    <div className="p-4 mr-4 ">
                        <div className="flex items-center pr-5">
                            <div className="rounded-full overflow-hidden h-32 w-32 flex-shrink-0 pr-4 m-4">
                                <img className="" src={doctor.image} alt="Doctor's Profile" />
                            </div>
                            <div className="ml-4">
                                <h1 className="text-2xl font-bold text-black">{doctor.name}</h1>
                                <p className="text-black font-semibold">{doctor.specialty}</p>
                                <p className="text-lg text-gray-500">{doctor.qualifications}</p>
                            </div>
                            <div className="m-4 p-8 border border-gray-600  rounded-lg bg-gray-500">
                                {doctor.onlineConsultation && (
                                    <div className="text-black font-semibold m-2 bg-blue-300 border rounded-lg p-3">
                                        <FontAwesomeIcon icon={faVideo} />
                                        <span className="ml-2">Online Video Consultation</span>
                                    </div>
                                )}
                                {doctor.discountAvailable && (
                                    <div className="text-black font-semibold border bg-blue-500 p-3 rounded-md">
                                        <span>Pay Online, Get {doctor.discountPercentage}% Off</span>
                                    </div>
                                )}
                            </div>

                        </div>
                        <div className="mt-4">
                            <div className="flex gap-4 px-4 text-bold text-black">
                                <div>
                                    <p>Experience</p>
                                    <p>{doctor.experience} Years</p>
                                </div>
                                <div>
                                    <p>Satisfied Patients</p>
                                    <p>{doctor.satisfiedPatients}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue-600 p-3 flex justify-center  gap-5">
                        <button className="text-white font-semibold flex items-center">
                            <FontAwesomeIcon icon={faCalendarAlt} />

                            <a href='/appointment-forms'>Book Appointment</a>
                        </button>

                        <button className="text-blue-600 font-semibold flex items-center">
                            <FontAwesomeIcon icon={faVideo} />
                            <span className="ml-2">Video Consultation</span>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DoctorList;
