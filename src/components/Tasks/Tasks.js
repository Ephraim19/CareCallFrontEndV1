import React from 'react';
import './Tasks.css';
import Popup from 'reactjs-popup';
import { getTasks } from '../../Services';
import InteractionForm from './TasksForm';

const Interaction = ({memberId}) => {
    const [memberInteractions, setMemberInteractions ] = React.useState();

    React.useEffect(() => {
        getTasks(parseInt(memberId))
            .then((response) => {
               

               //setMemberInteractions(response.filter((element) => element.memberId === parseInt(memberId)));
                setMemberInteractions(response);
            })
            .catch((error) => {
                console.error(error);
            });

    },[memberId])

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
        {memberInteractions && memberInteractions.map((int) => (

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
          ))}
          </>
    );
};

export default Interaction;