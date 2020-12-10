import React, { useState } from "react";
import TopBar from "../../../components/TopBar/TopBar";
import { Container } from "../../../components/StyledComponents/styles";
import * as S from "../../../components/StyledComponents/styles";
import logo from "../../../assets/logoPreto.png";

import { Button } from "../../../components/MaterialUI/Buttons";
import { Link } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import api from "../../../services/api";

const Register = () => {
  const [confirmPassword, setConfirmPassword] = useState("");

  const { form, onChangeInput } = useForm({
    email: "",
    password: "",
    name: "",
    cpf: "",
  });

  function handleInputChange(event) {
    const { value, name } = event.target;

    onChangeInput(value, name);
  }

  function handleValidatePassword(event) {
    setConfirmPassword(event.target.value)

  }

  function handleRegister(event) {
    event.preventDefault();
    console.log(form);

    const body = {
      email: form.email,
      name: form.name,
      cpf: form.cpf,
      password: form.password,
    };

    api
      .post("/signup", body)
      .then((response) => {
        localStorage.setItem("Token", response.data.token);
        console.log(response.data.token);
        alert("sucesso vc e bom!");
      })
      .catch((error) => console.log(error));
  }

  return (
    <Container>
      <TopBar />
      <S.LogoDiv>
        <S.Logo src={logo} alt="logo FutureEats Preto" />
      </S.LogoDiv>

      <S.Form onSubmit={handleRegister}>
        <S.Input
          value={form.name}
          placeholder={"nome"}
          name={"name"}
          type={"name"}
          onChange={handleInputChange}
          required
        />
        <S.Input
          value={form.email}
          placeholder={"E-mail"}
          name={"email"}
          type={"email"}
          onChange={handleInputChange}
          required
        />
        <S.Input
          placeholder={"CPF"}
          name={"cpf"}
          value={form.cpf}
          type={"number"}
          onChange={handleInputChange}
          required
        />
        <S.Input
          placeholder={"Senha"}
          name={"password"}
          value={form.password}
          type={"password"}
          onChange={handleInputChange}
          required
        />
        <S.Input
          placeholder={"Confirmar"}
          name={"password"}
          value={confirmPassword}
          type={"password"}
          onChange={handleValidatePassword}
          required
        />
                              
        <Button>SignUp</Button>
              
        <Link to="/register">
          <p>Não possui cadastro? Clique aqui.</p>
        </Link>
                     
      </S.Form>
    </Container>
  );
};

export default Register;
