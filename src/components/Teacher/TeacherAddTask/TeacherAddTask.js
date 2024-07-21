import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

export const TeacherAddTask = () => {
  const [tasks, setTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [grades, setGrades] = useState([]);
  const [formData, setFormData] = useState({
    teacherName: '',
    course: '',
    grade: '',
    description: '',
    image: null,
    time: ''
  });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const fetchAllGrades = async () => {
      try {
        const response = await axios.get("https://belikeerp-3.onrender.com/api/v1/admin/load-all-grades");
        setGrades(response.data.grades);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };

    const fetchAllCourses = async () => {
      try {
        const response = await axios.get("https://belikeerp-3.onrender.com/api/v1/admin/load-all-courses");
        setCourses(response.data.courses);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };

    const fetchAllTasks = async () => {
      try {
        const response = await axios.get("https://belikeerp-3.onrender.com/api/v1/teacher/tasks");
        setTasks(response.data.tasks);
      } catch (error) {
        console.error('Error fetching tasks:', error.response.data.message);
      }
    };

    fetchAllGrades();
    fetchAllCourses();
    fetchAllTasks();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };

  const handleSubmit = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append('teacherName', formData.teacherName);
    formDataToSend.append('course', formData.course);
    formDataToSend.append('grade', formData.grade);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('time', formData.time);
    if (formData.image) {
      formDataToSend.append('image', formData.image);
    }

    try {
      const response = await axios.post('https://belikeerp-3.onrender.com/api/v1/teacher/tasks', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (editIndex !== null) {
        const updatedTasks = tasks.map((task, index) => 
          index === editIndex ? response.data.task : task
        );
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, response.data.task]);
      }
      setFormData({
        teacherName: '',
        course: '',
        grade: '',
        description: '',
        image: null,
        time: ''
      });
      setModalOpen(false);
    } catch (error) {
      console.error('Error submitting task:', error.response.data.message);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`https://belikeerp-3.onrender.com/api/v1/teacher/tasks/${taskId}`);
      setTasks(tasks.filter(task => task._id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error.response.data.message);
    }
  };

  const handleEdit = (index) => {
    setFormData({
      ...tasks[index],
      image: null
    });
    setEditIndex(index);
    setModalOpen(true);
  };

  return (
    <div className="p-6 bg-dark-blue min-h-screen text-black">
      <button
        className="bg-green-500 text-black py-2 px-4 rounded hover:bg-green-600"
        onClick={() => setModalOpen(true)}
      >
        Add Task
      </button>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded shadow-lg w-1/2 text-black">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-black mb-1">Teacher Name</label>
                <input
                  type="text"
                  name="teacherName"
                  value={formData.teacherName}
                  onChange={handleChange}
                  className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-black mb-1">Select Course</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full p-3 text-black border rounded focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select a course</option>
                  {courses.map((course) => (
                    <option key={course._id} value={course._id}>
                      {course.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-black mb-1">Select Grade</label>
                <select
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  className="w-full p-3 border text-black rounded focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select a grade</option>
                  {grades.map((grade) => (
                    <option key={grade._id} value={grade._id}>
                      {grade.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-black mb-1">Time to Remove</label>
                <input
                  type="datetime-local"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full p-3 border text-black rounded focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-black mb-1">Task Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 border text-black rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black mb-1">Task Image</label>
              <input
                type="file"
                name="image"
                onChange={handleImageChange}
                className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-gray-500 text-black py-2 px-4 rounded mr-2 hover:bg-gray-600"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-black py-2 px-4 rounded hover:bg-blue-600"
                onClick={handleSubmit}
              >
                {editIndex !== null ? 'Update' : 'Add'} Task
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6">
        {tasks.map((task, index) => (
          <div key={index} className="p-4 border rounded mb-4 bg-white shadow-md text-black">
            <h3 className="font-bold">Teacher: {task.teacherName}</h3>
            <h3 className="font-bold">Course: {task.course}</h3>
            <p>Grade: {task.grade}</p>
            <p>Description: {task.description}</p>
            {task.image && (
              <img
                src={task.image}
                alt="Task"
                className="w-30 h-30 object-cover mb-4"
              />
            )}
            <p>Time to Remove: {task.time}</p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-yellow-500 text-black py-1 px-3 rounded mr-2 hover:bg-yellow-600"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-black py-1 px-3 rounded hover:bg-red-600"
                onClick={() => handleDelete(task._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
