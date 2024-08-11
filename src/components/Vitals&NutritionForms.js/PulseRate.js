import React, { useEffect, useState } from "react";
import styles from '../HomepageForms/Program.module.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postPulse } from "../../Services";
import {auth} from '../Firebase';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PulseRate = ({memberId}) => {

  const [systolic, setSystolic] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [userEmail, setUserEmail] = useState("")

  useEffect(()=>{
    setUserEmail( auth.currentUser.email)
    
  },[userEmail])

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      pulse: systolic,
      readingDate: startDate.toDateString(),
      updatedBy: userEmail,
      memberId: parseInt(memberId[0]),
      
  };


    postPulse(data)
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
      <form className={styles.firstNameField} >
        <b className={styles.createNewCarecall}>NEW OXYGEN</b>

        <input
          className={styles.firstNameField1}
          placeholder="Pulse Rate"
          type="number"
          value={systolic}
          onChange={(e) => setSystolic(e.target.value)}
        />
        
            <div  className={styles.lastNameField}>
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

export default PulseRate;
