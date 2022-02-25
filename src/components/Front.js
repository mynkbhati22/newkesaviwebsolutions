import React from "react";
import { Link } from "react-router-dom";
import "./Front.css";

function Front() {
  return (
    <>
      <div className="front-row">
        <div className="front-container-1">
          <div className="divfc-content">
            <div className="fc-line">
              {" "}
              <div className="number">1</div>
              <p className="fd">FRONTEND DEVELOPMENT</p>
              <h3 className="fl">
                {" "}
                UNIQUE USER EXPERIENCE FOR YOUR <br />
                CUSTOMERS
              </h3>
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

          <div className="img-part">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/7cc40332fab6af76efed3e8143076688301178c6/4845b/img/website-dev.jpg"
              alt=""
              className="computer"
            />
          </div>
        </div>
        <div className="front-container-2">
          <div className="img-part">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/ed1e9040904943141e19b0b6584669deb498981c/74703/img/backend.jpg"
              alt=""
              className="computer-2"
            />
          </div>
          <div className="content-2">
            <div className="divfc-content">
              <div className="fc-line">
                {" "}
                <div className="number">2</div>
                <p className="fd">BACKEND/IPFS DEVELOPMENT</p>
                <h3 className="fl">
                  {" "}
                  DATA INTENSIVE SOLUTIONS FOR <br />
                  YOUR BUSINESS NEEDS
                </h3>
              </div>
            </div>
            <p className="lin-2">
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
