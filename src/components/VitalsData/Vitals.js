import React from "react";
import "./Vitals.css";
import FrameComponent1 from "./FrameComponent1";
import VITALSGRAPHICALREPRESENTAT from "./VITALSGRAPHICALREPRESENTAT";
import TemperatureGraph from "./TemperatureGraph";
import OxygenGraph from "./OxygenGraph";
import PulseRateGraph from "./PulseRateGraph";
import RespiratoryRate from "./RespiratoryRate";

const Vitals = ({patientToDisplayId}) => {

  const [table, setTable] = React.useState("table");

  React.useEffect(() => {
    console.log(patientToDisplayId.bloodpressure)
  }
  , [patientToDisplayId]);

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
            <div className="blood-pressure-parent">
              <div className="blood-pressure">Blood Pressure</div>
            </div>
          </div>

          <div className="property-editor-inner2">
            <div className="date-parent">
              <div className="date">Date</div>
              <div className="diastolic-mmhg">Systolic (mmHg)</div>
              <div className="diastolic-mmhg">Diastolic (mmHg)</div>
              <div className="diastolic-mmhg">Interpretation</div>
            </div>
          </div>

          <div className="property-editor-inner1">
            <div className="line-div" />
          </div>
          
          {patientToDisplayId.bloodpressure && patientToDisplayId.bloodpressure.map((bp) => (

          <div className="property-editor-inner2">
            <div className="parent">
              <div className="div2">{bp.readingDate}</div>
              <div className="wrapper">
                <div className="div3">{bp.systolic}</div>
              </div>
              <div className="container">
                <div className="div4">{bp.diastolic}</div>
              </div>
              <div className="prehypertension">code</div>
            </div>

            <div className="property-editor-inner1">
              <div className="line-div" />
            </div>
          </div>
          ))}  

            
          <div className="timer-manager" />

          <div className="frame-parent4">
            <div className="blood-pressure-parent">
              <div className="blood-pressure">Temperature</div>
            </div>
          </div>

          <div className="property-editor-inner2">
            <div className="date-parent">
              <div className="date">Date</div>
              <div className="diastolic-mmhg">Reading (Degrees Celcius)</div>
              <div className="diastolic-mmhg">Interpretation</div>
            </div>
          </div>


          <div className="property-editor-inner1">
            <div className="line-div" />
          </div>

          {patientToDisplayId.temperature && patientToDisplayId.temperature.map((temp) => (
          <div className="property-editor-inner2">
            <div className="parent">
              <div className="div2">{temp.readingDate}</div>
              <div className="wrapper">
                <div className="div3">{temp.temperature}</div>
              </div>
              <div className="prehypertension">code</div>
            </div>
          </div>
          ))}  

          <div className="property-editor-inner1">
            <div className="line-div" />
          </div>

          <div className="frame-parent4">
            <div className="blood-pressure-parent">
              <div className="blood-pressure">Oxygen Saturation</div>
            </div>
          </div>

          <div className="property-editor-inner2">
            <div className="date-parent">
              <div className="date">Date</div>
              <div className="diastolic-mmhg">SpO2(%)</div>
              <div className="diastolic-mmhg">Interpretation</div>
            </div>
          </div>

          <div className="property-editor-inner1">
            <div className="line-div" />
          </div>

          {patientToDisplayId.oxygen && patientToDisplayId.oxygen.map((oxygen) => (
          <div className="property-editor-inner2">
            <div className="parent">
              <div className="div2">{oxygen.readingDate}</div>
              <div className="wrapper">
                <div className="div3">{oxygen.oxygen}</div>
              </div>
              <div className="prehypertension">code</div>
            </div>
          </div>
          ))}

          <div className="property-editor-inner1">
            <div className="line-div" />
          </div>

          <div className="frame-parent4">
            <div className="blood-pressure-parent">
              <div className="blood-pressure">Pulse Rate </div>
            </div>
          </div>

          <div className="property-editor-inner2">
            <div className="date-parent">
              <div className="date">Date</div>
              <div className="diastolic-mmhg">Pulse Rate (bpm) </div>
              <div className="diastolic-mmhg">Interpretation</div>
            </div>
          </div>

          <div className="property-editor-inner1">
            <div className="line-div" />
          </div>
          
          {patientToDisplayId.pulse && patientToDisplayId.pulse.map((
            pulse) => (

            
          <div className="property-editor-inner2">
            <div className="parent">
              <div className="div2">{pulse.readingDate}</div>
              <div className="wrapper">
                <div className="div3">{pulse.pulse}</div>
              </div>
              <div className="prehypertension">code</div>
            </div>
          </div>
          ))}

          <div className="property-editor-inner1">
            <div className="line-div" />
          </div>

          <div className="frame-parent4">
            <div className="blood-pressure-parent">
              <div className="blood-pressure">Respiratory Rate </div>
            </div>
          </div>

          <div className="property-editor-inner2">
            <div className="date-parent">
              <div className="date">Date</div>
              <div className="diastolic-mmhg">Respiratory Rate (bpm) </div>
              <div className="diastolic-mmhg">Interpretation</div>
            </div>
          </div>

          <div className="property-editor-inner1">
            <div className="line-div" />
          </div>

          {patientToDisplayId.respiratory && patientToDisplayId.respiratory 
          .map((respiratory) => (
            <div className="property-editor-inner2">
            <div className="parent">
              <div className="div2">{respiratory.readingDate}</div>
              <div className="wrapper">
                <div className="div3">{respiratory.respiratory}</div>
              </div>
              {/* <div className="container">
                <div className="div4">prehypertension</div>
              </div> */}
              <div className="prehypertension">Prehypertension</div>
        </div>
        </div>
          ))}
        
            
            <div className="property-editor-inner1">
              <div className="line-div" />
            </div>
          </div>
      )}
      <div className="timer-manager" />
      {table === "graphical" && (
        <div>
          <div style={{ marginBottom: "7%" }}>
            <VITALSGRAPHICALREPRESENTAT Bp= {patientToDisplayId.bloodpressure} />
          </div>
          <div style={{ marginBottom: "7%" }}>
            <TemperatureGraph temp = {patientToDisplayId.temperature} />
          </div>
          <div style={{ marginBottom: "7%" }}>
            <OxygenGraph oxygen = {patientToDisplayId.oxygen} />
          </div>
          <div style={{ marginBottom: "7%" }}>
            <PulseRateGraph pulse = {patientToDisplayId.pulse} />
          </div>
          <div style={{ marginBottom: "7%" }}>
            <RespiratoryRate respiratory = {patientToDisplayId.respiratory} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Vitals;
