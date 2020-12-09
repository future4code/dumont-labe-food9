import React from "react";
import InputForm from "../../../components/MaterialUI/Forms";
import { Container, Form } from "../../../components/StyledComponents/styles";
import TopBar from "../../../components/TopBar/TopBar";
import { Button } from "../../../components/MaterialUI/Buttons";

const EditProfile = () => {
  return (
    <Container>
      <TopBar Title="Editar" />
      <Form>
        <InputForm label="Nome" type={"name"} />
        <br />
        <InputForm label="Email" type={"email"} />
        <br />
        <InputForm label="CPF" type={"number"} />
        <br />
        <Button> Salvar </Button>
      </Form>
    </Container>
  );
};

export default EditProfile;
