import React from "react";
import LandingPage from "../home/LandingPage";
import Team from "./Team";
import Message from "../../assets/images/message.png";
import Settings from "../../assets/images/settings.png";
import image1 from "../../assets/images/partners/google.png";
import image2 from "../../assets/images/partners/microsoft.png";
import image3 from "../../assets/images/partners/airbnb.png";
import image4 from "../../assets/images/partners/facebook.png";
import image5 from "../../assets/images/partners/spotify.png";

const images = [image1, image2, image3, image4, image5];
const Home = () => {
  return (
    <>
      <LandingPage />
      <div className="container mx-auto text-center mt-14">
        <h4 className="font-worksans text-base font-bold uppercase tracking-[5px] text-[#74C69D]">
          Partners
        </h4>
        <p className="font-crimson text-2xl sm:text-4xl font-bold mt-4">
          Lorem Ipsum Dolort
        </p>
        <p className="font-worksans text-xl font-normal mt-4 leading-6">
          Lorem ipsum dolor sit amet consectetur,
          <br /> adipisicing elits.
        </p>
        <ul
          className="m-14 slider"
          style={{ "--width": "100px", "--height": "100px", quantity: 10 }}
        >
          <li className="list flex flex-wrap justify-between items-center">
            {images.map((item, index) => {
              return (
                <img
                  className="item mx-auto mt-10"
                  style={{ "--position": index }}
                  src={item}
                  alt="images"
                />
              );
            })}
          </li>
        </ul>
        <button className="font-worksans text-white text-xl mt-14 rounded bg-black py-2 px-10">
          Learn More
        </button>
        <div className="mt-20">
          <div className="flex flex-wrap justify-between items-center p-5">
            <div className="w-full sm:w-7/12">
              <img src={Message} alt="message" />
            </div>
            <div className="w-full sm:w-5/12 text-left">
              <h2 className="font-crimson mt-5 text-2xl md:text-4xl font-bold">
                Lorem ipsum dolor sit <br /> amet, consectetur
              </h2>
              <p className="font-worksans font-normal text-base leading-5 mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos
                error ipsum, voluptate culpa nesciunt delectus iste?
              </p>
              <button className="font-worksans text-white text-xl mt-5 md:mt-14 rounded bg-black py-2 px-10">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-between items-center p-5 mt-4">
            <div className="w-full sm:w-5/12 text-left order-2">
              <h2 className="font-crimson mt-5 text-2xl md:text-4xl font-bold">
                Lorem ipsum dolor sit <br/> amet, consectetur
              </h2>
              <p className="font-worksans font-normal text-base leading-5 mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos
                error ipsum, voluptate culpa nesciunt delectus iste?
              </p>
              <button className="font-worksans text-white text-xl mt-5 md:mt-14 rounded bg-black py-2 px-10">
                Learn More
              </button>
            </div>
            <div className="w-full sm:w-7/12 order-1">
              <img src={Settings} alt="settings" />
            </div>
          </div>
        </div>
      </div>
      <Team />
    </>
  );
};

export default Home;
