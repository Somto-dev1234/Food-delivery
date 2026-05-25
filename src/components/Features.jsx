import "./Features.css";
import featureImg from "../assets/features.png"; 


export default function Features() {
  return (
    <section className="featuresSection">
      <div className="featuresContainer">
        <div className="featuresText">
          <h2 className="featuresTitle">
            Call our store and
            <br />
            takeaway when it
            <br />
            suits you best.
          </h2>

          <p className="featuresDesc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500.
          </p>

          <button className="featuresBtn" type="button">
            Ph. +2349034114179
          </button>
        </div>

        <div className="featuresMedia">
          <img
            className="featuresImage"
            src={featureImg}
            alt="Store interior"
          />

          <div className="featuresBadge" aria-hidden="true">
           
          </div>
        </div>
      </div>
    </section>
  );
}