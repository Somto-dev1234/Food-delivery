import React from "react";
import "./CTA.css";
import step1 from "../assets/step1.jpg";
import step2 from "../assets/step2.jpg";
import step3 from "../assets/step3.jpg";

export default function CTA() {
  return (
    <section className="ss-section ss-cta">
      <div className="ss-inner ss-ctaInner">
        <h2 className="ss-ctaTitle">How it works.</h2>

        <div className="ss-stepsRow">
          <div className="ss-step">
            <div className="ss-stepCircle">
              <img
                className="ss-stepImg"
                src={step1}
                alt="Menu items"
              />
              <div className="ss-stepBadge">1</div>
            </div>

            <div className="ss-stepText">
              <h3 className="ss-stepHeading">Adapt your menu items</h3>
              <p className="ss-stepPara">
                Easily adapt your menu using the webflow CMS and allow
                customers to browse your items.
              </p>
            </div>
          </div>

          <div className="ss-connector" aria-hidden="true" />

          <div className="ss-step">
            <div className="ss-stepCircle ss-stepCircleBlue">
              <img
                className="ss-stepImg"
                src={step2}
                alt="Accept online orders"
              />

              <div className="ss-stepBrandG">G</div>
              <div className="ss-stepApple"></div>
            </div>

            <div className="ss-stepText">
              <h3 className="ss-stepHeading">
                Accept online orders &amp; takeout
              </h3>
              <p className="ss-stepPara">
                Let your customers order and pay via the powerful ecommerce
                system, or simply let them call your store.
              </p>
            </div>
          </div>

          <div className="ss-connector" aria-hidden="true" />

          <div className="ss-step">
            <div className="ss-stepCircle ss-stepCirclePerson">
              <img
                className="ss-stepImg"
                src={step3}
                alt="Manage delivery or takeout"
              />

              <div className="ss-stepAvatarDot" aria-hidden="true" />
            </div>

            <div className="ss-stepText">
              <h3 className="ss-stepHeading">
                Manage delivery or takeout
              </h3>
              <p className="ss-stepPara">
                Manage your own logistics and take orders simply through the
                ecommerce system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}