import React from 'react';
import './Interaction.css';
import Popup from 'reactjs-popup';
import { getInteraction,getAllInteraction } from '../../Services';
import InteractionForm from './InteractionForm';


const Interaction = ({memberId}) => {
    const [memberInteractions, setMemberInteractions ] = React.useState();

    React.useEffect(() => {
        getAllInteraction(parseInt(memberId))
            .then((response) => {
              
                setMemberInteractions(response.reverse() ) ;
            })
            .catch((error) => {
                console.error(error);
            });

    },[memberId])


    return (
        <>
        <Popup trigger={
        <button style={{marginBottom:"-10%",padding:"1%"}} >ADD INTERACTION</button>
        }
        nested
        modal
        >
          <InteractionForm condition={memberId} />
        </Popup>

        <table className="customers">
              <tr>
                <th>Date </th>
                <th>Conversation </th>
              </tr>
              {memberInteractions && memberInteractions.map((int) => (
                <tr>
                  <td>{int.created.slice(0,10) }</td>
                  <td>
                  {int.interactionDetails},  <br />
                  {int.updatedBy}
                  </td>
                </tr>
              ))}

            </table>

        {/* {memberInteractions && memberInteractions.map((int) => (

        <div style={{marginBottom:"-10%"}} >
            <div className="frame-parent4">
            <div className="blood-pressure-parent">
              <div className="blood-pressure">{int.interactionDetails}</div>
            </div>
          </div>

          <div className="property-editor-inner2">
            <div className="date-parent">
              <div className="date">{int.created.slice(0,10) }</div>
              <div className="diastolic-mmhg">{int.channel}</div>
              <div className="diastolic-mmhg">{int.channelDirection}</div>
              <div className="diastolic-mmhg">{int.updatedBy}</div>
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