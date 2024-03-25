import {useState} from 'react';

const RestaurantDisplay = (props) => {

    const [hidden, setHidden] = useState(false);

    const makeRestaurant = (restaurant) => {

        return (
        <button onClick={() => {
            setHidden(!hidden)
        }}> {restaurant.name} </button>
        )
    }

    return (
        <>
            {!hidden && props.restaurantList.map(makeRestaurant)}
            {hidden && <RestaurantMenu restaurantId={restaurant.id}/>}
            {hidden && <button onClick={() => setHidden(!hidden)}>Back</button>}
        </>
    )
}

export default RestaurantDisplay