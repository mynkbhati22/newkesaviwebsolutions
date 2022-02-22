import React from "react";
import "./Testimonials.css";
import { IoStarSharp } from "react-icons/io5";

function Testimonials() {
  return (
    <>
      <div className="testimonials-container">
        <div className="testimonials">TESTIMONIALS</div>
        <p className="testi-1">What our clients say about us.</p>
        <p className="testi-2">
          We value our clients and their feedback. We at KWS are forever
          striving to deliver perfection.
        </p>
        <a
          href="https://www.trustpilot.com/evaluate/kesaviweb.com?"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <button className="review">
            Review us on{" "}
            <IoStarSharp size={15} color="#338b62" className="star" />{" "}
            TrustPilot
          </button>{" "}
        </a>
      </div>

      <div className="row align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="swiper testimonials-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide mb-4 pb-2">
                <figure>
                  <blockquote className="blockquote border-0 p-0 mb-4 pb-2">
                    <p className="blockquote-text text-muted fs-6 p-4">
                      {" "}
                      <span className="d-inline-block p-3">
                        Excellent guidance for all my projects! Whenever I get
                        stuck I come back to them and they always have a
                        solution ready. Great company to partner with!
                      </span>
                    </p>
                  </blockquote>
                  <figcaption>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="rounded-circle shadow-sm"
                          src="https://d33wubrfki0l68.cloudfront.net/fd54e625c2defc84754dbbd3bbfd30c37d36ebfb/eb632/img/alvin.jpg"
                          alt=""
                          width="50"
                        />
                      </div>
                      <div className="ms-3">
                        <h5 className="text-dark mb-0">Alvin</h5>
                        <cite className="fst-normal text-gray">
                          Owner & CEO of Multiple Crypto Projects
                        </cite>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="swiper-slide mb-4 pb-2">
                <figure>
                  <blockquote className="blockquote border-0 p-0 mb-4 pb-2">
                    <p className="blockquote-text text-muted fs-6 p-4">
                      {" "}
                      <span className="d-inline-block p-3">
                        Most reliable! Been working with them on my last three
                        projects. Professional attitude and on time delivery of
                        services. Will do many projects with them for sure!
                      </span>
                    </p>
                  </blockquote>
                  <figcaption>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="rounded-circle shadow-sm"
                          src="https://d33wubrfki0l68.cloudfront.net/33a9056290beeeeeeb636753a59f060f805a5a2b/25fb1/img/ryoshilogo.svg"
                          alt=""
                          width="50"
                        />
                      </div>
                      <div className="ms-3">
                        <h5 className="text-dark mb-0">Toshiro</h5>
                        <cite className="fst-normal text-gray">
                          Owner of Multiple Crypto Projects
                        </cite>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="swiper-slide mb-4 pb-2">
                <figure>
                  <blockquote className="blockquote border-0 p-0 mb-4 pb-2">
                    <p className="blockquote-text text-muted fs-6 p-4">
                      {" "}
                      <span className="d-inline-block p-3">
                        Best services to sell in Crypto space. I can sell only
                        what I can trust. My clients are happy with KWS services
                        and I could never be happier!
                      </span>
                    </p>
                  </blockquote>
                  <figcaption>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="rounded-circle shadow-sm"
                          src="https://d33wubrfki0l68.cloudfront.net/1c97ccd4c03b1f8c665665a71a046b45792089cc/f68d4/img/cryptokidfinance.png"
                          alt=""
                          width="50"
                        />
                      </div>
                      <div className="ms-3">
                        <h5 className="text-dark mb-0">Crypto Kid Finance</h5>
                        <cite className="fst-normal text-gray">
                          Crypto Marketer &amp; Promoter
                        </cite>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="swiper-pagination text-start"></div>
          </div>
        </div>
      </div>

      {/* <div className="detail container">
        <div className="slider-content">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="swiper-pagination text-start swiper-pagination-bullets swiper-pagination-horizontal">
              <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
              <span className="swiper-pagination-bullet"></span>
              <span className="swiper-pagination-bullet"></span>
            </div>
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="square-container">
                  <div className="box-2">
                    {" "}
                    Best services to sell in Crypto space. I can sell only what
                    I can trust.
                    <br /> My clients are happy with KWS services and I could
                    never be happier!
                  </div>
                  <div className="container-img">
                    <img
                      src="https://d33wubrfki0l68.cloudfront.net/fd54e625c2defc84754dbbd3bbfd30c37d36ebfb/eb632/img/alvin.jpg"
                      className="d-block-M"
                      alt="..."
                    />
                    <div className="names-container">
                      <h3 className="alvin">Alvin</h3>
                      <p className="alvin-des">
                        Owner & CEO of Multiple Crypto Projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="square-container">
                  <div className="box-2">
                    {" "}
                    Excellent guidance for all my projects! Whenever I get stuck
                    I come <br /> back to them and they always have a solution
                    ready. Great company to partner with!
                  </div>
                  <div className="container-img">
                    <img
                      src="https://d33wubrfki0l68.cloudfront.net/33a9056290beeeeeeb636753a59f060f805a5a2b/25fb1/img/ryoshilogo.svg"
                      className="d-block w-100"
                      alt="..."
                    />
                    <div className="names-container">
                      <h3 className="alvin">Toshiro</h3>
                      <p className="alvin-des">
                        Owner of Multiple Crypto Projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="square-container">
                  <div className="box-2">
                    {" "}
                    Most reliable! Been working with them on my last three
                    projects. <br />
                    Professional attitude and on time delivery of services. Will
                    do many projects with them for sure!
                  </div>
                  <div className="container-img">
                    <img
                      src="https://d33wubrfki0l68.cloudfront.net/1c97ccd4c03b1f8c665665a71a046b45792089cc/f68d4/img/cryptokidfinance.png"
                      className="d-block w-100"
                      alt="..."
                    />
                    <div className="names-container">
                      <h3 className="alvin">Crypto Kid Finance</h3>
                      <p className="alvin-des">Crypto Marketer & Promoter</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev-1"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next-1"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="about-contanier">
            <div className="box-content">
              <div className="box-3-holder">
                <div className="box-3">
                  <div className="b3-content">
                    <img
                      src="https://d33wubrfki0l68.cloudfront.net/db29dd2093d1b951dbdaf80942259dc918f76e5e/ba379/img/project.png"
                      alt=""
                      className="b3-mg"
                    />
                    <h3 className="b3">60+</h3>
                    <p className="b3p">Delivered Projects</p>
                  </div>
                </div>
                <div className="box-3-a">
                  <div className="b3-content">
                    <img
                      src="https://d33wubrfki0l68.cloudfront.net/25cb9430ad9e01fde4f9e83d42534c730878c4d5/7a9f6/img/team.png"
                      alt=""
                      className="b3-mg"
                    />
                    <h3 className="b3">08</h3>
                    <p className="b3p">Team Members</p>
                  </div>
                </div>
              </div>
              <div className="box-4-holder">
                <div className="box-4">
                  <div className="b3-content">
                    <img
                      src="https://d33wubrfki0l68.cloudfront.net/8cd8ba1c95fd8e1a6039713b880cdbc60717da66/fc69a/img/global.png"
                      alt=""
                      className="b3-mg"
                    />
                    <h3 className="b3">20+</h3>
                    <p className="b3p">Global, satisfied clients</p>
                  </div>
                </div>
                <div className="box-4-a">
                  <div className="b3-content">
                    <img
                      src="https://d33wubrfki0l68.cloudfront.net/2f419f8fb47213473f6c017ffbde22200d7e3d34/79e80/img/coffee.png"
                      alt=""
                      className="b3-mg"
                    />
                    <h3 className="b3">529+</h3>
                    <p className="b3p">Cups of Coffee Consumed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Testimonials;
