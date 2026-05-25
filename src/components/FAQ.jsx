import faqImg from "../assets/faq.png";
import "./FAQ.css";

export default function FAQ() {
  return (
    
    <section className="faqSection">
      <div className="faqContainer">
        <div className="faqLeft">
          <img className="faqImage" src={faqImg} alt="FAQ illustration" />
        </div>

        <div className="faqRight">
          <h2 className="faqHeadline">Order online with our simple checkout.</h2>

          <p className="faqText">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
          </p>

          <button className="faqButton" type="button">
            See our FAQ
          </button>
        </div>
      </div>
    </section>
  );
}