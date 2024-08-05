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
import "Modal.css"
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
                  className="text-blue-600 hover:text-blue-800 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(teacher._id)}
                  className="text-red-600 hover:text-red-800"
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
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-[90%] mx-auto md:max-w-[500px]">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-4">
            {editingTeacher ? "Edit Teacher" : "Add New Teacher"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: "Name", name: "teacherName" },
                { label: "Email", name: "teacherEmail" },
                { label: "Password", name: "teacherPassword" },
                { label: "Salary", name: "teacherSalary" },
                { label: "ID Card Number", name: "teacherIdCardNumber" },
                { label: "Job Date", name: "teacherJobDate" },
              ].map(({ label, name }) => (
                <div key={name}>
                  <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                    {label}
                  </label>
                  <input
                    type="text"
                    name={name}
                    id={name}
                    value={formData[name]}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  />
                  {/* Error Message */}
                </div>
              ))}

              <div>
                <label htmlFor="teacherAvatar" className="block text-sm font-medium text-gray-700">
                  Avatar
                </label>
                <input
                  type="file"
                  name="teacherAvatar"
                  id="teacherAvatar"
                  onChange={handleFileChange}
                  className="mt-1 block w-full"
                />
              </div>

              <div>
                <label htmlFor="teacherIdCardCopy" className="block text-sm font-medium text-gray-700">
                  ID Card Copy
                </label>
                <input
                  type="file"
                  name="teacherIdCardCopy"
                  id="teacherIdCardCopy"
                  onChange={handleFileChange}
                  className="mt-1 block w-full"
                />
              </div>

              <div>
                <label htmlFor="grades" className="block text-sm font-medium text-gray-700">
                  Grades
                </label>
                <select
                  name="grades"
                  id="grades"
                  onChange={handleSelectChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                >
                  <option value="">Select Grades</option>
                  {grades.map((grade) => (
                    <option
                      key={grade._id}
                      value={JSON.stringify({ gradeId: grade._id })}
                    >
                      {grade.gradeName}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="courses" className="block text-sm font-medium text-gray-700">
                  Courses
                </label>
                <select
                  name="courses"
                  id="courses"
                  onChange={handleSelectChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                >
                  <option value="">Select Courses</option>
                  {courses.map((course) => (
                    <option
                      key={course._id}
                      value={JSON.stringify({ courseId: course._id })}
                    >
                      {course.courseName}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900">Selected Grades</h3>
                {selectedGrades.map((id) => (
                  <span
                    key={id}
                    className="inline-block mr-2 px-3 py-1 text-sm text-white bg-gray-600 rounded"
                  >
                    {grades.find((grade) => grade._id === id)?.gradeName}
                    <button
                      type="button"
                      onClick={() => removeSelection(id, "grades")}
                      className="ml-2 text-red-500"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900">Selected Courses</h3>
                {selectedCourses.map((id) => (
                  <span
                    key={id}
                    className="inline-block mr-2 px-3 py-1 text-sm text-white bg-gray-600 rounded"
                  >
                    {courses.find((course) => course._id === id)?.courseName}
                    <button
                      type="button"
                      onClick={() => removeSelection(id, "courses")}
                      className="ml-2 text-red-500"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-end mt-6">
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#40b08c] text-white rounded-md hover:bg-[#34a77a] focus:outline-none"
                >
                  {loading ? <ThreeDotLoader /> : "Save"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AdminAddTeacher;
