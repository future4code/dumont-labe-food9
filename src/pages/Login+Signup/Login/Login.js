import React from "react";
import TopBarLogin from "../../../components/TopBar/TopBarLogin";
import { Container } from "../../../components/StyledComponents/styles";
import * as S from "../../../components/StyledComponents/styles";
import logo from "../../../assets/LogoPreto.png"


const Login = () => {
  return <Container>
      <TopBarLogin  />
      <S.Logo
				src={logo}
				alt="logo FutureEats Preto"
				/>
  </Container>;
};

export default Login;
