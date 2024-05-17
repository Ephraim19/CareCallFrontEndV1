import "./FrameComponent2.css";

const FrameComponent2 = ({ pastAdmissions, rEASONDIAGNOSIS }) => {
  return ( 
    <div className="frame-parent2" >
      <div className="past-admissions-parent">
        <div className="past-admissions">{pastAdmissions}</div>
        <div className="date-parent">
          
          <div className="date">DATE</div>
          <div className="reasondiagnosis">{rEASONDIAGNOSIS}</div>
        </div>
        
      </div>
      <div className="frame-wrapper1">
        <div className="edit-wrapper">
          <div className="edit">EDIT</div>
        </div>
      </div>

        
    </div>
  );
};

export default FrameComponent2;
