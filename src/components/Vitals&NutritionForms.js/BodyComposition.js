import React, { useEffect, useState } from "react";
import styles from "../Forms/Doctor.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postBodyComposition } from "../../Services";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { auth } from "../Firebase";

const BodyComposition = ({ memberId }) => {
  const [conditionName, setConditionName] = useState("");
  const [conditionStatus, setConditionStatus] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [details, setDetail] = useState("");
  const [submit, setSubmit] = useState("SUBMIT DATA");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOption1, setSelectedOption1] = useState([]);
  const [conditionType, setConditionType] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [nextSteps, setNextSteps] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmit("SUBMITTING DATA...");
    console.log(selectedOptions);

    const data = {
      readingDate: startDate.toDateString(),
      memberId: parseInt(memberId[0]),
      updatedBy: auth.currentUser.email,

      bodyFat: selectedOptions,
      muscleMass: conditionName,
      boneMass: conditionStatus,
      visceralFat: conditionType,
      DCI: diagnosis,
      metabolicAge: selectedOption1,
      bodyWater : details,
    };

    postBodyComposition(data)
      .then((response) => {
        memberId[1]();
        toast.success("Data submitted successfully");
        setSubmit("SUBMIT DATA");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in submitting data");
        setSubmit("SUBMIT DATA");
      });
  };

  return (
    <div>
      <form className={styles.firstNameField}>
        <b className={styles.createNewCarecall}>BODY COMPOSITION </b>

        <input
          className={styles.firstNameField1}
          style={{ width: "30%" }}
          placeholder="Body fat %"
          type="text"
          value={selectedOptions}
          onChange={(e) => setSelectedOptions(e.target.value)}
        />

        <input
          className={styles.lastNameField}
          placeholder="Muscle mass %"
          type="text"
          value={conditionName}
          onChange={(e) => setConditionName(e.target.value)}
        />

        <input
          className={styles.phoneNumber}
          placeholder="Bone mass %"
          type="text"
          value={conditionStatus}
          onChange={(e) => setConditionStatus(e.target.value)}
        />

        <input
          className={styles.emailAddress}
          placeholder="Visceral fat %"
          type="text"
          value={conditionType}
          onChange={(e) => setConditionType(e.target.value)}
        />

        <input
          className={styles.firstNameField11}
          placeholder="DCI"
          type="text"
          value={diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
        />

        <input
          className={styles.lastNameField1}
          placeholder="Metabolic age"
          type="text"
          value={selectedOption1}
          onChange={(e) => setSelectedOption1(e.target.value)}
        />

        <input
          className={styles.comments}
          placeholder="Body water %"
          type="text"
          value={details}
          onChange={(e) => setDetail(e.target.value)}
        />

        <div className={styles.dates}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Reading Date"
          />
        </div>

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

export default BodyComposition;
