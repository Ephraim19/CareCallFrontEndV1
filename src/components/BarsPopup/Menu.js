import React from "react";
import Popup from "reactjs-popup";
import "./Menu.css";
import { useNavigate, Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import Overview from "./Overview";
import VitalsAnalytics from "./VitalsAnalytics";
import {
  getAllTasks,
  getAllMembers,
  getAllInteraction,
  getJourney,
  getAllBloodPressure,
} from "../../Services";
import TasksAnalytics from "./TasksAnalytics";
import NutritionAnalytics from "./NutritionAnalytics";
import AppointmentAnalytics from "./AppointmentAnalytics";

const Menu = ({ memberId }) => {
  const navigate = useNavigate();
  const [tasks, setTasks] = React.useState([]);
  const [interactions, setInteractions] = React.useState([]);
  const [members, setMembers] = React.useState([]);
  const [journey, setJourney] = React.useState([]);
  const [bloodPressure, setBloodPressure] = React.useState([]);

  React.useEffect(() => {
    getAllTasks()
      .then((response) => {
        setTasks(response);
      })
      .catch((error) => {
        console.error(error);
      });

    getAllInteraction()
      .then((response) => {
        setInteractions(response);
      })
      .catch((error) => {
        console.error(error);
      });

    getAllMembers()
      .then((response) => {
        setMembers(response);
      })
      .catch((error) => {
        console.error(error);
      });

    getJourney()
      .then((response) => {
        setJourney(response);
      })
      .catch((error) => {
        console.error(error);
      });

    getAllBloodPressure()
      .then((response) => {
        setBloodPressure(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const logOut = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        auth.signOut();
        navigate("/email/login");
      }
    });
  };

  return (
    <div className="menu">
      <Link to="/all/tasks" target="_blank" className="menu-item">
        All Tasks
      </Link>

      <Link to="/all/appointments" target="_blank" className="menu-item">
        All Appointments
      </Link>

      <Popup
        trigger={<div className="menu-item"> Analytics </div>}
        position="right top"
        on="hover"
        closeOnDocumentClick
        mouseLeaveDelay={300}
        mouseEnterDelay={0}
        contentStyle={{ padding: "0px", border: "none" }}
        arrow={false}
      >
        <div className="menu">
          <Popup
            trigger={<div className="menu-item"> Overview</div>}
            modal
            nested
          >
            <Overview datas={[members, tasks, interactions, journey]} />
          </Popup>

          <div className="menu-item"> Members</div>
          <div className="menu-item"> Interactions</div>

          <Popup trigger={<div className="menu-item"> Tasks</div>} modal nested>
            <TasksAnalytics />
          </Popup>

          <div className="menu-item"> Member journey</div>

          <Popup
            trigger={<div className="menu-item"> Vitals</div>}
            modal
            nested
          >
            <VitalsAnalytics memberId={memberId} />
          </Popup>

          <Popup
            trigger={<div className="menu-item"> Nutrition</div>}
            modal
            nested
          >
            <NutritionAnalytics memberId={memberId} />
          </Popup>

          <Popup
            trigger={<div className="menu-item"> Appointments</div>}
            modal
            nested
          >
            <AppointmentAnalytics memberId={memberId} />
          </Popup>
          
        </div>
      </Popup>
      <div className="menu-item" onClick={logOut}>
        {" "}
        Logout
      </div>
      <div className="menu-item" onClick={logOut}>
        {" "}
        {auth.currentUser.email}{" "}
      </div>
    </div>
  );
};

export default Menu;
