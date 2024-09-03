import React from "react";
import "../VitalsData/Vitals.css";

import {
  getAllBloodPressure,
  getTemperature,
  getOxygen,
  getPulse,
  getRespiratory,
} from "../../Services";
import Popup from "reactjs-popup";
import PrescriptionForm from "./PrescriptionForm";


const Prescription = ({ patientToDisplayId }) => {
  const [bloodPressure, setBloodPressure] = React.useState([]);
  const [temperature, setTemperature] = React.useState([]);
  const [oxygen, setOxygen] = React.useState([]);
  const [reload, setReload] = React.useState(false);
  const [pulse, setPulse] = React.useState([]);
  const [respiratory, setRespiratory] = React.useState([]);

  React.useEffect(() => {
    getOxygen(patientToDisplayId.id)
      .then((response) => {
        setOxygen(response);
      })
      .catch((error) => {
        console.error(error);
      });

    getAllBloodPressure(patientToDisplayId.id)
      .then((response) => {
        setBloodPressure(response.reverse());
      })
      .catch((error) => {
        console.error(error);
      });

    getTemperature(patientToDisplayId.id)
      .then((response) => {
        setTemperature(response);
      })
      .catch((error) => {
        console.error(error);
      });

    getPulse(patientToDisplayId.id)
      .then((response) => {
        setPulse(response);
      })
      .catch((error) => {
        console.error(error);
      });

    getRespiratory(patientToDisplayId.id)
      .then((response) => {
        setRespiratory(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [patientToDisplayId, reload]);

  const triggerParentEffect = () => {
    setReload(!reload);
  };

  return (
    <div>
      <div className="iterative-processor">
        <div className="vitals-wrapper">
          <h3 className="vitals1">MEDICATION </h3>
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
              memberId={[patientToDisplayId.id, triggerParentEffect]}
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
                <div className="div2">{bp.readingDate}</div>
                <div className="wrapper">
                  <div className="div3">{bp.systolic}</div>
                </div>
                <div className="container">
                  <div className="div4">{bp.diastolic}</div>
                </div>
                {bp.interpretation === "Normal" ? (
                  <div className="prehypertension">{bp.interpretation}</div>
                ) : (
                  <div className="prehypertension1">{bp.interpretation}</div>
                )}
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
