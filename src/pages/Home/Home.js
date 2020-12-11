import React, { useContext, useEffect } from "react";
//component
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import TopBar from "../../components/TopBar/TopBar";
import BottomBar from "../../components/BottomBar/BottomBar";
//style
import { Container } from "../../components/StyledComponents/styles";
import RestaurantsBar from "../../components/RestaurantsBar/RestaurantsBar";
import { BsSearch } from "react-icons/bs";
import { SearchBar } from "./style";
import "./style.css";
//services
import api from "../../services/api";
//context
import { RestaurantsContext } from "../../context/RestaurantsContext";

const Home = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  console.log(localStorage.getItem("Token"), "console.log");
  useEffect(() => {
    api
      .get("/restaurants", {
        headers: {
          auth: localStorage.getItem("Token"),
        },
      })
      .then((response) => {
        setRestaurants(response.data.restaurants);
        console.log(restaurants);
      })
      .catch((error) => console.log(error));
  }, [restaurants, setRestaurants]);
  return (
    <Container>
      <TopBar Title="FutureEats" />
      <SearchBar>
        <input placeholder="Procurar..." />
        <BsSearch />
      </SearchBar>
      <div className="restaurantContainer">
        <RestaurantsBar />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
      <BottomBar />
    </Container>
  );
};

export default Home;
