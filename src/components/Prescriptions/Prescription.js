import React from "react";
import "../VitalsData/Vitals.css";

import { getPrescription } from "../../Services";
import Popup from "reactjs-popup";
import PrescriptionForm from "./PrescriptionForm";

const Prescription = ({ patientToDisplayId }) => {
  const [bloodPressure, setBloodPressure] = React.useState([]);
  const [reload, setReload] = React.useState(false);

  React.useEffect(() => {
    getPrescription(parseInt(patientToDisplayId.id)).then((response) => {
      console.log(response);

      setBloodPressure(response);
    });
  }, [patientToDisplayId,reload]);

  const triggerParentEffect = () => {
    setReload(!reload);
  };

  return (
    <div >
      <div className="iterative-processor" >
        <div className="vitals-wrapper">
          <h3 className="vitals55">MEDICATION </h3>
        </div>
      </div>

      <div>
        <div className="frame-parent4">
          <Popup
            trigger={
              <button
                className="blood-pressure"
                style={{ cursor: "pointer", padding: "1%" }}
              >
                NEW PRESCRIPTIONS
              </button>
            }
            modal
            nested
          >
            <PrescriptionForm
              memberId1={[patientToDisplayId.id, triggerParentEffect]}
            />
          </Popup>
        </div>

        <div className="property-editor-inner2">
          <div className="date-parent">
            <div className="date">Start date</div>
            <div className="diastolic-mmhg">Medication name</div>
            <div className="diastolic-mmhg">Dosage</div>
            <div className="diastolic-mmhg">Frequency</div>
            <div className="diastolic-mmhg">Duration</div>
          </div>
        </div>

        <div className="property-editor-inner1">
          <div className="line-div" />
        </div>

        {bloodPressure &&
          bloodPressure.map((bp) => (
            <div className="property-editor-inner2">
              <div className="parent">
                <div className="div2">{bp.prescriptionDate.slice(0,10)}</div>
                <div className="wrapper">
                  <div className="div3">{bp.prescriptionDrug}</div>
                </div>
                <div className="container">
                  <div className="div4">{bp.prescriptionDosage}</div>
                </div>

                <div className="container">
                  {bp.prescriptionFrequency}
                </div>

                <div className="container">{bp.prescriptionDuration}</div>
              </div>

              <div className="property-editor-inner1">
                <div className="line-div" />
              </div>
            </div>
          ))}
      </div>

      <div className="timer-manager" />
    </div>
  );
};

export default Prescription;
