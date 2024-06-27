import React from "react";
import { CChart } from "@coreui/react-chartjs";
import "./Vitals.css";

const PulseRateGraph = ({pulse}) => {
  return (
    <div>
      <div className="frame-parent4">
        <div className="blood-pressure-parent">
          <div className="blood-pressure">Pulse Rate</div>
        </div>
      </div>
      <CChart
        type="line"
        data={{
          labels: pulse.map((item) => item.readingDate),
          datasets: [

            {
              label: "Pulse Rate (Beats per Minute)",
              backgroundColor: "#0090af",
              borderColor: "#0090af",
              pointBackgroundColor: "#0090af",
              pointBorderColor: "#0090af",
              data: pulse.map((item) => item.pulse),
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

export default PulseRateGraph;
