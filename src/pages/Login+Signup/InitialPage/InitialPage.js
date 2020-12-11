import React from "react";
import * as S from "../../../components/StyledComponents/styles";
import logo from "../../../assets/logoBranco.png";
import { BsFillCaretRightFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RedirectDiv } from "./style";

const InitialPage = () => {
  return (
    <S.Container style={{ background: "var(--secondary)" }}>
      <S.LogoDiv>
        <S.Logo src={logo} alt="logo FutureEats Branco" />
      </S.LogoDiv>
      <Link to="/login">
        <RedirectDiv>
          <p style={{ color: "white" }}> Ir para App </p>
          <BsFillCaretRightFill />
        </RedirectDiv>
      </Link>
    </S.Container>
  );
};

export default InitialPage;
