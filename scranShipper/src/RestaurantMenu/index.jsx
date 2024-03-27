import {useEffect, useState} from "react";
import './style.css'

import Basket from "../Basket/Basket.jsx";

const RestaurantMenu = (props) => {
    const [menus, setMenus] = useState([]);
    const [order, setOrder] = useState({});

    useEffect(() => {
        fetchMenus(props.restaurantId);
    }, []);

    const fetchMenus = (id) => {
        fetch('https://food-delivery-api.dev.io-academy.uk/restaurants/' + id)
            .then(response => response.json())
            .then(data => {
                setMenus(data.foodItems);
            });
    };

    //First checks if foodItem exists in the array and is >= 0 and is valid for subtraction
    //It then creates a temporary copy of the order array as prevOrder
    //It then updates the item corresponding to foodItem with the quantity variable
    const updateOrder = (foodItem, quantity, price) => {

        if(!(quantity < 0 && (order[foodItem] === 0 || order[foodItem] === undefined))) {

            setOrder(prevOrder => {
            const updatedQuantity = (prevOrder[foodItem] || 0) + quantity;
            let updatedFoodPrice = prevOrder['foodPrice'] || 0;

            if (quantity === -1) {
                updatedFoodPrice -= price; // Subtract price if quantity is -1
            } else {
                updatedFoodPrice += price * quantity; // Add price multiplied by quantity
            }

            return {
                ...prevOrder,
                [foodItem]: updatedQuantity,
                ['foodPrice']: updatedFoodPrice
            };
        });
        }
            console.log(order)
    }

    useEffect(() => {
        fetchMenus(props.restaurantId)
    }, []);

    const displayMenu = (item) => {

        return (
            <div className='menuItem' key={item.foodName}>
                <h3 className='name'>{item.foodName}</h3>
                <div className='info'>
                    {item.calories &&  <p className='calories'>Calories: {item.calories}</p>}
                    {item.foodType && <p className='type'>Food Type: {item.foodType}</p>}
                    {item.sideItem && <p className='isSide'>Side</p>}
                    {item.breakfastItem && <p className='isBreakfast'>Breakfast</p>}
                </div>
                <div className='bottom'>
                    <p className='price'>£{item.price.toFixed(2)}</p>
                    <div className='buttonsAndQuantity'>
                        <button className='plusMinus' onClick={() => updateOrder(item.foodName, -1, item.price.toFixed(2))}>-</button>
                        <p>{order[item.foodName] || 0}</p>
                        <button className='plusMinus' onClick={() => updateOrder(item.foodName, 1, item.price.toFixed(2))}>+</button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className='container'>
            <div className='col-lg-8 col-12'>
                {menus.map(displayMenu)}
            </div>
            <Basket order={order} updateOrder={updateOrder} menu={menus}/>
        </div>
    )
};

export default RestaurantMenu;
