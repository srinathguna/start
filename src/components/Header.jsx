import React,{useState} from 'react';
import Logo from '../assets/images/logo.png';
import { Link,BrowserRouter, Route, Routes } from "react-router-dom";

const Header = () => {
   const [isNavVisible, setIsNavVisible] = useState(false);
      const nav = [
        { menuname: "Home", link: "/" },
        { menuname: "Portfolio", link: "/portfolio" },
        { menuname: "Services", link: "/services" },
        { menuname: "Contact", link: "/contact" },
  ];
    const toggleNavVisibility = () => {
      setIsNavVisible(!isNavVisible);
    };
  return (
    <div className="bg-[#74C69D]">
      <header className="container mx-auto">
        <nav className="flex flex-wrap justify-between items-center py-4 px-5">
          <div className="logo h-10 w-12">
            <a href="/" className="flex items-center">
              <img className="object-cover" src={Logo} alt="logo" />
              <span className="text-white block ml-2 text-4xl font-crimson">
                Start
              </span>
            </a>
          </div>
          <button
            className="text-white text-2xl md:hidden"
            onClick={toggleNavVisibility}
          >
            ☰
          </button>
          <ul
            className={`menu flex-wrap justify-between gap-12 ${
              isNavVisible ? "block style shadow-lg" : "hidden"
            } md:flex`}
          >
            {nav.map((item, index) => {
              return (
                <li className="navbar" key={index}>
                  <Link
                    to={item.link}
                    className="text-lg text-white transition hover:font-semibold hover:text-[#FF6364] font-hero-font"
                  >
                    {item.menuname}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;