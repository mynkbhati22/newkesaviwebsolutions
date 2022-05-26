import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import Client from '../Client'

export default function ResponsiveSlider() {
  const [team, setTeam] = useState()

  useEffect(() => {
    Client.fetch(
      `*[_type == "team"]{
      title,
      designation,
      mainImage{
        asset ->{
          _id,
          url
        },
        alt, 
       },
   }`
    )
      .then((data) => setTeam(data))
      .catch(console.error)
  }, [])
  console.log(team);

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
          {team &&
            team.map((team, index) => (
              <div className="image-container" key={index}>
                <div className="images">
                  <div className="ic">
                    {team.mainImage && team.mainImage.asset  && (
                      <img src={team.mainImage.asset.url} className="image1" alt="imglogo" />
                    )}
                  </div>
                  <div className="details">
                    <p className="name">{team.title}</p>
                    <span className="designation">{team.designation}</span>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </>
  )
}
