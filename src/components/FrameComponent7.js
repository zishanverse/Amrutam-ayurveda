import FrameComponent8 from "./FrameComponent8";
import "./FrameComponent7.css";

const FrameComponent7 = () => {
  return (
    <div className="frame-wrapper7">
      <div className="frame-parent9">
        <div className="frame-parent10">
          <div className="frame-wrapper8">
            <div className="frame-parent11">
              <div className="personalized-wellness-wrapper">
                <div className="personalized-wellness">
                  <p className="personalized-wellness1">
                    Personalized Wellness
                  </p>
                </div>
              </div>
              <div className="get-treatments-made">
                Get treatments made just for you based on your individual doshas
                ( body type)
              </div>
            </div>
          </div>
          <button className="frame-wrapper9">
            <div className="ellipse-parent3">
              <div className="frame-child5" />
              <img
                className="heartbeat-1-1"
                alt=""
                src="/heartbeat-1-1@2x.png"
              />
            </div>
          </button>
        </div>
        <FrameComponent8
          protection1="/protection-1@2x.png"
          holisticHealing="Holistic Healing"
          fixTheRootProblemForLongL="Fix the root problem for long-lasting health."
        />
      </div>
    </div>
  );
};

export default FrameComponent7;
