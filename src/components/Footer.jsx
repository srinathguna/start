import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaTiktok,
  FaWhatsapp,
  FaYoutube
} from "react-icons/fa";

const socialIcons = [
  <FaFacebookF/>,
  <FaInstagram/>,
  <FaTwitter/>,
  <FaPinterestP/>,
  <FaTiktok/>,
  <FaWhatsapp/>,
  <FaYoutube/>
];

const Footer = () => {
    return (
      <div className="bg-[#74C69D] w-full">
        <div className="container mx-auto py-12 flex flex-wrap justify-between items-center flex-col sm:flex-row md:p-5">
          <ul className="flex flex-wrap gap-5">
            {socialIcons.map((item, index) => {
              return (
                <li key={index} className="text-white">
                  {item}
                </li>
              );
            })}
          </ul>
          <p className="mt-5 sm:mt-0 text-center font-worksans text-white text-xl lg:text-xl">
            © Start, 2022. All rights reserved.
          </p>
        </div>
      </div>
    );
};

export default Footer;