import React, { useEffect, useState } from "react";
import styles from "../HomepageForms/Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { patchJourney, getSpecificJourney } from "../../Services";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {auth} from '../Firebase'

const JourneyNotesForm = ({condition}) => {

  const [notes, setNotes] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [details, setDetail] = useState("");
  
  useEffect(() => {

    getSpecificJourney( parseInt(condition[2]) ).then((response) => {
        setDetail(response.notes);
        console.log(response.notes);
    }
    ).catch((error) => {
        console.error(error);
    });

  }, []);


  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
        notes: details,
        notesDate: startDate.toDateString(),
        notesBy: auth.currentUser.email,
  };

  patchJourney(parseInt(condition[2]) , data)
  .then((response) => {
    condition[1]();
    toast.success("Data submitted successfully");
    
  })
  .catch((error) => {
      console.error(error);
      toast.error("Error in submitting data");

});

  };


  return (
    <div>
      <form className={styles.firstNameField}>
        <b className={styles.createNewCarecall}>JOURNEY NOTES</b>

 
        <textarea
          className={styles.firstNameField1}
          style={{ height: "120px",width:"93%" }}
          placeholder="NOTES"
          type="text"
          value={details}
          onChange={(e) => setDetail(e.target.value)}
        />
        
        <div className={styles.firstNameField11}>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  />
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

export default JourneyNotesForm;
