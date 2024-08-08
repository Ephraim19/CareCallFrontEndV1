import React, { useEffect, useState } from "react";
import styles from "../HomepageForms/Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postTask} from "../../Services";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InteractionForm = ({condition}) => {

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
      taskDueDate: startDate.toDateString( ),
      taskStatus: "Not started",
      taskDepartment,
      taskAssignedTo: conditionStatus,
      task: details,
      taskName: conditionName,
      memberId: parseInt(condition[0]),
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
        <input
          className={styles.lastNameField}
          placeholder="ASSIGNEE"
          type="text"
          value={conditionStatus}
          onChange={(e) => setConditionStatus(e.target.value)}
        />
        <textarea
          className={styles.phoneNumber}
          style={{ height: "80px",width:"93%" }}
          placeholder="TASK DETAILS"
          type="text"
          value={details}
          onChange={(e) => setDetail(e.target.value)}
        />
        
        <div className={styles.firstNameField11}>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  />
        </div>

        <label htmlFor="Program">
          <select
            className={styles.lastNameField1}
            onChange={(e) => setTaskDepartment(e.target.value)}
          >

            <option className="App-info" value="AcuteCare" key={"Channel"}>
              DEPARTMENT
            </option>

            <option
              className="App-info"
              value="Clinical"
              key={"Clinical"}
            >
              Clinical
            </option>

            <option
              className="App-info"
              value="Other"
              key={"Other"}
            >
              Other
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
