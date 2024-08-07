import React, { useState } from 'react';

const initialEmails = [
  'email1@example.com', 'email2@example.com', 'email3@example.com', 'email4@example.com', 'email5@example.com',
  'email6@example.com', 'email7@example.com', 'email8@example.com', 'email9@example.com', 'email10@example.com',
  'email11@example.com', 'email12@example.com', 'email13@example.com', 'email14@example.com', 'email15@example.com',
  'email16@example.com', 'email17@example.com', 'email18@example.com', 'email19@example.com', 'email20@example.com'
];

const initialPhones = [
  '1234567890', '1234567891', '1234567892', '1234567893', '1234567894', '1234567895', '1234567896', '1234567897',
  '1234567898', '1234567899', '1234567800', '1234567801', '1234567802', '1234567803', '1234567804', '1234567805',
  '1234567806', '1234567807', '1234567808', '1234567809'
];

export const AdminAddReminder = () => {
  const [message, setMessage] = useState('');
  const [recipientType, setRecipientType] = useState('email');
  const [selectedRecipients, setSelectedRecipients] = useState([]);
  const [currentRecipient, setCurrentRecipient] = useState('');

  const handleSendWhatsApp = () => {
    alert('WhatsApp message sent!');
  };

  const handleSendEmail = () => {
    if (recipientType === 'email') {
      alert('Emails sent!');
    }
  };

  const handleSendText = () => {
    if (recipientType === 'phone') {
      alert('Text messages sent!');
    }
  };

  const handleAddRecipient = () => {
    if (currentRecipient && !selectedRecipients.includes(currentRecipient)) {
      setSelectedRecipients([...selectedRecipients, currentRecipient]);
      setCurrentRecipient('');
    }
  };

  const handleRecipientTypeChange = (e) => {
    setRecipientType(e.target.value);
    setSelectedRecipients([]);
  };

  const recipients = recipientType === 'email' ? initialEmails : initialPhones;

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-400 text-black">
      <div className="w-1/2 p-6 bg-blue-300 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Send Reminder</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Recipient Type</label>
          <select
            className="w-full p-2 border border-gray-300 rounded text-black"
            value={recipientType}
            onChange={handleRecipientTypeChange}
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Recipient</label>
          <div className="flex">
            <select
              className="w-full p-2 border border-gray-300 rounded text-black"
              value={currentRecipient}
              onChange={(e) => setCurrentRecipient(e.target.value)}
            >
              <option value="">Select a recipient</option>
              {recipients.map((recipient, index) => (
                <option key={index} value={recipient}>
                  {recipient}
                </option>
              ))}
            </select>
            <button
              onClick={handleAddRecipient}
              className="ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Add
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Selected Recipients</label>
          <div className="border border-gray-300 rounded p-2">
            {selectedRecipients.length > 0 ? (
              selectedRecipients.map((recipient, index) => (
                <div key={index} className="mb-1">
                  {recipient}
                </div>
              ))
            ) : (
              <div>No recipients selected</div>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleSendWhatsApp}
            className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Send WhatsApp
          </button>
          <button
            onClick={handleSendEmail}
            className={`w-full py-2 px-4 ${
              recipientType === 'email' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-300 cursor-not-allowed'
            } text-white rounded`}
            disabled={recipientType !== 'email'}
          >
            Send Email
          </button>
          <button
            onClick={handleSendText}
            className={`w-full py-2 px-4 ${
              recipientType === 'phone' ? 'bg-gray-500 hover:bg-gray-600' : 'bg-gray-300 cursor-not-allowed'
            } text-white rounded`}
            disabled={recipientType !== 'phone'}
          >
            Send Text
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminAddReminder;
