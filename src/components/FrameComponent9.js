import "./FrameComponent9.css";

const FrameComponent9 = () => {
  return (
    <div className="frame-parent3">
      <div className="frame-parent4">
        <button className="frame-button" autoFocus={true}>
          <div className="ellipse-parent">
            <div className="ellipse-div" />
            <img
              className="speech-bubble-2-1"
              alt=""
              src="/speechbubble-2-1@2x.png"
            />
          </div>
        </button>
        <div className="convenient-online-in-clinic-wrapper">
          <div className="convenient-online-container">
            <p className="convenient-online">{`convenient online & `}</p>
            <p className="in-clinic-consultations">In-clinic consultations</p>
          </div>
        </div>
      </div>
      <div className="frame-parent5">
        <button className="frame-wrapper1">
          <div className="ellipse-group">
            <div className="frame-child1" />
            <img className="shield-1-icon" alt="" src="/shield-1@2x.png" />
          </div>
        </button>
        <div className="safe-and-effective-treatment-wrapper">
          <div className="safe-and-effective">Safe and effective treatment</div>
        </div>
      </div>
      <div className="frame-parent6">
        <button className="frame-wrapper2">
          <div className="ellipse-container">
            <div className="frame-child2" />
            <img className="doctor-1-1" alt="" src="/doctor-1-1@2x.png" />
          </div>
        </button>
        <div className="title-wrapper">
          <div className="title">Experienced Ayurvedic Practitioners</div>
        </div>
      </div>
      <div className="frame-parent7">
        <button className="frame-wrapper3">
          <div className="ellipse-parent1">
            <div className="frame-child3" />
            <img
              className="prescription-1-1"
              alt=""
              src="/prescription-1-1@2x.png"
            />
          </div>
        </button>
        <div className="personalized-treatment-plans-wrapper">
          <div className="personalized-treatment-plans-container">
            <p className="personalized-treatment">{`personalized Treatment `}</p>
            <p className="plans-guidance">{`Plans & Guidance`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent9;
