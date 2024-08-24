import React, { useEffect } from "react";
import styles from "../HomepageForms/Program.module.css";
import { auth, database } from "../Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postAppointment } from "../../Services";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentForm = ({ memberId }) => {
  const [county, setCounty] = React.useState("");
  const [deliveryInstructions, setDeliveryInstructions] = React.useState("");
  const [startDate, setStartDate] = React.useState(new Date());
  const [selectedTime, setSelectedTime] = React.useState(null);

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      memberId: memberId[0],
      appointmentDate: startDate.toDateString(),
      appointmentTime: selectedTime.toString().slice(15, 21),
      appointmentDepartment: county,
      appointmentReason: deliveryInstructions,
      appointmentCreatedBy: auth.currentUser.email,
    };

    if (memberId) {
      postAppointment(data)
        .then((response) => {
          memberId[1]();
          toast.success("Data submitted successfully");
        })
        .catch((error) => {
          console.error(error);
          toast.error("An error occurred. Please try again");
        });
    } else {
      toast.error("Please select a member");
    }
  };

  return (
    <div>
      <form className={styles.firstNameField}>
        <b className={styles.createNewCarecall}>New Appointment Form</b>

        <label htmlFor="Program">
          <select
            className={styles.firstNameField1}
            onChange={(e) => setCounty(e.target.value)}
          >
            <option className="App-info" value="Gender" key={"Gender"}>
              Department
            </option>

            <option className="App-info" value="Doctor" key={"Doctor"}>
              Doctor
            </option>

            <option
              className="App-info"
              value="Nutritionist"
              key={"Nutritionist"}
            >
              Nutritionist
            </option>

            <option
              className="App-info"
              value="Psychologist"
              key={"psychologist"}
            >
              Psychologist
            </option>
          </select>
        </label>

        <div className={styles.lastNameField}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>

        <div className={styles.phoneNumber}>
          <DatePicker
            selected={selectedTime}
            onChange={handleTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption="Time"
            dateFormat="h:mm aa"
            
          />
        </div>

        {/* <input
          className={styles.emailAddress}
          placeholder="SOURCE"
          type="text"
          value={town}
          onChange={(e) => setTown(e.target.value)}
        /> */}

        <textarea
          className={styles.firstNameField11}
          style={{ height: "55px", width: "90%" }}
          placeholder="Reason"
          type="text"
          value={deliveryInstructions}
          onChange={(e) => setDeliveryInstructions(e.target.value)}
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

export default AppointmentForm;
