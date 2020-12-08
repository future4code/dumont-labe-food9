import React from "react";
import { Container } from "../../../components/StyledComponents/styles";
import TopBar from "../../../components/TopBar/TopBar";
import { BsPencilSquare } from "react-icons/bs";
import "./profile.css";
import OrderHistoryCard from "../../../components/OrderHistoryCard/OrderHistoryCard";

const Profile = () => {
  return (
    <Container>
      <TopBar Title="Meu Perfil" displayReturnIcon="true" />
      <div className="profile_info__container">
        <div>
          <p>Nome Sobrenome</p>
          <p>Email</p>
          <p>333.565.353-33</p>
        </div>
        <BsPencilSquare />
      </div>
      <div className="profile_info_grey__container">
        <div>
          <p className="grey_text">Endereco</p>
          <p>Rua bla bla</p>
        </div>
        <BsPencilSquare />
      </div>
      <div className="profile_orderhistory_title">
        <p>Histórico de Pedidos</p>
      </div>
      <OrderHistoryCard />
    </Container>
  );
};

export default Profile;
