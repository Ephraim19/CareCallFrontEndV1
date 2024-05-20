import React, { useEffect } from "react";
import styles from "./Program.module.css";
import { database } from "../Firebase";
import { ref, push, update, get } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { patchMember } from "../../Services";

const Contacts = (patient) => {
  const [phone1, setPhone1] = React.useState("");
  const [phone2, setPhone2] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [careGiver, setCareGiver] = React.useState("");
  const [careGiverPhone, setCareGiverPhone] = React.useState("");

  // const [programStatusData, setProgramStatusData] = React.useState([]);
  const dbRef = ref(database, patient.patient.hospital + "/clients");

  useEffect(() => {

    setPhone1(patient.patient.Phone || "");
    setPhone2(patient.patient.Phone2 || "");
    setEmail(patient.patient.email || "");
    setCareGiver(patient.patient.CareGiver || "");
    setCareGiverPhone(patient.patient.CareGiverPhone || "");
  }, [patient.patient]);

  const onSubmit = async (e) => {
    e.preventDefault();

    patchMember(parseInt(patient.patient.id), {
      Phone: phone1,
      Phone2: phone2,
      email: email,
      CareGiver: careGiver,
      CareGiverPhone: careGiverPhone,
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
        <b className={styles.createNewCarecall}>Contacts</b>

        <input
          className={styles.firstNameField1}
          placeholder="Phone number 1"
          type="number"
          value={phone1}
          onChange={(e) => setPhone1(e.target.value)}
        />
        <input
          className={styles.lastNameField}
          placeholder="Phone number 2"
          type="number"
          value={phone2}
          onChange={(e) => setPhone2(e.target.value)}
        />
        <input
          className={styles.phoneNumber}
          placeholder="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* <input
          className={styles.emailAddress}
          placeholder="CARE MANAGER"
          type="email"
          value={careManager}
          onChange={(e) => setCareManager(e.target.value)}
        /> */}

        <input
          className={styles.firstNameField11}
          placeholder="Caregiver / Next of Kin"
          type="text"
          value={careGiver}
          onChange={(e) => setCareGiver(e.target.value)}
        />
        <input
          className={styles.lastNameField1}
          placeholder="Caregiver Phone"
          type="text"
          value={careGiverPhone}
          onChange={(e) => setCareGiverPhone(e.target.value)}
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

export default Contacts;
