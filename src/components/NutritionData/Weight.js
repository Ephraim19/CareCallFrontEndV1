import React from "react";
import { CChart } from "@coreui/react-chartjs";
import "../VitalsData/Vitals.css"

const BloodSugarGraph = ({weight}) => {
  return (
    <div>
      <div className="frame-parent4">
        <div className="blood-pressure-parent">
          <div className="blood-pressure">Weight(kg)</div>
        </div>
      </div>
      <CChart
        type="line"
        data={{
          labels: weight.map((item) => item.readingDate),
          datasets: [

            {
              label: "Weight (kg) ",
              backgroundColor: "#0090af",
              borderColor: "#0090af",
              pointBackgroundColor: "#0090af",
              pointBorderColor: "#0090af",
              data: weight.map((item) => item.weight),
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