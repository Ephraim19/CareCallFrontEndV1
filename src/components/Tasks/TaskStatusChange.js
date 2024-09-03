import React, { useEffect, useState } from "react";
import styles from "../HomepageForms/Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postInteraction,patchInteraction } from "../../Services";
import { auth } from "../Firebase";

const TaskStatusChange = ({ condition }) => {
  const [conditionName, setConditionName] = useState("");
  const [conditionStatus, setConditionStatus] = useState("");
  const [details, setDetail] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const progress = ["Not started", "Inprogress", "cancelled", "complete"];

  useEffect(() => {
    setUserEmail(auth.currentUser.email);
  }, [userEmail]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      memberId: parseInt(condition[0]),
      channel: conditionName,
      updatedBy: userEmail,
      interactionDetails: details,
      channelDirection: conditionStatus,
      taskId: parseInt(condition[2].id),
    };

    postInteraction(data)
      .then((response) => {
        condition[1]();
        toast.success("Data submitted successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in submitting data");
      });
  };

  const handleStatus = (e) => {
    const data = {
      taskStatus: e.target.value,
    };

    patchInteraction(parseInt(e.target.id), data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });

  };

  return (
    <div>
      <form className={styles.firstNameField}>
        <b className={styles.createNewCarecall}>TASK EXECUTION DETAILS</b>

        <form>
          <label htmlFor="status">
            <select
              onChange={handleStatus}
              id={condition[2].id}
              className={styles.firstNameField1}
            >
              <option className="App-info" value={progress[0]}>
                {condition[2].taskStatus !== "Not started"
                  ? condition[2].taskStatus
                  : "UPDATE STATUS"}
              </option>

              <option className="App-info" value={progress[1]}>
                Inprogress
              </option>
              <option className="App-info" value={progress[2]}>
                Cancelled
              </option>
              <option className="App-info" value={progress[3]}>
                Complete
              </option>
            </select>
          </label>
        </form>

        <label htmlFor="Program">
          <select
            className={styles.lastNameField}
            onChange={(e) => setConditionName(e.target.value)}
          >
            <option className="App-info" value="AcuteCare" key={"Channel"}>
              COMMUNICATION CHANNEL
            </option>

            <option className="App-info" value="Phone call" key={"Phone call"}>
              Phone call
            </option>

            <option className="App-info" value="SMS" key={"SMS"}>
              SMS
            </option>

            <option className="App-info" value="Email" key={"Email"}>
              Email
            </option>

            <option className="App-info" value="WhatsApp" key={"WhatsApp"}>
              WhatsApp
            </option>
          </select>
        </label>

        <textarea
          className={styles.phoneNumber}
          style={{ height: "100px", width: "93%" }}
          placeholder="TASK EXECUTION DETAILS"
          type="text"
          value={details}
          onChange={(e) => setDetail(e.target.value)}
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

export default TaskStatusChange;
