import React, { useEffect, useState } from "react";
import styles from "../HomepageForms/Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getHR } from "../../Services";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Tasks/Tasks.css";

const StaffOverview = ({ datas }) => {
  const [HR, setHR] = useState([]);

  useEffect(() => {
    getHR()
      .then((response) => {
        setHR(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className={styles.firstNameField}>
        <b className={styles.createNewCarecall}>OVERVIEW ANALYTICS</b>
        <table style={{width:"100%"}} className="customers">
          <tr>
            <th>Email</th>

            <th>Role</th>

            <th>Status</th>

            <th>Tasks</th>
          </tr>
          {HR.map((data) => (
            <tr>
                <td>{data.HREmail}</td>
                <td>{data.HRRole}</td>
                <td>{data.HRStatus}</td>
                <td>{data.HRTasks}</td>
            </tr>
          ))}
        </table>
        <table className="customers">
          <tr>
            <th>Doctors</th>

            <th>Nutritionists</th>

            <th>Psychologists</th>

            <th>Care Manager</th>
          </tr>
          <tr>
            <td>Total: {datas[0].length}</td>
            <td>Total: {datas[1].length}</td>
            <td>Total: {datas[2].length}</td>
            <td>Total: {datas[3].length}</td>
          </tr>
        </table>
      </div>

      {/* <input
          className={styles.firstNameField1}
          placeholder="TASK NAME"
          type="text"
          value={conditionName}
          onChange={(e) => setConditionName(e.target.value)}
        />
        <input
          className={styles.lastNameField}
          placeholder="ASSIGNEE"
          type="text"
          value={conditionStatus}
          onChange={(e) => setConditionStatus(e.target.value)}
        /> */}

      <ToastContainer />
    </div>
  );
};

export default StaffOverview;
