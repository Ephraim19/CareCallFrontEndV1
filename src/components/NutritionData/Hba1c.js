import React from "react";
import { CChart } from "@coreui/react-chartjs";
import "../VitalsData/Vitals.css"

const BloodSugarGraph = ({hba1c}) => {
  return (
    <div>
      <div className="frame-parent4">
        <div className="blood-pressure-parent">
          <div className="blood-pressure">Glycated Haemoglobin - Hba1c(%)</div>
        </div>
      </div>
      <CChart
        type="line"
        data={{
          labels: hba1c && hba1c.map((item) => item.readingDate),
          datasets: [
            {
              label: "Hba1c (%)",
              backgroundColor: "purple",
              borderColor: "purple",
              pointBackgroundColor: "purple",
              pointBorderColor: "purple",
              data: hba1c && hba1c.map((item) => item.hba1c),
            },
 
          ],
        }}
        options={{
          plugins: {
            legend: {
              labels: {
                color: "#333",
              },
            },
          },
          scales: {
            x: {
              grid: {
                color: "transparent",
              },
              ticks: {
                color: "333#",
              },
            },
            y: {
              grid: {
                color: "transparent",
              },
              ticks: {
                color: "#333",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default BloodSugarGraph;