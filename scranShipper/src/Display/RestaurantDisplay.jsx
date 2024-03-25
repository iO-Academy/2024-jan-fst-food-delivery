function RestaurantDisplay(){
    const makeRestaurant = (restaurant) => {
        return (<>
        <button onClick={}> {restaurant.name} </button>
        </>)
    }

    return (
        <>
            {restaurants.map(makeRestaurant)
            }
        </>
    )
}

export default RestaurantDisplay