import React, { useEffect, useState } from "react";
import styles from "../HomepageForms/Program.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postNutritionist } from "../../Services";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { auth } from "../Firebase";
import './Doctor.css';

const Doctor = ({ condition }) => {
  const [conditionName, setConditionName] = useState("");
  const [conditionStatus, setConditionStatus] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [details, setDetail] = useState("");
  const [submit, setSubmit] = useState("SUBMIT DATA");

  //   useEffect(() => {
  //     console.log(condition);
  //   }, [condition]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmit("SUBMITTING DATA...");
    const data = {
      nutritionistDate: startDate.toDateString(),
      memberId: parseInt(condition[0]),
      updatedBy: auth.currentUser.email,
      nutritionistAssesment: conditionName,
      nutritionistDiagnosis: conditionStatus,
      nutritionistRecommendations: details,
    };

    postNutritionist(data)
      .then((response) => {
        // condition[1]();
        toast.success("Data submitted successfully");
        setSubmit("SUBMIT DATA");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in submitting data");
        setSubmit("SUBMIT DATA");
      });
  };

  return (
    <div>
      <div className="landing-page">
        <section className="patient-info">
          <div className="chief-complaints">Chief Complaints</div>
          <input className="patient-info-child" type="text" />
        </section>
        <section className="subjective-assessment">
          <div className="subjective-assessment-hpi">
            Subjective Assessment (HPI & Systemic Review)
          </div>
          <div className="review">
            <div className="review-child"></div>
          </div>
        </section>
        <section className="objective-data-parent">
          <div className="objective-data">
            <div className="chief-complaints">Objective Assessment</div>
          </div>
          <div className="frame-child"></div>
        </section>
        <section className="diagnosis-parent">
          <div className="diagnosis">Diagnosis</div>
          <div className="frame-parent">
            <div className="frame-group">
              <div className="frame-container">
                <div className="frame-item"></div>
                <div className="frame-wrapper">
                  <div className="add-diagnosis-input-parent">
                    <div className="add-diagnosis-input">
                      {/* <div className="add-diagnosis-input-inner">
                        <img
                          class="frame-inner"
                          loading="lazy"
                          alt=""
                          src="./public/ellipse-2.svg"
                        />
                      </div> */}
                      <div className="div">+</div>

                    </div>
                    <div className="input-diagnosis">
                      <div className="chief-complaints">Add another diagnosis</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="treatment-plan-wrapper">
                <div className="chief-complaints">Treatment Plan</div>
              </div>
            </div>
            <div className="presumptive-diagnosis-wrapper">
              <div className="presumptive-diagnosis">
                <div className="presumptive-input-wrapper">
                  {/* <div className="presumptive-input">
                    <div className="vector-parent">
                      <img
                        class="vector-icon"
                        loading="lazy"
                        alt=""
                        src="./public/vector.svg"
                      />

                      <img
                        class="vector-icon1"
                        alt=""
                        src="./public/vector-1.svg"
                      />
                    </div>
                    <div class="presumptive">Presumptive</div>
                  </div> */}
                </div>
                <div className="presumptive-input">
                  <img
                    class="vector-parent"
                    loading="lazy"
                    alt=""
                    src="./public/vector-1.svg"
                  />

                  <div className="definitive">Definitive</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-item"></div>
        </section>
        <section className="lab-tests-wrapper">
          <div className="lab-tests">
            <div className="lab-tests-input-parent">
              <div className="add-diagnosis-input">
                <div className="add-diagnosis-input-inner">
                  <img
                    className="frame-inner"
                    loading="lazy"
                    alt=""
                    src="./public/ellipse-2.svg"
                  />
                </div>
                <div className="div">+</div>
              </div>
              <div className="order-tests">
                <div className="chief-complaints">Order Lab Tests</div>
              </div>
            </div>
            <div className="prescription-parent">
              <div className="prescription">
                <div className="prescription-input-parent">
                  <div className="prescription-input">
                    <div className="add-diagnosis-input">
                      <div className="add-diagnosis-input-inner">
                        <img
                          className="frame-inner"
                          loading="lazy"
                          alt=""
                          src="./public/ellipse-2.svg"
                        />
                      </div>
                      <div className="div">+</div>
                    </div>
                    <div className="order-tests">
                      <div className="chief-complaints">Write Prescription</div>
                    </div>
                  </div>
                  <div className="referral">
                    <div className="referral-input-parent">
                      <div className="add-diagnosis-input">
                        <div className="add-diagnosis-input-inner">
                          <img
                            className="frame-inner"
                            loading="lazy"
                            alt=""
                            src="./public/ellipse-2.svg"
                          />
                        </div>
                        <div className="div">+</div>
                      </div>
                      <div className="referral-form">
                        <div className="chief-complaints">Referral Form</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="submission">
                <div className="submit">SUBMIT</div>
              </button>
            </div>
          </div>
        </section>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Doctor;
