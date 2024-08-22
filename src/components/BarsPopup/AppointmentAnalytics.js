import React, { useEffect, useState } from "react";
import styles from "../HomepageForms/Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAppointmentsAnalytics } from "../../Services";
import "../Tasks/Tasks.css";
import { CChart } from "@coreui/react-chartjs";

const AppointmentAnalytics = ({ datas }) => {
  const [tasks, setTasks] = useState([]);

  React.useEffect(() => {
    getAppointmentsAnalytics()
      .then((response) => {
        console.log(response);
        setTasks(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div style={{ background: "#060074" }}>
      <div className={styles.firstNameField}>
        <b className={styles.createNewCarecall}>APPOINTMENTS ANALYTICS</b>

        <CChart
          style={{ width: "100%", height: "100%" }}
          type="bar"
          data={{
            labels: [
              "Total",
              "Not started",
              "In progress",
              "Complete",
              "Cancelled",
              "Doctor",
              "Nutritionist",
              "Psychologist",
            ],
            datasets: [
              {
                label: "Appointments",
                backgroundColor: "#060074",
                data: [
                  tasks.map((t) => t.total),
                  tasks.map((t) => t.not_started),
                  tasks.map((t) => t.in_progress),
                  tasks.map((t) => t.complete),
                  tasks.map((t) => t.cancelled),
                  tasks.map((t) => t.doctor),
                  tasks.map((t) => t.nutritionist),
                  tasks.map((t) => t.psychologist),
                ],
              },
            ],
          }}
          labels="Status"
          options={{
            plugins: {
              legend: {
                labels: {
                  color: " #060074",
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
                  color: "#0090af",
                },
                ticks: {
                  color: "#333",
                },
              },
            },
          }}
        />
      </div>

      <ToastContainer />
    </div>
  );
};

export default AppointmentAnalytics;
