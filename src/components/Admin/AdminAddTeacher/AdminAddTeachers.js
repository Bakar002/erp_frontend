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
      transform: 'translate(-50%, -50%)',
      padding: '2rem',
      borderRadius: '0.5rem',
      width: '90%',
      maxWidth: '800px',
      maxHeight: '90vh',
      overflowY: 'auto',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
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
        <h2 className="text-2xl mb-4">{editingTeacher ? "Edit Teacher" : "Add New Teacher"}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" name="teacherName" value={formData.teacherName} onChange={handleInputChange} className="text-black p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="teacherEmail" value={formData.teacherEmail} onChange={handleInputChange} className="text-black p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" name="teacherPassword" value={formData.teacherPassword} onChange={handleInputChange} className="text-black p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Salary</label>
              <input type="number" name="teacherSalary" value={formData.teacherSalary} onChange={handleInputChange} className="text-black p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">ID Card Number</label>
              <input type="text" name="teacherIdCardNumber" value={formData.teacherIdCardNumber} onChange={handleInputChange} className="text-black p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Job Date</label>
              <input type="date" name="teacherJobDate" value={formData.teacherJobDate} onChange={handleInputChange} className="text-black p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Avatar</label>
              <input type="file" name="teacherAvatar" onChange={handleFileChange} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">ID Card Copy</label>
              <input type="file" name="teacherIdCardCopy" onChange={handleFileChange} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Grades</label>
            <select name="grades" onChange={handleSelectChange} className="text-black p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option value="" disabled selected>Select grades</option>
              {grades.map((grade) => (
                <option key={grade._id} className="" value={JSON.stringify({ gradeId: grade._id, gradeCategory: grade.gradeCategory })}>
                  {grade.gradeCategory}
                </option>
              ))}
            </select>
            <div className="mt-2 flex flex-wrap">
              {selectedGrades.map((gradeId) => {
                const grade = grades.find((g) => g._id === gradeId);
                return (
                  <span key={gradeId} className="inline-block bg-white text-black rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                    {grade.gradeCategory} <button type="button" onClick={() => removeSelection(gradeId, "grades")} className="text-red-500 ml-2">x</button>
                  </span>
                );
              })}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Courses</label>
            <select name="courses" onChange={handleSelectChange} className="text-black p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option value="" disabled selected>Select courses</option>
              {courses.map((course) => (
                <option key={course._id} value={JSON.stringify({ courseId: course._id, courseTitle: course.courseTitle })}>
                  {course.courseTitle}
                </option>
              ))}
            </select>
            <div className="mt-2 flex flex-wrap">
              {selectedCourses.map((courseId) => {
                const course = courses.find((c) => c._id === courseId);
                return (
                  <span key={courseId} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {course.courseTitle} <button type="button" onClick={() => removeSelection(courseId, "courses")} className="text-red-500 ml-2">x</button>
                  </span>
                );
              })}
            </div>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#40b08c] hover:bg-[#75dbbb] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              {loading ? <ThreeDotLoader /> : editingTeacher ? "Update Teacher" : "Add Teacher"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
