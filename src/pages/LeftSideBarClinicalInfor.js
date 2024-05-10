import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./LeftSideBarClinicalInfor.css";
import Collapsible from "react-collapsible";
import React, { useState } from "react";
import Vitals from "../components/VitalsData/Vitals";
import Nutrition from "../components/NutritionData/Nutrition";
import LabFindings from "../components/LAB FINDINGS/LabFindings";

const LeftSideBarClinicalInfor = () => {
  const [personalClinical, setPersonalClinical] = useState("personal");

  return (
    <div className="left-side-bar-clinical-infor">
      <FrameComponent3 />
      <main className="left-side-bar-clinical-infor-inner">
        <section className="frame-parent">
          <FrameComponent1 />
          <div className="frame-group">
            <div className="matrix-multiplier-wrapper">
              <div className="matrix-multiplier">
                <div className="medical-records">Medical Records</div>

                <div className="graph-processor">
                  <div className="interactions">Interactions</div>
                </div>
                <div className="graph-processor1">
                  <div className="tasks">Tasks</div>
                </div>
                <div className="member-journey">Member Journey</div>
              </div>
            </div>
            <div className="data-visualizer">
              <Collapsible
                trigger={
                  <div className="algorithm-component">
                    <h3 className="vitals">VITALS</h3>
                    <h3 className="data-normalizer">+</h3>
                  </div>
                }
              >
                <Vitals />
              </Collapsible>

              <Collapsible
                trigger={
                  <div className="algorithm-component1" style={{ cursor:"pointer" }}>
                    <h3 className="nutrition-blood">{`NUTRITION & BLOOD SUGAR`}</h3>
                    <h3 className="data-normalizer">+</h3>
                  </div>
                }
              >
                <Nutrition />
              </Collapsible>

              <Collapsible
                trigger={
              <div className="algorithm-component2">
                <h3 className="nutrition-blood">LAB FINDINGS</h3>
                <h3 className="data-normalizer">+</h3>
              </div>
                }>
                <LabFindings />
              </Collapsible>
              
              <div className="algorithm-component3">
                <h3 className="nutrition-blood">{`IMAGING `}</h3>
                <h3 className="data-normalizer">+</h3>
              </div>
              <div className="algorithm-component4">
                <h3 className="nutrition-blood">ATTACHMENTS</h3>
                <h3 className="data-normalizer">+</h3>
              </div>
              <div className="algorithm-component5">
                <h3 className="nutrition-blood">CLINICAL NOTES</h3>
                <h3 className="data-normalizer">+</h3>
              </div>
              <div className="algorithm-component6">
                <h3 className="nutrition-blood">INTERVENTIONS</h3>
                <h3 className="data-normalizer">+</h3>
              </div>
            </div>
          </div>
          <FrameComponent />
        </section>
      </main>
    </div>
  );
};

export default LeftSideBarClinicalInfor;
