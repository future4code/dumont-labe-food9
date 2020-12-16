import React from "react";
import { BsHouseDoor, BsBag, BsPerson } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import "./bottombar.css";

const BottomBar = () => {
  const history = useHistory();

  return (
    <div className="bottombar_container">
      <BsHouseDoor  onClick={() => history.push("/home")}/>
      <BsBag onClick={() => history.push("/cart")} />
      <BsPerson onClick={() => history.push("/profile")} />
    </div>
  );
};

export default BottomBar;
