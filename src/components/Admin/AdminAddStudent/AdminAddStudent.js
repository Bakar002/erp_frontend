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

export const AdminAddStudent = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [students, setStudents] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [grades, setGrades] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchAllGrades = async () => {
      try {
        const response = await axios.get("https://belikeerp-3.onrender.com/api/v1/admin/load-all-grades");
        setGrades(response.data.grades);

      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchAllGrades();

    const fetchAllCourses = async () => {
      try {
        const response = await axios.get("https://belikeerp-3.onrender.com/api/v1/admin/load-all-courses");
        setCourses(response.data.courses);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchAllCourses();
  }, []);




  // useEffect(() => {
  //   const fetchGradesAndCourses = async () => {
  //     try {
  //       const [gradesResponse, coursesResponse] = await Promise.all([
  //         axios.get("https://belikeerp-3.onrender.com/api/v1/admin/load-all-grades"),
  //         axios.get("https://belikeerp-3.onrender.com/api/v1/admin/load-all-courses")
  //       ]);
  //       setGrades(gradesResponse.data.grades || []);
  //       console.log(gradesResponse.data.grades)
  //       setCourses(coursesResponse.data.courses || []);
  //       console.log(gradesResponse.data.courses)

  //     } catch (error) {
  //       console.log("API Error:", error?.response?.data?.message);
  //     }
  //   };
  //   fetchGradesAndCourses();
  // }, []);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post("https://belikeerp-3.onrender.com/api/v1/admin/add-student", data);
      handleShowSuccessToast(response.data.message);
      setStudents([...students, response.data.student]);
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
      const response = await axios.delete(`https://belikeerp-3.onrender.com/api/v1/admin/delete-student/${id}`);
      handleShowSuccessToast(response.data.message);
      setStudents(students.filter(student => student._id !== id));
      setLoading(false);
    } catch (error) {
      handleShowFailureToast(error.response.data.message);
      setLoading(false);
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      setLoading(true);
      const response = await axios.put(`https://belikeerp-3.onrender.com/api/v1/admin/update-student/${id}`, updatedData);
      handleShowSuccessToast(response.data.message);
      const updatedStudents = students.map(student => {
        if (student._id === id) {
          return { ...student, ...updatedData };
        }
        return student;
      });
      setStudents(updatedStudents);
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
        <button onClick={openModal} className="bg-[#033e71] text-white p-2 rounded">Add Student</button>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Add Student">
        <div className="flex justify-end">
          <button onClick={closeModal} className="bg-gray-500 text-white p-2 rounded">✕</button>
        </div>
        <h2 className="text-xl font-bold mb-4 text-center" style={{ color: '#033e71' }}>Add Student</h2>
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
            <label htmlFor="course" className="leading-7 text-sm text-gray-600">Course</label>
            <select id="course" {...register("course", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              <option value="">Select Course</option>
              {courses.map(course => (
                <option key={course.courseId} value={course.courseId}>{course.courseName}</option>
              ))}
            </select>
            {errors.course && <p className="text-red-500 text-xs mt-1">Course is required</p>}
          </div>
          <button type="submit" className="bg-[#033e71] text-white py-2 px-4 rounded">{loading ? <ThreeDotLoader /> : 'Submit'}</button>
        </form>
      </Modal>

      <table className="w-full text-sm text-left text-gray-500 mt-8">
        <thead className="text-xs text-white uppercase bg-black">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Grade</th>
            <th className="px-6 py-3">Course</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id} className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4">{student.name}</td>
              <td className="px-6 py-4">{student.email}</td>
              <td className="px-6 py-4">{student.gradeName}</td>
              <td className="px-6 py-4">{student.courseName}</td>
              <td className="px-6 py-4 flex space-x-2">
                <button onClick={() => handleUpdate(student._id, { /* updated data */ })} className="bg-blue-500 text-white p-2 rounded">Update</button>
                <button onClick={() => handleDelete(student._id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
