import {useEffect, useState} from "react";
import './style.css'
import Basket from "../Basket/Basket.jsx";
const RestaurantMenu = (props) => {

    console.log(`this is the rest prop from restuarant menu ${props.restaurantId}`);
    const [menus, getMenu] = useState([]);
    const fetchMenus = (id) => {
        fetch('https://food-delivery-api.dev.io-academy.uk/restaurants/' + id).then(response => {
            return response.json();
        }).then((data) => {
            getMenu(data.foodItems);
        })
    }

    useEffect(() => {
        fetchMenus(props.restaurantId)
    }, []);

    const displayMenu = (item) => {
    return (
        <div className='menuItem container col-lg-4 col-sm-12' key={item.foodName}>
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
                    <button className='plusMinus'>-</button>
                    <p>1</p>
                    <button className='plusMinus'>+</button>
                </div>
            </div>
    </div>
    )}

    return (
        <div className='container'>
            <div className='col-lg-8 col-12'>
                {menus.map(displayMenu)}
            </div>
            <Basket/>
        </div>
    )}

export default RestaurantMenu