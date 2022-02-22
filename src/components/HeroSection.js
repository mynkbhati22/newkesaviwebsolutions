import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import icon from "./image/icon-4.gif";

import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <section className="hero hero-home with-pattern d-flex align-items-center py-5">
        <div className="container py-5 mt-5">
          <div className="row align-items-center">
            <div className="col-md-6 mb-5 mb-md-0">
              <h1 className="mb-3">
                Leading <span className="bd">Blockchain Development </span>
                Services
              </h1>
              <p className="text-muted">
                One-stop solution for all your blockchain development needs.
                Smart contracts (ERC-20/ERC-721), DAPPs, ICO/IDOs, Launchpads,
                and more. Customised Solutions for every need.
              </p>
              <div className="d-flex ms-0">
                <a href="http://" className="video-btn">
                  <img className="gif" src={icon} alt="gif" />{" "}
                </a>

                <div className="prent mx-3">
                  <span className="watch d-block">Watch</span>
                  <strong className="introvideo">Intro Video</strong>
                </div>
              </div>
            </div>
            <div className="col-md-5 ml-auto">
              <div className="img-gradient img-gradient-right">
                <img
                  className="img-fluid shadow rounded"
                  src="https://d33wubrfki0l68.cloudfront.net/e6edc5edff628d7c6420a4162a67430ca6f81824/59bfc/img/defidev.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/1c97ccd4c03b1f8c665665a71a046b45792089cc/f68d4/img/cryptokidfinance.png"
              className="d-block w-100"
              alt="..."
            />
            <img
              src="https://d33wubrfki0l68.cloudfront.net/33a9056290beeeeeeb636753a59f060f805a5a2b/25fb1/img/ryoshilogo.svg"
              className="d-block w-100"
              alt="..."
            />
            <img
              src="https://d33wubrfki0l68.cloudfront.net/efbe23118b2850e7884abb27022c33a01746cae7/ef202/img/metfx.png"
              className="d-block w-100"
              alt="..."
            />
            <img
              src="https://d33wubrfki0l68.cloudfront.net/011c16d8603e39ec3cf26326b1ac031703e89b9f/c6d8f/img/bets.png"
              className="d-block w-100"
              alt="..."
            />
            <img
              src="https://d33wubrfki0l68.cloudfront.net/039853c5a4de31e919d1a61f902725ecde9587f6/01ab0/img/badge.png"
              className="d-block w-100"
              alt="..."
            />
            <img
              src="https://d33wubrfki0l68.cloudfront.net/84ed87af7addbb8c69afb7f07552fbc4097253a2/c9079/img/bfyc.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/1c97ccd4c03b1f8c665665a71a046b45792089cc/f68d4/img/cryptokidfinance.png"
              className="d-block w-100"
              alt="..."
            />
            <img
              src="https://d33wubrfki0l68.cloudfront.net/33a9056290beeeeeeb636753a59f060f805a5a2b/25fb1/img/ryoshilogo.svg"
              className="d-block w-100"
              alt="..."
            />
            <img
              src="https://d33wubrfki0l68.cloudfront.net/efbe23118b2850e7884abb27022c33a01746cae7/ef202/img/metfx.png"
              className="d-block w-100"
              alt="..."
            />
            <img
              src="https://d33wubrfki0l68.cloudfront.net/011c16d8603e39ec3cf26326b1ac031703e89b9f/c6d8f/img/bets.png"
              className="d-block w-100"
              alt="..."
            />
            <img
              src="https://d33wubrfki0l68.cloudfront.net/039853c5a4de31e919d1a61f902725ecde9587f6/01ab0/img/badge.png"
              className="d-block w-100"
              alt="..."
            />
            <img
              src="https://d33wubrfki0l68.cloudfront.net/84ed87af7addbb8c69afb7f07552fbc4097253a2/c9079/img/bfyc.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="dynamic-container">
        <div className="dynamic-heading">
          <div className="dynamic-text">
            <b className="heading">
              KWS has a dynamic team of blockchain, frontend & backend
              developers.
            </b>
            <p className="dynamic-para">
              We take care of all your token launch needs. Creation of UI/UX and
              landing page for your token, Smart Contract, ICO/IDO launchpad,
              NFT Minting & Marketplace, various DAPPs, and more.
            </p>
          </div>
        </div>
        <div className="dynamic-flex">
          <div className="image-content">
            <FaCheckCircle size={45} className="fac" color="#c4e8ff" />
          </div>
          <div className="text-content">
            <h4 className="dynamic-heading-2">
              <b>100% Legit</b>
            </h4>
            <p className="dynamic-para-2">
              {" "}
              The volume of work we deliver each month speaks for itself. We
              have delivered high quality DeFi services.
            </p>
          </div>
          <div className="image-content">
            <FaCheckCircle size={45} className="fac" color="#c4e8ff" />
          </div>
          <div className="text-cotent">
            <h4 className="dynamic-heading-2">
              <b>Escrow Payments</b>
            </h4>
            <p className="dynamic-para-2">
              {" "}
              We believe in transparency. We offer escrow payment options to our
              clients.
            </p>
          </div>
          <div className="image-content">
            <FaCheckCircle size={45} className="fac" color="#c4e8ff" />
          </div>
          <div className="text-cotent">
            <h4 className="dynamic-heading-2">
              <b>Consultation & Support</b>
            </h4>
            <p className="dynamic-para-2">
              {" "}
              Our team of experts will guide you throughout the life of your
              projects.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
