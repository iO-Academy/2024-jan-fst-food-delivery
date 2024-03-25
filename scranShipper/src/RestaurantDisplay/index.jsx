
import {useState} from 'react';

const RestaurantDisplay = (props) => {

    const [hidden, setHidden] = useState(false);

    const makeRestaurant = (restaurant) => {
        return (
        <button className="col-12 p-2 m-2 col-sm-2 btn btn-outline-primary fs-3" key={restaurant.name} onClick={() => {
            setHidden(!hidden)
        }}> {restaurant.name} </button>
        )
    }
    return (
        <>
            <div className="container">
                <div className="row g-col-5 justify-content-center">
                    {!hidden && props.restaurantList.map(makeRestaurant)}
                </div>
            </div>

            {hidden && <RestaurantMenu restaurantId={restaurant.id}/>}
            {hidden && <button onClick={() => setHidden(!hidden)}>Back</button>}
        </>
    )
}

export default RestaurantDisplay
