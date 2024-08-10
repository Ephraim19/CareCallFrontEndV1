import React, { useEffect, useState } from "react";
import styles from "../HomepageForms/Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postBmi } from "../../Services";
import {auth} from '../Firebase';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InteractionForm = ({memberId}) => {

  const [conditionName, setConditionName] = useState("");
  const [conditionStatus, setConditionStatus] = useState("");
  const [details, setDetail] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [userEmail, setUserEmail] = useState("")

  useEffect(()=>{
    setUserEmail( auth.currentUser.email)
    console.log(auth.currentUser.email)
  },[userEmail])

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      readingDate: startDate.toDateString(),
      updatedBy: 'mm@g.com',
      memberId: parseInt(memberId[0]),
      height: conditionName,
      weight: conditionStatus,
  };

  postBmi(data)
    .then((response) => {
      memberId[1]();
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
        <b className={styles.createNewCarecall}>NEW BMI FORM</b>

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
        
          <div  className={styles.phoneNumber}>
          <DatePicker   selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
        
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
