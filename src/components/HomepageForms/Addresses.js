import React, { useEffect } from "react";
import styles from "./Program.module.css";
import { database } from "../Firebase";
import { ref, push, update, get, off } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { patchMember } from "../../Services";
// import Cookies from "js-cookie";

const Addresses = (addressDisplay) => {
  const [home, setHome] = React.useState("");
  const [office, setOffice] = React.useState("");
  const [geolocation, setGeolocation] = React.useState("");
  const [county, setCounty] = React.useState("");
  const [town, setTown] = React.useState("");
  const [deliveryInstructions, setDeliveryInstructions] = React.useState("");
  const dbRef = ref(database, "Addresses");

  useEffect(() => {
    
    setHome(addressDisplay.addressDisplay.patientToDisplayId.memberHome || "");
    setOffice(
      addressDisplay.addressDisplay.patientToDisplayId
        .memberOffice || ""
    );
    setCounty(
      addressDisplay.addressDisplay.patientToDisplayId
        .memberCounty || ""
    );
    setTown(addressDisplay.addressDisplay.patientToDisplayId.memberTown || "");
    setDeliveryInstructions(
      addressDisplay.addressDisplay.patientToDisplayId
        .memberDelivery || ""
    );
  }, [addressDisplay]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      memberHome: home,
      memberOffice: office,
      memberCounty: county,
      memberTown: town,
      memberDelivery: deliveryInstructions,
    };
    patchMember(
      parseInt(addressDisplay.addressDisplay.patientToDisplayId.id),
      data
    )
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
          placeholder="Home"
          type="text"
          value={home}
          onChange={(e) => setHome(e.target.value)}
        />
        <input
          className={styles.lastNameField}
          placeholder="OFFICE"
          type="text"
          value={office}
          onChange={(e) => setOffice(e.target.value)}
        />
        <input
          className={styles.phoneNumber}
          placeholder="COUNTY"
          type="text"
          value={county}
          onChange={(e) => setCounty(e.target.value)}
        />

        <input
          className={styles.emailAddress}
          placeholder="TOWN"
          type="text"
          value={town}
          onChange={(e) => setTown(e.target.value)}
        />

        <input
          className={styles.firstNameField11}
          placeholder="DELIVERY INSTRUCTIONS"
          type="text"
          value={deliveryInstructions}
          onChange={(e) => setDeliveryInstructions(e.target.value)}
        />
        {/* <input
          className={styles.lastNameField1}
          placeholder="Caregiver Phone"
          type="text"
          value={careGiverPhone}
          onChange={(e) => setCareGiverPhone(e.target.value)}
        /> */}

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

export default Addresses;
