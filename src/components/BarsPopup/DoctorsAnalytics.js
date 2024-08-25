import React, { useEffect, useState } from "react";
import styles from "../HomepageForms/Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Tasks/Tasks.css";

const DoctorsAnalytics = ({ datas }) => {
  const [HR, setHR] = useState([]);

  useEffect(() => {
    datas.map((data) => {
      if (data.HRRole == "Doctor") {
        console.log(data);
        setHR(data);
      }
    });
  }, [datas]);

  return (
    <div>
      <div className={styles.firstNameField}>
        <b className={styles.createNewCarecall}>DOCTOR ANALYTICS</b>
        <table style={{ width: "100%" }} className="customers">
          <tr>
            <th>Doctor</th>
            <th>Total</th>
            <th>In progress</th>
            <th>Not started</th>
            <th>Complete</th>
            <th>Cancelled</th>
          </tr>
          {HR.map((data) => (
            <tr>
              <td>{HR.HREmail}</td>
              <td>{HR.HRRole}</td>
              <td>{HR.HRStatus}</td>
              <td>{HR.HRTasks}</td>
            </tr>
          ))}
        </table>
      </div>

      <ToastContainer />
    </div>
  );
};

export default DoctorsAnalytics;
