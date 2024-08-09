import React from 'react';
import  '../../components/Tasks/Tasks.css';
import Popup from 'reactjs-popup';
import { getJourney , patchJourney } from '../../Services';
import { FaPen } from 'react-icons/fa';
import JourneyNotesForm from './JourneyNotesForm';

const Journey = ({memberId}) => {
    const [memberInteractions, setMemberInteractions ] = React.useState();
    const progress = ["Not started", "Inprogress", "cancelled", "complete"];
    const [reload, setReload] = React.useState(false);

    React.useEffect(() => {
        getJourney(parseInt(memberId))
            .then((response) => {
                console.log(response);
                setMemberInteractions(response );
            })
            .catch((error) => {
                console.error(error);
            });

    },[memberId,reload]);

    const triggerParentEffect = () => {
        setReload(!reload);
      };

    const handleStatus = (e) => {

      const data = {
        status: e.target.value
      }

      patchJourney(parseInt(e.target.id) , data)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
          });
    }

    return (
        <>

        <table className="customers" style={{marginTop:"-7%"}} >
              <tr>
                <th>Journey</th>

                <th>Due</th>

                <th>Status</th>

                <th>Notes</th>

              </tr>
                      {memberInteractions && memberInteractions.map((patient) => (
                <>
                  {patient ? (
                    <tr>

                      <td>{patient.task}</td>

                        <td>{patient.taskDate}</td>
                       

                      <td>
                        <form>
                          <label htmlFor="status">
                            <select onChange={handleStatus} id={patient.id}>
                              <option className="App-info" value={progress[0]}>
                                {patient.status !== "Not started"
                                  ? patient.status
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


        <Popup trigger={
        <td >  {patient.notes ? (patient.notes + ' ' + patient.notesBy + ' ' + patient.notesDate  )  : <span style={{ cursor:"pointer" }} >< FaPen /> </span>}</td>
        
        }
        nested
        modal
        >
          <JourneyNotesForm condition={[memberId, triggerParentEffect, patient.id ]} />
        </Popup>

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

export default Journey;