import React from 'react';
import './Tasks.css';
import Popup from 'reactjs-popup';
import { getTasks } from '../../Services';
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

    const handleStatus = () => {

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

                      {/* {new Date(patient.dueDate) <= new Date() &&
                      patient.completed !== "complete" ? (
                        <td style={{ color: "red" }}>
                          {patient.dueDate? patient.dueDate.slice(0, 17): " "}
                        </td>
                      ) : ( */}
                        <td>{patient.taskDueDate}</td>
                       {/* )} */}

                      <td>
                        <form>
                          <label htmlFor="status">
                            <select onChange={handleStatus} id={patient.id}>
                              {/* <option className="App-info" value={progress[0]}>
                                {patient.completed
                                  ? patient.completed
                                  : "Not started"}
                              </option> */}
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

        {/* {memberInteractions && memberInteractions.map((int) => (

        <div style={{marginBottom:"-10%"}} >
            <div className="frame-parent4">
            <div className="blood-pressure-parent">
              <div className="blood-pressure">{int.task}</div>
            </div>
          </div>

          <div className="property-editor-inner2">
            <div className="date-parent">
              <div className="date">{int.taskDueDate ? int.taskDueDate.slice(0,10) : ""}</div>
              <div className="diastolic-mmhg">{int.taskStatus}</div>
              <div className="diastolic-mmhg">{int.taskDepartment }</div>
              <div className="diastolic-mmhg">{int.taskAssignedTo}</div>
            </div>
          </div>

          <div className="property-editor-inner1">
            <div className="line-div" />
          </div>

        </div>
          ))} */}
          </>
    );
};

export default Interaction;