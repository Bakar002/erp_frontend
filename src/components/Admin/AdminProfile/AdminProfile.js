import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { handleShowFailureToast, handleShowSuccessToast } from "../../ToastMessages/ToastMessage";
import  loadCurrentAdminAction  from "../../Redux/Admin/Actions/loadCurrentAdminAction.Admin";
import Modal from "react-modal";

Modal.setAppElement('#root'); // Ensure accessibility

const  AdminProfile =()=> {
  const dispatch = useDispatch();
  const { currentAdminData } = useSelector((state) => state.currentAdminData);
  const [isEditing, setIsEditing] = useState(false);
  const adminId = currentAdminData?.admin?._id; // Get the current admin's ID

  const [adminDetails, setAdminDetails] = useState({
    adminName: currentAdminData?.admin?.adminName || "",
    adminEmail: currentAdminData?.admin?.adminEmail || "",
    address: currentAdminData?.admin?.address || "",
    locationLink: currentAdminData?.admin?.locationLink || "",
    contactNumber: currentAdminData?.admin?.contactNumber || "",
    adminAvatar: currentAdminData?.admin?.adminAvatar || "",
  });

  const handleInputChange = (e) => {
    setAdminDetails({ ...adminDetails, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setAdminDetails({ ...adminDetails, adminAvatar: e.target.files[0] });
  };

  const handleSave = async () => {
    const formData = new FormData();
    Object.keys(adminDetails).forEach((key) => {
      formData.append(key, adminDetails[key]);
    });

    try {
      const response = await axios.put(
        `https://belikeerp-3.onrender.com/api/v1/admin/updateadmin/${adminId}`, // Replace with your update profile API endpoint
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      handleShowSuccessToast("Profile updated successfully!");
      dispatch(loadCurrentAdminAction()); // Reload current admin data
      setIsEditing(false);
    } catch (error) {
      handleShowFailureToast(error.response.data.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-md rounded-lg p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Profile</h1>
      <div className="flex justify-center mb-6">
        <img
          src={typeof adminDetails.adminAvatar === "string" ? adminDetails.adminAvatar : URL.createObjectURL(adminDetails.adminAvatar)}
          alt="Admin Avatar"
          className="w-24 h-24 rounded-full shadow-lg"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="adminName"
            value={adminDetails.adminName}
            onChange={handleInputChange}
            className="mt-1 p-3 text-black block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            disabled={!isEditing}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="adminEmail"
            value={adminDetails.adminEmail}
            onChange={handleInputChange}
            className="mt-1 p-3 text-black block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            disabled={!isEditing}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={adminDetails.address}
            onChange={handleInputChange}
            className="mt-1 p-3 text-black block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            disabled={!isEditing}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Location Link</label>
          <input
            type="text"
            name="locationLink"
            value={adminDetails.locationLink}
            onChange={handleInputChange}
            className="mt-1 p-3 text-black block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            disabled={!isEditing}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            value={adminDetails.contactNumber}
            onChange={handleInputChange}
            className="mt-1 p-3 text-black block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            disabled={!isEditing}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Avatar</label>
          <input
            type="file"
            name="adminAvatar"
            onChange={handleFileChange}
            className="mt-1 p-3 text-black block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            disabled={!isEditing}
          />
        </div>
      </div>
      <div className="flex justify-center mt-6">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
}

export default AdminProfile;
