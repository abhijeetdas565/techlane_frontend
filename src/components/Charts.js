import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function Charts({ chartData }) {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const canvas = chartContainerRef.current;
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const newChart = new Chart(canvas, {
      type: 'bar',
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    chartRef.current = newChart;

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [chartData]);

  return (
    <div className="p-4 mt-8">
      <h2 className="text-xl font-semibold">Charts</h2>
      <div className="bg-white p-4 rounded shadow-md mt-4">
        <canvas ref={chartContainerRef} width="400" height="200"></canvas>
      </div>
    </div>
  );
}

export default Charts;
