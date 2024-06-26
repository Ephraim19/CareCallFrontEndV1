import React, { useEffect, useState } from "react";
import styles from "./Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postMember, postDependant, putOverview } from "../../Services";

const Overview = ({overview}) => {
  const [healthStatus, setHealthStatus] = useState("");
  const [risk, setRisk] = useState("");
  const [goals, setGoals] = useState("");
  const [blood, setBlood] = useState("");

  useEffect(() => {
    console.log(overview[0][0]);
    console.log(overview[1]);

    if(overview[0].length > 0){
    setHealthStatus(overview[0][0].overviewHealthStatus);
    setRisk(overview[0][0].overviewRiskScore);
    setGoals(overview[0][0].overviewHealthGoals);
    setBlood(overview[0][0].overViewBloodGroup);
    }
  }, [overview]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      memberId: overview[1],
      overviewHealthStatus: healthStatus,
      overviewRiskScore: risk,
      overviewHealthGoals: goals,
      overViewBloodGroup: blood,
    };

    putOverview(parseInt(overview[0][0].id), data)
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
      <form className={styles.firstNameField} >
        <b className={styles.createNewCarecall}>OVERVIEW</b>

        <input
          className={styles.firstNameField1}
          placeholder="HEALTH STATUS"
          type="text"
          value={healthStatus}
          onChange={(e) => setHealthStatus(e.target.value)}
        />
        <input
          className={styles.lastNameField}
          placeholder="RISK SCORE"
          type="text"
          value={risk}
          onChange={(e) => setRisk(e.target.value)}
        />
        <input
          className={styles.phoneNumber}
          placeholder="HEALTH GOALS"
          type="text"
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
        />
        <input
          className={styles.emailAddress}
          placeholder="BLOOD GROUP"
          type="text"
          value={blood}
          onChange={(e) => setBlood(e.target.value)}
        />
        {/* <input
          className={styles.firstNameField11}
          placeholder="CHILD"
          type="text"
          value={child}
          onChange={(e) => setChild(e.target.value)}
        /> */}

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

export default Overview;
