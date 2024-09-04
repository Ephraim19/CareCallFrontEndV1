import React, { useEffect } from "react";
import styles from "../HomepageForms/Program.module.css";
import { database } from "../Firebase";
import { ref, push, update, get, off } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { newMember } from "../../Services";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NewMember = ({ reloading }) => {
  const [home, setHome] = React.useState("");
  const [county, setCounty] = React.useState("");
  const [town, setTown] = React.useState("");
  const [deliveryInstructions, setDeliveryInstructions] = React.useState("");
  const [startDate, setStartDate] = React.useState(null);
  const [memberEmail, setMemberEmail] = React.useState("");
  const [submit, setSubmit] = React.useState('SUBMIT DATA');

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmit('Submitting...');
    const data = {
      memberName: home,
      memberDOB: startDate.toDateString(),
      memerEmail: memberEmail,
      memberGender: county,
      memberFacility: town,
      memberPhone: deliveryInstructions,
    };

    newMember(data)
      .then((response) => {
        reloading();
        toast.success("Data submitted successfully");
        setSubmit('SUBMIT MORE DATA');
      })
      .catch((error) => {
        console.error(error);
        toast.error("An error occurred. Please try again");
        setSubmit('SUBMIT DATA');
      });
      
  };

  return (
    <div>
      <form className={styles.firstNameField}>
        <b className={styles.createNewCarecall}>New Member Form</b>

        <input
          className={styles.firstNameField1}
          placeholder="FULL NAME"
          type="text"
          value={home}
          onChange={(e) => setHome(e.target.value)}
        />

        <div className={styles.lastNameField}>

          <DatePicker
            showYearDropdown // Enable year dropdown
            scrollableYearDropdown // Make the year dropdown scrollable
            yearDropdownItemNumber={100} // Number of years to show (e.g., 100 years)
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Date of Birth"
          />
        </div>

        <label htmlFor="Program">
          <select
            className={styles.phoneNumber}
            onChange={(e) => setCounty(e.target.value)}
          >
            <option className="App-info" value="Gender" key={"Gender"}>
              Gender
            </option>

            <option className="App-info" value="Male" key={"Male"}>
              Male
            </option>

            <option className="App-info" value="Female" key={"Female"}>
              Female
            </option>
          </select>
        </label>

        <input
          className={styles.emailAddress}
          placeholder="SOURCE"
          type="text"
          value={town}
          onChange={(e) => setTown(e.target.value)}
        />

        <input
          className={styles.firstNameField11}
          placeholder="PHONE NUMBER"
          type="number"
          value={deliveryInstructions}
          onChange={(e) => setDeliveryInstructions(e.target.value)}
        />
        <input
          className={styles.lastNameField1}
          placeholder="Email Address"
          type="email"
          value={memberEmail}
          onChange={(e) => setMemberEmail(e.target.value)}
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

export default NewMember;
