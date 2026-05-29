import { useState } from "react";
import faqImg from "../assets/faq.png";
import "./FAQ.css";

export default function FAQ() {
  const [showFAQ, setShowFAQ] = useState(false);

  return (
    <section id="faq" className="faqSection">
      <div className="faqContainer">
        <div className="faqLeft">
          <img className="faqImage" src={faqImg} alt="FAQ illustration" />
        </div>

        <div className="faqRight">
          <h2 className="faqHeadline">
            Order online with our simple checkout.
          </h2>

          <p className="faqText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500.
          </p>

          <button
            className="faqButton"
            type="button"
            onClick={() => setShowFAQ(!showFAQ)}
          >
            {showFAQ ? "Hide FAQ" : "See our FAQ"}
          </button>

          {showFAQ && (
            <div className="faqBox">
              <div className="faqItem">
                <h4>How do I place an order?</h4>
                <p>
                  Simply browse our menu, add items to your cart, and proceed
                  to checkout.
                </p>
              </div>

              <div className="faqItem">
                <h4>How long does delivery take?</h4>
                <p>
                  Delivery usually takes between 20–45 minutes depending on
                  your location.
                </p>
              </div>

              <div className="faqItem">
                <h4>Can I track my order?</h4>
                <p>
                  Yes, you can track your order in real time after checkout.
                </p>
              </div>

              <div className="faqItem">
                <h4>What payment methods do you accept?</h4>
                <p>
                  We accept cards, bank transfer, and mobile wallet payments.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}