import React, { useState, useEffect } from 'react';

const Project = () => {
  const projects = [
    {
        imageUrl: 'https://www.belikegroup.org/static/media/clientseo1.cb3202d392455930f887.jpeg',
        title: 'K2 Spice',
        title1: 'SEO Optimization',
        description: 'Excellent service with noticeable improvement in our SEO ranking.',
        star: '★★★★★',
        country: 'USA',
        
      },
    {
      imageUrl: 'https://www.belikegroup.org/static/media/Buzzy.c1154b90b14354866c33.png',
      title: 'Buzzy Basket',
      title1: 'Digital Marketing',
      description: '"Outstanding digital marketing services with great results',
      star: '★★★★★',
      country: 'Pakistan',
    },
    {
      imageUrl: 'https://www.belikegroup.org/static/media/health.0d983d840cf69502e6f9.jpg',
      title: 'Ah Health',
      title1: 'Digital Marketing',
      description: '"Top-notch digital marketing strategies that boosted our online presence."',
      star: '★★★★★',
      country: 'Pakistan',
    },
    {
      imageUrl: 'https://www.belikegroup.org/static/media/mystic.6048569abd386da6c86e.jpg',
      title: 'Mystic Pizza',
      title1: 'Digital Marketing',
        description: 'Remarkable digital marketing service that increased our customer base.',
        star: '★★★★★',
        country: 'Pakistan',
    },
    {
      imageUrl: 'https://www.belikegroup.org/static/media/steak.6bc041b70f2ba13a101e.jpg',
      title: 'Steak & Knife',
      title1: 'Digital Marketing',
        description: 'Impressive ROI from their digital marketing campaigns.',
        star: '★★★★★',
        country: 'Pakistan',
    },
    {
      imageUrl: 'https://www.belikegroup.org/static/media/Buzzy.c1154b90b14354866c33.png',
      title: 'Buzzy Basket',
      title1: 'Digital Marketing',
      description: 'Effective social media campaigns that increased our engagement significantly.',
      star: '★★★★★',
      country: 'Pakistan',
    },
 
   
   
  ];

  const [currentSet, setCurrentSet] = useState(0);
  const slidesPerPage = 3; // Number of slides to show per set
  const totalSets = Math.ceil(projects.length / slidesPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prevSet) => (prevSet + 1) % totalSets);
    }, 2000); // Change set every 2 seconds

    return () => clearInterval(interval);
  }, [totalSets]);

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 py-10">
      <div className="container mx-auto px-4 md:px-20">
        
        <h1 className='text-4xl font-bold text-center text-white  mb-8'>Our Projects</h1>
        <div className="flex justify-center">
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .slice(currentSet * slidesPerPage, (currentSet + 1) * slidesPerPage)
              .map((project, index) => (
                <div
                  key={index}
                  className="border-2 border-gray-200 border-opacity-60 rounded-xl overflow-hidden bg-blue-300 p-0 flex flex-col items-center"
                >
                  <img
                    className="w-60 h-60 object-cover rounded-full m-3"
                    src={project.imageUrl}
                    alt="Project Image"
                  />
                  <div className="p-6 text-center">
                    <h1 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h1>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{project.title1}</h2>
                    <p className="text-md text-black mb-1">{project.description}</p>
                    <h2 className="text-xl font-bold text-yellow-600 mb-2">{project.star}</h2>
                    <h1 className="text-xl font-semibold text-gray-900 mb-4">{project.country}</h1>
                    <a href="https://www.google.com/" className="bg-black text-white font-bold py-2 px-4 rounded-lg inline-block hover:bg-gray-800 transition duration-300">
                      Read More
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
