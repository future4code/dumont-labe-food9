import React, { useContext } from "react";
//style
import { Button } from "../../../components/MaterialUI/Buttons";
import InputForm from "../../../components/MaterialUI/Forms";
import { Container, Form } from "../../../components/StyledComponents/styles";
//component
import TopBar from "../../../components/TopBar/TopBar";
//context
import { ProfileContext } from "../../../context/ProfileContext";
import { useForm } from "../../../hooks/useForm";
//api
import api from "../../../services/api";

const EditAdress = () => {
  const { setProfile } = useContext(ProfileContext);

  const [form, onChangeInput] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  function handleChangeAdress(e) {
    e.preventDefault();
    const body = {
      street: form.street,
      number: form.number,
      neighbourhood: form.neighbourhood,
      city: form.city,
      state: form.state,
      complement: form.complement,
    };

    api
      .put("/adress", body, {
        headers: {
          auth: localStorage.getItem("Token"),
        },
      })
      .then((response) => {
        setProfile(response.user);
        return localStorage.setItem("Token", response.token);
      })
      .catch((error) => console.log(error));
  }

  return (
    <Container>
      <TopBar Title="Endereço" />
      <Form onSubmit={handleChangeAdress}>
        <InputForm
          label="Lograduro"
          type="text"
          value={form["street"]}
          onChange={onChangeInput}
        />
        <br />
        <InputForm
          label="Número"
          type="number"
          value={form["number"]}
          onChange={onChangeInput}
        />
        <br />
        <InputForm
          label="Complemento"
          type="text"
          value={form["complement"]}
          onChange={onChangeInput}
        />
        <br />
        <InputForm
          label="Bairro"
          type="text"
          value={form["neighbourhood"]}
          onChange={onChangeInput}
        />
        <br />
        <InputForm
          label="Cidade"
          type="text"
          value={form["city"]}
          onChange={onChangeInput}
        />
        <br />
        <InputForm
          label="Estado"
          type="text"
          value={form["city"]}
          onChange={onChangeInput}
        />
        <br />
        <Button> Salvar </Button>
      </Form>
    </Container>
  );
};

export default EditAdress;
