import React from "react";
import { Button } from "../../../components/MaterialUI/Buttons";
import InputForm from "../../../components/MaterialUI/Forms";
import { Container, Form } from "../../../components/StyledComponents/styles";
import TopBar from "../../../components/TopBar/TopBar";

const EditAdress = () => {
  return (
    <Container>
      <TopBar Title="Endereço" />
      <Form>
        <InputForm label="Lograduro" type="text" />
        <br />
        <InputForm label="Número" type="number" />
        <br />
        <InputForm label="Complemento" type="text" />
        <br />
        <InputForm label="Bairro" type="text" />
        <br />
        <InputForm label="Cidade" type="text" />
        <br />
        <InputForm label="Estado" type="text" />
        <br />
        <Button> Salvar </Button>
      </Form>
    </Container>
  );
};

export default EditAdress;
