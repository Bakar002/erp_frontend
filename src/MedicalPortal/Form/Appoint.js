import React, { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import ThreeDotLoader from "../../components/Loaders/ThreeDotLoader";

const doctors = [
  { name: "Dr. John Doe", fee: 1000 },
  { name: "Dr. Jane Smith", fee: 1500 },
  { name: "Dr. Michael Johnson", fee: 1200 },
  { name: "Dr. Emily Davis", fee: 1300 },
  { name: "Dr. William Brown", fee: 1400 },
  { name: "Dr. Olivia Wilson", fee: 1600 },
  { name: "Dr. Ava Taylor", fee: 1100 },
  { name: "Dr. Sophia Anderson", fee: 1700 },
  { name: "Dr. James Martinez", fee: 1250 },
  { name: "Dr. Mia Robinson", fee: 1350 },
];

export const Appoint = () => {
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientDOB, setPatientDOB] = useState("");
  const [patientAddress, setPatientAddress] = useState("");
  const [disease, setDisease] = useState("");
  const [doctor, setDoctor] = useState("");
  const [doctorFee, setDoctorFee] = useState("");
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
      formData.append("doctorFee", doctorFee);
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
        setDoctorFee("");
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

  const handleDoctorChange = (e) => {
    const selectedDoctor = e.target.value;
    const doctorDetails = doctors.find((doc) => doc.name === selectedDoctor);
    setDoctor(selectedDoctor);
    setDoctorFee(doctorDetails ? doctorDetails.fee : "");
  };

  return (
    <div className="px-4 py-6 md:px-8 bg-blue-300">
      <Toaster />
      <form onSubmit={handleFormSubmit} className="text-black-600  body-font">
        <div className="max-w-2xl mx-auto ">
          <div className="text-center  w-full mb-6">
            <h1 className="sm:text-3xl text-2xl font-medium text-gray-900">
              Appointment Form
            </h1>
          </div>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4 ">
              <div>
                <label
                  htmlFor="patientName"
                  className="leading-7 text-md text-black "
                >
                  Patient Name
                </label>
                <input
                  type="text"
                  id="patientName"
                  name="patientName"
                  placeholder="Enter patient name"
                  value={patientName}
                  className="w-full bg-white bg-opacity-50 rounded-lg border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2.5  px-4 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setPatientName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="patientEmail"
                  className="leading-7 text-md text-black"
                >
                  Patient Email
                </label>
                <input
                  type="email"
                  id="patientEmail"
                  name="patientEmail"
                  placeholder="Enter patient email"
                  value={patientEmail}
                  className="w-full bg-white bg-opacity-50 rounded-lg border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2.5  px-4 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setPatientEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="patientPhone"
                  className="leading-7 text-md text-black"
                >
                  Patient Phone
                </label>
                <input
                  type="tel"
                  id="patientPhone"
                  name="patientPhone"
                  placeholder="Enter patient phone"
                  value={patientPhone}
                  className="w-full bg-white bg-opacity-50 rounded-lg border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2.5  px-4 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setPatientPhone(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="patientDOB"
                  className="leading-7 text-md text-black"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="patientDOB"
                  name="patientDOB"
                  value={patientDOB}
                  className="w-full bg-white bg-opacity-50 rounded-lg border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2.5  px-4 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setPatientDOB(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="patientAddress"
                className="leading-7 text-md text-black"
              >
                Patient Address
              </label>
              <textarea
                id="patientAddress"
                name="patientAddress"
                placeholder="Enter patient address"
                value={patientAddress}
                className="w-full bg-white bg-opacity-50 rounded-lg border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2.5  px-4 transition-colors duration-200 ease-in-out"
                onChange={(e) => setPatientAddress(e.target.value)}
              ></textarea>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="disease"
                  className="leading-7 text-md text-black"
                >
                  Disease
                </label>
                <input
                  type="text"
                  id="disease"
                  name="disease"
                  placeholder="Enter disease"
                  value={disease}
                  className="w-full bg-white bg-opacity-50 rounded-lg border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2.5  px-4 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setDisease(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="doctor"
                  className="leading-7 text-md text-black"
                >
                  Doctor
                </label>
                <select
                  id="doctor"
                  name="doctor"
                  value={doctor}
                  className="w-full bg-white bg-opacity-50 rounded-lg border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2.5  px-4 transition-colors duration-200 ease-in-out"
                  onChange={handleDoctorChange}
                >
                  <option value="">Select a doctor</option>
                  {doctors.map((doc, index) => (
                    <option key={index} value={doc.name}>
                      {doc.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="doctorFee"
                  className="leading-7 text-md text-black"
                >
                  Doctor Fee
                </label>
                <input
                  type="number"
                  id="doctorFee"
                  name="doctorFee"
                  placeholder="Enter doctor fee"
                  value={doctorFee}
                  className="w-full bg-white bg-opacity-50 rounded-lg border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2.5  px-4 transition-colors duration-200 ease-in-out"
                  readOnly
                />
              </div>
              <div>
                <label
                  htmlFor="appointmentDate"
                  className="leading-7 text-md text-black"
                >
                  Appointment Date
                </label>
                <input
                  type="date"
                  id="appointmentDate"
                  name="appointmentDate"
                  value={appointmentDate}
                  className="w-full bg-white bg-opacity-50 rounded-lg border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2.5  px-4 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setAppointmentDate(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="appointmentTime"
                className="leading-7 text-md text-black"
              >
                Appointment Time
              </label>
              <input
                type="time"
                id="appointmentTime"
                name="appointmentTime"
                value={appointmentTime}
                className="w-full bg-white bg-opacity-50 rounded-lg border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2.5  px-4 transition-colors duration-200 ease-in-out"
                onChange={(e) => setAppointmentTime(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-auto ml-64 bg-purple-500 text-white text-xl font-semibold py-3 px-5 rounded-lg-full focus:outline-none focus:ring-2 focus:ring-black transition-colors duration-200 ease-in-out "
            >
              {loading ? <ThreeDotLoader /> : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Appoint;
