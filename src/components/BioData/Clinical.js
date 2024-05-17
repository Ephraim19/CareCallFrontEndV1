import FrameComponent2 from "../FrameComponent2";
import "../FrameComponent1.css";
import React, { useState, useEffect } from "react";

const FrameComponent1 = (patientToDisplayId) => {
  const [overview, setOverview] = useState("");
  const [allergy, setAllergy] = useState([]);
  const [pastAdmissions, setPastAdmissions] = useState([]);
  const [previousSurgeries, setPreviousSurgeries] = useState([]);
  const [otherNotes, setOtherNotes] = useState("");
  const [familyHistory, setFamilyHistory] = useState([]);
  const [socialHistory, setSocialHistory] = useState([]);

  useEffect(() => {
    setOverview(patientToDisplayId.patientToDisplayId.overview);
    setAllergy(patientToDisplayId.patientToDisplayId.allergy);
    setPreviousSurgeries(
      patientToDisplayId.patientToDisplayId.surgery
    );
    setOtherNotes(patientToDisplayId.patientToDisplayId.othernote);
    setFamilyHistory(patientToDisplayId.patientToDisplayId.family);
    setPastAdmissions(patientToDisplayId.patientToDisplayId.admission);
    setSocialHistory(patientToDisplayId.patientToDisplayId.social);
  }, [patientToDisplayId]);

  return (
    <div>
      <div className="stack-parent" style={{ marginBottom: "5%" }}>
        <div>
          <div className="stack">
            <div className="set">
              <h3 className="insurance-employer1">{`Overview`}</h3>
              <div className="list">
                <div className="employer1">HEALTH STATUS</div>
                <div className="department1">RISK SCORE</div>
              </div>
            </div>
            <div className="matrix">
              <div className="rectangle-parent18">
                <div className="frame-child28" />
                <div className="edit7">EDIT</div>
              </div>
            </div>
          </div>
          <div className="string-processor">
            <div className="math-operation">
              <div className="carecall3">
                {overview ? overview[0].overviewHealthStatus : "--"}
              </div>
              <div className="insurer1">HEALTH GOALS</div>
            </div>
            <div className="assignment-operator">
              <div className="motivational-design1">
                {overview ? overview[0].overviewRiskScore : "--"}
              </div>
              <div className="insurance-id1">BLOOD GROUP</div>
            </div>
          </div>
          <div className="return-operator">
            <div className="if-statement">
              <div className="britam1">
                {overview ? overview[0].overviewHealthGoals : "--"}
              </div>
            </div>
            <div className="ins077t7t6r762901">
              {overview ? overview[0].overViewBloodGroup : "--"}
            </div>
          </div>
        </div>
      </div>

      <div className="exception-handler-wrapper" style={{ marginBottom: "5%" }}>
        <div className="frame-parent9">
          <div className="conditions-parent">
            <div className="conditions">Conditions</div>
            <div className="condition-parent">
              <div className="condition">CONDITION</div>
              <div className="diabetes-mellitus-type">
                Diabetes mellitus type 2
              </div>
            </div>
            <div className="hypertension">{`Hypertension `}</div>
            <div className="hypertension">Tuberculosis</div>
          </div>
          <div className="frame-parent10">
            <div className="frame-parent11">
              <div className="edit-container">
                <div className="edit1">EDIT</div>
              </div>
              <div className="frame-wrapper7">
                <div className="health-status-parent">
                  <div className="status">STATUS</div>
                  <div className="active">Active</div>
                </div>
              </div>
            </div>
            <div className="condition-splitter">
              <div className="input-filter">
                <div className="active">Active</div>
                <div className="error-handler">
                  <div className="active">Resolved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="loop-processor" style={{ marginBottom: "5%" }}>
        <div className="at-risk-of-parent">
          <div className="at-risk-of">At Risk of</div>
          <div className="condition-parent">
            <div className="condition">CONDITION</div>
            {socialHistory
              ? socialHistory.map((social) => (
                  <div className="diabetes-mellitus-type">
                    {social.socialNotes}
                  </div>
                ))
              : "--"}
          </div>
        </div>
        <div className="frame-parent12">
          <div className="edit-container">
            <div className="edit1">EDIT</div>
          </div>
          <div className="for-loop">
            <div className="while-loop">
              <div className="due-to-parent">
                <div className="due-to">DUE TO</div>
                {socialHistory
                  ? socialHistory.map((social) => (
                      <div className="family-history">{social.atriskDueTo}</div>
                    ))
                  : "--"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="exception-handler-wrapper" style={{ marginBottom: "5%" }}>
        <div className="frame-parent13">
          <div className="frame-parent14">
            <div className="allergies-wrapper">
              <div className="allergies">Allergies</div>
            </div>
            <div className="due-to-parent">
              <div className="allergen">ALLERGEN</div>
              {allergy
                ? allergy.map((allergy) => (
                    <div className="pollen">{allergy.allergyAllargen}</div>
                  ))
                : "--"}
            </div>
          </div>
          <div className="frame-wrapper9">
            <div className="frame-parent11">
              <div className="frame-wrapper10">
                <div className="edit-container">
                  <div className="edit1">EDIT</div>
                </div>
              </div>
              <div className="frame-parent16">
                <div className="due-to-parent">
                  <div className="reaction">REACTION</div>
                  {allergy
                    ? allergy.map((allergy) => (
                        <div className="family-history ">
                          {allergy.allergyReaction}
                        </div>
                      ))
                    : "--"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="transform-stage" style={{ marginBottom: "5%" }}>
        <div className="frame-parent17">
          <FrameComponent2
            pastAdmissions="Past admissions"
            rEASONDIAGNOSIS="REASON/DIAGNOSIS"
          />
          {pastAdmissions
            ? pastAdmissions.map((admission) => (
                <div className="frame-parent18">
                  <div className="dec-2020-parent">
                    <div className="dec-2020">{admission.admissionDate}</div>
                    <div className="jan-2013-parent"></div>
                  </div>
                  <div className="nested-loop">
                    <div className="input-collector">
                      <div className="anaphylaxis">
                        {admission.admissionReason}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "--"}
        </div>
      </div>
      <div className="transform-stage" style={{ marginBottom: "5%" }}>
        <div className="frame-parent17">
          <FrameComponent2
            pastAdmissions="Surgical History"
            rEASONDIAGNOSIS="TYPE"
          />
          {previousSurgeries
            ? previousSurgeries.map((admission) => (
                <div className="frame-parent18">
                  <div className="dec-2020-parent">
                    <div className="dec-2020">{admission.surgeryDate}</div>
                    <div className="jan-2013-parent"></div>
                  </div>
                  <div className="nested-loop">
                    <div className="input-collector">
                      <div className="anaphylaxis">
                        {admission.surgeryType}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "--"}
        </div>
      </div>
      <div className="transform-stage" style={{ marginBottom: "5%" }}>
        <div className="reduce-stage">
          <div className="map-stage">
            <div className="family-history1">Family History</div>
            <div className="collect-stage">
              <div className="health-status-parent">
                <div className="relationship">RELATIONSHIP</div>
                {familyHistory
                  ? familyHistory.map((family) => (
                      <div className="father">{family.familyRelationship}</div>
                    ))
                  : "--"}
              </div>
            </div>
          </div>
          <div className="transformed-stage">
            <div className="collected-stage">
              <div className="edit-container">
                <div className="edit1">EDIT</div>
              </div>
            </div>
            <div className="logic-gate1">
              <div className="value-range">
                <div className="string-parser">
                  <div className="condition2">CONDITION</div>
                  {familyHistory
                    ? familyHistory.map((family) => (
                        <div className="diabetes-mellitus-type">
                          {family.familyCondition}
                        </div>
                      ))
                    : "--"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="conditional-statement">
        <div className="input-field">
          <div className="other-notes">Other Notes</div>
          <div className="diabetes-mellitus-type">
            <ul className="write-other-notes-here">
              <li>
                {otherNotes.length > 0 ? otherNotes[0].othernoteNote : "--"}{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="signal-processor">
          <div className="edit-container">
            <div className="edit1">EDIT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
