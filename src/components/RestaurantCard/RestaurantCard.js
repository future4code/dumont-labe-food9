import React from "react";
import { RestaurantCardContainer, RestaurantInfo } from "./style";

const RestaurantCard = () => {
  return (
    <RestaurantCardContainer>
      <img
        src="https://source.unsplash.com/300x200/?food,restaurant"
        alt="Restaurant"
      />

      <RestaurantInfo>
        <div>
          <h3>Restaurant Name</h3>
          <p> 50-60 min </p>
        </div>

        <p>Frete R$ 6,00</p>
      </RestaurantInfo>
    </RestaurantCardContainer>
  );
};

export default RestaurantCard;
