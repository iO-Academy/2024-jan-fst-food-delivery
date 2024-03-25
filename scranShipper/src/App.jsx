import { useState, useEffect } from 'react'
import './App.css'


const App = () => {

    const [restaurants, assignRestaurants] = useState([]);
    useEffect(() => {
        fetchRestaurants()
    }, []);

    const fetchRestaurants = () => {
        fetch('https://food-delivery-api.dev.io-academy.uk/restaurants').then(response => {
            return response.json();
        }).then((data) => {
            assignRestaurants(data);
        })
    }

    return (
        <>
            <RestaurantDisplay restaurantList={restaurants}/>
        </>
    )

}

export default App
