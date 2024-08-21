import React, { useEffect, useState } from "react";
import styles from "../HomepageForms/Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getMemberAnalyticsRbs, getMemberAnalyticsFbs,getMemberAnalyticsHba1c } from "../../Services";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../Tasks/Tasks.css';
import { CChart } from "@coreui/react-chartjs";

const NutritionAnalytics = ({memberId}) => {
    const [fbs ,setFbs] =useState([]);
    const [rbs ,setRbs] =useState([]);
    const [hba1c ,setHba1c] =useState([]);


    React.useEffect(() => {

        getMemberAnalyticsRbs (parseInt(memberId))

            .then((response) => {
            setRbs(response );
            })
            .catch((error) => {
                console.error(error);
            });

            getMemberAnalyticsFbs (parseInt(memberId))

            .then((response) => {
            setFbs(response );
            })
            .catch((error) => {
                console.error(error);
            });

            getMemberAnalyticsHba1c (parseInt(memberId))

            .then((response) => {
            setHba1c(response );
            })
            .catch((error) => {
                console.error(error);
            });

    },[])

  return (
    <div style={{ background:"#060074" }} >
      <div className={styles.firstNameField}>
        <b className={styles.createNewCarecall}>NUTRITION ANALYTICS</b>

        {memberId ? (

<>

{rbs.length > 0 ? (

<CChart
  type="line" 
  data={{
    labels: rbs.map((item) => item[0]),
    datasets: [
      {
        label: "RBS",
        backgroundColor: "#060074",
        borderColor: "#060074",
        pointBackgroundColor: "#060074",
        pointBorderColor: "#060074",
        data: rbs.map((item) => item[1])
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
):("") }

{fbs.length > 0 ? (
<CChart
  type="line" 
  data={{
    labels: [fbs.map((item) => item[0]) ],
    datasets: [
      {
        label: "FBS",
        backgroundColor: "#0090af",
        borderColor: "#0090af",
        pointBackgroundColor: "#0090af",
        pointBorderColor: "#0090af",
        data: fbs.map((item) => item[1])
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
):("") }

{hba1c.length >0 ? (
    
<CChart
  type="line" 
  data={{
    labels: hba1c.map((item) => item[0]),
    datasets: [
      {
        label: "HBA1C",
        backgroundColor: "green",
        borderColor: "green",
        pointBackgroundColor: "green",
        pointBorderColor: "green",
        data: hba1c.map((item) => item[1])
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
) :("") }
</>
):("SEARCH FOR A MEMBER TO SEE DATA") }

</div>
      
      <ToastContainer />
    </div>
  );
};

export default NutritionAnalytics;
