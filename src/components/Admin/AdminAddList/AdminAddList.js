import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import ThreeDotLoader from '../../Loaders/ThreeDotLoader';

export const AdminAddList = ({ adminId, token }) => {
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchAdmissions = async () => {
      try {
        const response = await axios.get('https://belikeerp-3.onrender.com/api/v1/admin/load-all-admissions', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAdmissions(response.data.data);
        setLoading(false);
      } catch (error) {
        toast.error(error.response?.data?.message || 'Something went wrong');
        setLoading(false);
      }
    };

    fetchAdmissions();
  }, [token]);

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="px-4 py-6 md:px-8 bg-white">
      <Toaster />
      <div className="text-center w-full mb-6">
        <h1 className="sm:text-3xl text-2xl font-medium text-blue-900">Admissions</h1>
      </div>
      {loading ? (
        <ThreeDotLoader />
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-100 border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-navy text-blue-800">
              <tr>
                <th className="py-2 px-4">Student Name</th>
                <th className="py-2 px-4">Student Email</th>
                <th className="py-2 px-4">Student Phone</th>
                <th className="py-2 px-4">Student DOB</th>
                <th className="py-2 px-4">Student Address</th>
                <th className="py-2 px-4">Guardian Name</th>
                <th className="py-2 px-4">Guardian Phone</th>
                <th className="py-2 px-4">Student Class</th>
                <th className="py-2 px-4">Courses</th>
                <th className="py-2 px-4">Duration</th>
                <th className="py-2 px-4">Payment Method</th>
                <th className="py-2 px-4">Student ID Photo</th>
                <th className="py-2 px-4">Payment Slip</th>
                <th className="py-2 px-4">Submission Date</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {admissions.map((admission) => (
                <tr key={admission._id}>
                  <td className="py-2 px-4 border">{admission.studentName || ''}</td>
                  <td className="py-2 px-4 border">{admission.studentEmail || ''}</td>
                  <td className="py-2 px-4 border">{admission.studentPhone || ''}</td>
                  <td className="py-2 px-4 border">{admission.studentDOB ? new Date(admission.studentDOB).toLocaleDateString() : ''}</td>
                  <td className="py-2 px-4 border">{admission.studentAddress || ''}</td>
                  <td className="py-2 px-4 border">{admission.guardianName || ''}</td>
                  <td className="py-2 px-4 border">{admission.guardianPhone || ''}</td>
                  <td className="py-2 px-4 border">{admission.studentClass || ''}</td>
                  <td className="py-2 px-4 border">{admission.courseList ? admission.courseList.join(', ') : ''}</td>
                  <td className="py-2 px-4 border">{admission.duration || ''}</td>
                  <td className="py-2 px-4 border">{admission.paymentMethod || ''}</td>
                  <td className="py-2 px-4 border">
                    {admission.studentIdPhoto ? (
                      <img
                        src={admission.studentIdPhoto}
                        alt="Student Photo"
                        className="h-16 w-16 object-cover rounded-full cursor-pointer"
                        onClick={() => openImageModal(admission.studentIdPhoto)}
                      />
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="py-2 px-4 border">
                    {admission.paymentSlip ? (
                      <img
                        src={admission.paymentSlip}
                        alt="Payment Slip"
                        className="h-16 w-16 object-cover rounded cursor-pointer"
                        onClick={() => openImageModal(admission.paymentSlip)}
                      />
                    ) : (
                      'N/A'
                    )}
                  </td>
                  <td className="py-2 px-4 border">{admission.submissionDate ? new Date(admission.submissionDate).toLocaleDateString() : ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="max-w-xl max-h-full p-4 bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={selectedImage}
              alt="Selected Image"
              className="w-full h-auto"
            />
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={closeImageModal}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
