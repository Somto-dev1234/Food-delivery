import React from "react";
import "./HowITWorks.css";
import Image from "../assets/image.svg";
import { useNavigate } from "react-router-dom";

export default function HowITWorks() {
  const navigate = useNavigate();

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

            {/* ✅ FIXED BUTTON */}
            <button
              className="hss-btn"
              onClick={() => navigate("/")}
            >
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