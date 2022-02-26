import React from "react";
import "./Pricing.css";

function Pricing() {
  return (
    <>
      <div className="pricing-container">
        <div className="price-heading">PRICING</div>
        <h4 className="nhc">No hidden charge, Extremely Affordable</h4>
        <p className="nhc-1">
          Cost of services depend on specific solutions designed to match your
          needs, here we are <br />
          giving an estiamte only and the final cost may differ.
        </p>
        <a href="/getaquote">
          {" "}
          <button className="gaq-2">Get Instant Quote</button>{" "}
        </a>
      </div>
    </>
  );
}

export default Pricing;
