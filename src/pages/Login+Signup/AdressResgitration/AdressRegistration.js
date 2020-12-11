import React from "react";
import TopBar from "../../../components/TopBar/TopBar";
//styles
import * as S from "../../../components/StyledComponents/styles";
import { Button } from "../../../components/MaterialUI/Buttons";
import { useHistory } from "react-router-dom";
//hooks
import { useForm } from "../../../hooks/useForm";
//services
import api from "../../../services/api";

const AdressRegistration = () => {
  const { form, onChangeInput } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const history = useHistory();

  function handleInputChange(event) {
    const { value, name } = event.target;
    onChangeInput(value, name);
  }

  function handleAddAdress(event) {
    event.preventDefault();
    console.log(form);

    const body = {
      street: form.street,
      number: form.number,
      neighbourhood: form.neighbourhood,
      city: form.city,
      state: form.state,
      complement: form.complement,
    };

    api
      .put("/address", body, {
        headers: {
          auth: localStorage.getItem("Token"),
        },
      })
      .then((response) => {
        localStorage.setItem("Token", response.data.token);
        alert("Cadastro feito com sucesso!");
        history.push("/home");
      })
      .catch((error) => console.log(error));
  }

  return (
    <S.Container>
      <TopBar Title="Endereço" />
      <S.Form onSubmit={handleAddAdress}>
        <S.Input
          value={form.street}
          placeholder="Logradouro"
          name={"street"}
          type={"text"}
          onChange={handleInputChange}
          required
        />
        <S.Input
          value={form.number}
          placeholder="Número"
          name={"number"}
          type={"number"}
          onChange={handleInputChange}
          required
        />
        <S.Input
          value={form.complement}
          placeholder="Complemento"
          name={"complement"}
          type={"text"}
          onChange={handleInputChange}
          required
        />
        <S.Input
          value={form.neighbourhood}
          placeholder="Bairro"
          name={"neighbourhood"}
          type={"text"}
          onChange={handleInputChange}
          required
        />
        <S.Input
          value={form.city}
          placeholder="Cidade"
          name={"city"}
          type={"text"}
          onChange={handleInputChange}
          required
        />
        <S.Input
          value={form.state}
          placeholder="Estado"
          name={"state"}
          type={"text"}
          onChange={handleInputChange}
          required
        />
                              
        <Button>Login</Button>
                          
      </S.Form>
    </S.Container>
  );
};

export default AdressRegistration;
