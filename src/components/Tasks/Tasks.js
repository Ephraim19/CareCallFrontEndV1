import React from 'react';
import './Tasks.css';
import Popup from 'reactjs-popup';
import { getTasks, patchInteraction } from '../../Services';
import InteractionForm from './TasksForm';

const Interaction = ({memberId}) => {
    const [memberInteractions, setMemberInteractions ] = React.useState();
    const progress = ["Not started", "Inprogress", "cancelled", "complete"];
    const [reload, setReload] = React.useState(false);

    React.useEffect(() => {
        getTasks(parseInt(memberId))
            .then((response) => {
              console.log(response)
                setMemberInteractions(response );
            })
            .catch((error) => {
                console.error(error);
            });

    },[memberId, reload])

    const triggerParentEffect = () => {
      setReload(!reload);
    };

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
        <button style={{marginBottom:"-10%", marginTop:"-7%" ,padding:"1%"}} >NEW TASK</button>
        
        }
        nested
        modal
        >
          <InteractionForm condition={[memberId, triggerParentEffect]} />
        </Popup>


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
                      <td>{patient.taskAssignedTo.slice(0,-10)}</td>
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