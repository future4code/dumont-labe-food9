/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
//component
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import TopBar from "../../components/TopBar/TopBar";
import BottomBar from "../../components/BottomBar/BottomBar";
import Loading from "../../components/MaterialUI/Loading";
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
import { useHistory } from "react-router-dom";

const Home = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);

  const history = useHistory();

  useEffect(() => {
    api
      .get("/restaurants", {
        headers: {
          auth: localStorage.getItem("Token"),
        },
      })
      .then((response) => {
        setRestaurants(response.data.restaurants);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleSeeDetails(id) {
    history.push(`/restaurant/${id}`);
  }

  return (
    <Container>
      <TopBar Title="FutureEats" />
      <SearchBar>
        <input placeholder="Procurar..." />
        <BsSearch />
      </SearchBar>
      <RestaurantsBar />
      <div className="restaurantContainer">
        {restaurants ? (
          restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              name={restaurant.name}
              deliveryTime={restaurant.deliveryTime}
              shipping={restaurant.shipping}
              onClick={() => handleSeeDetails(restaurant.id)}
            />
          ))
        ) : (
          <Loading />
        )}
      </div>
      <BottomBar />
    </Container>
  );
};

export default Home;
