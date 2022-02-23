import React from "react";
import Slider from "react-slick";

export default function ResponsiveSlider() {
  const cardInfo = [
    {
      image:
        "https://d33wubrfki0l68.cloudfront.net/54478b2d20a7aba5bf58fd6612422b7c24a330c1/e51c0/img/lalita.jpg",
      name: "Lalita",
      designation: "Director",
    },
    {
      image:
        "https://d33wubrfki0l68.cloudfront.net/1f2d731d5f5d6c25137b154fcf18a109cb627dcb/2775d/img/nikhil.jpg",
      name: "Nikhil Rana",
      designation: "CEO/CTO",
    },
    {
      image:
        "https://d33wubrfki0l68.cloudfront.net/5d498adfe47b77d68c2775ac91768cdf58f6531c/a2e8b/img/mustafa.jpg",
      name: "Mustafa Siddique",
      designation: "Full-Stack Web Developer ",
    },
    // {
    //   image:
    //     "https://d33wubrfki0l68.cloudfront.net/5d498adfe47b77d68c2775ac91768cdf58f6531c/a2e8b/img/mustafa.jpg",
    //   name: "Mustafa Siddique",
    //   designation: "Full-Stack Web Developer ",
    // },
  ];
  const renderCard = (cardInfo, index) => {
    return (
      <div className="image-container" key={index}>
        <div className="images">
          <div className="ic">
            <img src={cardInfo.image} className="image" alt="imglogo" />
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
          {cardInfo.map(renderCard)}
          {console.log(cardInfo.map(renderCard))}
        </Slider>
      </div>
    </>
  );
}
