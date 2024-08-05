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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const [gradesResponse, coursesResponse, teachersResponse] = await Promise.all([
  //         axios.get("https://belikeerp-3.onrender.com/api/v1/admin/load-all-grades"),
  //         axios.get("https://belikeerp-3.onrender.com/api/v1/admin/load-all-courses"),
  //         axios.get("https://belikeerp-3.onrender.com/api/v1/admin/load-all-teachers"),
  //       ]);

  //       setGrades(gradesResponse.data.grades);
  //       setCourses(coursesResponse.data.courses);
  //       setTeachers(teachersResponse.data.teachers);
  //     } catch (error) {
  //       console.log(error.response?.data?.message || error.message);
  //     }
  //   };
  //   fetchData();
  // }, []);



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

  return (
    <div className="h-auto md:px-8 mt-4  ">
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
                <button onClick={() => openModal(teacher)} className="text-blue-600 bg-white hover:text-blue-900 mr-4">Edit</button>
                <button onClick={() => handleDelete(teacher._id)} className="text-red-600 bg-white hover:text-red-900">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
  isOpen={isModalOpen}
  onRequestClose={() => setIsModalOpen(false)}
  contentLabel="Teacher Form"
  className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg"
  overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50"
>
  <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
    {editingTeacher ? "Edit Teacher" : "Add Teacher"}
  </h2>
  <form onSubmit={handleSubmit} className="space-y-4">
    <div className="grid gap-4">
      <div className="relative">
        <label htmlFor="teacherName" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="teacherName"
          name="teacherName"
          value={formData.teacherName}
          onChange={handleInputChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-[#40b08c] focus:border-[#40b08c] sm:text-sm"
          required
        />
      </div>
      <div className="relative">
        <label htmlFor="teacherEmail" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="teacherEmail"
          name="teacherEmail"
          value={formData.teacherEmail}
          onChange={handleInputChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-[#40b08c] focus:border-[#40b08c] sm:text-sm"
          required
        />
      </div>
      <div className="relative">
        <label htmlFor="teacherPassword" className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          id="teacherPassword"
          name="teacherPassword"
          value={formData.teacherPassword}
          onChange={handleInputChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-[#40b08c] focus:border-[#40b08c] sm:text-sm"
          required
        />
      </div>
      <div className="relative">
        <label htmlFor="teacherSalary" className="block text-sm font-medium text-gray-700">Salary</label>
        <input
          type="number"
          id="teacherSalary"
          name="teacherSalary"
          value={formData.teacherSalary}
          onChange={handleInputChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-[#40b08c] focus:border-[#40b08c] sm:text-sm"
          required
        />
      </div>
      <div className="relative">
        <label htmlFor="teacherIdCardNumber" className="block text-sm font-medium text-gray-700">ID Card Number</label>
        <input
          type="text"
          id="teacherIdCardNumber"
          name="teacherIdCardNumber"
          value={formData.teacherIdCardNumber}
          onChange={handleInputChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-[#40b08c] focus:border-[#40b08c] sm:text-sm"
          required
        />
      </div>
      <div className="relative">
        <label htmlFor="teacherJobDate" className="block text-sm font-medium text-gray-700">Job Date</label>
        <input
          type="date"
          id="teacherJobDate"
          name="teacherJobDate"
          value={formData.teacherJobDate}
          onChange={handleInputChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-[#40b08c] focus:border-[#40b08c] sm:text-sm"
          required
        />
      </div>
    </div>
    <div className="relative">
      <label htmlFor="teacherAvatar" className="block text-sm font-medium text-gray-700">Avatar</label>
      <input
        type="file"
        id="teacherAvatar"
        name="teacherAvatar"
        onChange={handleFileChange}
        className="mt-1 block w-full border border-gray-300 rounded-md text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
      />
    </div>
    <div className="relative">
      <label htmlFor="teacherIdCardCopy" className="block text-sm font-medium text-gray-700">ID Card Copy</label>
      <input
        type="file"
        id="teacherIdCardCopy"
        name="teacherIdCardCopy"
        onChange={handleFileChange}
        className="mt-1 block w-full border border-gray-300 rounded-md text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
      />
    </div>
    <div className="relative">
      <label htmlFor="grades" className="block text-sm font-medium text-gray-700">Grades</label>
      <select
        id="grades"
        name="grades"
        onChange={handleSelectChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-[#40b08c] focus:border-[#40b08c] sm:text-sm"
        multiple
      >
        {grades.map((grade) => (
          <option key={grade.gradeId} value={JSON.stringify(grade)} selected={selectedGrades.includes(grade.gradeId)}>
            {grade.gradeName}
          </option>
        ))}
      </select>
      <ul className="mt-2 space-y-2">
        {selectedGrades.map((gradeId) => {
          const grade = grades.find((g) => g.gradeId === gradeId);
          return (
            <li key={gradeId} className="flex justify-between items-center p-2 bg-gray-800 text-white rounded-md">
              {grade?.gradeName}
              <button
                type="button"
                onClick={() => removeSelection(gradeId, "grades")}
                className="text-red-400 hover:text-red-600"
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
    <div className="relative">
      <label htmlFor="courses" className="block text-sm font-medium text-gray-700">Courses</label>
      <select
        id="courses"
        name="courses"
        onChange={handleSelectChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-[#40b08c] focus:border-[#40b08c] sm:text-sm"
        multiple
      >
        {courses.map((course) => (
          <option key={course.courseId} value={JSON.stringify(course)} selected={selectedCourses.includes(course.courseId)}>
            {course.courseName}
          </option>
        ))}
      </select>
      <ul className="mt-2 space-y-2">
        {selectedCourses.map((courseId) => {
          const course = courses.find((c) => c.courseId === courseId);
          return (
            <li key={courseId} className="flex justify-between items-center p-2 bg-gray-800 text-white rounded-md">
              {course?.courseName}
              <button
                type="button"
                onClick={() => removeSelection(courseId, "courses")}
                className="text-red-400 hover:text-red-600"
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
    <div className="flex justify-between items-center mt-4">
      <button
        type="submit"
        className="bg-[#40b08c] text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#75dbbb] focus:outline-none focus:ring-2 focus:ring-[#40b08c] text-lg"
      >
        {loading ? <ThreeDotLoader /> : "Submit"}
      </button>
      <button
        type="button"
        onClick={() => setIsModalOpen(false)}
        className="text-blue-600 hover:text-blue-800 text-lg"
      >
        Close
      </button>
    </div>
  </form>
</Modal>

    </div>
  );
};
