import React from "react";
import Slider from "react-slick";

export default function PartnersSlider() {
  const imageInfo = [
    {
      image:
        "https://d33wubrfki0l68.cloudfront.net/1c97ccd4c03b1f8c665665a71a046b45792089cc/f68d4/img/cryptokidfinance.png",
    },
    {
      image:
        "https://d33wubrfki0l68.cloudfront.net/33a9056290beeeeeeb636753a59f060f805a5a2b/25fb1/img/ryoshilogo.svg",
    },
    {
      image:
        "https://d33wubrfki0l68.cloudfront.net/efbe23118b2850e7884abb27022c33a01746cae7/ef202/img/metfx.png",
    },
    {
      image:
        "https://d33wubrfki0l68.cloudfront.net/011c16d8603e39ec3cf26326b1ac031703e89b9f/c6d8f/img/bets.png",
    },
    {
      image:
        "https://d33wubrfki0l68.cloudfront.net/039853c5a4de31e919d1a61f902725ecde9587f6/01ab0/img/badge.png",
    },
    {
      image:
        "https://d33wubrfki0l68.cloudfront.net/84ed87af7addbb8c69afb7f07552fbc4097253a2/c9079/img/bfyc.png",
    },
  ];

  const renderImage = (imageInfo, index) => {
    return (
      <div className="partners-container" key={index}>
        <div className="partners">
          <div className="pc">
            <img src={imageInfo.image} className="d-block" alt="..." />
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="slider-container">
        <Slider
          dots={false}
          slidesToShow={5}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3100}
          responsive={[
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
              },
            },
            {
              breakpoint: 540,
              settings: {
                slidesToShow: 1,   
              },
            },
          ]}
        >
          {imageInfo.map(renderImage)}
          {console.log(imageInfo.map(renderImage))}
        </Slider>
      </div>
    </>
  );
}
