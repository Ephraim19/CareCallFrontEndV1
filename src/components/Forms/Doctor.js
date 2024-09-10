import React, { useEffect, useState } from "react";
import styles from "./Doctor.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postDoctor, postNutritionist } from "../../Services";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { auth } from "../Firebase";

const Nutritionist = ({ condition }) => {
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

  //   useEffect(() => {
  //     console.log(condition);
  //   }, [condition]);

  const handleSelectChange = (event) => {
    const options = Array.from(event.target.selectedOptions);
    const values = options.map((option) => option.value);
    console.log(selectedOptions);
    setSelectedOptions(values);
  };

  const handleSelectChange1 = (event) => {
    const options = Array.from(event.target.selectedOptions);
    const values = options.map((option) => option.value);
    console.log(selectedOption1);
    setSelectedOption1(values);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmit("SUBMITTING DATA...");
    console.log(selectedOptions);
    const data = {
      nutritionistDate: startDate.toDateString(),
      memberId: parseInt(condition[0]),
      updatedBy: auth.currentUser.email,
      consultationType: selectedOptions.toLocaleString(),
      chiefComplaint: conditionName,
      medicalHistory: conditionStatus,
      reviewOfSystems: conditionType,
      diagnosis : diagnosis,
      nextSteps: selectedOption1.toLocaleString(),
      comments: details,
      consultationDate: startDate.toDateString(),
    };

    postDoctor(data)
      .then((response) => {
        // condition[1]();
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
        <b className={styles.createNewCarecall}>DOCTOR'S FORM</b>

        <label htmlFor="Program">
          <select
            className={styles.firstNameField1}
            onChange={handleSelectChange}
            multiple
            style={{ height: "10%" }}
          >
            <option
              className="App-info"
              value="AcuteCare"
              key={"AcuteCare"}
              style={{ color: "blue", height: "70%" }}
            >
              CONSULTATION TYPE
            </option>

            <option
              className="App-info"
              value="Acute Management"
              key={"Acute Management"}
            >
              Acute Management
            </option>

            <option
              className="App-info"
              value="Chronic Condition Management"
              key={"Chronic Condition Management"}
            >
              Chronic Condition Management
            </option>

            <option
              className="App-info"
              value="Lab results review"
              key={"Lab results review"}
            >
              Lab results review
            </option>

            <option
              className="App-info"
              value="Refillable medication"
              key={"Refillable medication"}
            >
              Refillable medication
            </option>
          </select>
        </label>

        <textarea
          className={styles.lastNameField}
          style={{ height: "10%", width: "45%" }}
          placeholder="Chief Complaint"
          type="text"
          value={conditionName}
          onChange={(e) => setConditionName(e.target.value)}
        />

        <textarea
          className={styles.phoneNumber}
          placeholder="Past Medical History"
          style={{ height: "10%", width: "45%" }}
          type="text"
          value={conditionStatus}
          onChange={(e) => setConditionStatus(e.target.value)}
        />

        <textarea
          className={styles.emailAddress}
          placeholder="Review of Systems"
          style={{ height: "10%", width: "45%" }}
          type="text"
          value={conditionType}
          onChange={(e) => setConditionType(e.target.value)}
        />

        <textarea
          className={styles.firstNameField11}
          placeholder="Diagnosis"
          style={{ height: "10%", width: "45%" }}
          type="text"
          value={diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
        />

        <label htmlFor="Program">
          <select
            className={styles.lastNameField1}
            onChange={handleSelectChange1}
            multiple
            style={{ height: "10%",width:"45%" }}
          >
            <option
              className="App-info"
              value="AcuteCare"
              key={"AcuteCare"}
              style={{ color: "blue", height: "70%" }}
            >
            SELECT NEXT STEPS
            </option>

            <option
              className="App-info"
              value="Order Labs"
              key={"Order Labs"}
            >
              Order Labs Tests
            </option>

            <option
              className="App-info"
              value="Prescribe medication"
              key={"Prescribe medication"}
            >
              Prescribe medication
            </option>

            <option
              className="App-info"
              value="Refer to a specialist"
              key={"Refer to a specialist"}
            >
              Refer to a specialist
            </option>

          </select>
        </label>

        <textarea
          className={styles.comments}
          placeholder="Additional Comments"
          type="text"
          value={details}
          onChange={(e) => setDetail(e.target.value)}
        />

        <div className={styles.dates}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Consultation Date"
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

export default Nutritionist;
