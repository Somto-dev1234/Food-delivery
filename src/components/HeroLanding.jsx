import React from "react";
import "./HeroLanding.css";
import heroImg from "../assets/hero.png";

/* ICON PIN */
function IconPin() {
  return (
    <svg width="34" height="34" viewBox="0 0 64 64" fill="none">
      <path
        d="M32 7C22.6 7 15 14.6 15 24c0 14.7 17 33 17 33s17-18.3 17-33c0-9.4-7.6-17-17-17Z"
        stroke="#35c8c8"
        strokeWidth="4"
      />
      <circle cx="32" cy="24" r="8" stroke="#35c8c8" strokeWidth="4" />
    </svg>
  );
}

/* ICON CART */
function IconCart() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 6h15l-2 9H8L6 6Z"
        stroke="#35c8c8"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M6 6 5 3H2"
        stroke="#35c8c8"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="9" cy="20" r="1.6" fill="#35c8c8" />
      <circle cx="18" cy="20" r="1.6" fill="#35c8c8" />
    </svg>
  );
}

/* MAIN COMPONENT */
export default function HeroLanding() {
  return (
    <div className="page">

      {/* TOP BAR */}
      <div className="topBar">
        <div className="topBarInner">

          <span className="topBarText">
            We’re open and available for takeaway & delivery.
          </span>

          <button className="topBarBtn">
            Order Now
          </button>

        </div>
      </div>

      {/* HEADER */}
      <header className="header">
        <div className="headerInner">

          {/* LOGO */}
          <div className="logo">
            <IconPin />
          </div>

          {/* NAVIGATION */}
          <nav className="nav">

            <a href="#hero" className="navLink">
              Home
            </a>

            <a href="#Menu" className="navLink">
              Order
            </a>

            <a href="#company" className="navLink">
              Company
            </a>

            <a href="#faq" className="navLink">
              FAQ
            </a>

            <a href="#contact" className="navLink">
              Contact
            </a>

          </nav>

          {/* CART */}
          <div className="cartBadge">

            <IconCart />

            <span className="cartCount">
              3
            </span>

          </div>

        </div>
      </header>

      {/* HERO */}
      <main id="hero" className="hero">
        <div className="heroInner">

          {/* LEFT SIDE */}
          <section className="heroLeft">

            <h1 className="heroTitle">
              Beautiful food &
              <br />
              takeaway,{" "}
              <span className="heroAccent">
                delivered
              </span>
              <br />
              to your door.
            </h1>

            <p className="heroSubtitle">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s.
            </p>

            <button className="primaryBtn">
              Place an Order
            </button>

            {/* TRUSTPILOT */}
            <div className="trustRow">

              <span className="trustStar">
                ★
              </span>

              <div>

                <div className="trustTop">
                  Trustpilot
                </div>

                <div className="trustBottom">
                  4.8 out of 5 based on 2000+ reviews
                </div>

              </div>

            </div>

          </section>

          {/* RIGHT SIDE */}
          <section className="heroRight">

            <div className="imageFrame">

              <img
                src={heroImg}
                alt="Food delivery"
                className="heroImage"
              />

              {/* APPS */}
              <div className="apps">

                <div className="appBox google">
                  G
                </div>

                <div className="appBox phone">
                  📱
                </div>

                <div className="appBox apple">
                  
                </div>

              </div>

              {/* DOTS */}
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* BLOB */}
              <div className="blob"></div>

            </div>

          </section>

        </div>
      </main>

    </div>
  );
}