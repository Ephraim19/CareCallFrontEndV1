import React, { useEffect, useState } from "react";
import styles from "./Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const OtherNote = (otherNotes) => {
  const [ othernoteNote, setOtherNoteNote] = useState('');

  useEffect(() => {
    console.log(otherNotes);
    // setConditionName(condition.condition[0].conditionName);
    // setConditionStatus(condition.condition[0].conditionStatus);
  }, [otherNotes]);

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
        <b className={styles.createNewCarecall}>OTHER NOTES</b>

        <textarea
          className={styles.firstNameField1}
          style={{width:"470px",height:"100px"}}
          placeholder="NOTE"
          type="text"
        //   value={otherNotes}
          onChange={(e) => setOtherNoteNote(e.target.value)}
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

export default OtherNote;
