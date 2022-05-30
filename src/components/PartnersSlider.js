import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import Client from '../Client'

export default function PartnersSlider() {
  const [partners, setPartners] = useState()
  useEffect(() => {
    Client.fetch(
      `*[_type == "partners"]{
      mainImage{
        asset ->{
          _id,
          url
        },
        alt, 
       },
   }`,
    )
      .then((data) => setPartners(data))
      .catch(console.error)
  }, [])
  console.log(partners)
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
          {partners &&
            partners.map((partners, index) => (
              <div className="partners-container" key={index}>
                <div className="partners">
                  <div className="pc">
                    {partners.mainImage && partners.mainImage.asset && (
                      <img
                        src={partners.mainImage.asset.url}
                        className="d-block"
                        alt="..."
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </>
  )
}
