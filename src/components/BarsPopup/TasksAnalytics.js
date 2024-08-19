import React, { useEffect, useState } from "react";
import styles from "../HomepageForms/Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getTasksAnalytics} from "../../Services";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../Tasks/Tasks.css';
import { CChart } from "@coreui/react-chartjs";

const TasksAnalytics = ({datas}) => {
    const [tasks, setTasks] = useState([])

    React.useEffect(() => {

        getTasksAnalytics ()

            .then((response) => {
                console.log(response)
            setTasks(response );
            })
            .catch((error) => {
                console.error(error);
            });

    },[])

  return (
    <div style={{ background:"#060074" }} >
      <div className={styles.firstNameField}>
        <b className={styles.createNewCarecall}>TASKS ANALYTICS</b>
                <CChart
  type="bar"
  data={{
    labels: ['Total', 'Not started', 'In progress', 'Complete', 'Cancelled'],
    datasets: [
      {
        label: 'Blood Pressure tasks',
        backgroundColor: '#060074',
        data: [tasks.map(t => t.total_hypertension), 
            tasks.map(t => t.not_started), 
            tasks.map(t => t.in_progress), 
            tasks.map(t => t.complete_hypertension), 
            tasks.map(t => t.cancelled_hypertension)],
      },
    ],
  }}
  labels="Status"
  options={{
    plugins: {
      legend: {
        labels: {
          color:' #060074',
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: 'transparent',
        },
        ticks: {
          color: '333#',
        },
      },
      y: {
        grid: {
          color: 'transparent',
        },
        ticks: {
          color: '#333',
        },
      },
    },
  }}
/>

<CChart
  type="bar"
  data={{
    labels: ['Total', 'Hypoglycemia', 'Diabetes', 'Prediabetes','Not stsrted', 'In progress', 'Complete', 'Cancelled'],
    datasets: [
      {
        label: 'Blood Suagar tasks',
        backgroundColor: '#060074',
        data: [tasks.map(
            t => t.all_bs), 
            tasks.map(t => t.Hypoglycemia), 
            tasks.map(t => t.Diabetes), 
            tasks.map(t => t.Prediabetes),
            tasks.map(t => t.not_started_bs),
            tasks.map(t => t.in_progress),
            tasks.map(t => t.complete_bs),            
            tasks.map(t => t.cancelled_bs),

          ],


      },
    ],
  }}
  labels="Status"
  options={{
    plugins: {
      legend: {
        labels: {
          color:' #060074',
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: 'transparent',
        },
        ticks: {
          color: '333#',
        },
      },
      y: {
        grid: {
          color: 'transparent',
        },
        ticks: {
          color: '#333',
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
