import React, { useEffect, useState } from "react";
import styles from "./Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Social = (social) => {
  const [socialNotes, setSocialNotes] = useState('');
  const [risk, setRisk] = useState('');

  useEffect(() => {
    console.log(social);
    // setConditionName(condition.condition[0].conditionName);
    // setConditionStatus(condition.condition[0].conditionStatus);
  }, [social]);

  const onSubmit = async (e) => {
    e.preventDefault();

    // const data = {
    //   conditionName: conditionName,
    //   conditionStatus: conditionStatus,
    //   memberId: condition.condition[0].memberId,
    // };

    // try {
    //   const response = await postCondition(data);
    //   console.log(response);
    //   toast.success("Data submitted successfully");
    // } catch (error) {
    //   console.error(error);
    //   toast.error("Error submitting data");
    // }
  };

  return (
    <div>
      <form className={styles.firstNameField}>
        <b className={styles.createNewCarecall}>SOCIAL HISTORY</b>

        <input
          className={styles.firstNameField1}
          placeholder="CONDITION"
          type="text"
          value={socialNotes}
          onChange={(e) => setSocialNotes(e.target.value)}
        />
        <input
          className={styles.lastNameField}
          placeholder="DUE TO"
          type="text"
          value={risk}
          onChange={(e) => setRisk(e.target.value)}
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

export default Social;
