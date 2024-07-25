import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import {
  handleShowFailureToast,
  handleShowSuccessToast,
} from "../../../components/ToastMessages/ToastMessage";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import ThreeDotLoader from "../../../components/Loaders/ThreeDotLoader";

// Modal styles
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '500px',
  },
};

Modal.setAppElement('#root');

const AddDoctor = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [doctors, setDoctors] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiLoaded, setApiLoaded] = useState(false);
  const [hospitals, setHospitals] = useState([]);
  const [specializations, setSpecializations] = useState([]);

  useEffect(() => {
    const fetchHospitalsAndSpecializations = async () => {
      try {
        const [hospitalsResponse, specializationsResponse] = await Promise.all([
          axios.get("https://belikeerp-3.onrender.com/api/v1/admin/load-all-hospitals"),
          axios.get("https://belikeerp-3.onrender.com/api/v1/admin/load-all-specializations")
        ]);
        setHospitals(hospitalsResponse.data.hospitals || []);
        setSpecializations(specializationsResponse.data.specializations || []);
      } catch (error) {
        console.log("API Error:", error?.response?.data?.message);
      }
    };
    fetchHospitalsAndSpecializations();
  }, []);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post("https://belikeerp-3.onrender.com/api/v1/admin/add-doctor", data);
      handleShowSuccessToast(response.data.message);
      setDoctors([...doctors, response.data.doctor]);
      setLoading(false);
      closeModal();
      reset(); // Reset form fields after successful submission
    } catch (error) {
      handleShowFailureToast(error.response.data.message);
      setLoading(false);
    }
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const response = await axios.delete(`https://belikeerp-3.onrender.com/api/v1/admin/delete-doctor/${id}`);
      handleShowSuccessToast(response.data.message);
      setDoctors(doctors.filter(doctor => doctor._id !== id));
      setLoading(false);
    } catch (error) {
      handleShowFailureToast(error.response.data.message);
      setLoading(false);
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      setLoading(true);
      const response = await axios.put(`https://belikeerp-3.onrender.com/api/v1/admin/update-doctor/${id}`, updatedData);
      handleShowSuccessToast(response.data.message);
      const updatedDoctors = doctors.map(doctor => {
        if (doctor._id === id) {
          return { ...doctor, ...updatedData };
        }
        return doctor;
      });
      setDoctors(updatedDoctors);
      setLoading(false);
    } catch (error) {
      handleShowFailureToast(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div className="md:px-8 mt-4">
      <Toaster />
      <div className="flex justify-end mb-4">
        <button onClick={openModal} className="bg-[#033e71] text-white p-2 rounded">Add Doctor</button>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Add Doctor">
        <div className="flex justify-end">
          <button onClick={closeModal} className="bg-gray-500 text-white p-2 rounded">✕</button>
        </div>
        <h2 className="text-xl font-bold mb-4 text-center" style={{ color: '#033e71' }}>Add Doctor</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="text-gray-600 grid gap-4 grid-cols-1 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" {...register("name", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {errors.name && <p className="text-red-500 text-xs mt-1">Name is required</p>}
          </div>
          <div>
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" {...register("email", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {errors.email && <p className="text-red-500 text-xs mt-1">Email is required</p>}
          </div>
          <div>
            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
            <input type="password" id="password" {...register("password", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {errors.password && <p className="text-red-500 text-xs mt-1">Password is required</p>}
          </div>
          <div>
            <label htmlFor="image" className="leading-7 text-sm text-gray-600">Image or Logo</label>
            <input type="file" id="image" {...register("image")} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div>
            <label htmlFor="hospital" className="leading-7 text-sm text-gray-600">Hospital</label>
            <select id="hospital" {...register("hospital", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              <option value="">Select Hospital</option>
              {hospitals.map(hospital => (
                <option key={hospital._id} value={hospital._id}>{hospital.name}</option>
              ))}
            </select>
            {errors.hospital && <p className="text-red-500 text-xs mt-1">Hospital is required</p>}
          </div>
          <div>
            <label htmlFor="specialization" className="leading-7 text-sm text-gray-600">Specialization</label>
            <select id="specialization" {...register("specialization", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              <option value="">Select Specialization</option>
              {specializations.map(specialization => (
                <option key={specialization._id} value={specialization._id}>{specialization.name}</option>
              ))}
            </select>
            {errors.specialization && <p className="text-red-500 text-xs mt-1">Specialization is required</p>}
          </div>
          <div>
            <label htmlFor="pmdcApproval" className="leading-7 text-sm text-gray-600">PMDC Approval</label>
            <input type="text" id="pmdcApproval" {...register("pmdcApproval")} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div>
            <label htmlFor="fees" className="leading-7 text-sm text-gray-600">Fees</label>
            <input type="number" id="fees" {...register("fees")} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="col-span-1 sm:col-span-2">
            <button type="submit" className="w-full bg-[#033e71] text-white p-2 rounded">{loading ? <ThreeDotLoader /> : "Add Doctor"}</button>
          </div>
        </form>
      </Modal>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Hospital</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Specialization</th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {doctors.map((doctor) => (
              <tr key={doctor._id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{doctor.name}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{doctor.email}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{doctor.hospital.name}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{doctor.specialization.name}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <button onClick={() => handleDelete(doctor._id)} className="text-red-600 hover:text-red-900 mr-2">Delete</button>
                  <button onClick={() => handleUpdate(doctor._id, doctor)} className="text-indigo-600 hover:text-indigo-900">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddDoctor;
