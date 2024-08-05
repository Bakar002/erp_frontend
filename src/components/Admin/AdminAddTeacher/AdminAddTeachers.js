import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  handleShowFailureToast,
  handleShowSuccessToast,
} from "../../ToastMessages/ToastMessage";
import { Toaster } from "react-hot-toast";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Ensure accessibility

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    backgroundColor: '#1e1e1e',
    color: '#ffffff',
    borderRadius: '10px',
    maxWidth: '600px',
    width: '90%',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

const inputStyle = {
  backgroundColor: '#ffffff',
  color: '#000000',
  padding: '10px',
  borderRadius: '5px',
  width: '100%',
};

const buttonStyle = {
  padding: '10px 15px',
  borderRadius: '5px',
  cursor: 'pointer',
};

const AdminAddTeacher = () => {
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
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-4 md:mx-0 md:w-11/12 w-auto">
        <button
          onClick={() => openModal()}
          className="bg-blue-500 text-white p-2 rounded-md m-4 hover:bg-blue-700"
          style={buttonStyle}
        >
          Add Teacher
        </button>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Teacher Name
              </th>
              <th scope="col" className="px-6 py-3">
                Teacher Email
              </th>
              <th scope="col" className="px-6 py-3">
                Teacher Salary
              </th>
              <th scope="col" className="px-6 py-3">
                Teacher Job Date
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr
                key={teacher._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{teacher.teacherName}</td>
                <td className="px-6 py-4">{teacher.teacherEmail}</td>
                <td className="px-6 py-4">{teacher.teacherSalary}</td>
                <td className="px-6 py-4">{teacher.teacherJobDate}</td>
                <td className="px-6 py-4 flex gap-2">
                  <button
                    onClick={() => openModal(teacher)}
                    className="bg-green-500 text-white p-2 rounded-md hover:bg-green-700"
                    style={buttonStyle}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(teacher._id)}
                    className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700"
                    style={buttonStyle}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={customStyles}
        contentLabel="Add/Edit Teacher"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="teacherName"
              value={formData.teacherName}
              onChange={handleInputChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="teacherEmail"
              value={formData.teacherEmail}
              onChange={handleInputChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              name="teacherPassword"
              value={formData.teacherPassword}
              onChange={handleInputChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Salary</label>
            <input
              type="text"
              name="teacherSalary"
              value={formData.teacherSalary}
              onChange={handleInputChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">ID Card Number</label>
            <input
              type="text"
              name="teacherIdCardNumber"
              value={formData.teacherIdCardNumber}
              onChange={handleInputChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Job Date</label>
            <input
              type="date"
              name="teacherJobDate"
              value={formData.teacherJobDate}
              onChange={handleInputChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Avatar</label>
            <input
              type="file"
              name="teacherAvatar"
              onChange={handleFileChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">ID Card Copy</label>
            <input
              type="file"
              name="teacherIdCardCopy"
              onChange={handleFileChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Grades</label>
            <select name="grades" onChange={handleSelectChange} style={inputStyle}>
              <option value="">Select Grade</option>
              {grades.map((grade) => (
                <option key={grade._id} value={JSON.stringify({ gradeId: grade._id })}>
                  {grade.gradeName}
                </option>
              ))}
            </select>
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedGrades.map((gradeId) => {
                const grade = grades.find((g) => g._id === gradeId);
                return (
                  <div
                    key={gradeId}
                    className="bg-blue-500 text-white p-1 rounded-md flex items-center gap-1"
                  >
                    {grade?.gradeName}
                    <button
                      type="button"
                      onClick={() => removeSelection(gradeId, "grades")}
                      className="ml-1 text-sm"
                    >
                      &times;
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Courses</label>
            <select name="courses" onChange={handleSelectChange} style={inputStyle}>
              <option value="">Select Course</option>
              {courses.map((course) => (
                <option key={course._id} value={JSON.stringify({ courseId: course._id })}>
                  {course.courseName}
                </option>
              ))}
            </select>
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedCourses.map((courseId) => {
                const course = courses.find((c) => c._id === courseId);
                return (
                  <div
                    key={courseId}
                    className="bg-blue-500 text-white p-1 rounded-md flex items-center gap-1"
                  >
                    {course?.courseName}
                    <button
                      type="button"
                      onClick={() => removeSelection(courseId, "courses")}
                      className="ml-1 text-sm"
                    >
                      &times;
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700"
              style={buttonStyle}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
              style={buttonStyle}
              disabled={loading}
            >
              {loading ? "Saving..." : editingTeacher ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AdminAddTeacher;
