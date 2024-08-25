import React, { useEffect, useState } from "react";
import styles from "../HomepageForms/Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getInteractionAnalytics } from "../../Services";
import "../Tasks/Tasks.css";
import { CChart } from "@coreui/react-chartjs";

const InteractionAnalytics = ({ datas }) => {
  const [tasks, setTasks] = useState([]);

  React.useEffect(() => {
    getInteractionAnalytics()
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
        <b className={styles.createNewCarecall}>INTERACTION ANALYTICS</b>

        <CChart
          style={{ width: "100%"}}
          type="bar"
          data={{
            labels: [
              "Total",
              "SMS",
              "Phone call",
              "Email",
              "WhatsApp",
              "Outbound",
              "Inbound",
            ],
            datasets: [
              {
                label: "Interactions",
                backgroundColor: "#060074",
                data: [
                  tasks.map((t) => t.total),
                  tasks.map((t) => t.SMS),
                  tasks.map((t) => t.Phone),
                  tasks.map((t) => t.Email),
                  tasks.map((t) => t.WhatsApp),
                  tasks.map((t) => t.Outbound),
                  tasks.map((t) => t.Inbound),
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

export default InteractionAnalytics;
