import React from 'react';
import { getAllTasks } from '../../Services';

const AllTasks = () => {
    const [memberInteractions, setMemberInteractions ] = React.useState();

    React.useEffect(() => {
        getAllTasks()
            .then((response) => {
              console.log(response);
                setMemberInteractions(response );
            })
            .catch((error) => {
                console.error(error);
            });

    },[]);

    return (
        <>
        <h1>All Tasks</h1>
        <table className="customers">
              <tr>
                <th>Task</th>

                <th>Due</th>

                <th>Status</th>

                <th>Assignee</th>
              </tr>
                      {memberInteractions && memberInteractions.map((patient) => (
                <>
                  {patient ? (
                    <tr>

                      <td>{patient. taskName } <br /> {patient.task}</td>

                      <td>{patient.taskDueDate}</td>
                       
                      <td>{patient.taskStatus}</td>

                      <td>{patient.assignedTo}</td>

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

export default AllTasks;