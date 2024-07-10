import React from 'react';
import hero from '../../assets/images/hero.png'

const Hero = () => {
    return (
      <div className="container mx-auto flex flex-wrap items-center justify-between pt-10">
        <div className="md:4/12 lg:w-4/12 xl:4/12 2xl:4/12 order-2 md:order-2 p-5">
          <h4 className="text-white font-bold text-base uppercase tracking-widest">
            Welcome
          </h4>
          <h2 className="font-crimson text-white font-bold text-3xl sm:text-4xl mt-4">
            Lorem ipsum dolor sit, amet consectetur
          </h2>
          <p className="font-worksans text-white font-normal text-md mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </p>
          <button className="font-worksans text-black text-xl mt-6 rounded bg-white py-2 px-10">
            Explore
          </button>
        </div>
        <div className="md:6/12 lg:w-6/12 xl:6/12 2xl:6/12 order-1 md:order-2 p-5">
          <img className="w-full" src={hero} alt="logo" />
        </div>
      </div>
    );
};

export default Hero;