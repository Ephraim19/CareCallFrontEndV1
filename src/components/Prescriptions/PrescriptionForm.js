import React, { useEffect, useState } from "react";
import styles from "../HomepageForms/Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postPrescription } from "../../Services";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PrescriptionForm = ({ memberId1 }) => {
  const [program, setProgram] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [stage, setStage] = React.useState("");
  const [careManager, setCareManager] = React.useState("");
  const [nutritionist, setNutritionist] = React.useState("");
  const [engagementLead, setEngagementLead] = React.useState("");
  const [startDate, setStartDate] = useState(null);
  const [submit, setSubmit] = useState("SUBMIT DATA");
  // const [programStatusData, setProgramStatusData] = React.useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmit("SUBMITTING DATA...");
    const data = {
        memberId: parseInt(memberId1[0]),
        prescriptionDrug: program,
        prescriptionDate: startDate ? startDate.toISOString().split('T')[0] : null,
        prescriptionDosage: stage,
        prescriptionFrequency: careManager,
        prescriptionDuration: nutritionist,
    };

    postPrescription(data).then((response) => {
        memberId1[1]();
        toast.success("Data submitted successfully");
        setSubmit("SUBMIT DATA");
        }
    ).catch((error) => {
        console.log(error);
        toast.error("Error in submitting data");
        setSubmit("SUBMIT DATA");
    }
    );
  };

  return (
    <div>
      <form className={styles.firstNameField}>
        <b className={styles.createNewCarecall}>Prescription</b>

        <input
          className={styles.firstNameField1}
          placeholder="MEDICATION NAME"
          type="email"
          value={program}
          onChange={(e) => setProgram(e.target.value)}
        />

        <div className={styles.lastNameField}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Medication Start Date"
          />
        </div>

        <input
          className={styles.phoneNumber}
          placeholder="DOSAGE"
          type="number"
          value={stage}
          onChange={(e) => setStage(e.target.value)}
        />

        <input
          className={styles.emailAddress}
          placeholder="FREQUENCY"
          type="number"
          value={careManager}
          onChange={(e) => setCareManager(e.target.value)}
        />

        <input
          className={styles.firstNameField11}
          placeholder="DURATION IN DAYS"
          type="number"
          value={nutritionist}
          onChange={(e) => setNutritionist(e.target.value)}
        />
        {/* <input
          className={styles.lastNameField1}
          placeholder="ENGAGEMENT LEAD"
          type="text"
          value={engagementLead}
          onChange={(e) => setEngagementLead(e.target.value)}
        /> */}

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

export default PrescriptionForm;
