import React, { useEffect } from "react";
import styles from "./Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { patchMember } from "../../Services";

const InsuranceEmployer = (insDisplay) => {
  const [employer, setEmployer] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [insurer, setInsurer] = React.useState("");
  const [insuranceId, setInsuranceId] = React.useState("");

  useEffect(() => {
    if (insDisplay.insDisplay) {
      setEmployer(insDisplay.insDisplay.patientToDisplayId.memberEmployer);
      setDepartment(insDisplay.insDisplay.patientToDisplayId.memberDepartment);
      setInsurer(insDisplay.insDisplay.patientToDisplayId.memberInsurer);
      setInsuranceId(insDisplay.insDisplay.patientToDisplayId.memberInsuranceId);
      console.log(insDisplay.insDisplay.patientToDisplayId);
    }
  }, [insDisplay]);

  const onSubmit = async (e) => {
    e.preventDefault();

    patchMember(parseInt(insDisplay.insDisplay.patientToDisplayId.id), {
      memberEmployer: employer,
      memberDepartment: department,
      memberInsurer: insurer,
      memberInsuranceId: insuranceId,
    })
      .then((response) => {
        console.log(response);
        toast.success("Data submitted successfully");
      })
      .catch((error) => {
        console.error(error);
        toast.error("An error occurred. Please try again");
      });

  };

  return (
    <div>
      <form className={styles.firstNameField}>
        <b className={styles.createNewCarecall}>Insurance & Employer</b>

        <input
          className={styles.firstNameField1}
          placeholder="EMPLOYER"
          type="text"
          value={employer}
          onChange={(e) => setEmployer(e.target.value)}
        />
        <input
          className={styles.lastNameField}
          placeholder="DEPARTMENT"
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <input
          className={styles.phoneNumber}
          placeholder="INSURER"
          type="text"
          value={insurer}
          onChange={(e) => setInsurer(e.target.value)}
        />
        <input
          className={styles.emailAddress}
          placeholder="INSURANCE ID"
          type="text"
          value={insuranceId}
          onChange={(e) => setInsuranceId(e.target.value)}
        />

        <div className={styles.signUpButton} onClick={onSubmit}>
          <div className={styles.signUpButton1}>
            <div className={styles.signUpButtonChild} />
            <b className={styles.createAccount}>SUBMIT DATA</b>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default InsuranceEmployer;
