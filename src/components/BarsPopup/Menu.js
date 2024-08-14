import React from 'react';
import Popup from 'reactjs-popup';
import './Menu.css';
import {useNavigate, Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";

const Menu = () =>{
  const navigate = useNavigate();

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
      <Link to="/all/tasks" target='_blank' className="menu-item"> New Task</Link>
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
          <div className="menu-item"> Overall</div>
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