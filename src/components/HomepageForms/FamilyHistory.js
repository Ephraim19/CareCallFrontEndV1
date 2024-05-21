import React, { useEffect, useState } from "react";
import styles from "./Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const FamilyHistory = (familyHistory) => {
  const [familyRelationship, setFamilyRelationship] = useState('');
  const [familyCondition, setFamilyCondition] = useState('');

  useEffect(() => {
    console.log(familyHistory);
    // setConditionName(condition.condition[0].conditionName);
    // setConditionStatus(condition.condition[0].conditionStatus);
  }, [familyHistory]);

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
        <b className={styles.createNewCarecall}>FAMILY HISTORY</b>

        <input
          className={styles.firstNameField1}
          placeholder="RELATIONSHIP"
          type="text"
          value={familyRelationship}
          onChange={(e) => setFamilyRelationship(e.target.value)}
        />
        <input
          className={styles.lastNameField}
          placeholder="CONDITION"
          type="text"
          value={familyCondition}
          onChange={(e) => setFamilyCondition(e.target.value)}
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

export default FamilyHistory;
