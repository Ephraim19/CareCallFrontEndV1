import React from 'react';
import './Interaction.css';
import Popup from 'reactjs-popup';
import { getInteraction,getAllInteraction } from '../../Services';
import InteractionForm from './InteractionForm';


const Interaction = ({memberId}) => {
    const [memberInteractions, setMemberInteractions ] = React.useState();
    const [reload, setReload] = React.useState(false);

    React.useEffect(() => {
        getAllInteraction(parseInt(memberId))
            .then((response) => {
              
                setMemberInteractions(response.reverse() ) ;
            })
            .catch((error) => {
                console.error(error);
            });

    },[memberId,reload])

    const triggerParentEffect = () => {
      setReload(!reload);
      console.log("triggered");
    };

    return (
        <>
        <Popup trigger={
        <button style={{marginBottom:"-10%",marginTop:"-7%",padding:"1%"}} >ADD INTERACTION</button>
        }
        nested
        modal
        >
          <InteractionForm condition={[memberId,triggerParentEffect]} />
        </Popup>

        <table className="customers">
              <tr>
                <th>Date </th>
                <th>Conversation </th>
              </tr>
              {memberInteractions && memberInteractions.map((int) => (
                <tr>
                  <td>{int.created.slice(0,10) } <br /> {int.created.slice(12,19) }</td>
                  <td>
                  {int.interactionDetails},  <br />
                  {int.updatedBy}
                  </td>
                </tr>
              ))}

            </table>

          </>
    );
};

export default Interaction;