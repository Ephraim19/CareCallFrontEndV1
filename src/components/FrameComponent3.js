import "./FrameComponent3.css";
import { FaBars, FaSearch } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { getAllMembers,getMember } from "../Services";

const FrameComponent3 = () => {
  const [allMembers, setAllMembers] = useState([]);
  const [patientToDisplayId, setPatientToDisplayId] = useState(0);
  const [searched, setSearched] = useState([]);
  const [found, setFound] = useState("");

  useEffect(() => {
    getAllMembers().then((data) => setAllMembers(data));
  }, []);

  const searchByMember = (e) => {
    e.preventDefault();
    setFound(e.target.value);
    let searches = allMembers.filter((name) =>
      name.memberName.toLowerCase().includes(e.target.value.toLowerCase())
    );
  setSearched(searches);
  };

  const handleResultClick = (patient) => {
    getMember(parseInt(patient.id)).then((data) => console.log(data));
    setPatientToDisplayId(patient.id);
    setFound(patient.memberName);
    setSearched([]);
  };

  return (
    <header className="conditional-branch">
      <div className="frame-container">
        <div className="navigation-svgrepocom-wrapper">
          <FaBars className="navigation-svgrepocom-icon" />
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
                <li key={patient.id} onClick={() => handleResultClick(patient)}>
                  {patient.memberName}
                </li>
              ))}
            </ul>
          ) : (
            " "
          )}
        </div>
      </div>
      <div className="conditional-branch-child">
        <button className="view-all-members-wrapper">
          <div className="view-all-members">Members</div>
        </button>
      </div>
      <div className="conditional-branch-child">
        <button className="view-all-members-wrapper">
          <div className="view-all-members">New Member</div>
        </button>
      </div>
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
  );
};

export default FrameComponent3;
