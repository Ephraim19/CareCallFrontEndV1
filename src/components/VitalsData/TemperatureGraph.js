import React from "react";
import { CChart } from "@coreui/react-chartjs";
import "./Vitals.css";
const TemperatureGraph = ({temp}) => {
  return (
    <div>
      <div className="frame-parent4">
        <div className="blood-pressure-parent">
          <div className="blood-pressure">Temperature</div>
        </div>
      </div>
      <CChart
        type="line"
        data={{
          labels: temp.map((item) => item.readingDate),
          datasets: [
            {
              label: "Temperature (Degrees Celsius)",
              backgroundColor: "#0090af",
              borderColor: "#0090af",
              pointBackgroundColor: "#0090af",
              pointBorderColor: "#0090af",
              data: temp.map((item) => item.temperature),
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

export default TemperatureGraph;
