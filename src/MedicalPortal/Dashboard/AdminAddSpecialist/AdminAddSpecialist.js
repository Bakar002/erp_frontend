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

const AddSpecialist = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [specialists, setSpecialists] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiLoaded, setApiLoaded] = useState(false);

  const dummySpecialists = [
    { _id: '1', name: 'Dummy Specialist 1', logo: null },
    { _id: '2', name: 'Dummy Specialist 2', logo: null },
    { _id: '3', name: 'Dummy Specialist 3', logo: null },
  ];

  useEffect(() => {
    // Fetch initial specialists if any
    const fetchSpecialists = async () => {
      try {
        const response = await axios.get("https://belikeerp-3.onrender.com/api/v1/admin/load-all-specialists");
        console.log("API Response:", response.data);  // Log the API response
        setSpecialists(response.data.specialists || []);
        setApiLoaded(true);
      } catch (error) {
        console.log("API Error:", error?.response?.data?.message);
        setApiLoaded(true);
      }
    };
    fetchSpecialists();
  }, []);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post("https://belikeerp-3.onrender.com/api/v1/admin/add-specialist", data);
      handleShowSuccessToast(response.data.message);
      setSpecialists([...specialists, response.data.specialist]);
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
      const response = await axios.delete(`https://belikeerp-3.onrender.com/api/v1/admin/delete-specialist/${id}`);
      handleShowSuccessToast(response.data.message);
      setSpecialists(specialists.filter(specialist => specialist._id !== id));
      setLoading(false);
    } catch (error) {
      handleShowFailureToast(error.response.data.message);
      setLoading(false);
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      setLoading(true);
      const response = await axios.put(`https://belikeerp-3.onrender.com/api/v1/admin/update-specialist/${id}`, updatedData);
      handleShowSuccessToast(response.data.message);
      const updatedSpecialists = specialists.map(specialist => {
        if (specialist._id === id) {
          return { ...specialist, ...updatedData };
        }
        return specialist;
      });
      setSpecialists(updatedSpecialists);
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
        <button onClick={openModal} className="bg-[#033e71] text-white p-2 rounded">Add Specialist</button>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Add Specialist">
        <div className="flex justify-end">
          <button onClick={closeModal} className="bg-gray-500 text-white p-2 rounded">✕</button>
        </div>
        <h2 className="text-xl font-bold mb-4 text-center" style={{ color: '#033e71' }}>Add Specialist</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="text-gray-600">
          <div className="mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" {...register("name", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {errors.name && <p className="text-red-500 text-xs mt-1">Name is required</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="logo" className="leading-7 text-sm text-gray-600">Logo</label>
            <input type="file" id="logo" {...register("logo")} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="flex justify-center">
            <button className="bg-[#033e71] text-white p-2 rounded" type="submit">
              {loading ? <ThreeDotLoader /> : "Add Specialist"}
            </button>
          </div>
        </form>
      </Modal>

      <div className="mt-8 flex justify-center">
        <div className="w-full max-w-screen-lg">
          <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: '#033e71' }}>Added Specialists</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Logo</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {!apiLoaded ? (
                  dummySpecialists.map((specialist) => (
                    <tr key={specialist._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{specialist.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{specialist.logo ? <img src={specialist.logo} alt="Specialist Logo" className="w-10 h-10 rounded-full" /> : "No Logo"}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="bg-[#033e71] hover:bg-blue-700 text-white px-3 py-1 rounded mr-2" disabled>Update</button>
                        <button className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded" disabled>Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  specialists.map((specialist) => (
                    <tr key={specialist._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{specialist.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{specialist.logo ? <img src={specialist.logo} alt="Specialist Logo" className="w-10 h-10 rounded-full" /> : "No Logo"}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="bg-[#033e71] hover:bg-blue-700 text-white px-3 py-1 rounded mr-2" onClick={() => handleUpdate(specialist._id, { name: 'Updated Specialist' })}>Update</button>
                        <button className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded" onClick={() => handleDelete(specialist._id)}>Delete</button>
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

export default AddSpecialist;
