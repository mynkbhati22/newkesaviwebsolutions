import React from "react";
import { Link } from "react-router-dom";
import "./Front.css";

function Front() {
  return (
    <>
      <div className="front-container">
        <div className="divfc-content">
          <p className="number">1</p>

          <div className="fc-heading">FRONTEND DEVELOPMENT</div>
          <div className="line">
            UNIQUE USER EXPERIENCE FOR YOUR <br />
            CUSTOMERS
          </div>

          <p className="lin">
            We at KWS build uniqe UI/UX for your website/app users to help{" "}
            <br />
            create your brand/business identity.
          </p>
          <Link to="/portfolio">
            <button className="bp">Browse Portfolio</button>
          </Link>
        </div>
        <div className="front-container-2">
          <div className="img-part">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/ed1e9040904943141e19b0b6584669deb498981c/74703/img/backend.jpg"
              alt=""
              className="computer"
            />
          </div>
        </div>
      </div>
      <div className="front-container-3">
        <div className="img-part">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/7cc40332fab6af76efed3e8143076688301178c6/4845b/img/website-dev.jpg"
            alt=""
            className="computer-3"
          />
        </div>
        <div className="content-3">
          <div
            className="divfc-content-1
          "
          >
            <p className="number">2</p>
            <div className="fc-heading-1">BACKEND/IPFS DEVELOPMENT</div>
            <div className="line-1">
              DATA INTENSIVE SOLUTIONS FOR <br />
              YOUR BUSINESS NEEDS
            </div>
            <p className="lin">
              Blockchains are not an ideal place to store a large chunk of data.
              <br />
              We at KWS can build customized solutions for off-chain storage of
              your data.
            </p>

            <Link to="/getaquote">
                <button className="gaq-2">Get Instant Quote</button>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Front;
