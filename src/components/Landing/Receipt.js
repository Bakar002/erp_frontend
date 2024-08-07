import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import {
  handleShowFailureToast,
  handleShowSuccessToast,
} from "../ToastMessages/ToastMessage";
import axios from "axios";

const ReceiptApp = () => {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    fee: "",
    rollNumber: "",
    dueDate: "",
    paymentMethod: "",
    showBankDetails: false,
  });


    const handleSubmit = async () => {
      try {
        const response = await axios.post('https://belikeerp-3.onrender.com/api/v1/student/receipts/', formData);
        console.log('Receipt saved:', response.data);
        handleShowSuccessToast(response.data.message);
      } catch (error) {
        console.error('Error saving receipt:', error);
        handleShowFailureToast(error.response.data.message);
      }
    };




  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePaymentMethodChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      paymentMethod: value,
      showBankDetails: value === "online",
    });
  };

  const handlePrint = () => {
    const printContents = document.getElementById("print-section").innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <Toaster />
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 -z-10 absolute -left-[2cm] right-[25vw] -skew-y-12 h-[100vh] bottom-[95vh]" />
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 -z-20 absolute left-[75vw] -right-[2cm] -skew-y-12 h-[100vh] bottom-[90vh]" />
      <div className="bg-slate-100 -rotate-12 -z-10 absolute -left-[200em] -right-[200em] h-[100vh] top-[75vh]" />
      <main className="text-slate-800 pt-24 h-[90vh] flex flex-col items-center">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 24 24"
          className="mx-auto w-32 mb-12 fill-blue-800"
        >
          <g>
            <path
              d="M22.45,12.12c0-2.91-0.99-5.33-3.03-7.34C17.42,2.76,14.96,1.74,12,1.74c-2.93,0-5.4,1.02-7.43,3.05
              C2.56,6.8,1.55,9.26,1.55,12.15c0,0.84,0.11,1.63,0.27,2.37l9.71-7.65h5.01v14.58c1.06-0.5,2.03-1.13,2.91-1.99
              C21.46,17.45,22.45,15.01,22.45,12.12z"
            />
            <path d="M4.91,19.78c1.4,1.26,3.03,2.12,4.9,2.48v-6.32L4.91,19.78z" />
          </g>
        </svg>
        <h1 className="text-center text-3xl font-bold text-slate-800 mb-8">
          Receipt from Your School
        </h1>
        <div className="w-full max-w-4xl p-8 bg-white rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6">Enter Student Details</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Class
              </label>
              <input
                type="text"
                name="class"
                value={formData.class}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Fee Amount
              </label>
              <input
                type="text"
                name="fee"
                value={formData.fee}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Roll Number/ID
              </label>
              <input
                type="text"
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Due Date
              </label>
              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Payment Method
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handlePaymentMethodChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Select Payment Method</option>
                <option value="physical">Physical</option>
                <option value="online">Online</option>
              </select>
            </div>
          </form>
          {formData.showBankDetails && (
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-700">
                Bank Accounts
              </h3>
              <p className="text-sm text-gray-500">Bank Account 1: 12345678</p>
              <p className="text-sm text-gray-500">Bank Account 2: 87654321</p>
            </div>
          )}
          <div className="mt-8 flex space-x-4">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Print Receipt
            </button>
          </div>
          <div className="mt-8 flex space-x-4">
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </div>

        <div id="print-section" className="mt-12 bg-white rounded-2xl p-8 shadow-xl w-full max-w-4xl">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Receipt Summary</h2>
            <p className="text-sm text-slate-400">Receipt #10192</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="text-sm text-gray-400 font-bold uppercase pb-1">
                Fees to be paid
              </div>
              <div className="flex gap-4 items-center">Rs: {formData.fee}</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 font-bold uppercase pb-1">
                Class
              </div>
              <div className="flex gap-4 items-center">{formData.class}</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 font-bold uppercase pb-1">
                Roll Number/ID
              </div>
              <div className="flex gap-4 items-center">{formData.rollNumber}</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 font-bold uppercase pb-1">
                Payment method
              </div>
              <div className="flex gap-4 items-center font-mono">
                {formData.paymentMethod === "physical"
                  ? "Physical"
                  : formData.paymentMethod === "online"
                  ? "Online"
                  : ""}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-400 font-bold uppercase pb-1">
                Due Date
              </div>
              <div className="flex gap-4 items-center">{formData.dueDate}</div>
            </div>
          </div>
          <h2 className="text-slate-600 font-bold text-lg py-6 uppercase">
            Detailed Summary
          </h2>
          <div className="bg-slate-100 px-6 py-4 rounded-md">
            <table className="w-full">
              <tbody>
                <tr className="border-b text-slate-500">
                  <td className="py-4">Name</td>
                  <td className="py-4">{formData.name}</td>
                </tr>
                <tr className="border-b text-slate-500">
                  <td className="py-4">Class</td>
                  <td className="py-4">{formData.class}</td>
                </tr>
                <tr className="border-b text-slate-500">
                  <td className="py-4">Roll Number/ID</td>
                  <td className="py-4">{formData.rollNumber}</td>
                </tr>
                <tr className="border-b text-slate-500">
                  <td className="py-4">Due Date</td>
                  <td className="py-4">{formData.dueDate}</td>
                </tr>
                <tr className="font-bold text-slate-700">
                  <td className="py-4">Fees</td>
                  <td className="py-4">Rs: {formData.fee}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReceiptApp;
