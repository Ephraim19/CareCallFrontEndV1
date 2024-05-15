import React, { useEffect, useState } from "react";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { auth,database } from "../Firebase";
import { useNavigate } from "react-router-dom";

import { ref, push, get } from "firebase/database";

const Login = () => {
  const navigate = useNavigate();
  const dbRef = ref(database, "HealthCordinator");
  const [hc, setHc] = useState("");

  useEffect(() => {
    //read HC
    let dataArray = [];

    get(dbRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          dataArray = Object.entries(snapshot.val()).map(([id, data]) => ({
            id,
            ...data,
          }));
          setHc(dataArray);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const signIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="landing">

      </div>
      <div className="google">
        <button onClick={signIn}>sign in with google</button>
      </div>
    </div>
  );
};

export default Login;
