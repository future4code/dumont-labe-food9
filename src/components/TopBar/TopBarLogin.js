import React from "react";
//styles
import { Container, Div, PhoneDiv, TitleDiv } from "./style";
import { BsBatteryFull } from "react-icons/bs";
import { BsWifi } from "react-icons/bs";
//router
import { useHistory } from "react-router-dom";

const TopBar = (props) => {
  var date = new Date();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var AmPM = hour < 12 ? "AM" : "PM";

  const history = useHistory();

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

      
    </Container>
  );
};

export default TopBar;
