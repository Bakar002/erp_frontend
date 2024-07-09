import React, { useState, useEffect } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import ThreeDotLoader from "../Loaders/ThreeDotLoader";

export const AdmissionForm = () => {
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [studentDOB, setStudentDOB] = useState("");
  const [studentAddress, setStudentAddress] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [guardianPhone, setGuardianPhone] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [studentPhoto, setStudentPhoto] = useState(null);
  const [lastDegree, setLastDegree] = useState(null);
  const [admins, setAdmins] = useState([]);
  const [selectedAdmin, setSelectedAdmin] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get("https://your-api-endpoint.com/api/v1/admin/load-all-admins");
        setAdmins(response.data.data);
      } catch (error) {
        console.error("Error fetching admins:", error);
      }
    };
    fetchAdmins();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (
      studentName &&
      studentEmail &&
      studentPhone &&
      studentDOB &&
      studentAddress &&
      guardianName &&
      guardianPhone &&
      studentClass &&
      studentPhoto &&
      lastDegree &&
      selectedAdmin
    ) {
      const formData = new FormData();
      formData.append("studentName", studentName);
      formData.append("studentEmail", studentEmail);
      formData.append("studentPhone", studentPhone);
      formData.append("studentDOB", studentDOB);
      formData.append("studentAddress", studentAddress);
      formData.append("guardianName", guardianName);
      formData.append("guardianPhone", guardianPhone);
      formData.append("studentClass", studentClass);
      formData.append("studentPhoto", studentPhoto);
      formData.append("lastDegree", lastDegree);
      formData.append("adminId", selectedAdmin);

      try {
        setLoading(true);
        const response = await axios.post(
          "https://your-api-endpoint.com/api/v1/admissions",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast.success(response.data.message);
        setLoading(false);
        setStudentName("");
        setStudentEmail("");
        setStudentPhone("");
        setStudentDOB("");
        setStudentAddress("");
        setGuardianName("");
        setGuardianPhone("");
        setStudentClass("");
        setStudentPhoto(null);
        setLastDegree(null);
        setSelectedAdmin("");
      } catch (error) {
        toast.error(error.response.data.message);
        setLoading(false);
      }
    } else {
      toast.error("Please fill in all fields!");
    }
  };

  return (
    <div className="px-4 py-6 md:px-8 bg-white">
      <Toaster />
      <form onSubmit={handleFormSubmit} className="text-gray-600 body-font">
        <div className="max-w-2xl mx-auto">
          <div className="text-center w-full mb-6">
            <h1 className="sm:text-3xl text-2xl font-medium text-gray-900">
              Student Admission Form
            </h1>
          </div>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="studentName"
                  className="leading-7 text-sm text-gray-600"
                >
                  Student Name
                </label>
                <input
                  type="text"
                  id="studentName"
                  name="studentName"
                  placeholder="Enter student name"
                  value={studentName}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setStudentName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="studentEmail"
                  className="leading-7 text-sm text-gray-600"
                >
                  Student Email
                </label>
                <input
                  type="email"
                  id="studentEmail"
                  name="studentEmail"
                  placeholder="Enter student email"
                  value={studentEmail}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setStudentEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="studentPhone"
                  className="leading-7 text-sm text-gray-600"
                >
                  Student Phone
                </label>
                <input
                  type="tel"
                  id="studentPhone"
                  name="studentPhone"
                  placeholder="Enter student phone"
                  value={studentPhone}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setStudentPhone(e.target.value)}
                />
              </div>
              
              <div className="md:w-[45%] ">
                <label
                  htmlFor="studentDOB"
                  className="leading-7 text-sm text-gray-600"
                >
                  Student Dob
                </label>
                <input
                  type="date"
                  id="studentDOB"
                  name="studentDOB"
                  value={studentDOB}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setStudentDOB(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="studentAddress"
                className="leading-7 text-sm text-gray-600"
              >
                Student Address
              </label>
              <textarea
                id="studentAddress"
                name="studentAddress"
                placeholder="Enter student address"
                value={studentAddress}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                onChange={(e) => setStudentAddress(e.target.value)}
              ></textarea>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="guardianName"
                  className="leading-7 text-sm text-gray-600"
                >
                  Guardian Name
                </label>
                <input
                  type="text"
                  id="guardianName"
                  name="guardianName"
                  placeholder="Enter guardian name"
                  value={guardianName}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setGuardianName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="guardianPhone"
                  className="leading-7 text-sm text-gray-600"
                >
                  Guardian Phone
                </label>
                <input
                  type="tel"
                  id="guardianPhone"
                  name="guardianPhone"
                  placeholder="Enter guardian phone"
                  value={guardianPhone}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setGuardianPhone(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="studentClass"
                className="leading-7 text-sm text-gray-600"
              >
                Class
              </label>
              <input
                type="text"
                id="studentClass"
                name="studentClass"
                placeholder="Enter class"
                value={studentClass}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                onChange={(e) => setStudentClass(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="studentPhoto"
                className="leading-7 text-sm text-gray-600"
              >
                Student Id card Photo
              </label>
              <input
                type="file"
                id="studentPhoto"
                name="studentPhoto"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                onChange={(e) => setStudentPhoto(e.target.files[0])}
              />
            </div>
            <div>
              <label
                htmlFor="lastDegree"
                className="leading-7 text-sm text-gray-600"
              >
                Last Degree or Education Slip
              </label>
              <input
                type="file"
                id="lastDegree"
                name="lastDegree"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                onChange={(e) => setLastDegree(e.target.files[0])}
              />
            </div>
            <div>
              <label
                htmlFor="admin"
                className="leading-7 text-sm text-gray-600"
              >
                Select Admin
              </label>
              <select
                id="admin"
                name="admin"
                value={selectedAdmin}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                onChange={(e) => setSelectedAdmin(e.target.value)}
              >
                <option value="" disabled>Select an admin</option>
                {admins.map((admin) => (
                  <option key={admin._id} value={admin._id}>
                    {admin.adminName}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="w-full text-center mt-6">
            <button
              className="w-1/2 md:w-1/3 lg:w-1/4 mx-auto text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-purple-700 rounded text-lg"
              type="submit"
              disabled={loading}
            >
              {loading ? <ThreeDotLoader /> : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
