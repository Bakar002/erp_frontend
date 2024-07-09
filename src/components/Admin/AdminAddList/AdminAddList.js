import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import ThreeDotLoader from '../../Loaders/ThreeDotLoader';

export const AdminAddList = ({ adminId, token }) => {
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="px-4 py-6 md:px-8 bg-white">
      <Toaster />
      <div className="text-center w-full mb-6">
        <h1 className="sm:text-3xl text-2xl font-medium text-gray-900">Admin Dashboard</h1>
      </div>
      {loading ? (
        <ThreeDotLoader />
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border">Student Name</th>
                <th className="py-2 px-4 border">Student Email</th>
                <th className="py-2 px-4 border">Student Phone</th>
                <th className="py-2 px-4 border">Student DOB</th>
                <th className="py-2 px-4 border">Student Address</th>
                <th className="py-2 px-4 border">Guardian Name</th>
                <th className="py-2 px-4 border">Guardian Phone</th>
                <th className="py-2 px-4 border">Student Class</th>
                <th className="py-2 px-4 border">Student Photo</th>
                <th className="py-2 px-4 border">Last Degree</th>
              </tr>
            </thead>
            <tbody>
              {admissions.map((admission) => (
                <tr key={admission._id} className="text-gray-700">
                  <td className="py-2 px-4 border">{admission.studentName}</td>
                  <td className="py-2 px-4 border">{admission.studentEmail}</td>
                  <td className="py-2 px-4 border">{admission.studentPhone}</td>
                  <td className="py-2 px-4 border">{new Date(admission.studentDOB).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border">{admission.studentAddress}</td>
                  <td className="py-2 px-4 border">{admission.guardianName}</td>
                  <td className="py-2 px-4 border">{admission.guardianPhone}</td>
                  <td className="py-2 px-4 border">{admission.studentClass}</td>
                  <td className="py-2 px-4 border">
                    <img src={admission.studentPhoto} alt="Student Photo" className="h-16 w-16 object-cover rounded-full" />
                  </td>
                  <td className="py-2 px-4 border">
                    <img src={admission.lastDegree} alt="Last Degree" className="h-16 w-16 object-cover rounded" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};


