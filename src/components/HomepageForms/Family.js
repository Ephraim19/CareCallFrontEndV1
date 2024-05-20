import React, { useEffect } from "react";
import styles from "./Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postMember, postDependant } from "../../Services";

const Family = (familyDisplay) => {
  const [member, setMember] = React.useState("");
  const [age, setAge] = React.useState("");
  const [relationship, setRelationship] = React.useState("");
  const [status, setStatus] = React.useState("");

  useEffect(() => {
    console.log(familyDisplay.familyDisplay[0].dependantId);
  }, [familyDisplay]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      dependantId: familyDisplay.familyDisplay[0].dependantId,
      dependantNames: member,
      dependantAge: age,
      dependantRelationship: relationship,
      dependantStatus: status,

    };

    try {
      const response = await postDependant(data);
      console.log(response);
      toast.success("Data submitted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Error submitting data");
    }
  };

  return (
    <div>
      <form className={styles.firstNameField}>
        <b className={styles.createNewCarecall}>FAMILY</b>

        <input
          className={styles.firstNameField1}
          placeholder="NAME"
          type="text"
          value={member}
          onChange={(e) => setMember(e.target.value)}
        />
        <input
          className={styles.lastNameField}
          placeholder="AGE"
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          className={styles.phoneNumber}
          placeholder="RELATIONSHIP"
          type="text"
          value={relationship}
          onChange={(e) => setRelationship(e.target.value)}
        />
        <input
          className={styles.emailAddress}
          placeholder="STATUS"
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        {/* <input
          className={styles.firstNameField11}
          placeholder="CHILD"
          type="text"
          value={child}
          onChange={(e) => setChild(e.target.value)}
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

export default Family;
