import React, { useEffect, useState } from "react";
import styles from "../HomepageForms/Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postInteraction } from "../../Services";
import {auth} from '../Firebase'
import { onAuthStateChanged } from "firebase/auth";

const InteractionForm = ({condition}) => {

  const [conditionName, setConditionName] = useState("");
  const [conditionStatus, setConditionStatus] = useState("");
  const [details, setDetail] = useState("");
  const [userEmail, setUserEmail] = useState("")

  useEffect(()=>{
    setUserEmail( auth.currentUser.email)
    
  },[userEmail])

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      memberId: parseInt(condition),
      channel: conditionName,
      updatedBy: userEmail,
      interactionDetails: details,
      channelDirection: conditionStatus,
  };


    postInteraction(data)
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
        <b className={styles.createNewCarecall}>NEW INTERACTION FORM</b>

        <input
          className={styles.firstNameField1}
          placeholder="CHANNEL"
          type="text"
          value={conditionName}
          onChange={(e) => setConditionName(e.target.value)}
        />
        <input
          className={styles.lastNameField}
          placeholder="INBOUND/OUTBOUND"
          type="text"
          value={conditionStatus}
          onChange={(e) => setConditionStatus(e.target.value)}
        />
        <textarea
          className={styles.phoneNumber}
          style={{ height: "100px",width:"93%" }}
          placeholder="INTERACTION DETAILS"
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
