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

const AddAmbulance = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [ambulances, setAmbulances] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiLoaded, setApiLoaded] = useState(false);

  const dummyAmbulances = [
    {
      _id: "dummy1",
      name: "Dummy Ambulance 1",
      contactNumber: "1234567890",
      image: "https://via.placeholder.com/150"
    },
    {
      _id: "dummy2",
      name: "Dummy Ambulance 2",
      contactNumber: "0987654321",
      image: "https://via.placeholder.com/150"
    }
  ];

  useEffect(() => {
    // Fetch initial ambulances if any
    const fetchAmbulances = async () => {
      try {
        const response = await axios.get("https://belikeerp-3.onrender.com/api/v1/admin/load-all-ambulances");
        console.log("API Response:", response.data);  // Log the API response
        setAmbulances(response.data.ambulances || []);
        setApiLoaded(true);
      } catch (error) {
        console.log("API Error:", error?.response?.data?.message);
        setApiLoaded(true);
      }
    };
    fetchAmbulances();
  }, []);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post("https://belikeerp-3.onrender.com/api/v1/admin/add-ambulance", data);
      handleShowSuccessToast(response.data.message);
      setAmbulances([...ambulances, response.data.ambulance]);
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
      const response = await axios.delete(`https://belikeerp-3.onrender.com/api/v1/admin/delete-ambulance/${id}`);
      handleShowSuccessToast(response.data.message);
      setAmbulances(ambulances.filter(ambulance => ambulance._id !== id));
      setLoading(false);
    } catch (error) {
      handleShowFailureToast(error.response.data.message);
      setLoading(false);
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      setLoading(true);
      const response = await axios.put(`https://belikeerp-3.onrender.com/api/v1/admin/update-ambulance/${id}`, updatedData);
      handleShowSuccessToast(response.data.message);
      const updatedAmbulances = ambulances.map(ambulance => {
        if (ambulance._id === id) {
          return { ...ambulance, ...updatedData };
        }
        return ambulance;
      });
      setAmbulances(updatedAmbulances);
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
        <button onClick={openModal} className="bg-[#033e71] text-white p-2 rounded">Add Ambulance</button>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Add Ambulance">
        <div className="flex justify-end">
          <button onClick={closeModal} className="bg-gray-500 text-white p-2 rounded">✕</button>
        </div>
        <h2 className="text-xl font-bold mb-4 text-center" style={{ color: '#033e71' }}>Add Ambulance</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="text-gray-600">
          <div className="mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" {...register("name", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {errors.name && <p className="text-red-500 text-xs mt-1">Name is required</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="contactNumber" className="leading-7 text-sm text-gray-600">Contact Number</label>
            <input type="text" id="contactNumber" {...register("contactNumber", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {errors.contactNumber && <p className="text-red-500 text-xs mt-1">Contact Number is required</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="leading-7 text-sm text-gray-600">Image or Logo</label>
            <input type="file" id="image" {...register("image")} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="flex justify-center">
            <button className="bg-[#033e71] text-white p-2 rounded" type="submit">
              {loading ? <ThreeDotLoader /> : "Add Ambulance"}
            </button>
          </div>
        </form>
      </Modal>

      <div className="mt-8 flex justify-center">
        <div className="w-full max-w-screen-lg">
          <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: '#033e71' }}>Added Ambulances</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Contact Number</th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Image</th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {apiLoaded && ambulances.length === 0 ? (
                  dummyAmbulances.map((ambulance) => (
                    <tr key={ambulance._id} className="text-black">
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{ambulance.name}</td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{ambulance.contactNumber}</td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        {ambulance.image && <img src={ambulance.image} alt="Ambulance" className="w-16 h-16 object-cover" />}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <button className="bg-red-500 text-white p-2 rounded" onClick={() => handleDelete(ambulance._id)}>Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  ambulances.map((ambulance) => (
                    <tr key={ambulance._id}>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{ambulance.name}</td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{ambulance.contactNumber}</td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        {ambulance.image && <img src={ambulance.image} alt="Ambulance" className="w-16 h-16 object-cover" />}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <button className="bg-red-500 text-white p-2 rounded" onClick={() => handleDelete(ambulance._id)}>Delete</button>
                        {/* Include an update button and form here if needed */}
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

export default AddAmbulance;
