
function RestaurantDisplay(props) {
    const makeRestaurant = (restaurant) => {
        return (
            <button className="col-12 p-2 m-2 col-sm-2 btn btn-outline-primary fs-3"> {restaurant.name}</button>
        )
    }
    return (
        <>
            <div className="container">
                <div className="row g-col-5 justify-content-center">
                        {props.restaurantList.map(makeRestaurant)}
                </div>
            </div>
        </>
    )
}

export default RestaurantDisplay