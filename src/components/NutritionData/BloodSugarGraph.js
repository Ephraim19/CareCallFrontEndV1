import React from "react";
import { CChart } from "@coreui/react-chartjs";
import "../VitalsData/Vitals.css"

const BloodSugarGraph = ({patientToDisplayId}) => {
  return (
    <div>
      <div className="frame-parent4">
        <div className="blood-pressure-parent">
          <div className="blood-pressure">Blood Sugar</div>
        </div>
      </div>
      <CChart
        type="line"
        data={{
          labels: [
           patientToDisplayId&&patientToDisplayId.rbs.map((item) => item.readingDate),
           patientToDisplayId&&patientToDisplayId.fbs.map((item) => item.readingDate),
          ],
          datasets: [
            {
              label: "Rbs (mmol/L) ",
              backgroundColor: "red",
              borderColor: "red",
              pointBackgroundColor: "red",
              pointBorderColor: "red",
              data: patientToDisplayId && patientToDisplayId.rbs.map((item) => item.rbs),
            },
            {
              label: "Fbs (mmol/L) ",
              backgroundColor: "#0090af",
              borderColor: "#0090af",
              pointBackgroundColor: "#0090af",
              pointBorderColor: "#0090af",
              data: patientToDisplayId && patientToDisplayId.fbs.map((item) => item.fbs),
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