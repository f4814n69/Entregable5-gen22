import React from "react";
import "./styles/header.css"

const Header = () => {
  return (
    <div className="header">
      <img className="header_img" src="/images/pokedex-img.png" alt="" />
      <div className="header_black">
       <div className="header_circle">
       <div className="header_circle-int"></div>
       </div>
      </div>
    </div>
  )
} 

export default Header