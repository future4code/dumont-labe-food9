import React from "react";
import { RestaurantCardContainer, RestaurantInfo } from "./style";

const RestaurantCard = (props) => {
  return (
    <RestaurantCardContainer>
      <img
        src="https://source.unsplash.com/300x200/?food,restaurant"
        alt="Restaurant"
      />

      <RestaurantInfo>
        <div>
          <h3>{props.name}</h3>
          <p> {props.deliveryTime} min </p>
        </div>

        <p>Frete R$ {props.shipping} </p>
      </RestaurantInfo>
    </RestaurantCardContainer>
  );
};

export default RestaurantCard;
