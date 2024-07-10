import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/home/Home";
import Footer from "./components/Footer";
import LandingPage from "./components/home/LandingPage";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };
  return (
    <div className="relative">
      <BrowserRouter>
        <Header toggleNavVisibility={toggleNavVisibility} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Home />
      <Footer/> */}
    </div>
  );
}

export default App;
