import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  handleShowFailureToast,
  handleShowSuccessToast,
} from "../../ToastMessages/ToastMessage";
import { Toaster } from "react-hot-toast";
import ThreeDotLoader from "../../Loaders/ThreeDotLoader";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Ensure accessibility

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
        const response = await axios.get(
          "https://belikeerp-3.onrender.com/api/v1/admin/load-all-grades"
        );
        setGrades(response.data.grades);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchAllGrades();

    const fetchAllCourses = async () => {
      try {
        const response = await axios.get(
          "https://belikeerp-3.onrender.com/api/v1/admin/load-all-courses"
        );
        setCourses(response.data.courses);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchAllCourses();

    const fetchAllTeachers = async () => {
      try {
        const response = await axios.get(
          "https://belikeerp-3.onrender.com/api/v1/admin/load-all-teachers"
        );
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
      setSelectedGrades((prev) => [
        ...new Set([...prev, selectedOption.gradeId]),
      ]);
    } else if (name === "courses") {
      setSelectedCourses((prev) => [
        ...new Set([...prev, selectedOption.courseId]),
      ]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      Object.values(formData).some((val) => !val) ||
      selectedGrades.length === 0 ||
      selectedCourses.length === 0
    ) {
      handleShowFailureToast(
        "Please fill all fields and select at least one grade and course!"
      );
      return;
    }

    const {
      teacherAvatar,
      teacherIdCardCopy,
      teacherName,
      teacherEmail,
      teacherPassword,
      teacherSalary,
      teacherIdCardNumber,
      teacherJobDate,
    } = formData;
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
      const url = editingTeacher
        ? `https://belikeerp-3.onrender.com/api/v1/admin/update-teacher/${editingTeacher._id}`
        : "https://belikeerp-3.onrender.com/api/v1/admin/add-teacher";
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
      const teachersResponse = await axios.get(
        "https://belikeerp-3.onrender.com/api/v1/admin/load-all-teachers"
      );
      setTeachers(teachersResponse.data.teachers);
    } catch (error) {
      handleShowFailureToast(
        error.response?.data?.message || error.message
      );
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
    setSelectedGrades(
      teacher?.teacherGrades.map((g) => g.gradeId) || []
    );
    setSelectedCourses(
      teacher?.teacherCourses.map((c) => c.courseId) || []
    );
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://belikeerp-3.onrender.com/api/v1/admin/delete-teacher/${id}`
      );
      handleShowSuccessToast("Teacher deleted successfully!");
      // Fetch updated teachers
      const teachersResponse = await axios.get(
        "https://belikeerp-3.onrender.com/api/v1/admin/load-all-teachers"
      );
      setTeachers(teachersResponse.data.teachers);
    } catch (error) {
      handleShowFailureToast(
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <div className="h-auto md:px-8 mt-4">
      <Toaster />
      <button
        onClick={() => openModal()}
        className="flex mx-auto justify-center items-center text-white bg-[#40b08c] border-0 py-1 px-4 focus:outline-none hover:bg-[#75dbbb] rounded text-lg"
      >
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
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                {teacher.teacherName}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {teacher.teacherEmail}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {teacher.teacherSalary}
              </td>
              <td className="px-6 py-4 text-sm font-medium">
                <button
                  onClick={() => openModal(teacher)}
                  className="text-blue-600 bg-white hover:text-blue-900 mr-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(teacher._id)}
                  className="text-red-600 bg-white hover:text-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
  isOpen={isModalOpen}
  onRequestClose={() => setIsModalOpen(false)}
  className="modal-container"
  overlayClassName="modal-overlay"
>
  <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-3xl font-bold text-gray-800">
        {editingTeacher ? "Edit Teacher" : "Add Teacher"}
      </h2>
      <button
        onClick={() => setIsModalOpen(false)}
        className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Close
      </button>
    </div>
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">Teacher Name</label>
        <input
          type="text"
          name="teacherName"
          value={formData.teacherName}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">Teacher Email</label>
        <input
          type="email"
          name="teacherEmail"
          value={formData.teacherEmail}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">Teacher Password</label>
        <input
          type="password"
          name="teacherPassword"
          value={formData.teacherPassword}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">Teacher Salary</label>
        <input
          type="number"
          name="teacherSalary"
          value={formData.teacherSalary}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">Teacher ID Card Number</label>
        <input
          type="text"
          name="teacherIdCardNumber"
          value={formData.teacherIdCardNumber}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">Teacher Job Date</label>
        <input
          type="date"
          name="teacherJobDate"
          value={formData.teacherJobDate}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">Teacher Avatar</label>
        <input
          type="file"
          name="teacherAvatar"
          onChange={handleFileChange}
          className="w-full border border-gray-300 rounded-lg p-2 text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-white file:bg-blue-500 hover:file:bg-blue-600"
        />
      </div>
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">Teacher ID Card Copy</label>
        <input
          type="file"
          name="teacherIdCardCopy"
          onChange={handleFileChange}
          className="w-full border border-gray-300 rounded-lg p-2 text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-white file:bg-blue-500 hover:file:bg-blue-600"
        />
      </div>
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">Select Grades</label>
        <select
          name="grades"
          onChange={handleSelectChange}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a grade</option>
          {grades.map((grade) => (
            <option
              key={grade.gradeId}
              value={JSON.stringify({
                gradeId: grade.gradeId,
                gradeName: grade.gradeName,
              })}
            >
              {grade.gradeName}
            </option>
          ))}
        </select>
        <div className="mt-2 flex flex-wrap gap-2">
          {selectedGrades.map((grade) => (
            <div
              key={grade}
              className="bg-gray-200 p-2 rounded-lg flex items-center"
            >
              <span className="text-gray-800">{grades.find((g) => g.gradeId === grade).gradeName}</span>
              <button
                type="button"
                onClick={() => removeSelection(grade, "grades")}
                className="ml-2 bg-red-600 text-white p-1 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">Select Courses</label>
        <select
          name="courses"
          onChange={handleSelectChange}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a course</option>
          {courses.map((course) => (
            <option
              key={course.courseId}
              value={JSON.stringify({
                courseId: course.courseId,
                courseName: course.courseName,
              })}
            >
              {course.courseName}
            </option>
          ))}
        </select>
        <div className="mt-2 flex flex-wrap gap-2">
          {selectedCourses.map((course) => (
            <div
              key={course}
              className="bg-gray-200 p-2 rounded-lg flex items-center"
            >
              <span className="text-gray-800">
                {courses.find((c) => c.courseId === course).courseName}
              </span>
              <button
                type="button"
                onClick={() => removeSelection(course, "courses")}
                className="ml-2 bg-red-600 text-white p-1 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {editingTeacher ? "Update Teacher" : "Add Teacher"}
      </button>
    </form>
  </div>
</Modal>


      {loading && <ThreeDotLoader />}
    </div>
  );
};
