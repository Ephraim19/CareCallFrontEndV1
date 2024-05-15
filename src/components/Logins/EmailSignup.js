import React from "react";
import styles from "./SIGNUPCREATENEWACCOUNT.module.css";
import FirstNameField from "./FirstNameField";

const EmailSignup = () => {
  return (
    <div className={styles.signUpcreateNewAccount}>
      <FirstNameField />
    </div>
  );
};


export default EmailSignup;
