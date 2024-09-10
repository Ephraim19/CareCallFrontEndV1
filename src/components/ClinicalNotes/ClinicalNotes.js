import React, { useState, useEffect } from "react";
import "./ClinicalNotes.css";
import Collapsible from "react-collapsible";
import { getNutritionist, getPsychologist, getDoctor } from "../../Services";

const ClinicalNotes = ({ memberId }) => {
  const [nutritionConsultation, setNutritionConsultation] = useState([]);

  const [psychologistConsultation, setPsychologistConsultation] = useState([]);
  const [doctorConsultation, setDoctorConsultation] = useState([]);

  useEffect(() => {
    getDoctor(parseInt(memberId))
      .then((response) => {
        setDoctorConsultation(response);
      })
      .catch((error) => {
        console.error(error);
      });

    getNutritionist(parseInt(memberId))
      .then((response) => {
        setNutritionConsultation(response);
      })
      .catch((error) => {
        console.error(error);
      });

    getPsychologist(parseInt(memberId))
      .then((response) => {
        setPsychologistConsultation(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [memberId]);

  return (
    <div>
      <div className="inicio">
        <div className="clinical-notes-container">
          <h2 className="clinical-notes">CLINICAL NOTES</h2>
        </div>

        <div className="consultations">
          <div className="frame-parent55">
            <Collapsible
              trigger={
                <div className="doctors-consultation-wrapper">
                  <div className="doctors-consultation">
                    Doctor Consultation
                  </div>
                </div>
              }
            >
              <table className="customers">
                <tr>
                  <th>Date</th>
                  <th>Chief Complaint</th>
                  <th>Diagnosis</th>
                </tr>
                {doctorConsultation &&
                  doctorConsultation.map((consultation) => (
                    <tr>
                      <td>{consultation.consultationDate}</td>
                      <td>{consultation.chiefComplaint}</td>
                      <td>{consultation.diagnosis}</td>
                    </tr>
                  ))}
              </table>
            </Collapsible>
          </div>
        </div>

        <div className="consultations">
          <div className="frame-parent55">
            <Collapsible
              trigger={
                <div className="doctors-consultation-wrapper">
                  <div className="doctors-consultation">
                    Nutrition Consultation
                  </div>
                </div>
              }
            >
              <table className="customers">
                <tr>
                  <th>Date</th>
                  <th>Assesment</th>
                  <th>Diagnosis</th>
                  <th>Recommendations</th>
                </tr>
                {nutritionConsultation &&
                  nutritionConsultation.map((consultation) => (
                    <tr>
                      <td>{consultation.nutritionistDate}</td>
                      <td>{consultation.nutritionistAssesment}</td>
                      <td>{consultation.nutritionistDiagnosis}</td>
                      <td>{consultation.nutritionistRecommendations}</td>
                    </tr>
                  ))}
              </table>
            </Collapsible>
          </div>
        </div>

        <div className="consultations">
          <div className="frame-parent55">
            <Collapsible
              trigger={
                <div className="doctors-consultation-wrapper">
                  <div className="doctors-consultation">
                    Psychologist Consultation
                  </div>
                </div>
              }
            >
              <table className="customers">
                <tr>
                  <th>Date</th>
                  <th>Assesment</th>
                  <th>Diagnosis</th>
                  <th>Recommendations</th>
                </tr>
                {psychologistConsultation &&
                  psychologistConsultation.map((consultation) => (
                    <tr>
                      <td>{consultation.psychologistDate}</td>
                      <td>{consultation.psychologistAssesment}</td>
                      <td>{consultation.psychologistDiagnosis}</td>
                      <td>{consultation.psychologistRecommendations}</td>
                    </tr>
                  ))}
              </table>
            </Collapsible>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicalNotes;
