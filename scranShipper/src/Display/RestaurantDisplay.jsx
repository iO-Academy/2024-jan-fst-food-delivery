function RestaurantDisplay(props){
    const makeRestaurant = (restaurant) => {
        return (<>
        <button> {restaurant.name} </button>
        </>)
    }

    return (
        <>
            {props.restaurantList.map(makeRestaurant)
            }
        </>
    )
}

export default RestaurantDisplay