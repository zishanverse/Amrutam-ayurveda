import { useMemo } from "react";
import "./FrameComponent8.css";

const FrameComponent8 = ({
  protection1,
  holisticHealing,
  fixTheRootProblemForLongL,
  propWidth,
  propPadding,
  propBackgroundColor,
  propMinWidth,
  propWidth1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const ellipseDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameDiv1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const holisticHealingStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className="frame-wrapper4" style={frameDivStyle}>
      <div className="frame-parent8">
        <button className="frame-wrapper5">
          <div className="ellipse-parent2">
            <div className="frame-child4" style={ellipseDivStyle} />
            <img className="protection-1-icon" alt="" src={protection1} />
          </div>
        </button>
        <div className="frame-wrapper6" style={frameDiv1Style}>
          <div className="holistic-healing-parent">
            <div className="holistic-healing" style={holisticHealingStyle}>
              {holisticHealing}
            </div>
            <div className="fix-the-root">{fixTheRootProblemForLongL}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent8;
