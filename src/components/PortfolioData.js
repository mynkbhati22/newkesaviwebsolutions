import { React, useState, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Client from "../Client";

export default function PortfolioData() {
  const [portfolio, setPortfolio] = useState(null);

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
              className="portfolioData col-lg-4 col-md-6 grid-item"
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

// import { HiArrowNarrowRight } from "react-icons/hi";

// export default function PortfolioData() {
//   const protfolioInfo = [
//     {
//       image: "https://images.alphacoders.com/100/thumb-1920-1008709.jpg",
//       title: "Project 1",
//       description: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//     {
//       image: "https://images.alphacoders.com/100/thumb-1920-1008709.jpg",
//       title: "Project 2",
//       description: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//     {
//       image: "https://images.alphacoders.com/100/thumb-1920-1008709.jpg",
//       title: "Project 3",
//       description: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//     {
//       image: "https://images.alphacoders.com/100/thumb-1920-1008709.jpg",
//       title: "Project 4",
//       description: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//     {
//       image: "https://images.alphacoders.com/100/thumb-1920-1008709.jpg",
//       title: "Project 5",
//       description: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//     {
//       image: "https://images.alphacoders.com/100/thumb-1920-1008709.jpg",
//       title: "Project 6",
//       description: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//     {
//       image: "https://images.alphacoders.com/100/thumb-1920-1008709.jpg",
//       title: "Project 7",
//       description: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//     {
//       image: "https://images.alphacoders.com/100/thumb-1920-1008709.jpg",
//       title: "Project 8",
//       description: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//     {
//       image: "https://images.alphacoders.com/100/thumb-1920-1008709.jpg",
//       title: "Project 9",
//       description: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//     {
//       image: "https://images.alphacoders.com/100/thumb-1920-1008709.jpg",
//       title: "Project 10",
//       description: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//     {
//       image: "https://images.alphacoders.com/100/thumb-1920-1008709.jpg",
//       title: "Project 11",
//       description: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//     {
//       image: "https://images.alphacoders.com/100/thumb-1920-1008709.jpg",
//       title: "Project 12",
//       description: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//     {
//       image: "https://images.alphacoders.com/100/thumb-1920-1008709.jpg",
//       title: "Project 13",
//       description: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//     {
//       image: "https://images.alphacoders.com/100/thumb-1920-1008709.jpg",
//       title: "Project 14",
//       description: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//     {
//       image: "https://images.alphacoders.com/100/thumb-1920-1008709.jpg",
//       title: "Project 15",
//       description: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//     {
//       image: "https://images.alphacoders.com/100/thumb-1920-1008709.jpg",
//       title: "Project 16",
//       description: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//     {
//       image: "https://images.alphacoders.com/100/thumb-1920-1008709.jpg",
//       title: "Project 17",
//       description: "lLorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//   ];

//   const renderPortfolio = (protfolioInfo, index) => {
//     return (
//       <>
//         <div className="portfolioData col-lg-4 col-md-6" key={index}>
//           <div className="look-container">
//             <img src={protfolioInfo.image} className="card-img-top" alt="..." />
//             <div className="card-body">
//               <a href="/" className="inside">
//                 <p className="look-inside">
//                   Look inside{" "}
//                   <HiArrowNarrowRight size={24} className="hiarrow" />
//                 </p>
//               </a>

//               <a href="/" className="project">
//                 <h5 className="card-title">{protfolioInfo.title}</h5>
//               </a>
//             </div>
//           </div>
//           <div className="desc-container">
//             <p className="card-text">{protfolioInfo.description}</p>
//           </div>
//         </div>
//       </>
//     );
//   };

//   return <div className="row">{protfolioInfo.map(renderPortfolio)}</div>;
// }
