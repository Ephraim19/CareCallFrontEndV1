import React from "react";
import { getMyTasks } from "../../Services";
import { auth } from "../Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useLocation } from "react-router-dom";

const MyTasks = () => {
  const [memberInteractions, setMemberInteractions] = React.useState();

  React.useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        getMyTasks(user.email)
        .then((response) => {
          setMemberInteractions(response);
        })
        .catch((error) => {
          console.error(error);
        });
      } else {
        navigate("/email/login");
      }
    });

  }, []);

  return (
    <>
      <h1>My Tasks</h1>

      <table className="customers">
        <tr>
          <th>Task</th>

          <th>Status</th>

          <th>Due Date</th>

          <th>Member</th>
        </tr>
        {memberInteractions &&
          memberInteractions.map((patient) => (
            <>
              {patient ? (
                <tr>
                  <td>
                    {patient.taskName} <br />
                    {patient.task}
                  </td>

                  <td>{patient.taskStatus}</td>

                  <td>{patient.taskDueDate}</td>

                  <td>{patient.memberId}</td>
                </tr>
              ) : (
                " "
              )}
            </>
          ))}
      </table>
    </>
  );
};

export default MyTasks;
