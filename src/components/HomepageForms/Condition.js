import React, { useEffect, useState } from "react";
import styles from "./Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postCondition } from "../../Services";

const Condition = ({ condition }) => {
  const [conditionName, setConditionName] = useState("");
  const [conditionStatus, setConditionStatus] = useState("");

  useEffect(() => {
    console.log(condition);
  }, [condition]);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(conditionName, conditionStatus, condition);

    const data = {
      condition: conditionName,
      status: conditionStatus,
      memberId: parseInt(condition),
    };

    postCondition(data)
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
        <b className={styles.createNewCarecall}>CONDITION</b>

        <input
          className={styles.firstNameField1}
          placeholder="CONDITION"
          type="text"
          value={conditionName}
          onChange={(e) => setConditionName(e.target.value)}
        />
        {/* <input
          className={styles.lastNameField}
          placeholder="STATUS"
          type="text"
          value={conditionStatus}
          onChange={(e) => setConditionStatus(e.target.value)}
        /> */}
        <label htmlFor="Program">
          <select
            className={styles.lastNameField}
            onChange={(e) => setConditionStatus(e.target.value)}
          >
            <option className="App-info" value="Healthy" key={"Healthy"}>
              STATUS
            </option>
            <option className="App-info" value="Healthy" key={"Healthy"}>
              Healthy
            </option>

            <option className="App-info" value="Chronic" key={"Chronic"}>
              Chronic
            </option>

            <option className="App-info" value="At risk" key={"At risk"}>
              At risk
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

export default Condition;
