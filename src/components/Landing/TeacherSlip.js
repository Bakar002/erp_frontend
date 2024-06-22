import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import {
  handleShowFailureToast,
  handleShowSuccessToast,
} from "../ToastMessages/ToastMessage";

const TeacherSlip = () => {
  const [formData, setFormData] = useState({
    date: "",
    name: "",
    designation: "",
    salary: "",
    class: "",
  });

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem("entries"));
    if (storedEntries) {
      setEntries(storedEntries);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddEntry = (e) => {
    e.preventDefault();
    setEntries([...entries, { ...formData, salary: parseFloat(formData.salary) }]);
    setFormData({ date: "", name: "", designation: "", salary: "", class: "" });
  };

  const handlePrint = () => {
    const printContents = document.getElementById("print-section").innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  const totalSalary = entries.reduce((total, entry) => total + entry.salary, 0);

  return (
    <div>
      <Toaster />
      <main className="text-slate-800 pt-24 h-[90vh] flex flex-col">
        <h1 className="text-center text-2xl text-slate-800">Salary Receipt</h1>
        <div className="p-12 flex-grow bg-white rounded-2xl shadow-xl">
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Enter Details</h2>
            <form className="space-y-4" onSubmit={handleAddEntry}>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Designation</label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Salary</label>
                <input
                  type="number"
                  name="salary"
                  value={formData.salary}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Class</label>
                <input
                  type="text"
                  name="class"
                  value={formData.class}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add Entry
              </button>
            </form>
            <div className="mt-8 flex space-x-4">
              <button
                onClick={handlePrint}
                className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Print Receipt
              </button>
            </div>
          </div>

          <div id="print-section">
            {entries.length > 0 && (
              <div>
                <h2 className="text-slate-600 font-bold text-sm py-6 uppercase">Summary</h2>
                <div className="bg-slate-100 px-6 py-2 rounded-md">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b text-slate-500">
                        <th className="py-2">Date</th>
                        <th className="py-2">Name</th>
                        <th className="py-2">Designation</th>
                        <th className="py-2">Class</th>
                        <th className="py-2">Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      {entries.map((entry, index) => (
                        <tr key={index} className="border-b text-slate-700">
                          <td className="py-2">{entry.date}</td>
                          <td className="py-2">{entry.name}</td>
                          <td className="py-2">{entry.designation}</td>
                          <td className="py-2">{entry.class}</td>
                          <td className="py-2">Rs: {entry.salary.toFixed(2)}</td>
                        </tr>
                      ))}
                      <tr className="font-bold text-slate-700">
                        <td className="py-2" colSpan="4">Total Salaries</td>
                        <td className="py-2">Rs: {totalSalary.toFixed(2)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeacherSlip;
