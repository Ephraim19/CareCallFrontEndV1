import React, { useEffect, useState } from "react";
import styles from "./Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postOtherNote, putOtherNote } from "../../Services";

const OtherNote = (otherNotes) => {
  const [othernoteNote, setOtherNoteNote] = useState("");

  useEffect(() => {
    console.log(otherNotes.otherNotes[1]);
    setOtherNoteNote(
      otherNotes.otherNotes[0].length > 0
        ? otherNotes.otherNotes[0][0].othernoteNote
        : ""
    );
  }, [otherNotes]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      memberId: otherNotes.otherNotes[1],
      othernoteNote: othernoteNote,
    };

    if (otherNotes.otherNotes[0].length > 0) {
      putOtherNote(parseInt(otherNotes.otherNotes[1]), data)
        .then((response) => {
          console.log(response);
          toast.success("Data submitted successfully");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Error in submitting data");
        });
    } else {
        try {
            const response = await postOtherNote(data);
            console.log(response);
            toast.success("Data submitted successfully");
          } catch (error) {
            console.error(error);
            toast.error("Error submitting data");
          }
    }
  };

  return (
    <div>
      <form className={styles.firstNameField}>
        <b className={styles.createNewCarecall}>OTHER NOTES</b>

        <textarea
          className={styles.firstNameField1}
          style={{ width: "470px", height: "100px" }}
          placeholder="NOTE"
          type="text"
          value={othernoteNote}
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
