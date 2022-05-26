import { React, useState, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Client from "../Client";

export default function PortfolioData() {
  const [portfolio, setPortfolio] = useState();

  useEffect(() => {
    Client.fetch(
      `*[_type == "portfolio"]{
       title,
       description,
       mainImage{
         asset ->{
           _id,
           url
         },
         alt, 
        },
       link 
    }`
    )
      .then((data) => setPortfolio(data))
      .catch(console.error);
  }, []);
  
  return (
    <>
      <div className="row gy-4 gx-5 masonry-wrapper">
        {portfolio &&
          portfolio.map((portfolio, index) => (
            <div
              className="portfolioData col-lg-4 col-md-6 grid-items"
              key={index}
            >
              <div className="look-container">
                {portfolio.mainImage && portfolio.mainImage.asset && (
                  <a href={portfolio.link} target="_blank" rel="noreferrer"  className="image">
                    {" "}
                    <img
                      src={portfolio.mainImage.asset.url}
                      className="card-img-top"
                      alt=""
                    />
                    {console.log(portfolio.link)}
                  </a>
                )}

                <div className="card-body">
                  <a href={portfolio.link} className="inside">
                    <p className="look-inside">
                      Look inside{" "}
                      <HiArrowNarrowRight size={24} className="hiarrow" />
                    </p>
                  </a>
                  <a href={portfolio.link} className="project">
                    <h5 className="card-title">{portfolio.title}</h5>
                  </a>
                </div>
              </div>
              <div className="desc-container">
                <p className="card-text">{portfolio.description}</p>
              </div>
            </div>
          ))}{" "}
        ;
      </div>
    </>
  );
}

