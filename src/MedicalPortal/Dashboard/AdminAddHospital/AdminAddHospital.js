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
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const AddHospital = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [hospitals, setHospitals] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiLoaded, setApiLoaded] = useState(false);

  const dummyHospitals = [
    {
      _id: "dummy1",
      name: "Dummy Hospital 1",
      emergencyContact: "1234567890",
      logo: "https://via.placeholder.com/150",
      locationLink: "https://maps.google.com/?q=loc:0,0",
    },
    {
      _id: "dummy2",
      name: "Dummy Hospital 2",
      emergencyContact: "0987654321",
      logo: "https://via.placeholder.com/150",
      locationLink: "https://maps.google.com/?q=loc:0,0",
    },
  ];

  useEffect(() => {
    // Fetch initial hospitals if any
    const fetchHospitals = async () => {
      try {
        const response = await axios.get("https://belikeerp-3.onrender.com/api/v1/admin/load-all-hospitals");
        console.log("API Response:", response.data);  // Log the API response
        setHospitals(response.data.hospitals || []);
        setApiLoaded(true);
      } catch (error) {
        console.log("API Error:", error?.response?.data?.message);
        setApiLoaded(true);
      }
    };
    fetchHospitals();
  }, []);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post("https://belikeerp-3.onrender.com/api/v1/admin/add-hospital", data);
      handleShowSuccessToast(response.data.message);
      setHospitals([...hospitals, response.data.hospital]);
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
      const response = await axios.delete(`https://belikeerp-3.onrender.com/api/v1/admin/delete-hospital/${id}`);
      handleShowSuccessToast(response.data.message);
      setHospitals(hospitals.filter((hospital) => hospital._id !== id));
      setLoading(false);
    } catch (error) {
      handleShowFailureToast(error.response.data.message);
      setLoading(false);
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      setLoading(true);
      const response = await axios.put(`https://belikeerp-3.onrender.com/api/v1/admin/update-hospital/${id}`, updatedData);
      handleShowSuccessToast(response.data.message);
      const updatedHospitals = hospitals.map((hospital) => {
        if (hospital._id === id) {
          return { ...hospital, ...updatedData };
        }
        return hospital;
      });
      setHospitals(updatedHospitals);
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
        <button onClick={openModal} className="bg-[#033e71] text-white p-2 rounded">Add Hospital</button>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Add Hospital">
        <div className="flex justify-end">
          <button onClick={closeModal} className="bg-gray-500 text-white p-2 rounded">✕</button>
        </div>
        <h2 className="text-xl font-bold mb-4 text-center" style={{ color: '#033e71' }}>Add Hospital</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="text-gray-600">
          <div className="mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" {...register("name", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {errors.name && <p className="text-red-500 text-xs mt-1">Name is required</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="emergencyContact" className="leading-7 text-sm text-gray-600">Emergency Contact</label>
            <input type="text" id="emergencyContact" {...register("emergencyContact", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {errors.emergencyContact && <p className="text-red-500 text-xs mt-1">Emergency Contact is required</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="logo" className="leading-7 text-sm text-gray-600">Logo</label>
            <input type="file" id="logo" {...register("logo")} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="mb-4">
            <label htmlFor="locationLink" className="leading-7 text-sm text-gray-600">Location Link</label>
            <input type="url" id="locationLink" {...register("locationLink", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#033e71] focus:bg-white focus:ring-2 focus:ring-[#033e71] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {errors.locationLink && <p className="text-red-500 text-xs mt-1">Location Link is required</p>}
          </div>
          <div className="flex justify-center">
            <button className="bg-[#033e71] text-white p-2 rounded" type="submit">
              {loading ? <ThreeDotLoader /> : "Add Hospital"}
            </button>
          </div>
        </form>
      </Modal>

      <div className="mt-8 flex justify-center">
        <div className="w-full max-w-screen-lg">
          <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: '#033e71' }}>Added Hospitals</h2>
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Emergency Contact
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Logo
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location Link
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
                {(apiLoaded ? hospitals : dummyHospitals).map((hospital) => (
                  <tr key={hospital._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{hospital.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{hospital.emergencyContact}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img src={hospital.logo} alt="Logo" className="w-12 h-12 object-contain" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <a href={hospital.locationLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-900">
                        View Location
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleUpdate(hospital._id, { name: hospital.name, emergencyContact: hospital.emergencyContact, locationLink: hospital.locationLink })}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleDelete(hospital._id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddHospital;
