import React, { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import ThreeDotLoader from "../../components/Loaders/ThreeDotLoader";

export const Appointments = () => {
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientDOB, setPatientDOB] = useState("");
  const [patientAddress, setPatientAddress] = useState("");
  const [disease, setDisease] = useState("");
  const [doctor, setDoctor] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (
      patientName &&
      patientEmail &&
      patientPhone &&
      patientDOB &&
      patientAddress &&
      disease &&
      doctor &&
      appointmentDate &&
      appointmentTime
    ) {
      const formData = new FormData();
      formData.append("patientName", patientName);
      formData.append("patientEmail", patientEmail);
      formData.append("patientPhone", patientPhone);
      formData.append("patientDOB", patientDOB);
      formData.append("patientAddress", patientAddress);
      formData.append("disease", disease);
      formData.append("doctor", doctor);
      formData.append("appointmentDate", appointmentDate);
      formData.append("appointmentTime", appointmentTime);

      try {
        setLoading(true);
        const response = await axios.post(
          "https://your-api-endpoint.com/api/v1/appointments",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast.success(response.data.message);
        setLoading(false);
        setPatientName("");
        setPatientEmail("");
        setPatientPhone("");
        setPatientDOB("");
        setPatientAddress("");
        setDisease("");
        setDoctor("");
        setAppointmentDate("");
        setAppointmentTime("");
      } catch (error) {
        toast.error(error.response.data.message);
        setLoading(false);
      }
    } else {
      toast.error("Please fill in all fields!");
    }
  };

  return (
    <div className="px-4 py-6 md:px-8 bg-blue-300 h-70">
      <Toaster />
      <form onSubmit={handleFormSubmit} className="text-gray-600 body-font">
        <div className="max-w-2xl mx-auto">
          <div className="text-center w-full mb-6">
            <h1 className="sm:text-3xl text-2xl font-medium text-gray-900">
              Book an Appointment
            </h1>
          </div>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="patientName"
                  className="leading-7 text-sm text-gray-600"
                >
                  Patient Name
                </label>
                <input
                  type="text"
                  id="patientName"
                  name="patientName"
                  placeholder="Enter patient name"
                  value={patientName}
                  className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setPatientName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="patientEmail"
                  className="leading-7 text-sm text-gray-600"
                >
                  Patient Email
                </label>
                <input
                  type="email"
                  id="patientEmail"
                  name="patientEmail"
                  placeholder="Enter patient email"
                  value={patientEmail}
                  className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setPatientEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="patientPhone"
                  className="leading-7 text-sm text-gray-600"
                >
                  Patient Phone
                </label>
                <input
                  type="tel"
                  id="patientPhone"
                  name="patientPhone"
                  placeholder="Enter patient phone"
                  value={patientPhone}
                  className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setPatientPhone(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="patientDOB"
                  className="leading-7 text-sm text-gray-600"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="patientDOB"
                  name="patientDOB"
                  value={patientDOB}
                  className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setPatientDOB(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="patientAddress"
                className="leading-7 text-sm text-gray-600"
              >
                Patient Address
              </label>
              <textarea
                id="patientAddress"
                name="patientAddress"
                placeholder="Enter patient address"
                value={patientAddress}
                className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                onChange={(e) => setPatientAddress(e.target.value)}
              ></textarea>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="disease"
                  className="leading-7 text-sm text-gray-600"
                >
                  Disease
                </label>
                <input
                  type="text"
                  id="disease"
                  name="disease"
                  placeholder="Enter disease"
                  value={disease}
                  className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setDisease(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="doctor"
                  className="leading-7 text-sm text-gray-600"
                >
                  Doctor
                </label>
                <input
                  type="text"
                  id="doctor"
                  name="doctor"
                  placeholder="Enter doctor's name"
                  value={doctor}
                  className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setDoctor(e.target.value)}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="appointmentDate"
                  className="leading-7 text-sm text-gray-600"
                >
                  Appointment Date
                </label>
                <input
                  type="date"
                  id="appointmentDate"
                  name="appointmentDate"
                  value={appointmentDate}
                  className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setAppointmentDate(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="appointmentTime"
                  className="leading-7 text-sm text-gray-600"
                >
                  Appointment Time
                </label>
                <input
                  type="time"
                  id="appointmentTime"
                  name="appointmentTime"
                  value={appointmentTime}
                  className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setAppointmentTime(e.target.value)}
                />
              </div>
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

export default Appointments;
