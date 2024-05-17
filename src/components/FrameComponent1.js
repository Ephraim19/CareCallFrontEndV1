import FrameComponent2 from "./FrameComponent2";
import "./FrameComponent1.css";
import React, { useState, useEffect } from "react";

import Clinical from "../components/BioData/Clinical";
import Personal from "../components/BioData/Personal";

const FrameComponent1 = (patientToDisplayId) => {
  const [personalClinical, setPersonalClinical] = useState("personal");

  // useEffect(() => {
  //   console.log(patientToDisplayId.patientToDisplayId);
  // }, [patientToDisplayId]);

  const pers = (e) => {
    setPersonalClinical("personal");
    // e.target.style.backgroundColor = "#0090af";
    // e.target.style.color = "#fff";
    e.target.className = "clinical-wrapper";
  };

  const cln = (e) => {
    setPersonalClinical("clinical");
  };

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <div
      className="joiner-parent"
      style={{ height: "100vh", overflowY: "auto" }}
    >
      <div className="joiner">
        <div className="frame-parent3">
          <div className="frame-parent4">
            <div className="frame-wrapper2">
              <div className="felix-wandera-parent">
                <h3 className="felix-wandera">
                  {patientToDisplayId.patientToDisplayId.memberName
                    ? patientToDisplayId.patientToDisplayId.memberName
                    : "--"}
                </h3>

                <div className="id-20387-parent">
                  <div className="age-54-y-container">
                    <span>ID:</span>
                    <span className="span">{` `}</span>
                    <span className="y">
                      {patientToDisplayId.patientToDisplayId.id
                        ? patientToDisplayId.patientToDisplayId.id
                        : "--"}
                    </span>
                  </div>
                  <div className="age-54-y-container">
                    <span>Age:</span>
                    <span className="span">
                      {" "}
                      {patientToDisplayId.patientToDisplayId.memberDOB
                        ? getAge(
                            patientToDisplayId.patientToDisplayId.memberDOB
                          )
                        : "--"}{" "}
                    </span>
                    <span className="y"> y</span>
                  </div>
                  <div className="gender-m">
                    <span className="gender-m-txt-container">
                      <span>Gender:</span>
                      <span className="span">{` `}</span>
                      <span className="y">
                        {patientToDisplayId.patientToDisplayId.memberGender
                          ? patientToDisplayId.patientToDisplayId.memberGender
                          : "--"}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="facility-eqa-nairobi-container">
            <span>Facility:</span>
            <span className="span">{` `}</span>
            <span className="y">
              {patientToDisplayId.patientToDisplayId.memberFacility
                ? patientToDisplayId.patientToDisplayId.memberFacility
                : "--"}
            </span>
          </div>
        </div>
      </div>
      <div className="frame-wrapper3">
        <div className="frame-parent5">
          <div
            className="personal-wrapper"
            style={{ cursor: "pointer" }}
            onClick={pers}
          >
            <div className="personal">Personal</div>
          </div>
          <div
            className="clinical-wrapper"
            style={{ cursor: "pointer" }}
            onClick={cln}
          >
            <div className="clinical">Clinical</div>
          </div>
        </div>
      </div>
      {personalClinical === "clinical" && (
        <Clinical patientToDisplayId={patientToDisplayId.patientToDisplayId} />
      )}
      {personalClinical === "personal" && (
        <Personal patientToDisplayId={patientToDisplayId.patientToDisplayId} />
      )}
    </div>
  );
};

export default FrameComponent1;
