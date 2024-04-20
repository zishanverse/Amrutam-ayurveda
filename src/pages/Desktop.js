import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import Desktop2 from "../components/Desktop2";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Desktop1 from "../components/Desktop1";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop-76">
      <section className="desktop-24-wrapper">
        <div className="desktop-24">
          <FrameComponent10 />
          <FrameComponent9 />
        </div>
      </section>
      <section className="desktop-76-inner">
        <div className="frame-parent">
          <div className="frame-wrapper">
            <div className="frame-group">
              <div className="rectangle-parent">
                <div className="frame-child" />
                <h1 className="discover-ayurvedas-magic-container">
                  <p className="discover-ayurvedas-magic">{`Discover Ayurveda’s magic with us `}</p>
                </h1>
              </div>
              <div className="ayurvedic-treatment-aims-to-ba-wrapper">
                <div className="ayurvedic-treatment-aims-container">
                  <p className="ayurvedic-treatment-aims">{`Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality. It's like a journey to better health using ancient wisdom, `}</p>
                  <p className="a-totally-effective">{`a totally effective approach for a better life. `}</p>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent7 />
          <FrameComponent6 />
          <FrameComponent5 />
        </div>
      </section>
      <Desktop2 />
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      <section className="desktop-76-child">
        <div className="frame-container">
          <FrameComponent1 />
          <FrameComponent />
        </div>
      </section>
      <Desktop1 />
      <section className="frame-section">
        <div className="rectangle-group">
          <footer className="frame-item" />
          <div className="information">Information</div>
          <div className="about-us-terms-container">
            <p className="about-us">About Us</p>
            <p className="terms-and-conditions">Terms and Conditions</p>
            <p className="privacy-policy">Privacy Policy</p>
            <p className="privacy-policy-for">Privacy Policy for Mobile Apps</p>
            <p className="shipping-and-returns">Shipping and Returns Policy</p>
            <p className="international-delivery">International Delivery</p>
            <p className="for-businesses-hotels">
              For Businesses, Hotels and Resorts
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Desktop;
