import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { handleShowFailureToast, handleShowSuccessToast } from "../../ToastMessages/ToastMessage";
import { Toaster } from "react-hot-toast";
import ThreeDotLoader from "../../Loaders/ThreeDotLoader";
import Modal from "react-modal";

Modal.setAppElement('#root'); // Ensure accessibility

export const AdminAddTeacher = () => {
  const [formData, setFormData] = useState({
    teacherName: "",
    teacherEmail: "",
    teacherPassword: "",
    teacherSalary: "",
    teacherIdCardNumber: "",
    teacherJobDate: "",
    teacherAvatar: null,
    teacherIdCardCopy: null,
  });

  const [courses, setCourses] = useState([]);
  const [grades, setGrades] = useState([]);
  const [selectedGrades, setSelectedGrades] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState(null);

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

    const fetchAllTeachers = async () => {
      try {
        const response = await axios.get("https://belikeerp-3.onrender.com/api/v1/admin/load-all-teachers");
        setTeachers(response.data.teachers);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchAllTeachers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSelectChange = (e) => {
    const { value, name } = e.target;
    const selectedOption = JSON.parse(value);

    if (name === "grades") {
      setSelectedGrades((prev) => [...new Set([...prev, selectedOption.gradeId])]);
    } else if (name === "courses") {
      setSelectedCourses((prev) => [...new Set([...prev, selectedOption.courseId])]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(formData).some((val) => !val) || selectedGrades.length === 0 || selectedCourses.length === 0) {
      handleShowFailureToast("Please fill all fields and select at least one grade and course!");
      return;
    }

    const { teacherAvatar, teacherIdCardCopy, teacherName, teacherEmail, teacherPassword, teacherSalary, teacherIdCardNumber, teacherJobDate } = formData;
    const data = {
      teacherName,
      teacherEmail,
      teacherPassword,
      teacherSalary,
      teacherIdCardNumber,
      teacherJobDate,
      teacherAvatar,
      teacherIdCardCopy,
      teacherGrades: selectedGrades.map((grade) => ({ gradeId: grade })),
      teacherCourses: selectedCourses.map((course) => ({ courseId: course })),
    };

    try {
      setLoading(true);
      const url = editingTeacher ? `https://belikeerp-3.onrender.com/api/v1/admin/update-teacher/${editingTeacher._id}` : "https://belikeerp-3.onrender.com/api/v1/admin/add-teacher";
      const response = await axios.post(url, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      handleShowSuccessToast(response.data.message);
      setFormData({
        teacherName: "",
        teacherEmail: "",
        teacherPassword: "",
        teacherSalary: "",
        teacherIdCardNumber: "",
        teacherJobDate: "",
        teacherAvatar: null,
        teacherIdCardCopy: null,
      });
      setSelectedGrades([]);
      setSelectedCourses([]);
      setIsModalOpen(false);
      setEditingTeacher(null);

      // Fetch updated teachers
      const teachersResponse = await axios.get("https://belikeerp-3.onrender.com/api/v1/admin/load-all-teachers");
      setTeachers(teachersResponse.data.teachers);
    } catch (error) {
      handleShowFailureToast(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  const removeSelection = (id, type) => {
    if (type === "grades") {
      setSelectedGrades((prev) => prev.filter((item) => item !== id));
    } else if (type === "courses") {
      setSelectedCourses((prev) => prev.filter((item) => item !== id));
    }
  };

  const openModal = (teacher = null) => {
    setEditingTeacher(teacher);
    setFormData({
      teacherName: teacher?.teacherName || "",
      teacherEmail: teacher?.teacherEmail || "",
      teacherPassword: teacher?.teacherPassword || "",
      teacherSalary: teacher?.teacherSalary || "",
      teacherIdCardNumber: teacher?.teacherIdCardNumber || "",
      teacherJobDate: teacher?.teacherJobDate || "",
      teacherAvatar: null,
      teacherIdCardCopy: null,
    });
    setSelectedGrades(teacher?.teacherGrades.map((g) => g.gradeId) || []);
    setSelectedCourses(teacher?.teacherCourses.map((c) => c.courseId) || []);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://belikeerp-3.onrender.com/api/v1/admin/delete-teacher/${id}`);
      handleShowSuccessToast("Teacher deleted successfully!");
      // Fetch updated teachers
      const teachersResponse = await axios.get("https://belikeerp-3.onrender.com/api/v1/admin/load-all-teachers");
      setTeachers(teachersResponse.data.teachers);
    } catch (error) {
      handleShowFailureToast(error.response?.data?.message || error.message);
    }
  };

  // Custom modal styles
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '2rem',
      borderRadius: '0.5rem',
      width: '90%',
      maxWidth: '600px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
  };

  // Custom styles for the select elements and options
  const selectStyles = {
    select: "w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#40b08c] bg-black text-white",
    option: "block w-full px-4 py-2 text-white bg-black hover:bg-gray-700",
  };

  return (
    <div className="h-auto md:px-8 mt-4">
      <Toaster />
      <button onClick={() => openModal()} className="flex mx-auto justify-center items-center text-white bg-[#40b08c] border-0 py-1 px-4 focus:outline-none hover:bg-[#75dbbb] rounded text-lg">
        Add New Teacher
      </button>

      <table className="min-w-full divide-y divide-gray-200 mt-4">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-black text-white">Name</th>
            <th className="px-6 py-3 bg-black text-white">Email</th>
            <th className="px-6 py-3 bg-black text-white">Salary</th>
            <th className="px-6 py-3 bg-black text-white">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {teachers.map((teacher) => (
            <tr key={teacher._id}>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">{teacher.teacherName}</td>
              <td className="px-6 py-4 text-sm text-gray-500">{teacher.teacherEmail}</td>
              <td className="px-6 py-4 text-sm text-gray-500">{teacher.teacherSalary}</td>
              <td className="px-6 py-4 text-sm font-medium">
                <button onClick={() => openModal(teacher)} className="text-blue-600 bg-white hover:text-blue-900">
                  Edit
                </button>
                <button onClick={() => handleDelete(teacher._id)} className="text-red-600 bg-white hover:text-red-900 ml-4">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} style={customStyles}>
        <h2 className="text-2xl mb-4">{editingTeacher ? 'Edit Teacher' : 'Add Teacher'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="teacherName"
              value={formData.teacherName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#40b08c]"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="teacherEmail"
              value={formData.teacherEmail}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#40b08c]"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="teacherPassword"
              value={formData.teacherPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#40b08c]"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Salary</label>
            <input
              type="number"
              name="teacherSalary"
              value={formData.teacherSalary}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#40b08c]"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">ID Card Number</label>
            <input
              type="text"
              name="teacherIdCardNumber"
              value={formData.teacherIdCardNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#40b08c]"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Job Date</label>
            <input
              type="date"
              name="teacherJobDate"
              value={formData.teacherJobDate}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#40b08c]"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Avatar</label>
            <input
              type="file"
              name="teacherAvatar"
              onChange={handleFileChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#40b08c]"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">ID Card Copy</label>
            <input
              type="file"
              name="teacherIdCardCopy"
              onChange={handleFileChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#40b08c]"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Grades</label>
            <select
              name="grades"
              onChange={handleSelectChange}
              className={selectStyles.select}
            >
              <option value="">Select Grades</option>
              {grades.map((grade) => (
                <option key={grade._id} value={JSON.stringify({ gradeId: grade._id, gradeName: grade.gradeName })} className={selectStyles.option}>
                  {grade.gradeName}
                </option>
              ))}
            </select>
            <div className="flex flex-wrap mt-2">
              {selectedGrades.map((gradeId, index) => {
                const grade = grades.find((g) => g._id === gradeId);
                return (
                  <span key={index} className="bg-gray-200 text-gray-700 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                    {grade?.gradeName}
                    <button
                      type="button"
                      onClick={() => removeSelection(gradeId, "grades")}
                      className="ml-1 text-red-600 hover:text-red-800"
                    >
                      &times;
                    </button>
                  </span>
                );
              })}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Courses</label>
            <select
              name="courses"
              onChange={handleSelectChange}
              className={selectStyles.select}
            >
              <option value="">Select Courses</option>
              {courses.map((course) => (
                <option key={course._id} value={JSON.stringify({ courseId: course._id, courseName: course.courseName })} className={selectStyles.option}>
                  {course.courseName}
                </option>
              ))}
            </select>
            <div className="flex flex-wrap mt-2">
              {selectedCourses.map((courseId, index) => {
                const course = courses.find((c) => c._id === courseId);
                return (
                  <span key={index} className="bg-gray-200 text-gray-700 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                    {course?.courseName}
                    <button
                      type="button"
                      onClick={() => removeSelection(courseId, "courses")}
                      className="ml-1 text-red-600 hover:text-red-800"
                    >
                      &times;
                    </button>
                  </span>
                );
              })}
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="mr-2 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`px-4 py-2 ${loading ? 'bg-gray-400' : 'bg-[#40b08c] hover:bg-[#75dbbb]'} text-white rounded focus:outline-none`}
              disabled={loading}
            >
              {loading ? <ThreeDotLoader /> : "Save"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
