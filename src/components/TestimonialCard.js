import { useMemo } from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({
  mumbai,
  emojionestar,
  emojionestar1,
  emojionestar2,
  emojionestar3,
  emojionestar4,
  propPadding,
  propPadding1,
  propPadding2,
  propDebugCommit,
  propOverflow,
  propOverflow1,
  propOverflow2,
  propOverflow3,
  propOverflow4,
  propDebugCommit1,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv3Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const frameDiv4Style = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const frameDiv5Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const emojionestarIconStyle = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const emojionestarIcon1Style = useMemo(() => {
    return {
      overflow: propOverflow1,
    };
  }, [propOverflow1]);

  const emojionestarIcon2Style = useMemo(() => {
    return {
      overflow: propOverflow2,
    };
  }, [propOverflow2]);

  const emojionestarIcon3Style = useMemo(() => {
    return {
      overflow: propOverflow3,
    };
  }, [propOverflow3]);

  const emojionestarIcon4Style = useMemo(() => {
    return {
      overflow: propOverflow4,
    };
  }, [propOverflow4]);

  const testimonialTitleStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div className="testimonial-card">
      <div className="card" />
      <div className="consulted-for-hair-wrapper">
        <b className="consulted-for-hair">Consulted for hair</b>
      </div>
      <div className="testimonial-card-inner" style={frameDiv2Style}>
        <div className="frame-parent28">
          <div className="frame-parent29" style={frameDiv3Style}>
            <div className="image-placeholder-parent">
              <img
                className="image-placeholder-icon"
                alt=""
                src="/image-placeholder.svg"
              />
              <div className="testimonal-name">
                <p className="sophie-moore">Sophie Moore</p>
                <p className="mumbai">{mumbai}</p>
              </div>
            </div>
            <div className="div4">17/02/24</div>
          </div>
          <div className="frame-wrapper33">
            <div className="frame-parent30">
              <div className="frame-wrapper34" style={frameDiv4Style}>
                <div className="emojionestar-parent" style={frameDiv5Style}>
                  <img
                    className="emojionestar-icon"
                    alt=""
                    src={emojionestar}
                    style={emojionestarIconStyle}
                  />
                  <img
                    className="emojionestar-icon1"
                    alt=""
                    src={emojionestar1}
                    style={emojionestarIcon1Style}
                  />
                  <img
                    className="emojionestar-icon2"
                    alt=""
                    src={emojionestar2}
                    style={emojionestarIcon2Style}
                  />
                  <img
                    className="emojionestar-icon3"
                    alt=""
                    src={emojionestar3}
                    style={emojionestarIcon3Style}
                  />
                  <img
                    className="emojionestar-icon4"
                    alt=""
                    src={emojionestar4}
                    style={emojionestarIcon4Style}
                  />
                </div>
              </div>
              <b className="testimonial-title" style={testimonialTitleStyle}>
                “One of a kind service”
              </b>
            </div>
          </div>
          <div className="testimonial-paragraph-wrapper">
            <div className="testimonial-paragraph">
              Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra
              diam sit amet nisl suscipit adipis.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
