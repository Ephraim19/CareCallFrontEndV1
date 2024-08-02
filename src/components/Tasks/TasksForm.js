import React, { useEffect, useState } from "react";
import styles from "../HomepageForms/Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postTask} from "../../Services";

const InteractionForm = ({condition}) => {

  const [conditionName, setConditionName] = useState("");
  const [conditionStatus, setConditionStatus] = useState("");
  const [details, setDetail] = useState("");

  useEffect(() => {
    console.log(condition);
  }, [condition]);


  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log(conditionName,conditionStatus,condition);

    const data = {
      // taskDueDate: new Date(2022,11,19),
      taskStatus: "Pending",
      taskDepartment: "Carecall",
      taskAssignedTo: conditionStatus,
      task: details,
      taskName: conditionName,
      memberId: parseInt(condition),
      
      // ,
      // TaskName: conditionName,
      // TaskAssignedTo: conditionStatus,
      // task:details,
      // memberId: parseInt(condition),
      // TaskDepartment: "Carecall",
      // TaskDueDate: new Date(),
      // TaskStatus: "Pending",
  };


    postTask(data)
    .then((response) => {
      console.log(response);
      toast.success("Data submitted successfully");
    })
    .catch((error) => {
      console.log(error);
      toast.error("Error in submitting data");
    });

  };


  return (
    <div>
      <form className={styles.firstNameField}>
        <b className={styles.createNewCarecall}>NEW TASK FORM</b>

        <input
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
        />
        <textarea
          className={styles.phoneNumber}
          style={{ height: "100px",width:"93%" }}
          placeholder="TASK DETAILS"
          type="text"
          value={details}
          onChange={(e) => setDetail(e.target.value)}
        />
        <button className={styles.signUpButton} onClick={onSubmit}>
          <div className={styles.signUpButton1}>
            <div className={styles.signUpButtonChild} />
            <b className={styles.createAccount}>SUBMIT DATA</b>
          </div>
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default InteractionForm;
