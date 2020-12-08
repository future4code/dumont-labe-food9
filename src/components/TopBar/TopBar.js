import React from "react";
//styles
import { Container, Div, PhoneDiv, TitleDiv } from "./style";
import { BsChevronLeft } from "react-icons/bs";
import { BsBatteryFull } from "react-icons/bs";
import { BsWifi } from "react-icons/bs";

const TopBar = (props) => {
  var date = new Date();
  var hour = date.getHours();
  var minutes = date.getMinutes();
	var AmPM = hour < 12 ? "AM" : "PM";
	
  return (
    <Container>
      <PhoneDiv>
        <Div>
          <p>Sketch </p>
          <BsWifi />
        </Div>
        <p>
          {hour}:{minutes} {AmPM}
        </p>
        <Div>
          <p> 100% </p>
          <BsBatteryFull />
        </Div>
      </PhoneDiv>

      <TitleDiv>
        <BsChevronLeft />
        <h3>{props.Title}Title</h3>
      </TitleDiv>
    </Container>
  );
};

export default TopBar;
