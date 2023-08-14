import React, { useState } from 'react';

function ConfigModal({ onClose }) {
  const [configData, setConfigData] = useState({
    // Initial configuration values
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setConfigData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit configuration data to API or perform relevant action
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Configure AI Model</h2>
        <form onSubmit={handleSubmit}>
          {/* Form inputs for configuration */}
          <div className="mb-2">
            <label className="block font-medium">Configuration Option 1:</label>
            <input
              type="text"
              name="option1"
              value={configData.option1}
              onChange={handleInputChange}
              className="w-full border rounded p-1"
            />
          </div>
          {/* Other configuration inputs */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save Configuration
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded ml-2"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default ConfigModal;
