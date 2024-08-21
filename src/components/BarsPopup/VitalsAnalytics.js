import React, { useEffect, useState } from "react";
import styles from "../HomepageForms/Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getMemberAnalytics} from "../../Services";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../Tasks/Tasks.css';
import { CChart } from "@coreui/react-chartjs";

const VitalsAnalytics = ({memberId}) => {
    const [tasks, setTasks] = useState([])

    React.useEffect(() => {
      console.log(memberId)

        getMemberAnalytics (parseInt(memberId))

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
        <b className={styles.createNewCarecall}>VITALS ANALYTICS</b>

        {memberId && tasks.length > 0 ? (

    <CChart
    style={{width:"100%",height:"75%"}}
  type="line" 
  data={{
    labels: tasks.map((item) => item[0]),
    datasets: [
      {
        label: "Systolic",
        backgroundColor: "#060074",
        borderColor: " #060074",
        pointBackgroundColor: "#060074",
        pointBorderColor: "#060074",
        data:tasks.map((item) => item[1]),
      },
      {
        label: "Diastolic",
        backgroundColor: "#0090af",
        borderColor: "#0090af",
        pointBackgroundColor: "#0090af",
        pointBorderColor: "#0090af",
        data: tasks.map((item) => item[2]),
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

):("SEARCH FOR A MEMBER TO SEE DATA/NO DATA")}
        </div>

        
      <ToastContainer />
    </div>
  );
};

export default VitalsAnalytics;
