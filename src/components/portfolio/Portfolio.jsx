import React from "react";
import One from "../../assets/images/portfolio/one.png";
import Two from "../../assets/images/portfolio/two.png";
import Three from "../../assets/images/portfolio/three.png";
import Four from "../../assets/images/portfolio/four.png";
import Five from "../../assets/images/portfolio/five.png";
import Six from "../../assets/images/portfolio/six.png";
import Seven from "../../assets/images/portfolio/seven.png";
import Eight from "../../assets/images/portfolio/eight.png";

const PortfolioImages = [One, Two, Three, Four, Five, Six, Seven, Eight];
const Portfolio = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-8 text-center">
        <h4 className="font-worksans text-base font-bold uppercase tracking-[5px] text-[#74C69D]">
          Works
        </h4>
        <p className="font-crimson text-4xl font-bold mt-4">Portfolio</p>
        <p className="font-worksans text-xl font-normal mt-4 leading-6">
          Lorem ipsum dolor sit amet consectetur,
          <br /> adipisicing elits.
        </p>
      </div>
          <ul className="flex flex-wrap items-center">
              {PortfolioImages.map((item, index) => {
                  return (
                      <li key={index} className="w-full sm:w-6/12">
                          <div className="p-4 sm:p-4 md:p-4 lg:p-6 xl:p-10 2xl:p-14">                              
                            <img className="w-full h-full" src={item} alt={item} />
                          </div>
                      </li>
                  )
               })}
          </ul>
    </div>
  );
};

export default Portfolio;
