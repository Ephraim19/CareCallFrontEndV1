import React, { useEffect, useState } from "react";
import styles from "../HomepageForms/Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postTask} from "../../Services";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../Tasks/Tasks.css';

const Overview = ({datas}) => {

  return (
    <div>
      <div className={styles.firstNameField}>
        <b className={styles.createNewCarecall}>OVERVIEW ANALYTICS</b>
        <table className="customers">
              <tr>
                <th>Members</th>

                <th>Tasks</th>

                <th>Interactions</th>

                <th>Member journey</th>
              </tr>
                <tr>
                    <td>Total: {datas[0].length}</td>
                    <td>Total: { datas[1].length }</td>
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

export default Overview;
