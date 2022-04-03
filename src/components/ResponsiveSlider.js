import React from "react";
import Slider from "react-slick";
import director from "./image/director.png";
import nikhil from "./image/nikhil image.jpg";
import mustafa from "./image/mustafa-s.jpg";
import Mayank from "./image/Mayank.jpg";

export default function ResponsiveSlider() {
  const cardInfo = [
    {
      img: [director],
      name: "Lalita",
      designation: "Director",
    },
    {
      img: [nikhil],
      name: "Nikhil Rana",
      designation: "CEO/CTO",
    },
    {
      img: [mustafa],
      name: "Mustafa Siddique",
      designation: "Full-Stack Web Developer ",
    },
    {
      img: [Mayank],
      name: "Mayank Bhati",
      designation: "Trainee",
    },
  ];
  const renderCard = (cardInfo, index) => {
    return (
      <div className="image-container" key={index}>
        <div className="images">
          <div className="ic">
            <img src={cardInfo.img} className="image1" alt="imglogo" />
          </div>
          <div className="details">
            <p className="name">{cardInfo.name}</p>
            <span className="designation">{cardInfo.designation}</span>
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
          slidesToShow={3}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3000}
          responsive={[
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          {cardInfo.map(renderCard)}
          {console.log(cardInfo.map(renderCard))}
        </Slider>
      </div>
    </>
  );
}
