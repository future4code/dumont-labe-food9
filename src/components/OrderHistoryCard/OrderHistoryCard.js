import React from "react";
import { OrderCard } from "./style";

const OrderHistoryCard = (props) => {
  return (
    <OrderCard>
      <h3>{props.restaurantName}</h3>
      <br />
      <p>{props.date}</p>
      <br />
      <h1>SUBTOTAL R$ {props.total}</h1>
    </OrderCard>
  );
};

export default OrderHistoryCard;
