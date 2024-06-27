import React from "react";
import { CChart } from "@coreui/react-chartjs";
import "./Vitals.css";

const RespiratoryRate = ({respiratory}) => {
  return (
    <div>
      <div className="frame-parent4">
        <div className="blood-pressure-parent">
          <div className="blood-pressure">Respiratory Rate</div>
        </div>
      </div>
      <CChart
        type="line"
        data={{
          labels: respiratory.map((item) => item.readingDate),
          datasets: [
            {
              label: "Respiratory Rate (Breaths per Minute)",
              backgroundColor: "#0090af",
              borderColor: "#0090af",
              pointBackgroundColor: "#0090af",
              pointBorderColor: "#0090af",
              data: respiratory.map((item) => item.respiratory),
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

export default RespiratoryRate;
