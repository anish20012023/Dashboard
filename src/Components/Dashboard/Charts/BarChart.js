import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const BarChart = () => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy();
    }

    const newChartInstance = new Chart(chartRef.current, {
      type: "bar",
      data: {
        labels: ["Link", "Photo", "Status", "Video"],
        datasets: [
          {
            label: "Likes",
            data: [200, 260, 100, 90],
            backgroundColor: "#3F51B5",
            borderRadius: 4,
          },
          {
            label: "Comments",
            data: [120, 140, 200, 180],
            backgroundColor: "rgba(75, 192, 192)",
            borderRadius: 4,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        indexAxis: "x",
        layout: {
          padding: {
            left: 10,
            right: 10,
            top: 0,
            bottom: 0,
          },
        },
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
    });

    setChartInstance(newChartInstance);

    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default BarChart;
