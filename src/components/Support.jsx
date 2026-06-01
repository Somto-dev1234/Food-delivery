// Support.jsx

import React from "react";
import "./Support.css";

import supportImg from "../assets/support.jpg";

export default function Support() {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu");

    if (menuSection) {
      menuSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="support-section">
      <div className="support-container">

        {/* LEFT IMAGE */}
        <div className="support-image">
          <img src={supportImg} alt="Food" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="support-content">
          <h2>
            Support <span>good food</span>
            <br />
            and local business.
          </h2>

          <button onClick={scrollToMenu}>
            Order Now
          </button>

          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>
          <div className="shape shape4"></div>
          <div className="shape shape5"></div>
        </div>

      </div>
    </section>
  );
}