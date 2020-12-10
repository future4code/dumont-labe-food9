import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { RestaurantContainer, RestaurantImage, RestaurantCardInfo } from './style'
import {goToRestaurantPage} from '../../Routes/Coordinator'

const RestaurantCard = () => {

// 	const history = useHistory()
// 	const [restaurants, setRestaurants] = useState([])
	

// 	const getRestaurants = () => {
//         axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants', {
//             headers: {
//                 auth: localStorage.getItem("token"),
//             }
//         }).then((response) => {
//             console.log(response.data.restaurants)
//             setRestaurants(response.data.restaurants)
//         }).catch((error) => {
//             console.log(error)
//         })
//     }

// 	useEffect(() => {
// 		getRestaurants()
		
// },[])
	
	return (
		<RestaurantContainer>
          {/* {
                   restaurants.map((restaurant) => (
                  <RestaurantCardInfo key={restaurant.id} onClick={() => goToRestaurantPage(history, restaurant.id)}>
                    <RestaurantImage src={restaurant.logoUrl} alt="restaurant" />
                    <h1>{restaurant.name}</h1>
                    <div>
                      <p>{restaurant.deliveryTime} min</p>
                      <p>Frete R${restaurant.shipping},00</p>
                    </div>
                  </RestaurantCardInfo>))
          } */}<h1>Card Restaurante</h1>
        </RestaurantContainer>
	)
}

export default RestaurantCard
