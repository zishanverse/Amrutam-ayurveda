import "./FrameComponent10.css";

const FrameComponent10 = () => {
  return (
    <div className="frame-div">
      <div className="frame-parent1">
        <div className="rectangle-container">
          
          <div className="rectangle-div" />
        
          <img className="rectangle-icon" alt="" src="/rectangle-3464754.svg" />
          <img src="/rectangle-3464760@2x.png" className="frame-inner"/>
          <div className="frame-parent2">
            <div className="namaste-welcome-to-amrutam-parent">
              <h3 className="namaste-welcome-to">{`Namaste, Welcome to Amrutam `}</h3>
              <div className="step-into-holistic-healing-wit-parent">
                <h1 className="step-into-holistic-container">
                  <p className="step-into-holistic-healing-wit">
                    <span className="step-into-holistic">{`Step into Holistic Healing with `}</span>
                    <span className="ayurveda">Ayurveda</span>
                  </p>
                  <p className="book-consultation-with-certifi">
                    <span>
                      <span className="book-consultation-with">{`Book Consultation with certified Experts. `}</span>
                    </span>
                  </p>
                </h1>
                <div className="dive-into-the-container">
                  {`Dive into the world of ayurveda and `}
                  <span className="experience-personalized-health">
                    Experience Personalized Health Solutions and Holistic Guidance
                    from Trusted Ayurvedic Doctors Anytime, anywhere.
                  </span>
                </div>
              </div>
            </div>
            <button className="book-an-appointment-wrapper" autoFocus={true}>
              <div className="book-an-appointment">Book an Appointment</div>
            </button>
          </div>
        </div>
      </div>
      <header className="rectangle-header" />
    </div>
  );
};

export default FrameComponent10;
