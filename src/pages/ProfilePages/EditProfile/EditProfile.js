import React, { useContext } from "react";
import InputForm from "../../../components/MaterialUI/Forms";
import { Container, Form } from "../../../components/StyledComponents/styles";
import TopBar from "../../../components/TopBar/TopBar";
import { Button } from "../../../components/MaterialUI/Buttons";
//hooks
import { useForm } from "../../../hooks/useForm";
//context
import { ProfileContext } from "../../../context/ProfileContext";

const EditProfile = () => {
  const { setProfile } = useContext(ProfileContext);

  const [form, onChangeInput] = useForm({
    email: "",
    name: "",
    cpf: "",
  });

  function handleEditProfile(e) {
    e.preventDefault();

    const body = {
      email: form.email,
      name: form.name,
      cpf: form.cpf,
    };

    // api
    //   .post(`/futureeats/profile`, body, {
    //     headers: {
    //       Authorization: localStorage.getItem("Token"),
    //     },
    //   })
    //   .then((response) => {
    //    setProfile(response.user)
    //     history.push("/timeline");
    //   })
    //   .catch((error) => {
    //     alert("Please verify our info and try again.");
    //     console.log(error);
    //   });
  }

  return (
    <Container>
      <TopBar Title="Editar" />
      <Form onSubmit={handleEditProfile}>
        <InputForm
          label="Nome"
          type={"name"}
          value={form["name"]}
          onChange={onChangeInput}
        />
        <br />
        <InputForm
          label="Email"
          type={"email"}
          value={form["email"]}
          onChange={onChangeInput}
        />
        <br />
        <InputForm
          label="CPF"
          type={"number"}
          value={form["cpf"]}
          onChange={onChangeInput}
          pattern={"/^d{3}.d{3}.d{3}-d{2}$/"}
        />
        <br />
        <Button> Salvar </Button>
      </Form>
    </Container>
  );
};

export default EditProfile;
