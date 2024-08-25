import React, { useEffect, useState } from "react";
import styles from "../HomepageForms/Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getTasksAnalytics } from "../../Services";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Tasks/Tasks.css";
import { CChart } from "@coreui/react-chartjs";

const TasksAnalytics = ({ datas }) => {
  const [tasks, setTasks] = useState([]);

  React.useEffect(() => {
    getTasksAnalytics()
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
        <b className={styles.createNewCarecall}>TASKS ANALYTICS</b>
        <CChart
        style={{ width: "100%" }}
          type="bar"
          data={{
            labels: [
              "Total",
              "Not started",
              "In progress",
              "Complete",
              "Cancelled",
              // "overdue",
            ],
            datasets: [
              {
                label: "All Tasks",
                backgroundColor: "#060074",
                data: [
                  tasks.map((t) => t.total),
                  tasks.map((t) => t.not_started1),
                  tasks.map((t) => t.in_progress1),
                  tasks.map((t) => t.complete),
                  tasks.map((t) => t.cancelled),
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

export default TasksAnalytics;
