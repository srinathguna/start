import React from 'react';
import One from '../../assets/images/team/one.png';
import Two from "../../assets/images/team/two.png";
import Three from "../../assets/images/team/three.png";
import Four from "../../assets/images/team/four.png";

const team = [
  {
    imageUrl: One,
    name: "peg Legge",
    role: "ceo",
  },
  {
    imageUrl: Two,
    name: "Richard Guerra",
    role: "cto",
  },
  {
    imageUrl: Three,
    name: "Alexandra Stolz",
    role: "designer",
  },
  {
    imageUrl: Four,
    name: "Janet Bray",
    role: "developer",
  },
];
const Team = () => {
    return (
      <div className="container mx-auto text-center mt-24">
        <h4 className="font-worksans text-base font-bold uppercase tracking-[5px] text-[#74C69D]">
          Team
        </h4>
        <p className="font-crimson text-4xl font-bold mt-4">Our Talents</p>
        <p className="font-worksans text-xl font-normal mt-4 leading-6">
          Lorem ipsum dolor sit amet consectetur,
          <br /> adipisicing elits.
        </p>
        <ul className="flex flex-wrap justify-between items-center mb-24">
          {team.map((item, index) => {
            return (
              <li className="w-full sm:w-6/12 sm:px-5 md:w-4/12 md:px-3 lg:w-3/12 lg:py-5 px-8 text-left"
                key={index}
              >
                <div className="shadow-lg py-5 px-8 rounded-md">
                  <img className="mx-auto" src={item.imageUrl} alt="" />
                  <h3 className="font-crimson text-2xl font-bold mt-5">
                    {item.name}
                  </h3>
                  <span className="font-worksans text-base font-normal mt-4">
                    {item.role}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
};

export default Team;