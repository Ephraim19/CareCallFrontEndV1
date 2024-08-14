import React from "react";
import "../VitalsData/Vitals.css"
import BloodSugarGraph from "./BloodSugarGraph";
import Hba1c from "./Hba1c";
import BMIGraph from "./BMIGraph";
import Weight from "./Weight";
import Popup from "reactjs-popup";
import BMI from "../Vitals&NutritionForms.js/BMI";
import { getRBS, getFBS,getHba1c,getBMI } from "../../Services";
import RBS from "../Vitals&NutritionForms.js/RBS";
import FBS from "../Vitals&NutritionForms.js/FBS";
import HBA1C from "../Vitals&NutritionForms.js/Hba1c";


const Nutrition = ({patientToDisplayId}) => {

  const [table, setTable] = React.useState("table");
  const [reload, setReload] = React.useState(false);
  const [rbs, setRbs] = React.useState([]);
  const [fbs, setFbs] = React.useState([]);
  const [hba1c, setHba1c] = React.useState([]);
  const [bmi, setBmi] = React.useState([]);

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

  }, [patientToDisplayId,reload]);


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

            <Popup trigger={<button className="blood-pressure" style={{padding:"1%",cursor:"pointer"}} >NEW RBS </button>} 
            modal
            nested
          >
            <RBS memberId = {[patientToDisplayId.id,triggerParentEffect]} />
          </Popup>
          </div>

          <div className="property-editor-inner2">
            <div className="date-parent">
              <div className="date">Date</div>
              <div className="diastolic-mmhg">RBS (mg/dl)</div>
              <div className="diastolic-mmhg">Interpretation</div>
            </div>
          </div>

          <div className="property-editor-inner1">
            <div className="line-div" />
          </div>

            {rbs && rbs.map((item) => (

          <div className="property-editor-inner2">
              
            <div className="parent">
              <div className="div2">{item.readingDate}</div>
              <div className="wrapper">
                <div className="div3">{item.rbs}</div>
              </div>
              <div className="prehypertension">{item.interpretation}</div>
            </div>
          </div>

            ))}
            <div className="property-editor-inner1">
              <div className="line-div" />
            </div>

          <div className="timer-manager" />

          <div className="frame-parent4">
            <div className="blood-pressure-parent">
              <div className="blood-pressure">Fasting Blood Sugar</div>
            </div>
            <Popup trigger={<button className="blood-pressure" style={{padding:"1%"}} >NEW FBS </button>} 
            modal
            nested
          >
            <FBS memberId = {[patientToDisplayId.id,triggerParentEffect]} />
          </Popup>
          </div>

          <div className="property-editor-inner2">
            <div className="date-parent">
              <div className="date">Date</div>
              <div className="diastolic-mmhg">FBS (mg/dl)</div>
              <div className="diastolic-mmhg">Interpretation</div>
            </div>
          </div>

          <div className="property-editor-inner1">
            <div className="line-div" />
          </div>

            {fbs && fbs.map((item) => (
          <div className="property-editor-inner2">

            <div className="parent">
              <div className="div2">{item.readingDate}</div>
              <div className="wrapper">
                <div className="div3">{item.fbs}</div>
              </div>
              {item.interpretation === "Normal" ? (
              <div className="prehypertension">{item.interpretation}</div>
            ) : (
              <div className="prehypertension1">{item.interpretation}</div>
            )}
            </div>
          </div>

            ))}
          <div className="property-editor-inner1">
            <div className="line-div" />
          </div>

          <div className="frame-parent4">
            <div className="blood-pressure-parent">
              <div className="blood-pressure">Glycated Haemoglobin</div>
            </div>
            <Popup trigger={<button className="blood-pressure" style={{padding:"1%"}} >NEW HBA1C </button>} 
            modal
            nested
          >
            <HBA1C memberId = {[patientToDisplayId.id,triggerParentEffect]} />
          </Popup>

          </div>

          <div className="property-editor-inner2">
            <div className="date-parent">
              <div className="date">Date</div>
              <div className="diastolic-mmhg">Hba1c (%)</div>
              <div className="diastolic-mmhg">Interpretation</div>
            </div>
          </div>

          <div className="property-editor-inner1">
            <div className="line-div" />
          </div>

            {hba1c && hba1c.map((item) => (
          <div className="property-editor-inner2">

            <div className="parent">
              <div className="div2">{item.readingDate}</div>
              <div className="wrapper">
                <div className="div3">{item.hba1c}</div>
              </div>
              {item.interpretation === "Normal" ? (
              <div className="prehypertension">{item.interpretation}</div>
            ) : (
              <div className="prehypertension1">{item.interpretation}</div>
            )}
            </div>
          </div>

            ))}

          <div className="property-editor-inner1">
            <div className="line-div" />
          </div>

          <div className="frame-parent4">
            <div className="blood-pressure-parent">
              <div className="blood-pressure">Body Mass Index </div>
            </div>
            <Popup trigger={<button className="blood-pressure" style={{padding:"1%"}} >Body Mass Index </button>} 
            modal
            nested
          >
            <BMI memberId = {[patientToDisplayId.id,triggerParentEffect]} />
          </Popup>
          </div>

          <div className="property-editor-inner2">
            <div className="date-parent">
              <div className="date">Date</div>
              <div className="diastolic-mmhg">BMI(kg/m^2) </div>
              <div className="diastolic-mmhg">Interpretation</div>
            </div>
          </div>

          <div className="property-editor-inner1">
            <div className="line-div" />
          </div>

            {bmi && bmi.map((item) => (
          <div className="property-editor-inner2">
              
            <div className="parent">
              <div className="div2">{item.readingDate}</div>
              <div className="wrapper">
                <div className="div3">{(item.weight/((item.height/100) ^ 2)).toFixed(2)} </div>
              </div>
              {item.interpretation === "Normal" ? (
              <div className="prehypertension">{item.interpretation}</div>
            ) : (
              <div className="prehypertension1">{item.interpretation}</div>
            )}
            </div>
          </div>

            ))}

          <div className="property-editor-inner1">
            <div className="line-div" />
          </div>

          <div className="frame-parent4">
            <div className="blood-pressure-parent">
              <div className="blood-pressure">Body Composition Analysis </div>
            </div>
          </div>

          <div className="property-editor-inner2">
            <div className="date-parent">
              <div className="date">Date</div>
              <div className="diastolic-mmhg">Body fat (%) </div>
              <div className="diastolic-mmhg">Muscle mass</div>
              <div className="diastolic-mmhg">Bone mass</div>
              <div className="diastolic-mmhg">DCI</div>
              <div className="diastolic-mmhg">Body water</div>
              <div className="diastolic-mmhg">Body water</div>
              <div className="diastolic-mmhg">Visceral fat</div>
              <div className="diastolic-mmhg">Metabolic age</div>
            </div>
          </div>

          <div className="property-editor-inner1">
            <div className="line-div" />
          </div>

          <div className="property-editor-inner2">
            <div className="parent">
              <div className="div2">05/04/2022</div>
              <div className="wrapper">
                <div className="div3">--</div>
              </div>
              {/* <div className="container">
                <div className="div4">prehypertension</div>
              </div> */}
              <div className="prehypertension">--</div>
            </div>

            <div className="property-editor-inner1">
              <div className="line-div" />
            </div>
          </div>
        </div>
      )}
      <div className="timer-manager" />
      {table === "graphical" && (
        <div>
          <div style={{ marginBottom: "7%" }}>
            <BloodSugarGraph patientToDisplayId = {[rbs,fbs]}  />
          </div>
          <div style={{ marginBottom: "7%" }}>
            <Hba1c hba1c = {hba1c} />
          </div>
          <div style={{ marginBottom: "7%" }}>
            <BMIGraph bmi = {bmi} />
          </div>
          <div style={{ marginBottom: "7%" }}>
            <Weight weight = {bmi}  />
          </div>
  
         </div>
      )}
    </div>
  );
};

export default Nutrition;
