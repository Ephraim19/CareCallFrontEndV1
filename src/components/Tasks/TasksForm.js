import React, { useEffect, useState } from "react";
import styles from "../HomepageForms/Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postTask } from "../../Services";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InteractionForm = ({ condition }) => {
  const [conditionName, setConditionName] = useState("");
  const [conditionStatus, setConditionStatus] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [details, setDetail] = useState("");
  const [taskDepartment, setTaskDepartment] = useState("");

  useEffect(() => {
    console.log(condition);
  }, [condition]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      taskDueDate: startDate.toDateString(),
      taskStatus: "Not started",
      // taskAssignedTo: conditionStatus,
      task: details,
      taskName: conditionName,
      memberId: parseInt(condition[0]),
      department: taskDepartment,
    };

    postTask(data)
      .then((response) => {
        condition[1]();
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

        <div className={styles.lastNameField}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <textarea
          className={styles.phoneNumber}
          style={{ height: "80px", width: "93%" }}
          placeholder="TASK DETAILS"
          type="text"
          value={details}
          onChange={(e) => setDetail(e.target.value)}
        />

        <label htmlFor="Program">
          <select
            className={styles.firstNameField11}
            onChange={(e) => setTaskDepartment(e.target.value)}
          >

            <option className="App-info" value="AcuteCare" key={"Channel"}>
             <b>DEPARTMENT</b> 
            </option>

            <option
              className="App-info"
              value="Doctor"
              key={"Doctor"}
            >
              Doctor
            </option>

            <option
              className="App-info"
              value="Care Manager"
              key={"Care Manager"}
            >
              Care Manager
            </option>

            <option
              className="App-info"
              value="Psychologist"
              key={"Psychologist"}
            >
              Psychologist
            </option>

            <option
              className="App-info"
              value="Nutritionist"
              key={"Nutritionist"}
            >
              Nutritionist
            </option>
            
            <option
              className="App-info"
              value="Engagement Leadt"
              key={"Engagement Lead"}
            >
              Engagement Lead
            </option>


          </select>
        </label>

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
