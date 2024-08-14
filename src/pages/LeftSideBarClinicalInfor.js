import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./LeftSideBarClinicalInfor.css";
import Collapsible from "react-collapsible";
import React, { useState, useEffect } from "react";
import Vitals from "../components/VitalsData/Vitals";
import Nutrition from "../components/NutritionData/Nutrition";
import LabFindings from "../components/LAB FINDINGS/LabFindings";
import "../components/FrameComponent3.css";
import { FaBars, FaSearch } from "react-icons/fa";
import { getAllMembers, getMember } from "../Services";
import Interaction from "../components/Interaction/Interaction";
import Tasks from "../components/Tasks/Tasks";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../components/Firebase";
import { Link, useNavigate } from "react-router-dom";
import Journey from "../components/Journey/Journey";
import Popup from "reactjs-popup";
import NewMember from "../components/Members/NewMember";
import Menu from "../components/BarsPopup/Menu";

 
const LeftSideBarClinicalInfor = () => {
  const [allMembers, setAllMembers] = useState([]);
  const [patientToDisplayId, setPatientToDisplayId] = useState(0);
  const [searched, setSearched] = useState([]);
  const [found, setFound] = useState("");
  const [topNav, setTopNav] = useState("records");
  const [userEmail, setUserEmail] = useState("")
  const navigate = useNavigate();
  const [reload, setReload] = React.useState(false);

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        navigate("/email/login");
      }
    });

    getAllMembers().then((data) => {
    setAllMembers(data);
    
    });
  }, [userEmail, reload]);

  const triggerParentEffect = () => {
    setReload(!reload);
  };

  const searchByMember = (e) => {
    e.preventDefault();
    setFound(e.target.value);
    let searches = allMembers.filter((name) =>
      name.memberName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearched(searches);
  };

  const handleResultClick = (patient) => {
    // getMember(parseInt(patient.id)).then((data) => console.log(data));
    setPatientToDisplayId(patient);

    setFound(patient.memberName);
    setSearched([]);
  };

  return (
    <div className="left-side-bar-clinical-infor">

      <header className="conditional-branch">
        <div className="frame-container">
          <div className="navigation-svgrepocom-wrapper">
        <Popup
        modal
        nested
         trigger={
            <FaBars className="navigation-svgrepocom-icon" />
        }
      >
        <Menu />
      </Popup>
          </div>
          {/* <div className="carecall-logo-parent"> */}
          <div className="logic-gate">
            <div className="carecall-parent">
              <h2 className="carecall">
                <span>Care</span>
                <span className="call">Call</span>
              </h2>
              <div className="connected-continuous-care-wrapper">
                <b className="connected-continuous-care">
                  Connected. Continuous. Care
                </b>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className="conditional-branch-inner">
          <div className="frame-div">
            <div className="vector-wrapper">
              <FaSearch className="vector-icon" />
            </div>
            <input
              className="search-by-patient"
              placeholder="Name, Phone or CareCall ID "
              type="text"
              onChange={searchByMember}
              value={found}
            />
          </div>
          <div>
            {searched ? (
              <ul className="searchable">
                {searched.map((patient) => (
                  <li
                    key={patient.id}
                    onClick={() => handleResultClick(patient)}
                  >
                    {patient.memberName}
                  </li>
                ))}
              </ul>
            ) : (
              " "
            )}
          </div>
        </div>
        <Link to ='/all/members'  target='_blank' style={{textDecoration:"none"}} className="conditional-branch-child">
          <button className="view-all-members-wrapper">
            <div className="view-all-members">Members</div>
          </button>
        </Link>
        <Popup trigger={
        <div className="conditional-branch-child">
          <button className="view-all-members-wrapper">
            <div className="view-all-members">New Member</div>
          </button>
        </div>
        }
        modal
        nested
      >
        <NewMember reloading = {triggerParentEffect} />
        </Popup>
        <div className="conditional-branch-inner1">
          <div className="frame-parent1">
            <img
              className="profile-circle-svgrepocom-icon"
              loading="lazy"
              alt=""
              src="/profilecircle-svgrepocom.svg"
            />
          </div>
        </div>
      </header>

      <main className="left-side-bar-clinical-infor-inner">
        <section className="frame-parent">
          <FrameComponent1 patientToDisplayId={patientToDisplayId} />
          <div className="frame-group">
            <div className="matrix-multiplier-wrapper">
              <div className="matrix-multiplier">

                <div style={ topNav === "records" ? { textDecoration: "underline", color: "#060074", fontWeight:'500' } : { } }  className="medical-records"  onClick={() => setTopNav('records')} >Medical Records</div>

                <div className="graph-processor" onClick={() => setTopNav('interactions') }>
                  <div style={ topNav === "interactions" ? { textDecoration: "underline", color: "#060074", fontWeight:'500' } : { } } className="interactions" >Interactions</div>
                </div>

                <div className="graph-processor1" onClick={() => setTopNav('tasks') }>
                  <div style={ topNav === "tasks" ? { textDecoration: "underline", color: "#060074", fontWeight:'500' } : { } } className="tasks">Tasks</div>
                </div>

                <div style={ topNav === "journey" ? { textDecoration: "underline", color: "#060074", fontWeight:'500' } : { } } className="member-journey" onClick={() => setTopNav('journey') }>Member Journey</div>
              </div>
            </div>
            {topNav ==='records' &&
            <div className="data-visualizer">
              <Collapsible
                trigger={
                  <div className="algorithm-component">
                    <h3 className="vitals">VITALS</h3>
                    <h3 className="data-normalizer">+</h3>
                  </div>
                }
              >
                <Vitals patientToDisplayId={patientToDisplayId} />
              </Collapsible>

              <Collapsible
                trigger={
                  <div
                    className="algorithm-component1"
                    style={{ cursor: "pointer" }}
                  >
                    <h3 className="nutrition-blood">{`NUTRITION & BLOOD SUGAR`}</h3>
                    <h3 className="data-normalizer">+</h3>
                  </div>
                }
              >
                <Nutrition patientToDisplayId={patientToDisplayId} />
              </Collapsible>

              <Collapsible
                trigger={
                  <div className="algorithm-component2">
                    <h3 className="nutrition-blood">LAB FINDINGS</h3>
                    <h3 className="data-normalizer">+</h3>
                  </div>
                }
              >
                <LabFindings />
              </Collapsible>

              <div className="algorithm-component3">
                <h3 className="nutrition-blood">{`IMAGING `}</h3>
                <h3 className="data-normalizer">+</h3>
              </div>
              <div className="algorithm-component4">
                <h3 className="nutrition-blood">ATTACHMENTS</h3>
                <h3 className="data-normalizer">+</h3>
              </div>
              <div className="algorithm-component5">
                <h3 className="nutrition-blood">CLINICAL NOTES</h3>
                <h3 className="data-normalizer">+</h3>
              </div>
              <div className="alg=orithm-component6">
                <h3 className="nutrition-blood">INTERVENTIONS</h3>
                <h3 className="data-normalizer">+</h3>
              </div>
            </div>
             }
             {topNav === 'interactions' && <Interaction memberId = {patientToDisplayId.id} />}
              {topNav === 'tasks' && <Tasks memberId = {patientToDisplayId.id} />}
              {topNav === 'journey' && <Journey memberId = {patientToDisplayId.id} />}
          </div>
          <FrameComponent />
        </section>
      </main>
    </div>
  );
};

export default LeftSideBarClinicalInfor;
