import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ERc20 from './ERc20'
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <section style={{ maxWidth: '1440px', margin: 'auto' }}>
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
                  <Link
                    to="/airdrop"
                    className="text-white text-decoration-none"
                  >
                    <Link to="/airdrop">
                      <button
                        className="btn-primary"
                        style={{
                          marginRight: '40px',
                          padding: '8px',
                          width: '100px',
                        }}
                      >
                        DAPP
                      </button>
                    </Link>
                  </Link>
                  <li className="nav-item-2">
                    <a href="/getaquote">
                      <button className="btn btn-primary" type="button">
                        Get a quote
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </section>

      <section>
        {/* {airdrop ? (
          <div>
            <ERc20 />
          </div>
        ) : (
          ""
        )} */}
      </section>
    </div>
  )
}

export default Navbar
