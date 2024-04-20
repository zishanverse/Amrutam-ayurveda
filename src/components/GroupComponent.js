import { useMemo } from "react";
import "./GroupComponent.css";

const GroupComponent = ({ propPadding, propPadding1 }) => {
  const frameDiv6Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv7Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className="rectangle-parent4">
      <div className="frame-child20" />
      <div className="frame-wrapper39">
        <div className="ellipse-parent12">
          <img className="ellipse-icon" alt="" src="/ellipse-725@2x.png" />
          <button className="frame-parent37">
            <div className="wrapper">
              <div className="div6">4.5</div>
            </div>
            <img
              className="material-symbolsstar-icon"
              alt=""
              src="/materialsymbolsstar.svg"
            />
          </button>
        </div>
      </div>
      <div className="frame-wrapper40">
        <div className="frame-parent38">
          <div className="dr-vaishali-sharma-wrapper">
            <div className="dr-vaishali-sharma">Dr. Vaishali sharma</div>
          </div>
          <div className="ayurveda-practitioner-parent">
            <div className="ayurveda-practitioner">Ayurveda Practitioner</div>
            <div className="bams-md">(BAMS, MD)</div>
          </div>
          <div className="frame-wrapper41" style={frameDiv6Style}>
            <div className="frame-parent39">
              <img
                className="frame-icon"
                loading="lazy"
                alt=""
                src="/frame.svg"
              />
              <div className="years-of-experience-wrapper">
                <div className="years-of-experience">
                  {" "}
                  25 years of experience
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper42" style={frameDiv7Style}>
            <button className="frame-parent40" autoFocus={true}>
              <div className="frame-frame">
                <img className="frame-icon1" alt="" src="/frame-1.svg" />
              </div>
              <div className="skin-specialist">Skin Specialist</div>
            </button>
          </div>
        </div>
      </div>
      <button className="book-a-session-wrapper">
        <div className="book-a-session">Book a session</div>
      </button>
    </div>
  );
};

export default GroupComponent;
