import React from 'react';
import { MdDone } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Services = () => {
    const plans = [
      {
        id: 1,
        planName: "Basic",
        price: "$100",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam",
        features: [
          {
            feature: "single user",
            value: true,
          },
          {
            feature: "50GB storage",
            value: true,
          },
          {
            feature: "unlimited public projects",
            value: true,
          },
          {
            feature: "community access",
            value: true,
          },
          {
            feature: "unlimited private projects",
            value: false,
          },
          {
            feature: "dedicated phone support",
            value: false,
          },
          {
            feature: "free subdomain",
            value: false,
          },
          {
            feature: "monthly status reports",
            value: false,
          },
        ],
      },
      {
        id: 2,
        planName: "Plus",
        price: "$250",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam",
        features: [
          {
            feature: "5 users",
            value: true,
          },
          {
            feature: "50GB storage",
            value: true,
          },
          {
            feature: "unlimited public projects",
            value: true,
          },
          {
            feature: "community access",
            value: true,
          },
          {
            feature: "unlimited private projects",
            value: true,
          },
          {
            feature: "dedicated phone support",
            value: true,
          },
          {
            feature: "free subdomain",
            value: true,
          },
          {
            feature: "monthly status reports",
            value: false,
          },
        ],
      },
      {
        id: 3,
        planName: "Pro",
        price: "$400",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam",
        features: [
          {
            feature: "unlimited users",
            value: true,
          },
          {
            feature: "50GB storage",
            value: true,
          },
          {
            feature: "unlimited public projects",
            value: true,
          },
          {
            feature: "community access",
            value: true,
          },
          {
            feature: "unlimited private projects",
            value: true,
          },
          {
            feature: "dedicated phone support",
            value: true,
          },
          {
            feature: "free subdomain",
            value: true,
          },
          {
            feature: "monthly status reports",
            value: true,
          },
        ],
      },
    ];
    return (
      <div className="container mx-auto mt-24">
        <div className='text-center'>
          <h4 className="font-worksans text-base font-bold uppercase tracking-[5px] text-[#74C69D]">
            Plans
          </h4>
          <p className="font-crimson text-4xl font-bold mt-4">Our Services</p>
          <p className="font-worksans text-xl font-normal mt-4 leading-6">
            Lorem ipsum dolor sit amet consectetur,
            <br /> adipisicing elits.
          </p>
        </div>
        <div className="container flex flex-wrap justify-between items-start mb-24">
          {plans.map((item, index) => {
            return (
              <>
                <div className="card w-full md:w-2/4 md:p-4 lg:w-1/3 rounded-lg" key={index}>
                  <div className="shadow-lg p-8 text-center">
                    <h5 className="font-worksans text-sm mt-2">
                      {item.planName}
                    </h5>
                    <h1 className="font-worksans text-4xl font-bold">
                      {item.price}
                      <span className="text-sm font-normal"> /month</span>
                    </h1>
                    <p className="font-worksans text-base mt-4">
                      {item.description}
                    </p>
                    <ul className="text-left">
                      {item.features.map((item) => {
                        return (
                          <>
                            {item.value ? (
                              <li className="open-feature flex items-center mt-4">
                                <i className="text-green-500">
                                  <MdDone />
                                </i>
                                <span className="ml-4">{item.feature}</span>
                              </li>
                            ) : (
                              <li className="close-feature flex items-center mt-4">
                                <i className="text-red-600">
                                  <IoMdClose />
                                </i>
                                <span className="ml-4">{item.feature}</span>
                              </li>
                            )}
                          </>
                        );
                      })}
                    </ul>
                    <button className="bg-black text-white py-2 px-10 rounded-md m-11">
                      Learn More
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    );
};

export default Services;