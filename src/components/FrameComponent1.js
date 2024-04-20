import GroupComponent from "./GroupComponent";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <div className="frame-parent41">
      <div className="frame-wrapper43">
        <div className="rectangle-parent5">
          <div className="frame-child21" />
          <h1 className="meet-our-ayurveda">{`Meet our Ayurveda experts `}</h1>
        </div>
      </div>
      <div className="frame-parent42">
        <div className="frame-wrapper44">
          <button className="frame-wrapper45">
            <div className="ellipse-parent13">
              <div className="frame-child22" />
              <img className="arrow-icon" alt="" src="/arrow-1.svg" />
            </div>
          </button>
        </div>
        <div className="frame-parent43">
          <GroupComponent />
          <GroupComponent
            propPadding="0px var(--padding-10xl) var(--padding-3xs) var(--padding-10xl-5)"
            propPadding1="0px var(--padding-28xl)"
          />
          <div className="rectangle-parent6">
            <div className="frame-child23" />
            <div className="frame-wrapper46">
              <div className="ellipse-parent14">
                <img
                  className="frame-child24"
                  alt=""
                  src="/ellipse-725@2x.png"
                />
                <button className="frame-parent44" autoFocus={true}>
                  <div className="container">
                    <div className="div7">4.5</div>
                  </div>
                  <img
                    className="material-symbolsstar-icon1"
                    alt=""
                    src="/materialsymbolsstar.svg"
                  />
                </button>
              </div>
            </div>
            <div className="frame-wrapper47">
              <div className="frame-parent45">
                <div className="dr-vaishali-sharma-container">
                  <div className="dr-vaishali-sharma1">Dr. Vaishali sharma</div>
                </div>
                <div className="frame-parent46">
                  <div className="frame-parent47">
                    <div className="ayurveda-practitioner-group">
                      <div className="ayurveda-practitioner1">
                        Ayurveda Practitioner
                      </div>
                      <div className="bams-md1">(BAMS, MD)</div>
                    </div>
                    <div className="frame-wrapper48">
                      <div className="frame-parent48">
                        <img className="frame-icon2" alt="" src="/frame.svg" />
                        <div className="years-of-experience-container">
                          <div className="years-of-experience1">
                            {" "}
                            25 years of experience
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-wrapper49">
                    <button className="frame-parent49">
                      <div className="frame-wrapper50">
                        <img
                          className="frame-icon3"
                          alt=""
                          src="/frame-1.svg"
                        />
                      </div>
                      <div className="skin-specialist1">Skin Specialist</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button className="book-a-session-container">
              <div className="book-a-session1">Book a session</div>
            </button>
          </div>
        </div>
        <div className="frame-wrapper51">
          <img
            className="frame-child25"
            loading="lazy"
            alt=""
            src="/frame-1000006105@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
