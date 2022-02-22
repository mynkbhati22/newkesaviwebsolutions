import React from "react";
import director from "./image/director.png";
import nikhil from "./image/nikhil image.jpg";
import mustafa from "./image/mustafa-s.jpg";
import "./Team.css";

export default function Team() {
  return (
    <>
      <div className="our-team">
        <div className="ot">
          <div className="ot-1">OUR TEAM</div>
          <p className="ot-para">
            We are a team of young and dynamic <br />
            leaders!
          </p>
        </div>
        <div className="cards d-flex align-items-center justify-content-around">
          <div className="card">
            <img src={director} className="images" alt="imglogo" />
            <div className="card-body">
              <h5 className="card-title">Lalita</h5>
              <p className="card-text">Director</p>
            </div>
          </div>
          <div className="card">
            <img src={nikhil} className="images" alt="imglogo" />
            <div className="card-body">
              <h5 className="card-title">Nikhil Rana</h5>
              <p className="card-text">CEO&CTO</p>
            </div>
          </div>
          <div className="card">
            <img src={mustafa} className="images" alt="imglogo" />
            <div className="card-body">
              <h5 className="card-title">Mustafa Siddique</h5>
              <p className="card-text">Full-Stack Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
