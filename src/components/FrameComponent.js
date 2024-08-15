import "./FrameComponent.css";
import React from "react";
import Popup from "reactjs-popup";
import AppointmentForm from "./Appointments/AppointmentForm";

const FrameComponent = ({memberId}) => {
  return (
    <div className="frame-parent21">
      <div className="engagement-parent">
        <div className="engagement">Engagement</div>
        <div className="forms">Forms</div>
      </div>
      <div className="search-tree">
        <div className="vector-parent">
          <img
            className="frame-item"
            loading="lazy"
            alt=""
            src="/ellipse-2.svg"
          />
          <h2 className="matrix-solver">+</h2>
        </div>
        <div className="rule-engine">
          <div className="expand-svgrepocom-wrapper">
            <img
              className="expand-svgrepocom-icon"
              loading="lazy"
              alt=""
              src="/expand-svgrepocom.svg"
            />
          </div>
          <div className="priority-queue">
            <b className="pending-appointments">Pending Appointments</b>
            <div className="frame-parent22">
              <div className="frame-parent23">
                <div className="date-group">
                  <div className="date1">DATE</div>
                  <div className="div2">10/5/2024</div>
                  <div className="div3">22/5/2024</div>
                </div>
                <div className="date-group">
                  <div className="time">TIME</div>
                  <div className="pm">2.30 pm</div>
                  <div className="pm">2.30 pm</div>
                </div>

                <div className="date-group">
                <Popup trigger={
                  <button className="time">NEW</button> }
        modal
        nested
      >
        <AppointmentForm memberId = {memberId} />
        </Popup>

                  <div className="pm">
                  <img
              className="expand-svgrepocom-icon"
              loading="lazy"
              alt=""
              src="/expand-svgrepocom.svg"
            />
                  </div>
                  <div className="pm">
                  <div className="pm">
                  <img
              className="expand-svgrepocom-icon"
              loading="lazy"
              alt=""
              src="/expand-svgrepocom.svg"
            />
                  </div>
                  </div>
                </div>
              </div>
              
              <div className="appointment-parent">
                <button className="appointment">NEW APPOINTMENT</button>
                {/* <div className="nutrition-review">Nutrition Review</div>
                <div className="doctors-consultation-for">
                  Doctor’s consultation for medication refill
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent24">
        <div className="frame-wrapper12">
          <div className="engagement-panel-parent">
            <b className="engagement-panel">Engagement Panel</b>
            <div className="frame-wrapper13">
              <div className="expand-svgrepocom-container">
                <img
                  className="expand-svgrepocom-icon"
                  alt=""
                  src="/expand-svgrepocom.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="number-cruncher">
          <div className="string-modifier">
            <div className="list-handler">
              <div className="tree-builder">
                <div className="engagement-panel-parent">
                  <div className="queue-processor">
                    <div className="phone">Phone</div>
                  </div>
                  <div className="queue-processor1">
                    <b className="sms">SMS</b>
                  </div>
                  <div className="whatsapp">WhatsApp</div>
                  <div className="email">Email</div>
                </div>
              </div>
              <div className="set-organizer">
                <div className="filter-function">
                  <div className="sort-solver">
                    <div className="search-seeker">
                      <div className="hi-mary-its">
                        Hi Mary! It's Nurse Ebenezer from the CareCall. Just
                        checking in on how you're feeling today. Any concerns or
                        changes in your symptoms?
                      </div>
                      <div className="function-factory">
                        <div className="sent-by-ebenezer-container">
                          <b>Sent by:</b>
                          <span> Ebenezer Mokamba</span>
                        </div>
                        <div className="may-1-2024">May 1, 2024 | 9.43 am</div>
                      </div>
                    </div>
                    <div className="error-ender">
                      <div className="alert-activator">
                        <div className="hi-ebenezer-thanks">
                          Hi Ebenezer! Thanks for reaching out. Feeling a bit
                          better today, thanks. Still dealing with some
                          coughing, but it's not as bad as before.
                        </div>
                        <div className="data-display">
                          <div className="from-mary-patient-container">
                            <b>From:</b>
                            <span> Mary (patient)</span>
                          </div>
                          <div className="may-1-20241">
                            May 1, 2024 | 11.47 am
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="input-interpreter-icon"
                  loading="lazy"
                  alt=""
                  src="/frame-63.svg"
                />
              </div>
            </div>
            <div className="connection-controller">
              <div className="start-typing-parent">
                <input
                  className="start-typing"
                  placeholder="Start Typing"
                  type="text"
                />
                <div className="graph-generator">
                  <img
                    className="visualizer-vision-icon"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="canvas-container-icon"
          loading="lazy"
          alt=""
          src="/frame-58.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
