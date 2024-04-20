import TestimonialCard from "./TestimonialCard";
import "./FrameComponent2.css";

const FrameComponent2 = () => {
  return (
    <section className="desktop-22-wrapper">
      <div className="desktop-22">
        <div className="desktop-22-inner">
          <div className="rectangle-parent3">
            <div className="frame-child16" />
            <h1 className="stories-from-our-container">
              S
              <span className="tories-from-our">
                TORIES FROM OUR VALUED CUSTOMERS!
              </span>
            </h1>
          </div>
        </div>
        <div className="frame-parent31">
          <div className="frame-parent32">
            <div className="card-parent">
              <div className="card1" />
              <div className="consulted-for-skin-wrapper">
                <b className="consulted-for-skin">Consulted for Skin</b>
              </div>
              <div className="frame-wrapper35">
                <div className="frame-parent33">
                  <div className="frame-wrapper36">
                    <div className="frame-parent34">
                      <div className="image-placeholder-group">
                        <img
                          className="image-placeholder-icon1"
                          loading="lazy"
                          alt=""
                          src="/image-placeholder.svg"
                        />
                        <div className="testimonal-name1">
                          <p className="sophie-moore1">Sophie Moore</p>
                          <p className="chennai">{`Chennai `}</p>
                        </div>
                      </div>
                      <div className="div5">17/02/24</div>
                    </div>
                  </div>
                  <div className="frame-parent35">
                    <div className="frame-wrapper37">
                      <div className="emojionestar-group">
                        <img
                          className="emojionestar-icon5"
                          loading="lazy"
                          alt=""
                          src="/emojionestar.svg"
                        />
                        <img
                          className="emojionestar-icon6"
                          alt=""
                          src="/emojionestar.svg"
                        />
                        <img
                          className="emojionestar-icon7"
                          alt=""
                          src="/emojionestar.svg"
                        />
                        <img
                          className="emojionestar-icon8"
                          alt=""
                          src="/emojionestar.svg"
                        />
                        <img
                          className="emojionestar-icon9"
                          alt=""
                          src="/emojionestar.svg"
                        />
                      </div>
                    </div>
                    <div className="frame-parent36">
                      <div className="testimonial-title-wrapper">
                        <b className="testimonial-title1">
                          “One of a kind service”
                        </b>
                      </div>
                      <div className="testimonial-paragraph1">
                        Ultrices eros in cursus turpis massa tincidunt sem nulla
                        pharetra diam sit amet nisl suscipit adipis.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <TestimonialCard
              mumbai="Mumbai"
              emojionestar="/emojionestar-5.svg"
              emojionestar1="/emojionestar-5.svg"
              emojionestar2="/emojionestar-5.svg"
              emojionestar3="/emojionestar-5.svg"
              emojionestar4="/emojionestar-5.svg"
            />
            <TestimonialCard
              mumbai="Chennai "
              emojionestar="/vector.svg"
              emojionestar1="/vector-1.svg"
              emojionestar2="/vector.svg"
              emojionestar3="/vector-1.svg"
              emojionestar4="/vector.svg"
              propPadding="0px var(--padding-8xl) 0px var(--padding-4xl)"
              propPadding1="0px 0px var(--padding-3xs-1)"
              propPadding2="0px var(--padding-7xs) 0px var(--padding-7xs-8)"
              propDebugCommit="unset"
              propOverflow="unset"
              propOverflow1="unset"
              propOverflow2="unset"
              propOverflow3="unset"
              propOverflow4="unset"
              propDebugCommit1="unset"
            />
          </div>
          <div className="frame-wrapper38">
            <div className="ellipse-parent11">
              <div className="frame-child17" />
              <div className="frame-child18" />
              <div className="frame-child19" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
