import React, { useState } from "react";
import check_icon from "../images/icon-check.svg";

const Pricing = () => {
  const [range, setRange] = useState("50");
  const widthStyle = {
    "--sliderWidth": `${range}%`,
  };

  const setSliderRange = (value) => {
    return setRange(value);
  };

  return (
    <>
      <section className="pricing">
        <div className="top-section">
          <div className="stat">
            <p>100K PAGEVIEWS</p>
            <div className="amount">
              <h1>$16.00</h1>
              <p>/month</p>
            </div>
            <div className="stat-slider">
              <input
                type="range"
                value={range}
                min="1"
                max="100"
                className="slider-bar"
                onInput={(e) => setSliderRange(e.target.value)}
                style={widthStyle}
              />
            </div>
          </div>
          <div className="billing">
            <p>Monthly Billing</p>
            <label className="switch">
              <input type="checkbox"></input>
              <span className="slider"></span>
            </label>
            <p>Yearly Billing</p>
            <p className="discount">
              <span className="span1">-</span>25%
              <span className="span2">discount</span>
            </p>
          </div>
        </div>
        <div className="bottom-section">
          <div className="features">
            <p>
              <img src={check_icon} className="check-icon" alt="check mark." />
              Unlimited websites
            </p>
            <p>
              <img src={check_icon} className="check-icon" alt="check mark." />
              100% data ownership
            </p>
            <p>
              <img src={check_icon} className="check-icon" alt="check mark." />
              Email reports
            </p>
          </div>
          <button type="button">Start my trial</button>
        </div>
      </section>
    </>
  );
};

export default Pricing;
