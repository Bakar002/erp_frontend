import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import {
  handleShowFailureToast,
  handleShowSuccessToast,
} from "../../components/ToastMessages/ToastMessage";

const PatientSlips = () => {
  const [formData, setFormData] = useState({
    doctorName: "",
    doctorEmail: "",
    patientName: "",
    patientEmail: "",
    patientPhone: "",
    patientDisease: "",
    medicines: [{ name: "", dose: "" }],
  });

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem("patientEntries"));
    if (storedEntries) {
      setEntries(storedEntries);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("patientEntries", JSON.stringify(entries));
    console.log("Entries saved to local storage:", entries);
  }, [entries]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("medicine")) {
      const index = parseInt(name.split("-")[1]);
      const key = name.split("-")[2];
      const newMedicines = [...formData.medicines];
      newMedicines[index][key] = value;
      setFormData({ ...formData, medicines: newMedicines });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddMedicine = () => {
    setFormData({
      ...formData,
      medicines: [...formData.medicines, { name: "", dose: "" }],
    });
  };

  const handleRemoveMedicine = (index) => {
    const newMedicines = formData.medicines.filter((_, i) => i !== index);
    setFormData({ ...formData, medicines: newMedicines });
  };

  const handleAddEntry = (e) => {
    e.preventDefault();
    if (formData.patientName && formData.patientPhone) {
      setEntries([...entries, formData]);
      setFormData({
        doctorName: "",
        doctorEmail: "",
        patientName: "",
        patientEmail: "",
        patientPhone: "",
        patientDisease: "",
        medicines: [{ name: "", dose: "" }],
      });
      handleShowSuccessToast("Patient slip added successfully.");
    } else {
      handleShowFailureToast("Patient Name and Phone are required.");
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

  return (
    <div>
      <Toaster />
      <main className="text-slate-800 pt-24 h-[90vh] flex flex-col">
        <h1 className="text-center text-2xl text-slate-800">Patient Slip</h1>
        <div className="p-12 flex-grow bg-white rounded-2xl shadow-xl">
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Enter Patient Details</h2>
            <form className="space-y-4" onSubmit={handleAddEntry}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Doctor Name
                </label>
                <input
                  type="text"
                  name="doctorName"
                  value={formData.doctorName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Doctor Email
                </label>
                <input
                  type="email"
                  name="doctorEmail"
                  value={formData.doctorEmail}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Patient Name
                </label>
                <input
                  type="text"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Patient Email
                </label>
                <input
                  type="email"
                  name="patientEmail"
                  value={formData.patientEmail}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Patient Phone
                </label>
                <input
                  type="tel"
                  name="patientPhone"
                  value={formData.patientPhone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Patient Disease
                </label>
                <input
                  type="text"
                  name="patientDisease"
                  value={formData.patientDisease}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              {formData.medicines.map((medicine, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 items-end">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Medicine Name
                    </label>
                    <input
                      type="text"
                      name={`medicine-${index}-name`}
                      value={medicine.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Dose
                    </label>
                    <input
                      type="text"
                      name={`medicine-${index}-dose`}
                      value={medicine.dose}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="flex justify-end">
                    {formData.medicines.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveMedicine(index)}
                        className="px-3 py-2 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddMedicine}
                className="px-4 py-2 bg-green-600 text-white rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Add Medicine
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add Patient Slip
              </button>
            </form>
            <div className="mt-8 flex space-x-4">
              <button
                onClick={handlePrint}
                className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Print Patient Slip
              </button>
            </div>
          </div>

          <div id="print-section">
            {entries.length > 0 && (
              <div>
                <h2 className="text-slate-600 font-bold text-sm py-6 uppercase">Summary</h2>
                <div className="bg-slate-100 px-6 py-2 rounded-md">
                  {entries.map((entry, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-lg font-bold mb-2">Patient Slip #{index + 1}</h3>
                      <p><strong>Doctor Name:</strong> {entry.doctorName}</p>
                      <p><strong>Doctor Email:</strong> {entry.doctorEmail}</p>
                      <p><strong>Patient Name:</strong> {entry.patientName}</p>
                      <p><strong>Patient Email:</strong> {entry.patientEmail}</p>
                      <p><strong>Patient Phone:</strong> {entry.patientPhone}</p>
                      <p><strong>Patient Disease:</strong> {entry.patientDisease}</p>
                      <p><strong>Medicines:</strong></p>
                      <ul className="list-disc list-inside">
                        {entry.medicines.map((med, i) => (
                          <li key={i}>
                            {med.name} - {med.dose}
                          </li>
                        ))}
                      </ul>
                      <hr className="my-4" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientSlips;
