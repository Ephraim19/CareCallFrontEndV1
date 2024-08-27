import "./FrameComponent.css";
import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import AppointmentForm from "./Appointments/AppointmentForm";
import { sendWhatsapp } from "../Services";
import { auth } from "./Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FrameComponent = ({ memberId }) => {
  const [appointments, setAppointments] = useState([]);
  const [message, setMessage] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  // const [dataFromChild, setDataFromChild] = useState('');

  const handleChildData = (data) => {
    setAppointments(data);
  };

  useEffect(() => {
    setAppointments(memberId[1]);

    // sendMessage.then((response) => {
    //   console.log(response);
    //   setWhatsapp(response);
    // }
    // ).catch((error) => {
    //   console.error(error);
    // }
  // );
  
  }, [memberId]);

  const sendMessage = () => {

    const data = {
      memberId: memberId[0],
      message: message,
      messageFrom : auth.currentUser.email,
      messageDirection:"Outbound",   
      messageTo: "254"
    }
    
    if(message === ''){
      return;
    }

    sendWhatsapp(data).then((response) => {
      toast.success("Message sent successfully");
      setMessage('');
    }
    ).catch((error) => {
      toast.error("An error occurred. Please try again");
      console.error(error);
    });
  };

  return (
    <div className="frame-parent21">
      <div className="engagement-parent">
        <div className="engagement">Engagement</div>
        <div className="forms">Forms</div>
      </div>
      <div className="search-tree">
        <div className="rule-engine">
          <div className="priority-queue">
            <div className="pending-appointments">
              {" "}
              Pending Appointments
              <div className="frame-wrapper13">
                <div className="expand-svgrepocom-container">
                  <Popup
                    trigger={
                      <button style={{ border: "none" }} className="time">
                        ADD
                      </button>
                    }
                    modal
                    nested
                  >
                      <AppointmentForm
                        memberId={[memberId[0], handleChildData]}
                      />
                      
                  </Popup >
                </div>
              </div>
            </div>
            <div className="frame-parent22">
              <div className="frame-parent23">
                <div className="date-group">
                  <div className="date1">DATE</div>
                  {appointments.length === 0 && (<p>No Appointments</p>)}
                  {appointments.map((appointment) => (
                    <div className="div2">
                      {appointment.appointmentDate}-
                      {appointment.appointmentTime}
                    </div>
                  ))}
                </div>

                <div className="date-group">
                  <div className="time">REASON</div>
                  {appointments.map((appointment) => (
                    <div className="div2">{appointment.appointmentReason}</div>
                  ))}
                </div>
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
                    <b className="sms">WhatsApp</b>
                  </div>
                  <div className="whatsapp">SMS</div>
                  {/* <div className="email">Email</div> */}
                </div>
              </div>

              <div className="set-organizer">
                <div className="filter-function">
                  <div className="sort-solver">
                    <div className="search-seeker">
                      <div className="hi-mary-its">Hi Mary!</div>
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
                        <div className="hi-ebenezer-thanks">Hi Ebenezer!</div>
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
                  value = {message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <div className="graph-generator" onClick={sendMessage} style={{cursor:"pointer"}}>
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
      <ToastContainer />

    </div>
  );
};

export default FrameComponent;
