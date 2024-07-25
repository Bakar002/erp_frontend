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
  },
};

Modal.setAppElement('#root');

const AddPharmacy = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [pharmacies, setPharmacies] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiLoaded, setApiLoaded] = useState(false);

  const dummyPharmacies = [
    { _id: 1, name: "Pharmacy A", email: "pharmacyA@example.com", logo: "", password: "" },
    { _id: 2, name: "Pharmacy B", email: "pharmacyB@example.com", logo: "", password: "" }
  ];

  useEffect(() => {
    // Fetch initial pharmacies if any
    const fetchPharmacies = async () => {
      try {
        const response = await axios.get("https://belikeerp-3.onrender.com/api/v1/admin/load-all-pharmacies");
        console.log("API Response:", response.data);  // Log the API response
        setPharmacies(response.data.pharmacies || []);
        setApiLoaded(true);
      } catch (error) {
        console.log("API Error:", error?.response?.data?.message);
        setApiLoaded(true);
      }
    };
    fetchPharmacies();
  }, []);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post("https://belikeerp-3.onrender.com/api/v1/admin/add-pharmacy", data);
      handleShowSuccessToast(response.data.message);
      setPharmacies([...pharmacies, response.data.pharmacy]);
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
      const response = await axios.delete(`https://belikeerp-3.onrender.com/api/v1/admin/delete-pharmacy/${id}`);
      handleShowSuccessToast(response.data.message);
      setPharmacies(pharmacies.filter(pharmacy => pharmacy._id !== id));
      setLoading(false);
    } catch (error) {
      handleShowFailureToast(error.response.data.message);
      setLoading(false);
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      setLoading(true);
      const response = await axios.put(`https://belikeerp-3.onrender.com/api/v1/admin/update-pharmacy/${id}`, updatedData);
      handleShowSuccessToast(response.data.message);
      const updatedPharmacies = pharmacies.map(pharmacy => {
        if (pharmacy._id === id) {
          return { ...pharmacy, ...updatedData };
        }
        return pharmacy;
      });
      setPharmacies(updatedPharmacies);
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
        <button onClick={openModal} className="bg-[#033e71] text-white p-2 rounded">Add Pharmacy</button>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Add Pharmacy">
        <div className="flex justify-end">
          <button onClick={closeModal} className="bg-gray-500 text-white p-2 rounded">✕</button>
        </div>
        <h2 className="text-xl font-bold mb-4 text-center" style={{ color: '#033e71' }}>Add Pharmacy</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="text-gray-600">
          <div className="mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" {...register("name", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {errors.name && <p className="text-red-500 text-xs mt-1">Name is required</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" {...register("email", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {errors.email && <p className="text-red-500 text-xs mt-1">Email is required</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
            <input type="password" id="password" {...register("password", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {errors.password && <p className="text-red-500 text-xs mt-1">Password is required</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="logo" className="leading-7 text-sm text-gray-600">Logo</label>
            <input type="file" id="logo" {...register("logo")} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="flex justify-center">
            <button className="bg-[#033e71] text-white p-2 rounded" type="submit">
              {loading ? <ThreeDotLoader /> : "Add Pharmacy"}
            </button>
          </div>
        </form>
      </Modal>

      <div className="mt-8 flex justify-center">
        <div className="w-full max-w-screen-lg">
          <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: '#033e71' }}>Added Pharmacies</h2>
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Logo
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {!apiLoaded ? (
                  dummyPharmacies.map((pharmacy) => (
                    <tr key={pharmacy._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{pharmacy.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pharmacy.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pharmacy.logo ? <img src={pharmacy.logo} alt="Pharmacy Logo" className="w-10 h-10 rounded-full" /> : "No Logo"}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="bg-[#033e71] hover:bg-blue-700 text-white px-3 py-1 rounded mr-2" disabled>Update</button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded" disabled>Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  pharmacies.map((pharmacy) => (
                    <tr key={pharmacy._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{pharmacy.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pharmacy.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pharmacy.logo ? <img src={pharmacy.logo} alt="Pharmacy Logo" className="w-10 h-10 rounded-full" /> : "No Logo"}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="bg-[#033e71] hover:bg-blue-700 text-white px-3 py-1 rounded mr-2" onClick={() => handleUpdate(pharmacy._id, { name: 'Updated Pharmacy' })}>Update</button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded" onClick={() => handleDelete(pharmacy._id)}>Delete</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPharmacy;
