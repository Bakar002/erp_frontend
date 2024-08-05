import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { handleShowFailureToast, handleShowSuccessToast } from "../../ToastMessages/ToastMessage";
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
    const fetchData = async () => {
      try {
        const [gradesResponse, coursesResponse, teachersResponse] = await Promise.all([
          axios.get("https://belikeerp-3.onrender.com/api/v1/admin/load-all-grades"),
          axios.get("https://belikeerp-3.onrender.com/api/v1/admin/load-all-courses"),
          axios.get("https://belikeerp-3.onrender.com/api/v1/admin/load-all-teachers"),
        ]);

        setGrades(gradesResponse.data.grades);
        setCourses(coursesResponse.data.courses);
        setTeachers(teachersResponse.data.teachers);
      } catch (error) {
        console.log(error.response?.data?.message || error.message);
      }
    };
    fetchData();
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

    const data = new FormData();
    data.append("teacherName", teacherName);
    data.append("teacherEmail", teacherEmail);
    data.append("teacherPassword", teacherPassword);
    data.append("teacherSalary", teacherSalary);
    data.append("teacherIdCardNumber", teacherIdCardNumber);
    data.append("teacherJobDate", teacherJobDate);
    data.append("teacherAvatar", teacherAvatar);
    data.append("teacherIdCardCopy", teacherIdCardCopy);
    data.append("teacherGrades", JSON.stringify(selectedGrades.map((grade) => ({ gradeId: grade }))));
    data.append("teacherCourses", JSON.stringify(selectedCourses.map((course) => ({ courseId: course }))));

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
                <button onClick={() => openModal(teacher)} className="text-blue-600 bg-white hover:text-blue-900 mr-4">Edit</button>
                <button onClick={() => handleDelete(teacher._id)} className="text-red-600 bg-white hover:text-red-900">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="Modal" overlayClassName="Overlay">
        <div className="p-6 bg-white rounded shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">{editingTeacher ? "Edit Teacher" : "Add New Teacher"}</h2>
            <button onClick={() => setIsModalOpen(false)} className="text-gray-600 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="teacherName" value={formData.teacherName} onChange={handleInputChange} placeholder="Name" className="w-full p-2 border border-gray-300 rounded" />
            <input type="email" name="teacherEmail" value={formData.teacherEmail} onChange={handleInputChange} placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
            <input type="password" name="teacherPassword" value={formData.teacherPassword} onChange={handleInputChange} placeholder="Password" className="w-full p-2 border border-gray-300 rounded" />
            <input type="number" name="teacherSalary" value={formData.teacherSalary} onChange={handleInputChange} placeholder="Salary" className="w-full p-2 border border-gray-300 rounded" />
            <input type="text" name="teacherIdCardNumber" value={formData.teacherIdCardNumber} onChange={handleInputChange} placeholder="ID Card Number" className="w-full p-2 border border-gray-300 rounded" />
            <input type="date" name="teacherJobDate" value={formData.teacherJobDate} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded" />
            <input type="file" name="teacherAvatar" onChange={handleFileChange} className="w-full p-2 border border-gray-300 rounded" />
            <input type="file" name="teacherIdCardCopy" onChange={handleFileChange} className="w-full p-2 border border-gray-300 rounded" />
            <select name="grades" onChange={handleSelectChange} className="w-full p-2 border border-gray-300 rounded">
              <option>Select Grades</option>
              {grades.map((grade) => (
                <option key={grade.gradeId} value={JSON.stringify(grade)}>{grade.gradeName}</option>
              ))}
            </select>
            <select name="courses" onChange={handleSelectChange} className="w-full p-2 border border-gray-300 rounded">
              <option>Select Courses</option>
              {courses.map((course) => (
                <option key={course.courseId} value={JSON.stringify(course)}>{course.courseName}</option>
              ))}
            </select>
            <div className="col-span-2">
              <div className="flex flex-wrap mb-2">
                {selectedGrades.map((gradeId) => {
                  const grade = grades.find((g) => g.gradeId === gradeId);
                  return (
                    <div key={gradeId} className="flex items-center p-1 bg-gray-200 rounded mr-2 mb-2">
                      <span className="mr-1">{grade.gradeName}</span>
                      <button type="button" onClick={() => removeSelection(gradeId, "grades")} className="text-red-500">x</button>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-wrap mb-2">
                {selectedCourses.map((courseId) => {
                  const course = courses.find((c) => c.courseId === courseId);
                  return (
                    <div key={courseId} className="flex items-center p-1 bg-gray-200 rounded mr-2 mb-2">
                      <span className="mr-1">{course.courseName}</span>
                      <button type="button" onClick={() => removeSelection(courseId, "courses")} className="text-red-500">x</button>
                    </div>
                  );
                })}
              </div>
            </div>
            <button type="submit" className="col-span-2 w-full bg-blue-500 text-white py-2 px-4 rounded mt-2">
              {loading ? <ThreeDotLoader /> : "Submit"}
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AdminAddTeacher;
