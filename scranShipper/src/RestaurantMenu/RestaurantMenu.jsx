import {useEffect, useState} from "react";
const RestaurantMenu = (props) => {

    const [menus, getMenu] = useState([]);
    useEffect(() => {
        fetchMenus(props.restaurantId)
    }, []);

    const fetchMenus = (id) => {
        fetch('https://food-delivery-api.dev.io-academy.uk/restaurants/' + id).then(response => {
            return response.json();
        }).then((data) => {
            getMenu(data.foodItems);
        })
    }

    const displayMenu = (item) => {
    return (
        <div>
            <h3>{item.foodName}</h3>
            <p>Calories: {item.calories}</p>
        {item.foodType && <p>Food Type: {item.foodType}</p>}
            <div>
                <p>£{item.price}</p>
                <div>
                    <button>+</button>
                    <p>QUANTITY</p>
                    <button>-</button>
                </div>
            </div>
    </div>
    )}

    return (
        <>
            {menus.map(displayMenu)}
    </>
    )}

export default RestaurantMenu