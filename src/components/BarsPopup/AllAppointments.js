import React from "react";
import { getAppointments } from "../../Services";

const AllAppointments = () => {
  const [memberInteractions, setMemberInteractions] = React.useState();

  React.useEffect(() => {
    getAppointments()
      .then((response) => {
        setMemberInteractions(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1>All Interactions</h1>
      <table className="customers">
        <tr>
          <th>Appointment</th>

          <th>Due</th>

          <th>Status</th>

          <th>Department</th>

          <th>Member</th>
        </tr>
        {memberInteractions &&
          memberInteractions.map((patient) => (
            <>
              {patient ? (
                <tr>
                  <td>{patient.appointmentReason} </td>

                  <td>
                    {patient.appointmentDate} {patient.appointmentTime}
                  </td>

                  <td>{patient.appointmentStatus}</td>

                  <td>{patient.appointmentDepartment }</td>

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

export default AllAppointments;
