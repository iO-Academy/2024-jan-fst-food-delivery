import { useState, useEffect } from 'react'
import './App.css'
import DisplayHomepage from './DisplayHomepage/index.jsx'
import Footer from "./Footer/index.jsx"
import RestaurantDisplay from "./RestaurantDisplay/index.jsx"

const App = () => {

    const [restaurants, assignRestaurants] = useState([])

    const fetchRestaurants = () => {
        fetch('https://food-delivery-api.dev.io-academy.uk/restaurants').then(response => {
            return response.json()
        }).then((data) => {
            assignRestaurants(data)
        })
    }

    useEffect(() => {
        fetchRestaurants()
    }, [])

    return (
        <>
            <DisplayHomepage/>
            <RestaurantDisplay restaurantList={restaurants}/>
            <Footer/>
        </>
    )
}

export default App
