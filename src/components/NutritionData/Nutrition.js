import React from "react";
import "../VitalsData/Vitals.css";
import BloodSugarGraph from "./BloodSugarGraph";
import Hba1c from "./Hba1c";
import BMIGraph from "./BMIGraph";
import Weight from "./Weight";
import Popup from "reactjs-popup";
import BMI from "../Vitals&NutritionForms.js/BMI";
import {
  getRBS,
  getFBS,
  getHba1c,
  getBMI,
  getBodyComposition,
} from "../../Services";
import RBS from "../Vitals&NutritionForms.js/RBS";
import FBS from "../Vitals&NutritionForms.js/FBS";
import HBA1C from "../Vitals&NutritionForms.js/Hba1c";
import BodyComposition from "../Vitals&NutritionForms.js/BodyComposition";

const Nutrition = ({ patientToDisplayId }) => {
  const [table, setTable] = React.useState("table");
  const [reload, setReload] = React.useState(false);
  const [rbs, setRbs] = React.useState([]);
  const [fbs, setFbs] = React.useState([]);
  const [hba1c, setHba1c] = React.useState([]);
  const [bmi, setBmi] = React.useState([]);
  const [bodyComposition, setBodyComposition] = React.useState([]);

  React.useEffect(() => {
    getRBS(patientToDisplayId.id)
      .then((response) => {
        setRbs(response);
      })
      .catch((error) => {
        console.log(error);
      });

    getFBS(patientToDisplayId.id)
      .then((response) => {
        setFbs(response);
      })
      .catch((error) => {
        console.log(error);
      });

    getHba1c(patientToDisplayId.id)
      .then((response) => {
        setHba1c(response);
      })
      .catch((error) => {
        console.log(error);
      });

    getBMI(patientToDisplayId.id)
      .then((response) => {
        setBmi(response);
      })
      .catch((error) => {
        console.log(error);
      });

    getBodyComposition(patientToDisplayId.id).then((response) => {
      setBodyComposition(response);
    });
  }, [patientToDisplayId, reload]);

  const triggerParentEffect = () => {
    setReload(!reload);
  };

  return (
    <div>
      <div className="iterative-processor">
        <div className="vitals-wrapper">
          <h3 className="vitals1">NUTRITION</h3>
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
            <div className="blood-pressure-parent">
              <div className="blood-pressure">Random Blood Sugar</div>
            </div>

            <Popup
              trigger={
                <button
                  className="blood-pressure"
                  style={{ padding: "1%", cursor: "pointer" }}
                >
                  NEW RBS{" "}
                </button>
              }
              modal
              nested
            >
              <RBS memberId={[patientToDisplayId.id, triggerParentEffect]} />
            </Popup>
          </div>

          <table className="customers">
            <tr>
              <th>Date</th>
              <th>RBS</th>
              <th>Interpretation</th>
            </tr>
            {rbs &&
              rbs.map((item) => (
                <tr>
                  <td>{item.readingDate}</td>
                  <td>{item.rbs}</td>
                  <td>
                    {" "}
                    {item.interpretation === "Normal" ? (
                      <div className="prehypertension">
                        {item.interpretation}
                      </div>
                    ) : (
                      <div className="prehypertension1">
                        {item.interpretation}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
          </table>

          <div className="timer-manager" />

          <div className="frame-parent4">
            <div className="blood-pressure-parent">
              <div className="blood-pressure">Fasting Blood Sugar</div>
            </div>
            <Popup
              trigger={
                <button className="blood-pressure" style={{ padding: "1%" }}>
                  NEW FBS{" "}
                </button>
              }
              modal
              nested
            >
              <FBS memberId={[patientToDisplayId.id, triggerParentEffect]} />
            </Popup>
          </div>

          <table className="customers">
            <tr>
              <th>Date</th>
              <th>FBS</th>
              <th>Interpretation</th>
            </tr>
            {fbs &&
              fbs.map((item) => (
                <tr>
                  <td>{item.readingDate}</td>
                  <td>{item.fbs}</td>
                  <td>
                    {" "}
                    {item.interpretation === "Normal" ? (
                      <div className="prehypertension">
                        {item.interpretation}
                      </div>
                    ) : (
                      <div className="prehypertension1">
                        {item.interpretation}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
          </table>

          <div className="frame-parent4">
            <div className="blood-pressure-parent">
              <div className="blood-pressure">Glycated Haemoglobin</div>
            </div>
            <Popup
              trigger={
                <button className="blood-pressure" style={{ padding: "1%" }}>
                  NEW HBA1C{" "}
                </button>
              }
              modal
              nested
            >
              <HBA1C memberId={[patientToDisplayId.id, triggerParentEffect]} />
            </Popup>
          </div>

          <table className="customers">
            <tr>
              <th>Date</th>
              <th>HBA1C</th>
              <th>Interpretation</th>
            </tr>
            {hba1c &&
              hba1c.map((item) => (
                <tr>
                  <td>{item.readingDate}</td>
                  <td>{item.hba1c}</td>
                  <td>
                    {" "}
                    {item.interpretation === "Normal" ? (
                      <div className="prehypertension">
                        {item.interpretation}
                      </div>
                    ) : (
                      <div className="prehypertension1">
                        {item.interpretation}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
          </table>


          <div className="frame-parent4">
            <div className="blood-pressure-parent">
              <div className="blood-pressure">Body Mass Index </div>
            </div>
            <Popup
              trigger={
                <button className="blood-pressure" style={{ padding: "1%" }}>
                  Body Mass Index{" "}
                </button>
              }
              modal
              nested
            >
              <BMI memberId={[patientToDisplayId.id, triggerParentEffect]} />
            </Popup>
          </div>

          <table className="customers">
            <tr>
              <th>Date</th>
              <th>BMI</th>
              <th>Height</th>
              <th>Weight</th>
              <th>Interpretation</th>
            </tr>
            {bmi &&
              bmi.map((item) => (
                <tr>
                  <td>{item.readingDate}</td>
                  <td>{item.height}</td>
                  <td>{item.weight}</td>
                  <td>
                    {(item.weight / ((item.height / 100) ^ 2)).toFixed(2)}
                  </td>
                  <td>
                    {" "}
                    {item.interpretation === "Normal" ? (
                      <div className="prehypertension">
                        {item.interpretation}
                      </div>
                    ) : (
                      <div className="prehypertension1">
                        {item.interpretation}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
          </table>

          <div className="property-editor-inner1">
            <div className="line-div" />
          </div>

          <div className="frame-parent4">
            <div className="blood-pressure-parent">
              <div className="blood-pressure">Body Composition Analysis </div>
            </div>
            <Popup
              trigger={
                <button className="blood-pressure" style={{ padding: "1%" }}>
                  New Body Composition
                </button>
              }
              modal
              nested
            >
              <BodyComposition
                memberId={[patientToDisplayId.id, triggerParentEffect]}
              />
            </Popup>
          </div>

          <table className="customers">
            <tr>
              <th>Date</th>
              <th>Body Fat %</th>
              <th>Bone Mass %</th>
              <th>Visceral Fat %</th>
              <th>DCI</th>
              <th>Metabolic Age</th>
              <th>Body Water %</th>
            </tr>
            {bodyComposition &&
              bodyComposition.map((item) => (
                <tr>
                  <td>{item.readingDate}</td>
                  <td>{item.bodyFat}</td>
                  <td>{item.boneMass}</td>
                  <td>{item.visceralFat}</td>
                  <td>{item.DCI}</td>
                  <td>{item.metabolicAge}</td>
                  <td>{item.bodyWater}</td>
                </tr>
              ))}
          </table>
        </div>
      )}
      <div className="timer-manager" />
      {table === "graphical" && (
        <div>
          <div style={{ marginBottom: "7%" }}>
            <BloodSugarGraph patientToDisplayId={[rbs, fbs]} />
          </div>
          <div style={{ marginBottom: "7%" }}>
            <Hba1c hba1c={hba1c} />
          </div>
          <div style={{ marginBottom: "7%" }}>
            <BMIGraph bmi={bmi} />
          </div>
          <div style={{ marginBottom: "7%" }}>
            <Weight weight={bmi} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Nutrition;
