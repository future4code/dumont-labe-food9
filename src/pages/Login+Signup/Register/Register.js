import React, { useState } from "react";
//components
import TopBar from "../../../components/TopBar/TopBar";
//styles
import { Container } from "../../../components/StyledComponents/styles";
import * as S from "../../../components/StyledComponents/styles";
import logo from "../../../assets/logoPreto.png";
import { Button } from "../../../components/MaterialUI/Buttons";
//router
import { Link, useHistory } from "react-router-dom";
//hooks
import { useForm } from "../../../hooks/useForm";
//services
import api from "../../../services/api";

const Register = () => {
  const [confirmPassword, setConfirmPassword] = useState("");

  const { form, onChangeInput } = useForm({
    email: "",
    password: "",
    name: "",
    cpf: "",
  });

  const history = useHistory();

  function handleInputChange(event) {
    const { value, name } = event.target;
    onChangeInput(value, name);
  }

  function onChangeValidatePassword(e) {
    setConfirmPassword(e.target.value);
    confirmPassword.length > 6 && handleValidatePassword();
  }

  function handleValidatePassword() {
    console.log('chegou aqui')
 
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
        history.push("/home");
      })
      .catch((error) => {
        alert(error.message)
       return console.log(error)
      })
  }

  return (
    <Container>
      <TopBar displayReturnIcon={"none"}/>
      <S.LogoDiv>
        <S.Logo src={logo} alt="logo FutureEats Preto" />
      </S.LogoDiv>

      <S.Form onSubmit={handleRegister}>
        <S.Input
          value={form.name}
          placeholder={"Nome"}
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
          pattern={"[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"}
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
          onChange={onChangeValidatePassword}
          required
        />              
        <Button>SignUp</Button>   
        <Link to="/register">
          <p style={{ fontSize: "0.7rem" }}>Não possui cadastro? Clique aqui.</p>
        </Link>
                     
      </S.Form>
    </Container>
  );
};

export default Register;
