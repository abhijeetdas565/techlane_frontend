import React from 'react';

function Error({ message, onRetry }) {
  return (
    <div className="p-4 bg-red-100 border border-red-500 rounded shadow-md">
      <p className="text-red-700 font-semibold">{message}</p>
      <button
        className="bg-red-500 text-white px-2 py-1 rounded mt-2"
        onClick={onRetry}
      >
        Retry
      </button>
    </div>
  );
}

export default Error;
