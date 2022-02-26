import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <header className="header fixed-top header-animated">
        <nav className="navbar navbar-expand-lg navbar-light py-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img
                className="logo"
                src="https://d33wubrfki0l68.cloudfront.net/cfaf67e8d5403f3add0475ab49a825edb5c01651/2b845/img/logo.png"
                alt="..."
                width="200"
              />
            </a>
            <button
              className="navbar-toggler navbar-toggler-end"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item-1">
                  <Link to="/portfolio" className="nav-link-1">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item-2">
                  <a href="/getaquote">
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-tf-popup="biwy4Y7X"
                      data-tf-iframe-props="title=My typeform"
                      data-tf-medium="snippet"
                    >
                      Get a quote
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
