import React from "react";
import "./HowITWorks.css";
import Image from "../assets/image.svg";

export default function HowITWorks() {
  return (
    <div className="hss-page">

      <section className="hss-section hss-hero">
        <div className="hss-inner">

          <div className="hss-text">
            <h1 className="hss-title">
              The home of <br />
              <span className="hss-accent">
                fresh products
              </span>
            </h1>

            <p className="hss-sub">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>

            <button className="hss-btn">
              Learn about us
            </button>
          </div>

          <div className="hss-visual">

            <div className="hss-phone">
              <img
                className="hss-phoneImg"
                src={Image}
                alt="Food delivery"
              />

              <div className="hss-heartBubble">
                ♡
              </div>
            </div>

            <div className="hss-rightOverlayCard">
              <img
                className="hss-rightFood"
                src={Image}
                alt="Food"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}