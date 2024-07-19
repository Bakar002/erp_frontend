import React, { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import ThreeDotLoader from "../../components/Loaders/ThreeDotLoader";

const hospitals = [
  "Hospital A", "Hospital B", "Hospital C", "Hospital D", "Hospital E",
  "Hospital F", "Hospital G", "Hospital H", "Hospital I", "Hospital J"
];

const areas = [
  "Area 1", "Area 2", "Area 3", "Area 4", "Area 5",
  "Area 6", "Area 7", "Area 8", "Area 9", "Area 10"
];

const specialists = [
  "Specialist A", "Specialist B", "Specialist C", "Specialist D", "Specialist E",
  "Specialist F", "Specialist G", "Specialist H", "Specialist I", "Specialist J"
];

export const Emergency = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [guidance, setGuidance] = useState("");
  const [area, setArea] = useState("");
  const [ward, setWard] = useState("");
  const [hospital, setHospital] = useState("");
  const [disease, setDisease] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (
      name &&
      number &&
      guidance &&
      area &&
      ward &&
      hospital &&
      disease &&
      specialist &&
      appointmentDate &&
      appointmentTime
    ) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("number", number);
      formData.append("guidance", guidance);
      formData.append("area", area);
      formData.append("ward", ward);
      formData.append("hospital", hospital);
      formData.append("disease", disease);
      formData.append("specialist", specialist);
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
        setName("");
        setNumber("");
        setGuidance("");
        setArea("");
        setWard("");
        setHospital("");
        setDisease("");
        setSpecialist("");
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
              Emergency Form
            </h1>
          </div>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter name"
                  value={name}
                  className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="number"
                  className="leading-7 text-sm text-gray-600"
                >
                  Number
                </label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  placeholder="Enter phone number"
                  value={number}
                  className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="guidance"
                  className="leading-7 text-sm text-gray-600"
                >
                  Guidance
                </label>
                <input
                  type="text"
                  id="guidance"
                  name="guidance"
                  placeholder="Enter guidance"
                  value={guidance}
                  className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setGuidance(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="area"
                  className="leading-7 text-sm text-gray-600"
                >
                  Area
                </label>
                <select
                  id="area"
                  name="area"
                  value={area}
                  className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setArea(e.target.value)}
                >
                  <option value="">Select Area</option>
                  {areas.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="ward"
                  className="leading-7 text-sm text-gray-600"
                >
                  Ward
                </label>
                <input
                  type="text"
                  id="ward"
                  name="ward"
                  placeholder="Enter ward"
                  value={ward}
                  className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setWard(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="hospital"
                  className="leading-7 text-sm text-gray-600"
                >
                  Hospital
                </label>
                <select
                  id="hospital"
                  name="hospital"
                  value={hospital}
                  className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setHospital(e.target.value)}
                >
                  <option value="">Select Hospital</option>
                  {hospitals.map((h) => (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  ))}
                </select>
              </div>
            </div>
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
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="specialist"
                  className="leading-7 text-sm text-gray-600"
                >
                  Specialist
                </label>
                <select
                  id="specialist"
                  name="specialist"
                  value={specialist}
                  className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setSpecialist(e.target.value)}
                >
                  <option value="">Select Specialist</option>
                  {specialists.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
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
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"
              >
                {loading ? <ThreeDotLoader /> : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Emergency;
