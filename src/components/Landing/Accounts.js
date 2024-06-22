import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import {
  handleShowFailureToast,
  handleShowSuccessToast,
} from "../ToastMessages/ToastMessage";

const Accounts = () => {
  const [formData, setFormData] = useState({
    date: "",
    studentName: "",
    studentFee: "",
    teacherName: "",
    teacherSalary: "",
    rent: "",
    otherExpenses: "",
  });

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem("expenseEntries"));
    if (storedEntries) {
      setEntries(storedEntries);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("expenseEntries", JSON.stringify(entries));
    console.log("Entries saved to local storage:", entries);
  }, [entries]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddEntry = (e) => {
    e.preventDefault();
    if (formData.date) {
      setEntries([
        ...entries,
        {
          ...formData,
          studentFee: parseFloat(formData.studentFee) || 0,
          teacherSalary: parseFloat(formData.teacherSalary) || 0,
          rent: parseFloat(formData.rent) || 0,
          otherExpenses: parseFloat(formData.otherExpenses) || 0,
        },
      ]);
      setFormData({
        date: "",
        studentName: "",
        studentFee: "",
        teacherName: "",
        teacherSalary: "",
        rent: "",
        otherExpenses: "",
      });
      handleShowSuccessToast("Expense added successfully.");
    } else {
      handleShowFailureToast("Date is required.");
    }
  };

  const handlePrint = () => {
    const printContents = document.getElementById("print-section").innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  const totalExpenses = entries.reduce((total, entry) => {
    return (
      total +
      entry.studentFee +
      entry.teacherSalary +
      entry.rent +
      entry.otherExpenses
    );
  }, 0);

  return (
    <div>
      <Toaster />
      <main className="text-slate-800 pt-24 h-[90vh] flex flex-col">
        <h1 className="text-center text-2xl text-slate-800">Expense Sheet</h1>
        <div className="p-12 flex-grow bg-white rounded-2xl shadow-xl">
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Enter Expenses</h2>
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
                <label className="block text-sm font-medium text-gray-700">
                  Student Name
                </label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Fee of Student
                </label>
                <input
                  type="number"
                  name="studentFee"
                  value={formData.studentFee}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Teacher Name
                </label>
                <input
                  type="text"
                  name="teacherName"
                  value={formData.teacherName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Salary of Teacher
                </label>
                <input
                  type="number"
                  name="teacherSalary"
                  value={formData.teacherSalary}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Rent</label>
                <input
                  type="number"
                  name="rent"
                  value={formData.rent}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Other Expenses
                </label>
                <input
                  type="number"
                  name="otherExpenses"
                  value={formData.otherExpenses}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add Expense
              </button>
            </form>
            <div className="mt-8 flex space-x-4">
              <button
                onClick={handlePrint}
                className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Print Expense Sheet
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
                        <th className="py-2">Student Name</th>
                        <th className="py-2">Fee of Student</th>
                        <th className="py-2">Teacher Name</th>
                        <th className="py-2">Salary of Teacher</th>
                        <th className="py-2">Rent</th>
                        <th className="py-2">Other Expenses</th>
                        <th className="py-2">Total Expense</th>
                      </tr>
                    </thead>
                    <tbody>
                      {entries.map((entry, index) => {
                        const totalExpense =
                          entry.studentFee +
                          entry.teacherSalary +
                          entry.rent +
                          entry.otherExpenses;
                        return (
                          <tr key={index} className="border-b text-slate-700">
                            <td className="py-2">{entry.date}</td>
                            <td className="py-2">{entry.studentName}</td>
                            <td className="py-2">{entry.studentFee.toFixed(2)}</td>
                            <td className="py-2">{entry.teacherName}</td>
                            <td className="py-2">{entry.teacherSalary.toFixed(2)}</td>
                            <td className="py-2">{entry.rent.toFixed(2)}</td>
                            <td className="py-2">{entry.otherExpenses.toFixed(2)}</td>
                            <td className="py-2">Rs: {totalExpense.toFixed(2)}</td>
                          </tr>
                        );
                      })}
                      <tr className="font-bold text-slate-700">
                        <td className="py-2" colSpan="7">Total Expenses</td>
                        <td className="py-2">Rs: {totalExpenses.toFixed(2)}</td>
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

export default Accounts;
