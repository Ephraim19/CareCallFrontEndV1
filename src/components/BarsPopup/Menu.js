import React from 'react';
import Popup from 'reactjs-popup';
import './Menu.css';
import {useNavigate, Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import Overview from './Overview';
import { getAllTasks,getAllMembers,getAllInteraction,getJourney } from '../../Services';

const Menu = (memberId) =>{
  const navigate = useNavigate();
  const [tasks, setTasks] = React.useState([]);
  const [interactions, setInteractions] = React.useState([]);
  const [members, setMembers] = React.useState([]);
  const [journey, setJourney] = React.useState([]);

  React.useEffect(() => {

    getAllTasks()
        .then((response) => {
          setTasks(response );
        })
        .catch((error) => {
            console.error(error);
        });

        getAllInteraction()
        .then((response) => {
          setInteractions(response );
          console.log(response)
        })
        .catch((error) => {
            console.error(error);
        });

        getAllMembers()
        .then((response) => {
          setMembers(response );
        })
        .catch((error) => {
            console.error(error);
        });

        getJourney()
        .then((response) => {
          setJourney(response );
        })
        .catch((error) => {
            console.error(error)
        }
        );

},[])

  const logOut = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        auth.signOut();
        navigate("/email/login");
      }
    }
    )
  }


return (
    <div className="menu">
      <Link to="/all/tasks" target='_blank' className="menu-item"> All Tasks</Link>
      <Popup
        trigger={<div className="menu-item"> Analytics </div>}
        position="right top"
        on="hover"
        closeOnDocumentClick
        mouseLeaveDelay={300}
        mouseEnterDelay={0}
        contentStyle={{ padding: '0px', border: 'none' }}
        arrow={false}
      >
        <div className="menu">
        <Popup
                    trigger={
                      <div className="menu-item"> Overview</div>
                    }
                    modal
                    nested
                  >
                    <Overview datas = {[members,tasks,interactions,journey]} />
                  </Popup>
              
          
          <div className="menu-item"> Members</div>
          <div className="menu-item"> Interactions</div>
          <div className="menu-item"> Tasks</div>
          <div className="menu-item"> Member journey</div>
          <div className="menu-item"> Vitals</div>
          <div className="menu-item"> Nutrition</div>
          <div className="menu-item"> Staff</div>
        </div>
      </Popup>
      <div className="menu-item" onClick={logOut} > Logout</div>
    </div>
  );
};

  export default Menu;