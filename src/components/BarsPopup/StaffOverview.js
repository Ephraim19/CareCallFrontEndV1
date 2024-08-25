import React, { useEffect, useState } from "react";
import styles from "../HomepageForms/Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getHR } from "../../Services";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Tasks/Tasks.css";

const StaffOverview = ({ datas }) => {

  return (
    <div>
      <div className={styles.firstNameField}>
        <b className={styles.createNewCarecall}>OVERVIEW ANALYTICS</b>
        <table style={{ width: "100%" }} className="customers">
          <tr>
            <th>Email</th>

            <th>Role</th>

            <th>Status</th>

            <th>Tasks</th>
          </tr>
          {datas.map((data) => (
            <tr>
              <td>{data.HREmail}</td>
              <td>{data.HRRole}</td>
              <td>{data.HRStatus}</td>
              <td>{data.HRTasks}</td>
            </tr>
          ))}
        </table>
      </div>

      <ToastContainer />
    </div>
  );
};

export default StaffOverview;
