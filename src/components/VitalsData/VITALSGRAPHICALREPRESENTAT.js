import React from "react";
import { CChart } from "@coreui/react-chartjs";
import "./Vitals.css";

const VITALSGRAPHICALREPRESENTAT = ({Bp}) => {


  return (
    <div>
      <div className="frame-parent4">
        <div className="blood-pressure-parent">
          <div className="blood-pressure">Blood Pressure</div>
        </div>
      </div>
      <CChart
        type="line"
        data={{
          labels: Bp.map((item) => item.readingDate),
          
          datasets: [
            {
              label: "Systolic (mmHg)",
              backgroundColor: "#060074",
              borderColor: "#060074",
              pointBackgroundColor: "#060074",
              pointBorderColor: "#060074",
              data: Bp.map((item) => item.systolic)
            },
            {
              label: "Diastolic (mmHg)",
              backgroundColor: "#0090af",
              borderColor: "#0090af",
              pointBackgroundColor: "#0090af",
              pointBorderColor: "#0090af",
              data: Bp.map((item) => item.diastolic),
            },
            // {
            //   label: "Pulse Pressure",
            //   backgroundColor: "#04cb04",
            //   borderColor: "#04cb04",
            //   pointBackgroundColor: "#04cb04",
            //   pointBorderColor: "#04cb04",
            //   data: [54, 14, 29, 35, 9, 27, 18, 77, 65],
            // },
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

export default VITALSGRAPHICALREPRESENTAT;
