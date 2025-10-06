import SparklesIcon from "../icons/SparklesIcon";
import "./EliteSection.css"

export default function EliteSection() {
  return (
    <section className="elite-section">
      {/* Badge */}
      <div className="elite-badge">
        <span style={{marginRight:'16px'}}><SparklesIcon/></span>
        Elite Wellness Network
        <span style={{marginLeft:'16px'}}><SparklesIcon/></span>
      </div>

      {/* Heading */}
      <h2 className="elite-heading">
        Meet Our <span className="highlight">Elite</span> Pros
      </h2>

      {/* Subtext */}
      <p className="elite-subtext">
        Connect with world-class professionals who combine cutting-edge
        expertise with compassionate care, handpicked for their excellence in
        client outcomes and innovative care solutions.
      </p>
    </section>
  );
}
