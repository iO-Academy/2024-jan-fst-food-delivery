import {useState} from 'react';
import RestaurantMenu from "../RestaurantMenu/index.jsx";
import './style.css';

const RestaurantDisplay = (props) => {

    const [hidden, setHidden] = useState(false);
    const [restaurant, setRestaurant] = useState("")

    const makeRestaurant = (restaurant) => {

        return (
        <button onClick={() => {
            setHidden(!hidden);
            setRestaurant(restaurant.id);
        }}> {restaurant.name} </button>
        )
    }

    return (
        <>
            {!hidden && props.restaurantList.map(makeRestaurant)}
            <div className='menuWhole'>
            {hidden && <RestaurantMenu restaurantId={restaurant}/>}
            </div>
            {hidden && <button onClick={() => setHidden(!hidden)}>Back</button>}
        </>
    )
}

export default RestaurantDisplay