
import {useState} from 'react'
import RestaurantMenu from "../RestaurantMenu/index.jsx"

const RestaurantDisplay = (props) => {

    const [hidden, setHidden] = useState(false)
    const [restaurant, setRestaurant] = useState("")

    const makeRestaurant = (restaurant) => {
        return (
            <button className="col-12 p-2 m-2 col-sm-2 btn btn-outline-primary fs-3" key={restaurant.name}
                onClick={() => {
                    setHidden(!hidden)
                    setRestaurant(restaurant.id)
                }}> {restaurant.name} </button>
        )
    }
    return (
        <>
            <div className='menuWhole'>
            {hidden && <RestaurantMenu restaurantId={restaurant} visible={props.visible} setVisible={props.setVisible}/>}
            </div>
            <div className="container">
                <div className="row g-col-5 justify-content-center">
                    {!hidden && props.restaurantList.map(makeRestaurant)}
                </div>
            </div>
            {hidden && <button className='backButton' onClick={() => setHidden(!hidden)}>Back</button>}
        </>
    )
}

export default RestaurantDisplay
