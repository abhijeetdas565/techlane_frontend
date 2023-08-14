import React from 'react';

function Metrics() {
  // Placeholder data (replace with API data)
  const metricsData = {
    accuracy: 0.85,
    precision: 0.78,
    recall: 0.92,
  };

  const metricsStyle = {
    background: 'linear-gradient(to right, #FDE68A, #A5B4FC)',
    color: 'blue', // Adjust the text color to white
  };

  return (
    <div className="p-4" style={metricsStyle}>
      <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
      <div className="grid grid-cols-3 gap-4">
        {Object.keys(metricsData).map((metricName, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow-md"
          >
            <p className="text-lg font-semibold">{metricName}</p>
            <p className="text-2xl">{metricsData[metricName]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Metrics;
