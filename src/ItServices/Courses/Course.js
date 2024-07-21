import React from "react";
import Logo from "../../Assets/Img/dg.png";
import c1 from "../../Assets/IT/course/c11.jpg";
import c2 from "../../Assets/IT/course/c2.jpg";
import c3 from "../../Assets/IT/course/c3.png";
import c4 from "../../Assets/IT/course/c4.png";
import c5 from "../../Assets/IT/course/c5.jpg";
import c6 from "../../Assets/IT/course/c6.jpg";
import c7 from "../../Assets/IT/course/c7.png";
import c8 from "../../Assets/IT/course/c8.jpg";
import c9 from "../../Assets/IT/course/c9.png";
import c12 from "../../Assets/IT/course/c12.jpg";
import c13 from "../../Assets/IT/course/c13.png";
import c14 from "../../Assets/IT/course/c14.jpg";
import c15 from "../../Assets/IT/course/c15.webp";
import c16 from "../../Assets/IT/course/c16.png";
import c17 from "../../Assets/IT/course/c17.jpg";
import c18 from "../../Assets/IT/course/c18.jpg";
import c19 from "../../Assets/IT/course/c19.jpg";
import c20 from "../../Assets/IT/course/c20.jpg";
import c21 from "../../Assets/IT/course/c21.webp";
import c22 from "../../Assets/IT/course/c22.webp";
import c23 from "../../Assets/IT/course/c23.webp";
const Course = () => {
    const courses = [
        {
            name: "Digital Marketing",
            img: c1,
            videoUrl: "https://www.youtube.com/",
            free: "Free: 2 Month Course (1000 Registration only 1-Month Internship)",
            cost: [
                "4 Month Course (Fee: 20000) (Two Months Internship)",
                "6 Month Course (Fee Rs: 40000) (3 Month Internship)"
            ]
        },
        {
            name: "SMM",
            img: c2,
            videoUrl: "https://www.youtube.com/",
            free: "Free: 2 Month Course (1000 Registration only 1-Month Internship)",
            cost: [
                "4 Month Course (Fee: 20000) (Two Months Internship)",
                "6 Month Course (Fee Rs: 40000) (3 Month Internship)"
            ]
        },
        {
            name: "SEO",
            img: c3,
            videoUrl: "https://www.youtube.com/",
            free: "Free: 2 Month Course (1000 Registration only 1-Month Internship)",
            cost: [
                "4 Month Course (Fee: 20000) (Two Months Internship)",
                "6 Month Course (Fee Rs: 40000) (3 Month Internship)"
            ]
        },
        {
            name: "Belonging",
            img: c4,
            videoUrl: "https://www.example.com/video1",
            free: "Free: 1 Month Course (500 Registration only 1-Month Internship)",
            free: "Free: 2 Month Course (1000 Registration only 1-Month Internship)",
            cost: [
                "4 Month Course (Fee: 20000) (Two Months Internship)",
                "6 Month Course (Fee Rs: 40000) (3 Month Internship)"
            ]
        },
        {
            name: "Freelancing",
            img: c5,
            videoUrl: "https://www.example.com/video2",
            free: "Free: 2 Month Course (1000 Registration only 1-Month Internship)",
            cost: [
                "4 Month Course (Fee: 20000) (Two Months Internship)",
                "6 Month Course (Fee Rs: 40000) (3 Month Internship)"
            ]
        },
        {
            name: "Web Development",
            img: c6,
            videoUrl: "https://www.example.com/video3",
            free: "Free: 2 Month Course (1000 Registration only 1-Month Internship)",
            cost: [
                "4 Month Course (Fee: 20000) (Two Months Internship)",
                "6 Month Course (Fee Rs: 40000) (3 Month Internship)"
            ]
        },
        {
            name: "Front End",
            img: c7,
            videoUrl: "https://www.example.com/video4",
            free: "Free: 2 Month Course (1000 Registration only 1-Month Internship)",
            cost: [
                "4 Month Course (Fee: 20000) (Two Months Internship)",
                "6 Month Course (Fee Rs: 40000) (3 Month Internship)"
            ]
        },
        {
            name: "Backend",
            img: c8,
            videoUrl: "https://www.example.com/video5",
            free: "Free: 2 Month Course (1000 Registration only 1-Month Internship)",
            cost: [
                "4 Month Course (Fee: 20000) (Two Months Internship)",
                "6 Month Course (Fee Rs: 40000) (3 Month Internship)"
            ]
        },
        {
            name: "Graphics Designing",
            img: c9,
            videoUrl: "https://www.example.com/video8",
            free: "Free: 2 Month Course (1000 Registration only 1-Month Internship)",
            cost: [
                "4 Month Course (Fee: 20000) (Two Months Internship)",
                "6 Month Course (Fee Rs: 40000) (3 Month Internship)"
            ]
        },
        {
            name: "Video Editing",
            img: c12,
            videoUrl: "https://www.example.com/video9",
            free: "Free: 2 Month Course (1000 Registration only 1-Month Internship)",
            cost: [
                "4 Month Course (Fee: 20000) (Two Months Internship)",
                "6 Month Course (Fee Rs: 40000) (3 Month Internship)"
            ]
        },
        {
            name: "Fashion Designing",
            img: c13,
            videoUrl: "https://www.example.com/video10",
            free: "Free: 2 Month Course (1000 Registration only 1-Month Internship)",
            cost: [
                "4 Month Course (Fee: 20000) (Two Months Internship)",
                "6 Month Course (Fee Rs: 40000) (3 Month Internship)"
            ]
        },
        {
            name: "Artificial Intelligence",
            img: c14,
            videoUrl: "https://www.example.com/video11",
            free: "Free: 2 Month Course (1000 Registration only 1-Month Internship)",
            cost: [
                "4 Month Course (Fee: 20000) (Two Months Internship)",
                "6 Month Course (Fee Rs: 40000) (3 Month Internship)"
            ]
        },
        {
            name: "E-commerce",
            img: c15,
            videoUrl: "https://www.example.com/video12",
            free: "Free: 2 Month Course (1000 Registration only 1-Month Internship)",
            cost: [
                "4 Month Course (Fee: 20000) (Two Months Internship)",
                "6 Month Course (Fee Rs: 40000) (3 Month Internship)"
            ]
        },
        {
            name: "Amazon, eBay, Daraz, Shopify",
            img: c16,
            videoUrl: "https://www.example.com/video13",
            free: "Free: 2 Month Course (1000 Registration only 1-Month Internship)",
            cost: [
                "4 Month Course (Fee: 20000) (Two Months Internship)",
                "6 Month Course (Fee Rs: 40000) (3 Month Internship)"
            ]
        },
        {
            name: "Guest Posting",
            img: c17,
            videoUrl: "https://www.example.com/video14",
            free: "Free: 2 Month Course (1000 Registration only 1-Month Internship)",
            cost: [
                "4 Month Course (Fee: 20000) (Two Months Internship)",
                "6 Month Course (Fee Rs: 40000) (3 Month Internship)"
            ]
        },
        {
            name: "Spoken English",
            img: c18,
            videoUrl: "https://www.example.com/video15",
            free: "Free: 2 Month Course (1000 Registration only 1-Month Internship)",
            cost: [
                "4 Month Course (Fee: 20000) (Two Months Internship)",
                "6 Month Course (Fee Rs: 40000) (3 Month Internship)"
            ]
        },
        {
            name: "PTE",
            img: c19,
            videoUrl: "https://www.example.com/video16",
            free: "Free: 2 Month Course (1000 Registration only 1-Month Internship)",
            cost: [
                "4 Month Course (Fee: 20000) (Two Months Internship)",
                "6 Month Course (Fee Rs: 40000) (3 Month Internship)"
            ]
        },
        {
            name: "IELTS",
            img: c20,
            videoUrl: "https://www.example.com/video17",
            free: "Free: 2 Month Course (1000 Registration only 1-Month Internship)",
            cost: [
                "4 Month Course (Fee: 20000) (Two Months Internship)",
                "6 Month Course (Fee Rs: 40000) (3 Month Internship)"
            ]
        }

        // Add other courses here...
    ];

    // Array of colors for the cards
    const colors = [
        'bg-blue-300', 
        'bg-green-300', 
        'bg-yellow-300', 
        'bg-red-300', 
        'bg-gray-400',
    
        // Add more colors if needed
    ];

    const handleVideoClick = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div className="max-w-7xl mx-auto p-5 box-border">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
                <img src={Logo} alt="Belike Edu. Logo" className="h-16 w-16" />
                <h1 className="text-2xl font-bold text-center md:text-left">Belike Edu. Software</h1>
            </div>
            <h1 className="text-center font-bold text-xl mt-6">IT Courses</h1>
            <div className="flex flex-wrap justify-center gap-5 mt-8">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className={`flex flex-col w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 gap-4 p-5 border rounded-lg shadow-lg ${colors[index % colors.length]} cursor-pointer`}
                        onClick={() => handleVideoClick(course.videoUrl)}
                    >
                        {/* Left Side - Course Details */}
                        <div className="flex-1">
                            <h1 className="text-2xl font-semibold text-black">{course.name}</h1>
                            <p className="text-xl text-gray-700 mt-2">{course.free}</p>
                            <div className="mt-4">
                                {course.cost.map((costDetail, i) => (
                                    <p key={i} className="text-xl text-black">{costDetail}</p>
                                ))}
                            </div>
                        </div>
                        {/* Right Side - Course Image */}
                        <div className="flex-none w-full">
                            <img src={course.img} alt={course.name} className="w-full h-auto object-cover rounded-lg" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Course;
