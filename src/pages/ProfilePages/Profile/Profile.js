import React from "react";
import { Container } from "../../../components/StyledComponents/styles";
import TopBar from "../../../components/TopBar/TopBar";
import { BsPencilSquare } from "react-icons/bs";

const Profile = () => {
  return (
    <Container>
      <TopBar Title="Meu Perfil" displayReturnIcon="true" />
      <div
        style={{
          display: "flex",
          alignItems: "top",
          justifyContent: "space-between",
          width: "300px",
          margin: "auto",
        }}
      >
        <div>
          <p>Nome Sobrenome</p>
          <p>Email</p>
          <p>333.565.353-33</p>
        </div>
        <BsPencilSquare />
      </div>
    </Container>
  );
};

export default Profile;
