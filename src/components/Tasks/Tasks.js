import React from 'react';
import './Tasks.css';
import Popup from 'reactjs-popup';
import { getTasks, patchInteraction } from '../../Services';
import InteractionForm from './TasksForm';

const Interaction = ({memberId}) => {
    const [memberInteractions, setMemberInteractions ] = React.useState();
    const progress = ["Not started", "Inprogress", "cancelled", "complete"];

    React.useEffect(() => {
        getTasks(parseInt(memberId))
            .then((response) => {

                setMemberInteractions(response );
            })
            .catch((error) => {
                console.error(error);
            });

    },[memberId])

    const handleStatus = (e) => {

      const data = {
        taskStatus: e.target.value
      }

      patchInteraction(parseInt(e.target.id) , data)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
          });
    }

    return (
        <>
        <Popup trigger={
        <button style={{marginBottom:"-10%",padding:"1%"}} >ADD TASK</button>
        }
        nested
        modal
        >
          <InteractionForm condition={memberId} />
        </Popup>

        <table className="customers">
              <tr>
                <th>Task</th>

                <th>Due</th>

                <th>Status</th>
              </tr>
                      {memberInteractions && memberInteractions.map((patient) => (
                <>
                  {patient ? (
                    <tr>

                      <td>{patient. taskName } <br /> {patient.task}</td>

                        <td>{patient.taskDueDate}</td>
                       

                      <td>
                        <form>
                          <label htmlFor="status">
                            <select onChange={handleStatus} id={patient.id}>
                              <option className="App-info" value={progress[0]}>
                                {patient.taskStatus !== "Not started"
                                  ? patient.taskStatus
                                  : "Not started"}
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
                      </td>
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

export default Interaction;