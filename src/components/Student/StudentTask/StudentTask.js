import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import img from "../../../Assets/Img/afaq.jpeg"
export const StudentTask = () => {
  const [tasks, setTasks] = useState([
    {
      teacherName: 'John Doe',
      course: 'Mathematics',
      grade: '10th Grade',
      description: 'Solve exercises from Chapter 5.',
      image:img,
      time: '2024-08-15T14:00:00',
    },
    {
      teacherName: 'Jane Smith',
      course: 'Science',
      grade: '9th Grade',
      description: 'Complete the lab report on chemical reactions.',
      image: 'https://via.placeholder.com/150',
      time: '2024-08-16T10:00:00',
    },
    {
      teacherName: 'Alice Johnson',
      course: 'History',
      grade: '10th Grade',
      description: 'Read and summarize Chapter 7.',
      image: null,
      time: '2024-08-17T12:00:00',
    },
    {
      teacherName: 'Bob Brown',
      course: 'English',
      grade: '11th Grade',
      description: 'Write an essay on modern literature.',
      image: 'https://via.placeholder.com/150',
      time: '2024-08-18T16:00:00',
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="p-6 bg-light-blue min-h-screen">
      <h1 className="text-2xl font-bold text-center text-dark-blue mb-6">Assigned Tasks</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-black">Teacher: <span className='text-blue-700'>{task.teacherName}</span></h3>
              <h4 className="text-md font-medium mb-2 text-black">Course: <span className='text-blue-700'>{task.course}</span></h4>
              <p className="text-sm mb-2 text-black">Grade: <span className='text-blue-700'>{task.grade}</span></p>
              <p className="text-sm mb-4 text-black">{task.description}</p>
              {task.image && (
                <img
                  src={task.image}
                  alt="Task"
                  className="w-full h-40 object-cover rounded-lg mb-4 cursor-pointer"
                  onClick={() => handleImageClick(task.image)}
                />
              )}
              <p className="text-sm font-light text-red-500">Time to Remove: {new Date(task.time).toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-1 md:col-span-2 lg:col-span-3 text-gray-500">No tasks assigned yet.</p>
        )}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative p-4 max-w-xl w-full">
            <button
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2 hover:bg-red-600 focus:outline-none"
              onClick={closeModal}
            >
              &times;
            </button>
            <img src={selectedImage} alt="Full view" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};
