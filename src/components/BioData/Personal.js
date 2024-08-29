import React, { useState, useEffect } from "react";
import "./Personal.css";
import { getDependants } from "../../Services";
import Program from "../HomepageForms/Program";
import Popup from "reactjs-popup";
import InsuranceEmployer from "../HomepageForms/InsuranceEmployer";
import Addresses from "../HomepageForms/Addresses";
import Family from "../HomepageForms/Family";

const Personal = ({patientToDisplayId}) => {
  const [displayDependant, setDisplayDependant] = useState([]);

  useEffect(() => {
    setDisplayDependant(patientToDisplayId.dependants);
  }, [patientToDisplayId]);
  

  return (
    <div>
      <div className="constant-parent">
        <div className="constant" style={{ marginBottom: "5%" }}>
          <div className="function-parameter">
            <div className="exception-handler">
              <h3 className="program-status1">{`Program, Status & Assignees`}</h3>

              <div className="matrix111">
                <div className="rectangle-parent18">
                  <div className="frame-child28" />
                  <Popup
                    trigger={
                      <div style={{ cursor: "pointer" }} className="edit7">
                        EDIT
                      </div>
                    }
                    modal
                    nested
                  >
                    <Program programStatusDisplay={patientToDisplayId} />
                  </Popup>
                </div>
              </div>

              <div className="error-message">
                <div className="program1">PROGRAM</div>
                <div className="status1">STATUS</div>
              </div>

              <div className="directed-graph">
                <div className="graph-traversal">
                  <div className="vitalcare3601">
                    {patientToDisplayId
                      ? patientToDisplayId.memberProgram
                      : "--"}
                  </div>
                </div>
                <div className="graph-edge">
                  <div className="active-group">
                    <div className="active2">
                      {patientToDisplayId
                        ? patientToDisplayId.memberStatus
                        : "--"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="error-message">
                <div className="program1">STAGE</div>
                <div className="status1">CARE MANAGER</div>
              </div>
              <div className="directed-graph">
                <div className="graph-traversal">
                  <div className="vitalcare3601">
                    {patientToDisplayId
                      ? patientToDisplayId
                          .memberOnboardingStage
                      : "--"}
                  </div>
                </div>
                <div className="graph-edge">
                  <div className="active-group">
                    <div className="active2">
                      {patientToDisplayId
                        ? patientToDisplayId
                            .memberCareManager.slice(0, -10)
                        : "--"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="error-message">
                <div className="program1">NUTRITIONIST</div>
                <div className="status1">ENGAGEMENT LEAD</div>
              </div>
              <div className="directed-graph">
                <div className="graph-traversal">
                  <div className="vitalcare3601">
                    {patientToDisplayId
                      ? patientToDisplayId.memberNutritionist.slice(0, -10)
                      : "--"}
                  </div>
                </div>
                <div className="graph-edge">
                  <div className="active-group">
                    <div className="active2">
                      {patientToDisplayId
                        ? patientToDisplayId
                            .memberEngagementLead.slice(0, -10)
                        : "--"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="frame-parent211">
        <div className="frame-parent22">
          <div className="contacts-group">
            <h3 className="contacts1">Contacts</h3>
            <div className="frame-parent23">
              <div className="frame-parent24">
                <div className="event-type-parent">
                  <div className="event-type">
                    <div className="phone-11">PHONE 1</div>
                    <div className="div12">
                      {" "}
                      {patientToDisplayId
                        ? patientToDisplayId.memberPhone
                        : "--"}
                    </div>
                  </div>
                  <div className="email2">EMAIL</div>
                </div>
                <div className="phone-2-group">
                  <div className="phone-21">PHONE 2</div>
                  <div className="div13">
                    {" "}
                    {patientToDisplayId
                      ? patientToDisplayId.memberPhoneTwo
                      : "--"}
                  </div>
                </div>
              </div>
              <div className="felixwandera398gmailcom1">
                {patientToDisplayId
                  ? patientToDisplayId.memerEmail.slice(0, -10)
                  : "--"}
              </div>
            </div>
            <div className="caregiver-next1">CAREGIVER / NEXT OF KIN</div>
          </div>
          <div className="frame-wrapper19">
            <div className="rectangle-parent17">
              <div className="frame-child27" />
              <div className="edit6">EDIT</div>
            </div>
          </div>
        </div>
        <div className="frame-parent25">
          <div className="name-albert-container">
            <div className="name-albert1">
              <span>Name:</span>
              <span className="albert2">
                <b className="b2">{` `}</b>
                <span className="albert3">
                  {" "}
                  {patientToDisplayId
                    ? patientToDisplayId.memberNextOfKin
                    : "--"}
                </span>
              </span>
            </div>
          </div>
          <div className="phone-2547060033101">
            <span>Phone:</span>
            <span className="span12">
              <b className="b3">{` `}</b>
              <span className="span13">
                {" "}
                {patientToDisplayId
                  ? patientToDisplayId.memberNextOfKinPhone
                  : "--"}
              </span>
            </span>
          </div>
        </div>
      </div>
      
      <div className="stack-parent">
        <div className="stack1">
          <div className="stack">
            <div className="set">
              <h3 className="insurance-employer1">{`Insurance & Employer`}</h3>
              <div className="list">
                <div className="employer1">EMPLOYER</div>
                <div className="department1">DEPARTMENT</div>
              </div>
            </div>
            <div className="matrix">
              <div className="rectangle-parent18">
                <div className="frame-child28" />
                <Popup
                  trigger={
                    <div style={{ cursor: "pointer" }} className="edit7">
                      EDIT
                    </div>
                  }
                  modal
                  nested
                >
                  <InsuranceEmployer insDisplay={patientToDisplayId} />
                </Popup>
              </div>
            </div>
          </div>
          <div className="string-processor">
            <div className="math-operation">
              <div className="carecall3">
                {patientToDisplayId
                  ? patientToDisplayId.memberEmployer
                  : "--"}
              </div>
              <div className="insurer1">INSURER</div>
            </div>
            <div className="assignment-operator">
              <div className="motivational-design1">--</div>
              <div className="insurance-id1">INSURANCE ID</div>
            </div>
          </div>
          <div className="return-operator">
            <div className="if-statement">
              <div className="britam1">
                {" "}
                {patientToDisplayId
                  ? patientToDisplayId.memberInsurer
                  : "--"}
              </div>
            </div>
            <div className="ins077t7t6r762901">
              {patientToDisplayId
                ? patientToDisplayId.memberInsuranceId
                : "--"}
            </div>
          </div>
        </div>

        <div className="graph-edges" style={{ marginBottom: "5%" }}>
          <div className="image-set">
            <div className="connection-network">
              <div className="addresses-parent">
                <h3 className="addresses1">Addresses</h3>
                <div className="home1">HOME</div>
              </div>
              <div className="icon-library">
                <div className="rectangle-parent19">
                  <div className="frame-child29" />
                  <Popup
                    trigger={
                      <div style={{ cursor: "pointer" }} className="edit8">
                        EDIT
                      </div>
                    }
                    modal
                    nested
                  >
                    <Addresses addressDisplay={patientToDisplayId} />
                  </Popup>
                </div>
              </div>
            </div>
            <div className="court-316-kiu1">
              {patientToDisplayId
                ? patientToDisplayId.memberHome
                : "--"}
            </div>
          </div>
          <div className="data-container">
            <div className="office1">OFFICE</div>
            <div className="th-ave-suits1">
              {patientToDisplayId
                ? patientToDisplayId.memberOffice
                : "--"}
            </div>
          </div>
          <div className="data-container1">
            <div className="geolocation1">GEOLOCATION</div>
            <div className="open-in-maps1">Open in Maps</div>
          </div>
          <div className="pathway-network-parent">
            <div className="pathway-network">
              <div className="county-parent">
                <div className="county1">COUNTY</div>
                <div className="nairobi-county1">
                  {" "}
                  {patientToDisplayId
                    ? patientToDisplayId.memberCounty
                    : "--"}
                </div>
              </div>
            </div>
            <div className="aligner">
              <div className="town1">TOWN</div>
              <div className="nairobi1">
                {" "}
                {patientToDisplayId
                  ? patientToDisplayId.memberTown
                  : "--"}
              </div>
            </div>
          </div>
          <div className="stroke-maker">
            <div className="delivery-instructions1">DELIVERY INSTRUCTIONS</div>
            <div className="always-deliver-at1">
              {patientToDisplayId
                ? patientToDisplayId.memberDelivery
                : "--"}
            </div>
          </div>
        </div>

        <div className="subtree">
          <div className="fill-assigner">
            <div className="proximity-sorter">
              <h3 className="household1">Household</h3>
              <div className="pathfinder">
                <div className="rectangle-parent20">
                  <div className="frame-child30" />
                  <Popup
                    trigger={
                      <div style={{ cursor: "pointer" }} className="edit9">
                        ADD
                      </div>
                    }
                    modal
                    nested
                  >
                    <Family familyDisplay={displayDependant} />
                  </Popup>
                </div>
              </div>
            </div>
            {displayDependant
              ? displayDependant.map((dependant) => (
                  <div key={displayDependant.id} className="rectangle-parent21">
                    <div className="frame-child31" />
                    <div className="spacing-arranger">
                      <div className="felix-wandera-371">
                        {dependant.dependantNames},{dependant.dependantAge}
                      </div>
                      <div className="primary-member1">
                        {dependant.dependantRelationship}
                      </div>
                    </div>
                    <div className="fill-manager">
                      <div className="vector-parent5">
                        <img
                          className="frame-child32"
                          alt=""
                          src="/rectangle-4.svg"
                        />
                        <b className="active3">{dependant.dependantStatus}</b>
                      </div>
                    </div>
                  </div>
                ))
              : " "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
