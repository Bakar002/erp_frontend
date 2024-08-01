import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import ThreeDotLoader from "../../../components/Loaders/ThreeDotLoader";
import {
  handleShowFailureToast,
  handleShowSuccessToast,
} from "../../../components/ToastMessages/ToastMessage";

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

    const fetchTeachers = async () => {
      try {
        const response = await axios.get("https://belikeerp-3.onrender.com/api/v1/admin/load-all-teachers");
        setTeachers(response.data.teachers || []);
      } catch (error) {
        console.log("API Error:", error?.response?.data?.message);
      }
    };

    fetchGradesAndCourses();
    fetchTeachers();
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
            <input type="text" id="idCardNumber" {...register("idCardNumber", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {errors.idCardNumber && <p className="text-red-500 text-xs mt-1">ID Card Number is required</p>}
          </div>
          <div>
            <label htmlFor="gradeId" className="leading-7 text-sm text-gray-600">Grade</label>
            <select id="gradeId" {...register("gradeId", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              <option value="">Select Grade</option>
              {grades.length > 0 ? grades.map((grade) => (
                <option key={grade._id} value={grade._id}>{grade.name}</option>
              )) : <option disabled>No Grades Available</option>}
            </select>
            {errors.gradeId && <p className="text-red-500 text-xs mt-1">Grade is required</p>}
          </div>
          <div>
            <label htmlFor="courseIds" className="leading-7 text-sm text-gray-600">Courses</label>
            <select id="courseIds" {...register("courseIds", { required: true })} multiple className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              {courses.length > 0 ? courses.map((course) => (
                <option key={course._id} value={course._id}>{course.name}</option>
              )) : <option disabled>No Courses Available</option>}
            </select>
            {errors.courseIds && <p className="text-red-500 text-xs mt-1">Courses are required</p>}
          </div>
          <div className="flex justify-center sm:col-span-2">
            {loading ? (
              <ThreeDotLoader />
            ) : (
              <button type="submit" className="bg-[#033e71] text-white p-2 rounded">Submit</button>
            )}
          </div>
        </form>
      </Modal>
      <h2 className="text-2xl font-bold mb-4">Teachers List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Grade</th>
              <th className="py-2 px-4 border-b">Courses</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.length > 0 ? teachers.map((teacher) => (
              <tr key={teacher._id}>
                <td className="py-2 px-4 border-b">{teacher.name || ''}</td>
                <td className="py-2 px-4 border-b">{teacher.email || ''}</td>
                <td className="py-2 px-4 border-b">{grades.find(grade => grade._id === teacher.gradeId)?.name || 'N/A'}</td>
                <td className="py-2 px-4 border-b">
                  {teacher.courseIds?.map(courseId => {
                    const course = courses.find(c => c._id === courseId);
                    return course ? course.name : 'N/A';
                  }).join(", ") || 'N/A'}
                </td>
                <td className="py-2 px-4 border-b">
                  <button onClick={() => handleUpdate(teacher._id)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Update</button>
                  <button onClick={() => handleDelete(teacher._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                </td>
              </tr>
            )) : (
              <tr>
                <td className="py-2 px-4 border-b text-center" colSpan="5">No teachers available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAddTeacher;
