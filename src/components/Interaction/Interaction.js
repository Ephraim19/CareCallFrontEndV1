import React from 'react';
import './Interaction.css';
import { getInteraction,getAllInteraction } from '../../Services';

const Interaction = ({memberId}) => {
    const [memberInteractions, setMemberInteractions ] = React.useState();

    React.useEffect(() => {
        getAllInteraction(parseInt(memberId))
            .then((response) => {
                console.log(response);
                setMemberInteractions(response);
            })
            .catch((error) => {
                console.error(error);
            });

    },[memberId])

    return (
        <>
        {memberInteractions && memberInteractions.map((int) => (

        <div >
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
          ))}
          </>
    );
};

export default Interaction;