import React from "react";
import "./Vitals.css";
import VITALSGRAPHICALREPRESENTAT from "./VITALSGRAPHICALREPRESENTAT";
import TemperatureGraph from "./TemperatureGraph";
import OxygenGraph from "./OxygenGraph";
import PulseRateGraph from "./PulseRateGraph";
import RespiratoryRate from "./RespiratoryRate";
import {
  getAllBloodPressure,
  getTemperature,
  getOxygen,
  getPulse,
  getRespiratory,
} from "../../Services";
import Popup from "reactjs-popup";
import BloodPressure from "../Vitals&NutritionForms.js/BloodPressure";
import Temperature from "../Vitals&NutritionForms.js/Temperature";
import Oxygen from "../Vitals&NutritionForms.js/Oxygen";
import PulseRate from "../Vitals&NutritionForms.js/PulseRate";
import RespiratoryRatee from "../Vitals&NutritionForms.js/RespiratoryRatee";

const Vitals = ({ patientToDisplayId }) => {
  const [table, setTable] = React.useState("table");
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
          <h3 className="vitals1">VITALS</h3>
        </div>
        <div className="iterative-processor-child">
          <div className="vector-group">
            <div onClick={() => setTable("table")} className="graphical-view">
              Table view
            </div>
          </div>
        </div>
        <div className="iterative-processor-inner1">
          <div className="vector-container">
            <div onClick={() => setTable("graphical")} className="minimize">
              Graphical
            </div>
          </div>
        </div>
      </div>

      {table === "table" && (
        <div>
          <div className="frame-parent4">
            <div className="">
              <div className="blood-pressure">Blood Pressure</div>
            </div>
            <Popup
              trigger={
                <button
                  className="blood-pressure"
                  style={{ cursor: "pointer", padding: "1%" }}
                >
                  ADD BP
                </button>
              }
              modal
              nested
            >
              <BloodPressure
                memberId={[patientToDisplayId.id, triggerParentEffect]}
              />
            </Popup>
          </div>

          <table className="customers">
            <tr>
              <th>Date</th>
              <th>Systolic (mmhg)</th>
              <th>Diastolic (mmhg)</th>
              <th>Interpretation</th>
            </tr>
            {bloodPressure &&
              bloodPressure.map((pulse) => (
                <tr>
                  <td>{pulse.readingDate}</td>
                  <td>{pulse.systolic}</td>
                  <td>{pulse.diastolic}</td>
                  <td>
                    {" "}
                    {pulse.interpretation === "Normal" ? (
                      <div className="prehypertension">
                        {pulse.interpretation}
                      </div>
                    ) : (
                      <div className="prehypertension1">
                        {pulse.interpretation}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
          </table>

          <div className="frame-parent4">
            <div className="blood-pressure-parent">
              <div className="blood-pressure">Temperature</div>
            </div>
            <Popup
              trigger={
                <button
                  className="blood-pressure"
                  style={{ cursor: "pointer", padding: "1%" }}
                >
                  NEW TEMP
                </button>
              }
              modal
              nested
            >
              <Temperature
                memberId={[patientToDisplayId.id, triggerParentEffect]}
              />
            </Popup>
          </div>

          <table className="customers">
            <tr>
              <th>Date</th>
              <th>Temperature (Degrees celcius)</th>
              <th>Interpretation</th>
            </tr>
            {temperature &&
              temperature.map((pulse) => (
                <tr>
                  <td>{pulse.readingDate}</td>
                  <td>{pulse.temperature}</td>
                  <td>
                    {" "}
                    {pulse.interpretation === "Normal" ? (
                      <div className="prehypertension">
                        {pulse.interpretation}
                      </div>
                    ) : (
                      <div className="prehypertension1">
                        {pulse.interpretation}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
          </table>


          <div className="frame-parent4">
            <div className="blood-pressure-parent">
              <div className="blood-pressure">Oxygen Saturation</div>
            </div>
            <Popup
              trigger={
                <button
                  className="blood-pressure"
                  style={{ cursor: "pointer", padding: "1%" }}
                >
                  NEW OXYGEN
                </button>
              }
              modal
              nested
            >
              <Oxygen memberId={[patientToDisplayId.id, triggerParentEffect]} />
            </Popup>
          </div>

          <table className="customers">
            <tr>
              <th>Date</th>
              <th>SpO2</th>
              <th>Interpretation</th>
            </tr>
            {oxygen &&
              oxygen.map((pulse) => (
                <tr>
                  <td>{pulse.readingDate}</td>
                  <td>{pulse.oxygen}</td>
                  <td>
                    {" "}
                    {pulse.interpretation === "Normal" ? (
                      <div className="prehypertension">
                        {pulse.interpretation}
                      </div>
                    ) : (
                      <div className="prehypertension1">
                        {pulse.interpretation}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
          </table>


          <div className="frame-parent4">
            <div className="blood-pressure-parent">
              <div className="blood-pressure">Pulse Rate </div>
            </div>
            <Popup
              trigger={
                <button
                  className="blood-pressure"
                  style={{ cursor: "pointer", padding: "1%" }}
                >
                  NEW PULSE
                </button>
              }
              modal
              nested
            >
              <PulseRate
                memberId={[patientToDisplayId.id, triggerParentEffect]}
              />
            </Popup>
          </div>

          <table className="customers">
            <tr>
              <th>Date</th>
              <th>Pulse Rate</th>
              <th>Interpretation</th>
            </tr>
            {pulse &&
              pulse.map((pulse) => (
                <tr>
                  <td>{pulse.readingDate}</td>
                  <td>{pulse.pulse}</td>
                  <td>
                    {" "}
                    {pulse.interpretation === "Normal" ? (
                      <div className="prehypertension">
                        {pulse.interpretation}
                      </div>
                    ) : (
                      <div className="prehypertension1">
                        {pulse.interpretation}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
          </table>

          <div className="frame-parent4">
            <div className="blood-pressure-parent">
              <div className="blood-pressure">Respiratory Rate </div>
            </div>
            <Popup
              trigger={
                <button
                  className="blood-pressure"
                  style={{ cursor: "pointer", padding: "1%" }}
                >
                  NEW RESPIRATORY
                </button>
              }
              modal
              nested
            >
              <RespiratoryRatee
                memberId={[patientToDisplayId.id, triggerParentEffect]}
              />
            </Popup>
          </div>

          <table className="customers">
            <tr>
              <th>Date</th>
              <th>Respiratory Rate</th>
              <th>Interpretation</th>
            </tr>
            {respiratory &&
              respiratory.map((respiratory) => (
                <tr>
                  <td>{respiratory.readingDate}</td>
                  <td>{respiratory.respiratory}</td>
                  <td>
                    {" "}
                    {respiratory.interpretation === "Normal" ? (
                      <div className="prehypertension">
                        {respiratory.interpretation}
                      </div>
                    ) : (
                      <div className="prehypertension1">
                        {respiratory.interpretation}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
          </table>
        </div>
      )}
      <div className="timer-manager" />
      {table === "graphical" && (
        <div>
          <div style={{ marginBottom: "7%" }}>
            <VITALSGRAPHICALREPRESENTAT Bp={bloodPressure} />
          </div>
          <div style={{ marginBottom: "7%" }}>
            <TemperatureGraph temp={temperature} />
          </div>
          <div style={{ marginBottom: "7%" }}>
            <OxygenGraph oxygen={oxygen} />
          </div>
          <div style={{ marginBottom: "7%" }}>
            <PulseRateGraph pulse={pulse} />
          </div>
          <div style={{ marginBottom: "7%" }}>
            <RespiratoryRate respiratory={respiratory} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Vitals;
