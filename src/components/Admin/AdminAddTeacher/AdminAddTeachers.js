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
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
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
  const [idCardCopy, setIdCardCopy] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedGrades, setSelectedGrades] = useState([]);

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
        console.log(response.data.teachers);
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
      const formData = new FormData();
      for (const key in data) {
        if (data[key]) {
          formData.append(key, data[key]);
        }
      }
      if (idCardCopy) {
        formData.append("teacherIdCardCopy", idCardCopy);
      }
      if (avatar) {
        formData.append("teacherAvatar", avatar);
      }
      formData.append("teacherCourses", JSON.stringify(selectedCourses));
      formData.append("teacherGrades", JSON.stringify(selectedGrades));

      const response = await axios.post("https://belikeerp-3.onrender.com/api/v1/admin/add-teacher", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
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

  const handleCourseChange = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedCourses(value);
  };

  const handleGradeChange = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedGrades(value);
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
            <label htmlFor="teacherName" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="teacherName" {...register("teacherName", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {errors.teacherName && <p className="text-red-500 text-xs mt-1">Name is required</p>}
          </div>
          <div>
            <label htmlFor="teacherEmail" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="teacherEmail" {...register("teacherEmail", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {errors.teacherEmail && <p className="text-red-500 text-xs mt-1">Email is required</p>}
          </div>
          <div>
            <label htmlFor="teacherPassword" className="leading-7 text-sm text-gray-600">Password</label>
            <input type="password" id="teacherPassword" {...register("teacherPassword", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {errors.teacherPassword && <p className="text-red-500 text-xs mt-1">Password is required</p>}
          </div>
          <div>
            <label htmlFor="teacherSalary" className="leading-7 text-sm text-gray-600">Salary</label>
            <input type="number" id="teacherSalary" {...register("teacherSalary")} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div>
            <label htmlFor="teacherIdCardNumber" className="leading-7 text-sm text-gray-600">ID Card Number</label>
            <input type="text" id="teacherIdCardNumber" {...register("teacherIdCardNumber", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {errors.teacherIdCardNumber && <p className="text-red-500 text-xs mt-1">ID Card Number is required</p>}
          </div>
          <div>
            <label htmlFor="teacherIdCardCopy" className="leading-7 text-sm text-gray-600">ID Card Copy</label>
            <input type="file" id="teacherIdCardCopy" onChange={(e) => setIdCardCopy(e.target.files[0])} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div>
            <label htmlFor="teacherAvatar" className="leading-7 text-sm text-gray-600">Avatar</label>
            <input type="file" id="teacherAvatar" onChange={(e) => setAvatar(e.target.files[0])} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="teacherCourses" className="leading-7 text-sm text-gray-600">Courses</label>
            <select multiple id="teacherCourses" {...register("teacherCourses")} onChange={handleCourseChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              {courses.map((course) => (
                <option key={course._id} value={course._id}>
                  {course.courseName}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="teacherGrades" className="leading-7 text-sm text-gray-600">Grades</label>
            <select multiple id="teacherGrades" {...register("teacherGrades")} onChange={handleGradeChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              {grades.map((grade) => (
                <option key={grade._id} value={grade._id}>
                  {grade.gradeName}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="teacherGradeIncharge" className="leading-7 text-sm text-gray-600">Grade In-Charge</label>
            <select id="teacherGradeIncharge" {...register("teacherGradeIncharge")} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              <option value="">Select Grade</option>
              {grades.map((grade) => (
                <option key={grade._id} value={grade._id}>
                  {grade.gradeName}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <button type="submit" className="w-full bg-[#033e71] text-white p-2 rounded">
              {loading ? <ThreeDotLoader /> : "Add Teacher"}
            </button>
          </div>
        </form>
      </Modal>

      {/* Teachers Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/3 py-2">Name</th>
              <th className="w-1/3 py-2">Email</th>
              <th className="w-1/3 py-2">ID Card Number</th>
              <th className="w-1/3 py-2">Salary</th>
              <th className="w-1/3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {teachers.map((teacher) => (
              <tr key={teacher._id}>
                <td className="py-2 px-4 border">{teacher.teacherName}</td>
                <td className="py-2 px-4 border">{teacher.teacherEmail}</td>
                <td className="py-2 px-4 border">{teacher.teacherIdCardNumber}</td>
                <td className="py-2 px-4 border">{teacher.teacherSalary}</td>
                <td className="py-2 px-4 border flex justify-around">
                  <button
                    onClick={() => handleUpdate(teacher._id, {/* updated data here */ })}
                    className="bg-blue-500 text-white p-1 rounded"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(teacher._id)}
                    className="bg-red-500 text-white p-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
