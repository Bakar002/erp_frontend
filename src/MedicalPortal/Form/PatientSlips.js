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
      <main className=" flex flex-col items-center bg-blue-300 ">
        <h1 className="text-center font-bold text-4xl text-black">Patient Slip</h1>
        <div className="p-12 flex-grow rounded-md shadow-2xl bg-blue-300">
          <div className="mb-8 ">
            <h2 className="text-lg font-bold mb-4">Enter Patient Details</h2>
            <form className="space-y-4" onSubmit={handleAddEntry}>
              <div className="text-black">
                <label className="block text-sm font-medium text-black">
                  Doctor Name
                </label>
                <input
                  type="text"
                  name="doctorName"
                  value={formData.doctorName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-5 py-2.5 border border-gray-300 rounded-md shadow-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="text-black">
                <label className="block text-sm font-medium text-black">
                  Doctor Email
                </label>
                <input
                  type="email"
                  name="doctorEmail"
                  value={formData.doctorEmail}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-5 py-2.5 border border-gray-300 rounded-md shadow-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="text-black">
                <label className="block text-sm font-medium text-black">
                  Patient Name
                </label>
                <input
                  type="text"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-5 py-2.5 border border-gray-300 rounded-md shadow-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="text-black">
                <label className="block text-sm font-medium text-black">
                  Patient Email
                </label>
                <input
                  type="email"
                  name="patientEmail"
                  value={formData.patientEmail}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-5 py-2.5 border border-gray-300 rounded-md shadow-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="text-black">
                <label className="block text-sm font-medium text-black">
                  Patient Phone
                </label>
                <input
                  type="tel"
                  name="patientPhone"
                  value={formData.patientPhone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-5 py-2.5 border border-gray-300 rounded-md shadow-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="text-black">
                <label className="block text-sm font-medium text-black">
                  Patient Disease
                </label>
                <input
                  type="text"
                  name="patientDisease"
                  value={formData.patientDisease}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-5 py-2.5 border border-gray-300 rounded-md shadow-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              {formData.medicines.map((medicine, index) => (
                <div key={index} className="flex gap-5 items-center">
                  <div className="text-black flex-1">
                    <label className="block text-sm font-medium text-black">
                      Medicine Name
                    </label>
                    <input
                      type="text"
                      name={`medicine-${index}-name`}
                      value={medicine.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-5 py-2.5 border border-gray-300 rounded-md shadow-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="text-black flex-1">
                    <label className="block text-sm font-medium text-black">
                      Dose
                    </label>
                    <input
                      type="text"
                      name={`medicine-${index}-dose`}
                      value={medicine.dose}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-5 py-2.5 border border-gray-300 rounded-md shadow-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="flex items-center">
                    {formData.medicines.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveMedicine(index)}
                        className="px-5 py-2 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={handleAddMedicine}
                  className="px-5 py-2 mr-5 bg-green-600 text-white rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Add Medicine
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-green-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Add Patient Slip
                </button>
              </div>
            </form>
            <div className="mt-8 flex justify-center">
              <button
                onClick={handlePrint}
                className="px-5 py-2 bg-green-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Print Patient Slip
              </button>
            </div>
          </div>

       
          <div id="print-section">
            {entries.length > 0 && (
             <div>
             <h2 className="text-slate-600 font-bold text-xl py-6 uppercase">Summary</h2>
             <div className="bg-blue-100 p-6 rounded-lg shadow-md">
               {entries.map((entry, index) => (
                 <div key={index} className="mb-6 border border-gray-700 rounded-lg p-6 bg-blue-400 shadow-sm">
                   <h3 className="text-lg font-bold mb-4 text-gray-800">Patient Slip #{index + 1}</h3>
                   <div className="grid grid-cols-2 gap-4">
                     <div>
                       <p className="text-gray-700"><strong>Doctor Name:</strong> {entry.doctorName}</p>
                       <p className="text-gray-700"><strong>Doctor Email:</strong> {entry.doctorEmail}</p>
                       <p className="text-gray-700"><strong>Patient Name:</strong> {entry.patientName}</p>
                       <p className="text-gray-700"><strong>Patient Email:</strong> {entry.patientEmail}</p>
                     </div>
                     <div>
                       <p className="text-gray-700"><strong>Patient Phone:</strong> {entry.patientPhone}</p>
                       <p className="text-gray-700"><strong>Patient Disease:</strong> {entry.patientDisease}</p>
                     </div>
                   </div>
                   <div className="mt-4">
                     <p className="text-gray-700 font-bold">Medicines:</p>
                     <ul className="list-disc list-inside ml-6">
                       {entry.medicines.map((med, i) => (
                         <li key={i} className="text-gray-600">{med.name} - {med.dose}</li>
                       ))}
                     </ul>
                   </div>
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