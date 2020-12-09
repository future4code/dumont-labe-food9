import React from "react";
import { BsHouseDoor, BsBag, BsPerson } from "react-icons/bs";
import "./bottombar.css";

const BottomBar = () => {
  return (
    <div className="bottombar_container">
      <BsHouseDoor />
      <BsBag />
      <BsPerson />
    </div>
  );
};

export default BottomBar;
