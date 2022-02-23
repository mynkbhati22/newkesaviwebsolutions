import React from "react";
import ResponsiveSlider from "./ResponsiveSlider";
import "./Team.css";

export default function Team() {
  return (
    <>
      <div className="team-container">
        <h3 className="ot">OUR TEAM</h3>
        <p className="ot-para">
          We are the team of young and dynamic <br />
          leaders!
        </p>
        <ResponsiveSlider />
      </div>
    </>
  );
}
