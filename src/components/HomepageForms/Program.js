import React, { useEffect } from "react";
import styles from "./Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getMember, patchMember, putMember } from "../../Services";

const Program = ({programStatusDisplay}) => {
  const [program, setProgram] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [stage, setStage] = React.useState("");
  const [careManager, setCareManager] = React.useState("");
  const [nutritionist, setNutritionist] = React.useState("");
  const [engagementLead, setEngagementLead] = React.useState("");
  // const [programStatusData, setProgramStatusData] = React.useState([]);

  useEffect(() => {
    if (programStatusDisplay) {
      setProgram(
        programStatusDisplay
          .memberProgram
      );
      setStatus(
        programStatusDisplay
          .memberStatus
      );
      
      setStage(
        programStatusDisplay
          .memberOnboardingStage
      );
      setCareManager(
        programStatusDisplay
          .memberCareManager
      );
      setNutritionist(
        programStatusDisplay
          .memberNutritionist
      );
      setEngagementLead(
        programStatusDisplay
          .memberEngagementLead
      );
    }
  }, [programStatusDisplay]);

  const onSubmit = async (e) => {
    e.preventDefault();

    print(status);
    print(program);
    patchMember(
      parseInt(programStatusDisplay.id),
      {
        memberProgram: program,
        memberStatus: status,
        memberOnboardingStage: stage,
        memberCareManager: careManager,
        memberNutritionist: nutritionist,
        memberEngagementLead: engagementLead,
      }
    )
      .then((response) => {
        toast.success("Data Updated Successfully");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Error Updating Data");
      });
  };

  return (
    <div>
      <form className={styles.firstNameField}>
        <b className={styles.createNewCarecall}>Program, Status & Assignees</b>

        <label htmlFor="Program">
          <select
            className={styles.firstNameField1}
            onChange={(e) => setProgram(e.target.value)}
          >
            <option value={program} key={"HS"}>
              {program.length > 0 ? program : "SELECT THE PROGRAM"}
            </option>
            <option className="App-info" value="AcuteCare" key={"AcuteCare"}>
              AcuteCare
            </option>

            <option
              className="App-info"
              value="VitalCare360"
              key={"VitalCare360"}
            >
              VitalCare360
            </option>

            <option
              className="App-info"
              value="ChronicCare"
              key={"ChronicCare"}
            >
              ChronicCare
            </option>

            <option className="App-info" value="Wellness" key={"Wellness"}>
              Wellness
            </option>

            <option
              className="App-info"
              value="MedicalCamp"
              key={"MedicalCamp"}
            >
              MedicalCamp
            </option>
          </select>
        </label>

        <label htmlFor="Status">
          <select
            className={styles.lastNameField}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value={status} key={"HS1"}>
              {status.length > 0 ? status : "SELECT THE STATUS"}
            </option>
            <option className="App-info" value="Active" key={"Active"}>
              Active
            </option>

            <option className="App-info" value="inactive" key={"Inactive"}>
              Inactive
            </option>
            <option className="App-info" value="Discharged" key={"Discharged"}>
              Discharged
            </option>
          </select>
        </label>

        <label htmlFor="Stage">
          <select
            className={styles.phoneNumber}
            onChange={(e) => setStage(e.target.value)}
          >
            <option value={stage} key={"HS2"}>
              {stage.length > 0 ? stage : "SELECT THE STAGE"}
            </option>
            <option className="App-info" value="Discovery" key={"Discovery"}>
              Discovery
            </option>

            <option className="App-info" value="Onboarded" key={"Onboarded"}>
              Onboarded
            </option>
            <option className="App-info" value="Discharged" key={"Discharged"}>
              Discharged
            </option>
          </select>
        </label>

        <input
          className={styles.emailAddress}
          placeholder="CARE MANAGER"
          type="email"
          value={careManager}
          onChange={(e) => setCareManager(e.target.value)}
        />

        <input
          className={styles.firstNameField11}
          placeholder="NUTRITIONIST"
          type="text"
          value={nutritionist}
          onChange={(e) => setNutritionist(e.target.value)}
        />
        <input
          className={styles.lastNameField1}
          placeholder="ENGAGEMENT LEAD"
          type="text"
          value={engagementLead}
          onChange={(e) => setEngagementLead(e.target.value)}
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

export default Program;
