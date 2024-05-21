import React, { useEffect, useState } from "react";
import styles from "./Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postMember, postDependant, putOverview, postCondition } from "../../Services";

const Condition = (condition) => {
  const [conditionName, setConditionName] = useState("");
  const [conditionStatus, setConditionStatus] = useState("");

  useEffect(() => {
    console.log(condition);
    // setConditionName(condition.condition[0].conditionName);
    // setConditionStatus(condition.condition[0].conditionStatus);
  }, [condition]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
        conditionName: conditionName,
        conditionStatus: conditionStatus,
        memberId: condition.condition[0].memberId,
    };

    try {
      const response = await postCondition(data);
      console.log(response);
      toast.success("Data submitted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Error submitting data");
    }
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
        <input
          className={styles.lastNameField}
          placeholder="STATUS"
          type="text"
          value={conditionStatus}
          onChange={(e) => setConditionStatus(e.target.value)}
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

export default Condition;
