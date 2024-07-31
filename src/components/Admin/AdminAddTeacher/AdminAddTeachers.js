import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import {
  handleShowFailureToast,
  handleShowSuccessToast,
} from "../../../components/ToastMessages/ToastMessage";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import ThreeDotLoader from "../../../components/Loaders/ThreeDotLoader";

// Modal styles
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '500px',
  },
};

Modal.setAppElement('#root');

export const AdminAddTeacher = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [teachers, setTeachers] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [grades, setGrades] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchGradesAndCourses = async () => {
      try {
        const [gradesResponse, coursesResponse] = await Promise.all([
          axios.get("https://belikeerp-3.onrender.com/api/v1/admin/load-all-grades"),
          axios.get("https://belikeerp-3.onrender.com/api/v1/admin/load-all-courses")
        ]);
        setGrades(gradesResponse.data.grades || []);
        setCourses(coursesResponse.data.courses || []);
      } catch (error) {
        console.log("API Error:", error?.response?.data?.message);
      }
    };
    fetchGradesAndCourses();
  }, []);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post("https://belikeerp-3.onrender.com/api/v1/admin/add-teacher", data);
      handleShowSuccessToast(response.data.message);
      setTeachers([...teachers, response.data.teacher]);
      setLoading(false);
      closeModal();
      reset();
    } catch (error) {
      handleShowFailureToast(error.response.data.message);
      setLoading(false);
    }
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const response = await axios.delete(`https://belikeerp-3.onrender.com/api/v1/admin/delete-teacher/${id}`);
      handleShowSuccessToast(response.data.message);
      setTeachers(teachers.filter(teacher => teacher._id !== id));
      setLoading(false);
    } catch (error) {
      handleShowFailureToast(error.response.data.message);
      setLoading(false);
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      setLoading(true);
      const response = await axios.put(`https://belikeerp-3.onrender.com/api/v1/admin/update-teacher/${id}`, updatedData);
      handleShowSuccessToast(response.data.message);
      const updatedTeachers = teachers.map(teacher => {
        if (teacher._id === id) {
          return { ...teacher, ...updatedData };
        }
        return teacher;
      });
      setTeachers(updatedTeachers);
      setLoading(false);
    } catch (error) {
      handleShowFailureToast(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div className="md:px-8 mt-4">
      <Toaster />
      <div className="flex justify-end mb-4">
        <button onClick={openModal} className="bg-[#033e71] text-white p-2 rounded">Add Teacher</button>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Add Teacher">
        <div className="flex justify-end">
          <button onClick={closeModal} className="bg-gray-500 text-white p-2 rounded">✕</button>
        </div>
        <h2 className="text-xl font-bold mb-4 text-center" style={{ color: '#033e71' }}>Add Teacher</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="text-gray-600 grid gap-4 grid-cols-1 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" {...register("name", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {errors.name && <p className="text-red-500 text-xs mt-1">Name is required</p>}
          </div>
          <div>
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" {...register("email", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {errors.email && <p className="text-red-500 text-xs mt-1">Email is required</p>}
          </div>
          <div>
            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
            <input type="password" id="password" {...register("password", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {errors.password && <p className="text-red-500 text-xs mt-1">Password is required</p>}
          </div>
          <div>
            <label htmlFor="image" className="leading-7 text-sm text-gray-600">Image</label>
            <input type="file" id="image" {...register("image")} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div>
            <label htmlFor="joiningDate" className="leading-7 text-sm text-gray-600">Joining Date</label>
            <input type="date" id="joiningDate" {...register("joiningDate", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {errors.joiningDate && <p className="text-red-500 text-xs mt-1">Joining Date is required</p>}
          </div>
          <div>
            <label htmlFor="idCardNumber" className="leading-7 text-sm text-gray-600">ID Card Number</label>
            <input type="text" id="idCardNumber" {...register("idCardNumber")} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div>
            <label htmlFor="grade" className="leading-7 text-sm text-gray-600">Grade</label>
            <select id="grade" {...register("grade", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              <option value="">Select Grade</option>
              {grades.map(grade => (
                <option key={grade.gradeId} value={grade.gradeId}>{grade.gradeName}</option>
              ))}
            </select>
            {errors.grade && <p className="text-red-500 text-xs mt-1">Grade is required</p>}
          </div>
          <div>
            <label htmlFor="courses" className="leading-7 text-sm text-gray-600">Courses</label>
            <select id="courses" {...register("courses", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              <option value="">Select Courses</option>
              {courses.map(course => (
                <option key={course.courseId} value={course.courseId}>{course.courseName}</option>
              ))}
            </select>
            {errors.courses && <p className="text-red-500 text-xs mt-1">Courses are required</p>}
          </div>
          <div className="col-span-1 sm:col-span-2">
            <button type="submit" className="w-full bg-[#033e71] text-white p-2 rounded">{loading ? <ThreeDotLoader /> : "Add Teacher"}</button>
          </div>
        </form>
      </Modal>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Grade</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Courses</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {teachers.map((teacher) => (
              <tr key={teacher._id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{teacher.name}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{teacher.email}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{teacher.grade.gradeName}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{teacher.courses.map(course => course.courseName).join(", ")}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <button onClick={() => handleDelete(teacher._id)} className="text-red-600 hover:text-red-900 mr-2">Delete</button>
                  <button onClick={() => handleUpdate(teacher._id, teacher)} className="text-indigo-600 hover:text-indigo-900">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


