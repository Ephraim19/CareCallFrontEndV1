import React, { useEffect, useState } from "react";
import styles from "../HomepageForms/Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postNutritionist } from "../../Services";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { auth } from "../Firebase";

const Nutritionist = ({ condition }) => {
  const [conditionName, setConditionName] = useState("");
  const [conditionStatus, setConditionStatus] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [details, setDetail] = useState("");
  const [submit , setSubmit] = useState('SUBMIT DATA');

//   useEffect(() => {
//     console.log(condition);
//   }, [condition]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmit('SUBMITTING DATA...');
    const data = {
      nutritionistDate: startDate.toDateString(),
      memberId: parseInt(condition[0]),
      updatedBy: auth.currentUser.email,
      nutritionistAssesment: conditionName,
      nutritionistDiagnosis: conditionStatus,
      nutritionistRecommendations: details,
    };

    postNutritionist(data)
      .then((response) => {
        // condition[1]();
        toast.success("Data submitted successfully");
        setSubmit('SUBMIT DATA');
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in submitting data");
        setSubmit('SUBMIT DATA');
      });
  };

  return (
    <div>
      <form className={styles.firstNameField}>
        <b className={styles.createNewCarecall}>NUTRITIONIST FORM</b>

        <textarea
          className={styles.firstNameField1}
          style={{ height: "70px", width: "93%" }}
          placeholder="Nutritional Health Assesment"
          type="text"
          value={conditionName}
          onChange={(e) => setConditionName(e.target.value)}
        />

        <input
          className={styles.phoneNumber}
          placeholder="Nutritional Diagnosis "
          type="text"
          value={conditionStatus}
          onChange={(e) => setConditionStatus(e.target.value)}
        />

        <div className={styles.emailAddress}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Consultation Date"
          />
        </div>

        <textarea
          className={styles.firstNameField11}
          style={{ height: "13%", width: "93%" }}
          placeholder="Nutritional Recommendations"
          type="text"
          value={details}
          onChange={(e) => setDetail(e.target.value)}
        />

        <button className={styles.signUpButton} onClick={onSubmit}>
          <div className={styles.signUpButton1}>
            <div className={styles.signUpButtonChild} />
            <b className={styles.createAccount}>{submit}</b>
          </div>
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Nutritionist;
