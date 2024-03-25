import { useState, useEffect } from 'react'
import './App.css'
import DisplayHomepage from './DisplayHomepage/index.jsx'
import Footer from "./Footer/Index.jsx";

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
            <DisplayHomepage/>
            <RestaurantDisplay restaurantList={restaurants}/>
            <Footer/>
        </>
    )
}

export default App
