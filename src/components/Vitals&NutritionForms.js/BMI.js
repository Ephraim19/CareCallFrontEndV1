import React, { useEffect, useState } from "react";
import styles from "../HomepageForms/Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postCondition } from "../../Services";

const InteractionForm = ({condition}) => {

  const [conditionName, setConditionName] = useState("");
  const [conditionStatus, setConditionStatus] = useState("");
  const [details, setDetail] = useState("");

  useEffect(() => {
    console.log(condition);
  }, [condition]);


  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(conditionName,conditionStatus,condition);

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
        <b className={styles.createNewCarecall}>BMI</b>

        <input
          className={styles.firstNameField1}
          placeholder="HEIGHT (CM)"
          type="text"
          value={conditionName}
          onChange={(e) => setConditionName(e.target.value)}
        />
        <input
          className={styles.lastNameField}
          placeholder="WEIGHT (KG)"
          type="text"
          value={conditionStatus}
          onChange={(e) => setConditionStatus(e.target.value)}
        />
        <textarea
          className={styles.phoneNumber}
          placeholder="DATE"
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
