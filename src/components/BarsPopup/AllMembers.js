import React from 'react';
import { getAllMembers } from '../../Services';

const AllMembers = () => {
    const [memberInteractions, setMemberInteractions ] = React.useState();

    React.useEffect(() => {
        getAllMembers()
            .then((response) => {
                setMemberInteractions(response );
            })
            .catch((error) => {
                console.error(error);
            });

    },[]);

    return (
        <>
        <table className="customers">
              <tr>
                <th>Member</th>

                <th>Gender</th>

                <th>Phone</th>

                <th>DOB</th>
              </tr>
                      {memberInteractions && memberInteractions.map((patient) => (
                <>
                  {patient ? (
                    <tr>

                      <td>{patient. memberName }</td>

                      <td>{patient.memberGender}</td>
                       
                      <td>{patient.memberPhon}</td>

                      <td>{patient.memberDOB}</td>

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

export default AllMembers;