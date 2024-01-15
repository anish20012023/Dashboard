import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { Box, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { makeStyles } from "@mui/styles";

function randomValue() {
  return Math.floor(Math.random() * (200 - 50 + 1) + 50);
}
// makestyles
const useStyles = makeStyles({
  labelBox: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
    gap: "5px",
    "& .label": {
      display: "flex",
      alignItems: "center",
      fontSize: "12px",
      color: "grey",
    },
  },
});

const DoughnutChart = () => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy();
    }

    const newChartInstance = new Chart(chartRef.current, {
      type: "doughnut",
      data: {
        labels: ["Desktop", "Tablet", "Mobile"],
        datasets: [
          {
            label: "Traffic",
            data: [randomValue(), randomValue(), randomValue()],
            backgroundColor: ["#4CB140", "#14B8A6", "#FFB020"],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    setChartInstance(newChartInstance);

    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, []);
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.labelBox}>
        {[
          { label: "Mobile", color: "#FFB020" },
          { label: "Desktop", color: "#4CB140" },
          { label: "Tablet", color: "#14B8A6" },
        ].map((label, index) => (
          <Typography variant="body2" className="label">
            <FiberManualRecordIcon sx={{ color: label.color }} />
            {label.label}
          </Typography>
        ))}
      </Box>
      <canvas ref={chartRef} />
    </Box>
  );
};

export default DoughnutChart;
