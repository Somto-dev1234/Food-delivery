import React, { useState, useEffect } from "react";
import "./HeroLanding.css";
import heroImg from "../assets/hero.png";
import { useCart } from "../context/CartContext";
import CartSidebar from "./CartSidebar";

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
      <path d="M6 6h15l-2 9H8L6 6Z" stroke="#35c8c8" strokeWidth="2" />
      <circle cx="9" cy="20" r="1.6" fill="#35c8c8" />
      <circle cx="18" cy="20" r="1.6" fill="#35c8c8" />
    </svg>
  );
}

export default function HeroLanding() {
  const { cart } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  const totalQty = cart.reduce((sum, item) => sum + (item.qty || 0), 0);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMenuOpen(false);
  };

  useEffect(() => {
    const sections = ["hero", "menu", "faq", "contact"];

    const handleScroll = () => {
      let current = "hero";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) current = id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close menu if user clicks outside (mobile)
  useEffect(() => {
    const onDown = (e) => {
      const target = e.target;
      const navEl = document.querySelector(".nav");
      const hamburgerEl = document.querySelector(".hamburger");
      if (!navEl || !hamburgerEl) return;

      const clickedInsideNav = navEl.contains(target);
      const clickedHamburger = hamburgerEl.contains(target);

      if (!clickedInsideNav && !clickedHamburger) setMenuOpen(false);
    };

    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, []);

  return (
    <div className="page">
      {/* TOP BAR */}
      <div className="topBar">
        <div className="topBarInner">
          <span className="topBarText">
            We’re open and available for takeaway & delivery.
          </span>

          <button className="topBarBtn" onClick={() => scrollTo("menu")}>
            Order Now
          </button>
        </div>
      </div>

      {/* HEADER */}
      
      <header className="header">
        {menuOpen && (
  <div
    className="overlay"
    onClick={() => setMenuOpen(false)}
  />
)}
        <div className="headerInner">
          {/* LEFT */}
          <div className="logo">
            <IconPin />
          </div>

          {/* NAV */}
          {/* NOTE: this nav gets .open on mobile */}
          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <span
              role="button"
              tabIndex={0}
              onClick={() => scrollTo("hero")}
              onKeyDown={(e) => e.key === "Enter" && scrollTo("hero")}
              className={
                activeSection === "hero" ? "active navLink" : "navLink"
              }
            >
              Home
            </span>

            <span
              role="button"
              tabIndex={0}
              onClick={() => scrollTo("menu")}
              onKeyDown={(e) => e.key === "Enter" && scrollTo("menu")}
              className={
                activeSection === "menu" ? "active navLink" : "navLink"
              }
            >
              Order
            </span>

            <span
              role="button"
              tabIndex={0}
              onClick={() => scrollTo("faq")}
              onKeyDown={(e) => e.key === "Enter" && scrollTo("faq")}
              className={
                activeSection === "faq" ? "active navLink" : "navLink"
              }
            >
              FAQ
            </span>

            <span
              role="button"
              tabIndex={0}
              onClick={() => scrollTo("contact")}
              onKeyDown={(e) => e.key === "Enter" && scrollTo("contact")}
              className={
                activeSection === "contact" ? "active navLink" : "navLink"
              }
            >
              Contact
            </span>
          </nav>

          {/* RIGHT SIDE (CART + HAMBURGER) */}
          <div className="rightActions">
            <div
              className="cartBadge"
              onClick={() => setCartOpen(true)}
              role="button"
              tabIndex={0}
            >
              <IconCart />
              <span className="cartCount">{totalQty}</span>
            </div>

            {/* NOTE: button toggles .open on hamburger (for X animation) */}
            <button
              className={`hamburger ${menuOpen ? "open" : ""}`}
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main id="hero" className="hero">
        <div className="heroInner">
          <section className="heroLeft">
            <h1 className="heroTitle">
              Beautiful food &<br />
              takeaway,{" "}
              <span className="heroAccent">delivered</span>
              <br /> to your door.
            </h1>

            <p className="heroSubtitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <button
              className="primaryBtn"
              onClick={() => scrollTo("menu")}
            >
              Place an Order
            </button>
          </section>

          <section className="heroRight">
            <div className="imageFrame">
              <img
                src={heroImg}
                alt="Food delivery"
                className="heroImage"
              />
            </div>
          </section>
        </div>
      </main>

      {/* CART */}
      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}