import React, { useEffect, useState } from "react";
import styles from "../HomepageForms/Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postBloodPressure } from "../../Services";
import { auth } from "../Firebase";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BloodPressure = ({ memberId }) => {
  const [diastolic, setDiastolic] = useState("");
  const [systolic, setSystolic] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    setUserEmail(auth.currentUser.email);
  }, [userEmail]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      diastolic: diastolic,
      systolic: systolic,
      readingDate: startDate.toDateString(),
      updatedBy: userEmail,
      memberId: parseInt(memberId[0]),
    };

    postBloodPressure(data)
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
        <b className={styles.createNewCarecall}>NEW BLOOD PRESSURE FORM</b>

        <input
          className={styles.firstNameField1}
          placeholder="SYSTOLIC"
          type="text"
          value={systolic}
          onChange={(e) => setSystolic(e.target.value)}
        />
        <input
          className={styles.lastNameField}
          placeholder="DIASTOLIC"
          type="text"
          value={diastolic}
          onChange={(e) => setDiastolic(e.target.value)}
        />
        <div className={styles.phoneNumber}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
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

export default BloodPressure;
