import React from "react";
import { CChart } from "@coreui/react-chartjs";
import "../VitalsData/Vitals.css"

const BloodSugarGraph = ({bmi}) => {
  return (
    <div>
      <div className="frame-parent4">
        <div className="blood-pressure-parent">
          <div className="blood-pressure">Body Mass Index(kg^2)</div>
        </div>
      </div>
      <CChart
        type="line"
        data={{
          labels: bmi&&bmi.map((item) => item.readingDate),
          datasets: [
    
            {
              label: "BMI Index (kg/m^2) ", 
              backgroundColor: "#0090af",
              borderColor: "#0090af",
              pointBackgroundColor: "#0090af",
              pointBorderColor: "#0090af",
              data: bmi&&bmi.map((item) => item.weight/(item.height ^ 2).toFixed(2)),
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