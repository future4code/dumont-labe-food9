import React from "react";
import { OrderCard } from "./style";

const OrderHistoryCard = () => {
  return (
    <OrderCard>
      <h3>Nome Restaurante</h3>
      <br />
      <p>24 outubro 1900</p>
      <br />
      <h1>SUBTOTAL R$ 121</h1>
    </OrderCard>
  );
};

export default OrderHistoryCard;
