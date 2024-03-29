// dependencies
import React from "react";

//assets
import { IMAGES } from "../assets";

const Header = () => {
  return (
    <div className="header">
      <img className="hero-image" src={IMAGES.heroBorder} alt="main-hero" />
    </div>
  );
};

export default Header;
