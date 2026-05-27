import React from "react";
import "./Footer.css";

export default function footer() {
  return (
    <footer id="footer" className="ft">
      <div className="ft-inner">
        <div className="ft-top">
          <div className="ft-left">
            <div className="ft-pin" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 22s7-4.3 7-12a7 7 0 10-14 0c0 7.7 7 12 7 12z"
                  stroke="#20b3bf"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 13a3 3 0 100-6 3 3 0 000 6z"
                  stroke="#20b3bf"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <p className="ft-leftText">
              Takeaway &amp; Delivery template
              <br />
              for small - medium businesses.
            </p>
          </div>

          <div className="ft-cols" aria-label="Footer links">
            <div className="ft-col">
              <h4 className="ft-colTitle">COMPANY</h4>
              <a className="ft-link" href="#hero">Home</a>
              <a className="ft-link" href="#menu">Order</a>
              <a className="ft-link" href="#faq">FAQ</a>
              <a className="ft-link" href="#contact">Contact</a>
            </div>

            <div className="ft-col">
              <h4 className="ft-colTitle">TEMPLATE</h4>
              <a className="ft-link" href="#">Style Guide</a>
              <a className="ft-link" href="#">Changelog</a>
              <a className="ft-link" href="#">Licence</a>
              <a className="ft-link" href="#">Webflow University</a>
            </div>

            <div className="ft-col">
              <h4 className="ft-colTitle">Thexora</h4>
              <a className="ft-link" href="#">More Cloneables</a>
              <a className="ft-link" href="#"> </a>
            </div>
          </div>
        </div>

        <div className="ft-divider" />

        <div className="ft-bottom">
          <div className="ft-built">
            Built by <span className="ft-brand">Somto Egbujor</span> · Powered by{" "}
            <span className="ft-webflow">Thexora</span>
          </div>

          <div className="ft-social" aria-label="Social links">
            <a className="ft-socialBtn" href="#" aria-label="Instagram">
              <span className="ft-socialDot">i</span>
            </a>
            <a className="ft-socialBtn" href="#" aria-label="Twitter">
              <span className="ft-socialDot">t</span>
            </a>
            <a className="ft-socialBtn" href="#" aria-label="YouTube">
              <span className="ft-socialDot">▶</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}