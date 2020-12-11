import React from "react";
import * as S from "../../../components/StyledComponents/styles";
import logo from "../../../assets/logoBranco.png";

const InitialPage = () => {
  return (
    <S.ContainerInitial>
      <S.LogoDiv>
        <S.Logo src={logo} alt="logo FutureEats Branco" />
      </S.LogoDiv>
    </S.ContainerInitial>
  );
};

export default InitialPage;
