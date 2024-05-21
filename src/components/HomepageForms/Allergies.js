import React, { useEffect, useState } from "react";
import styles from "./Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Allergies = (allergy) => {
  const [allergyAllargen, setAllergyAllargen] = useState('');
  const [allergyReaction, setAllergyReaction] = useState('');

  useEffect(() => {
    console.log(allergy);
    // setConditionName(condition.condition[0].conditionName);
    // setConditionStatus(condition.condition[0].conditionStatus);
  }, [allergy]);

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
        <b className={styles.createNewCarecall}>ALLERGIES</b>

        <input
          className={styles.firstNameField1}
          placeholder="ALLERGEN"
          type="text"
          value={allergyAllargen}
          onChange={(e) => setAllergyAllargen(e.target.value)}
        />
        <input
          className={styles.lastNameField}
          placeholder="REACTION"
          type="text"
          value={allergyReaction}
          onChange={(e) => setAllergyReaction(e.target.value)}
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

export default Allergies;
