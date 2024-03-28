import { useState, useEffect } from 'react'
import './App.css'
import DisplayHomepage from './DisplayHomepage/index.jsx'
import Footer from "./Footer/index.jsx";
import RestaurantDisplay from "./RestaurantDisplay/index.jsx";
import DeliveryModal from "./DeliveryModal/index.jsx";

const App = () => {

    const [visible, setVisible] = useState(false)
    const [restaurants, assignRestaurants] = useState([]);

    const fetchRestaurants = () => {
        fetch('https://food-delivery-api.dev.io-academy.uk/restaurants').then(response => {
            return response.json();
        }).then((data) => {
            assignRestaurants(data);
        })
    }

    useEffect(() => {
        fetchRestaurants()
    }, []);

    return (
        <>
            <DeliveryModal visible={visible} setVisible={setVisible}/>
            <DisplayHomepage/>
            <RestaurantDisplay restaurantList={restaurants} visible={visible} setVisible={setVisible}/>
            <Footer/>
        </>
    )
}

export default App
