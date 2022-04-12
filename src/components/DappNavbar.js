import React from "react";
import { AiTwotoneFire } from "react-icons/ai";
import { SiBinance, SiEthereum } from "react-icons/si";
import { BiInfinite } from "react-icons/bi";
import "./DappNavbar.css";

export default function DappNavbar() {
  return (
    <div>
      <section>
        <div className="sidebar">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/airdrop">Airdrop</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/">Create Token</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <a href="/createToken/ETH">ETH</a>
              </li>
            </ol>
          </nav>
          <div className="sidebar-inner d-flex flex-column">
            <div className="px-4 py-3">
              <a href="/">
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/cfaf67e8d5403f3add0475ab49a825edb5c01651/2b845/img/logo.png"
                  alt=""
                  width="180"
                  style={{ marginBottom: "50px" }}
                />
              </a>
            </div>
            <div className="sidebar-menu-holder flex-grow-1">
              <ul className="sidebar-menu list-unstyled">
                <li className="mb-4 pb-1">
                  <a
                    className="sidebar-link h6 text-uppercase letter-spacing-2 fw-bold text-sm active text-decoration-none"
                    href="/"
                    style={{
                      color: "58B3EF",
                      marginLeft: "20px",
                    }}
                  >
                    Back to Homepage
                  </a>
                </li>
                <li className="mb-4 pb-1">
                  <a
                    className="sidebar-link h6 text-uppercase letter-spacing-2 fw-bold text-sm active text-decoration-none"
                    href="/tutorial"
                    style={{
                      color: "58B3EF",
                      marginLeft: "40px",
                    }}
                  >
                    Tutorial
                  </a>
                </li>
                <li className="mb-4 pb-1">
                  <a
                    className="sidebar-link h6 text-uppercase letter-spacing-2 fw-bold text-sm active text-decoration-none"
                    href="/faq"
                    style={{
                      color: "58B3EF",
                      marginLeft: "50px",
                    }}
                  >
                    FAq
                  </a>
                </li>
                <div className="dropdown">
                  <a
                    className="sidebar-link h6 text-uppercase letter-spacing-2 fw-bold text-sm active text-decoration-none dropdown-toggle"
                    href="/"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      color: "58B3EF",
                      marginLeft: "20px",
                    }}
                  >
                    Create Token <AiTwotoneFire />
                  </a>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="/createToken/ETH">
                        <SiEthereum /> ETH
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/createToken/BSC">
                        <SiBinance /> BSC
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/createToken/Matic">
                        <BiInfinite /> MATIC
                      </a>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
            <div className="px-4 py-5">
              <ul className="list-inline list-social mb-3">
                <li className="list-inline-item">
                  <a
                    className="reset-anchor"
                    href="https://www.facebook.com/Kesaviweb/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="reset-anchor"
                    href="https://twitter.com/KesaviS"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="reset-anchor"
                    href="https://www.youtube.com/channel/UCDRT0QQa2St9IL7OVhEs9EA"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
              <p>&copy; 2017-22 Kesavi Web Solutions | All Rights Reserved</p>
              <input
                type="image"
                src="https://www.coinpayments.net/images/pub/buynow-blue2.png"
                alt="Buy Now with CoinPayments.net"
                width="200px"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
