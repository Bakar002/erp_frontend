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
        className="fixed inset-0 flex items-center justify-center p-4"
        contentLabel="Teacher Form"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: '500px',
          backgroundColor:"black",
          color: "white",
          },
        }}
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          {editingTeacher ? "Edit Teacher" : "Add Teacher"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input type="text" name="teacherName" value={formData.teacherName} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input type="email" name="teacherEmail" value={formData.teacherEmail} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input type="password" name="teacherPassword" value={formData.teacherPassword} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Salary</label>
              <input type="text" name="teacherSalary" value={formData.teacherSalary} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">ID Card Number</label>
              <input type="text" name="teacherIdCardNumber" value={formData.teacherIdCardNumber} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Job Date</label>
              <input type="date" name="teacherJobDate" value={formData.teacherJobDate} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Avatar</label>
              <input type="file" name="teacherAvatar" onChange={handleFileChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">ID Card Copy</label>
              <input type="file" name="teacherIdCardCopy" onChange={handleFileChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Grades</label>
            <select multiple name="grades" onChange={handleSelectChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              {grades.map((grade) => (
                <option key={grade._id} value={JSON.stringify({ gradeId: grade._id })}>
                  {grade.gradeName}
                </option>
              ))}
            </select>
            <ul className="mt-2">
              {selectedGrades.map((grade) => {
                const gradeObj = grades.find((g) => g._id === grade);
                return (
                  <li key={grade} className="flex justify-between bg-gray-100 p-2 rounded mb-2">
                    {gradeObj?.gradeName}
                    <button type="button" onClick={() => removeSelection(grade, "grades")} className="text-red-600">Remove</button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Courses</label>
            <select multiple name="courses" onChange={handleSelectChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              {courses.map((course) => (
                <option key={course._id} value={JSON.stringify({ courseId: course._id })}>
                  {course.courseName}
                </option>
              ))}
            </select>
            <ul className="mt-2">
              {selectedCourses.map((course) => {
                const courseObj = courses.find((c) => c._id === course);
                return (
                  <li key={course} className="flex justify-between bg-gray-100 p-2 rounded mb-2">
                    {courseObj?.courseName}
                    <button type="button" onClick={() => removeSelection(course, "courses")} className="text-red-600">Remove</button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
            <button type="button" onClick={() => setIsModalOpen(false)} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Close</button>
          </div>
        </form>
      </Modal>

      {loading && <ThreeDotLoader />}
    </div>
  );
};
