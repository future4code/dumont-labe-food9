import React from "react";
import TopBarLogin from "../../../components/TopBar/TopBarLogin";
import * as S from "../../../components/StyledComponents/styles";
import logo from "../../../assets/logoPreto.png";

import { Button } from "../../../components/MaterialUI/Buttons";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import api from "../../../services/api";

const Login = () => {
  const { form, onChangeInput } = useForm({
    email: "",
    password: "",
  });

  const history = useHistory();

  function handleInputChange(event) {
    const { value, name } = event.target;

    onChangeInput(value, name);
  }

  function handleLogin(event) {
    event.preventDefault();
    console.log(form);

    const body = {
      email: form.email,
      password: form.password,
    };

    api
      .post("/login", body)
      .then((response) => {
        localStorage.setItem("Token", response.data.token);
        console.log(response.data.token);
        history.push("/home");
      })
      .catch((error) => console.log(error));
  }

  return (
    <S.Container>
      <TopBarLogin />
      <S.LogoDiv>
        <S.Logo src={logo} alt="logo FutureEats Preto" />
      </S.LogoDiv>

      <S.Form onSubmit={handleLogin}>
              
        <S.Input
          value={form.email}
          label={"E-mail"}
          name={"email"}
          type={"email"}
          onChange={handleInputChange}
          required
        />
              
        <br />
              
        <S.Input
          label={"Senha"}
          name={"password"}
          value={form.password}
          type={"password"}
          onChange={handleInputChange}
          required
        />
                              
        <Button>Login</Button>
              
        <Link to="/register">
          <p>Não possui cadastro? Clique aqui.</p>
        </Link>
                     
      </S.Form>
    </S.Container>
  );
};

export default Login;
