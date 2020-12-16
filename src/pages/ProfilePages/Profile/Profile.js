import React, { useContext, useState } from "react";
//style
import { Container } from "../../../components/StyledComponents/styles";
import { BsPencilSquare } from "react-icons/bs";
import "./profile.css";
//components
import TopBar from "../../../components/TopBar/TopBar";
import OrderHistoryCard from "../../../components/OrderHistoryCard/OrderHistoryCard";
//router
import { useHistory } from "react-router-dom";
//api
import api from "../../../services/api";
//context
import { ProfileContext } from "../../../context/ProfileContext";
import BottomBar from "../../../components/BottomBar/BottomBar";

const Profile = () => {
  const history = useHistory();
  const { profile } = useContext(ProfileContext);
  const [orders, setOrders] = useState([]);

  function getOrdersHistory() {
    api
      .get("/orders/history", {
        headers: {
          Authorization: localStorage.getItem("Token"),
        },
      })
      .then((response) => setOrders(response.orders))
      .catch((error) => console.log(error));
  }

  return (
    <Container>
      <TopBar Title="Meu Perfil" displayReturnIcon="true" />
      <div className="profile_info__container">
        <div>
          <p>Nome Sobrenome</p>
          <p>Email</p>
          <p>333.565.353-33</p>
        </div>
        <BsPencilSquare onClick={() => history.push("/editprofile")} />
      </div>
      <div className="profile_info_grey__container">
        <div>
          <p className="grey_text">Endereco</p>
          <p>Rua bla bla</p>
        </div>
        <BsPencilSquare onClick={() => history.push("/editadress")} />
      </div>
      <div className="profile_orderhistory_title">
        <p>Histórico de Pedidos</p>
      </div>

      {/* {orders?.map((order) => (
        <OrderHistoryCard
          restaurantName={order.name}
          date={order.date}
          total={order.total}
        />
      ))} */}

      <OrderHistoryCard
        restaurantName="Nome do restaurante"
        date="24 dezembro 2020"
        total="4000"
      />
      <OrderHistoryCard
        restaurantName="Nome do restaurante"
        date="24 dezembro 2020"
        total="4000"
      />
      <OrderHistoryCard
        restaurantName="Nome do restaurante"
        date="24 dezembro 2020"
        total="4000"
      />
      <OrderHistoryCard
        restaurantName="Nome do restaurante"
        date="24 dezembro 2020"
        total="4000"
      />
      <OrderHistoryCard
        restaurantName="Nome do restaurante"
        date="24 dezembro 2020"
        total="4000"
      />

      <BottomBar />
    </Container>
  );
};

export default Profile;
