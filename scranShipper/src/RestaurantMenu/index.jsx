import {useEffect, useState} from "react";
import './style.css'
const Index = (props) => {

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
        <div className='menuItem'>
            <h3 className='name'>{item.foodName}</h3>
            <div className='info'>
            <p className='calories'>Calories: {item.calories}</p>
                {item.foodType && <p className='type'>Food Type: {item.foodType}</p>}
                {item.sideItem && <p className='isSide'>Side</p>}
                {item.breakfastItem && <p className='isBreakfast'>Breakfast</p>}
            </div>
            <div className='bottom'>
                <p className='price'>£{item.price}</p>
                <div className='buttonsAndQuantity'>
                    <button className='button'>-</button>
                    <p>1</p>
                    <button className='button'>+</button>
                </div>
            </div>
    </div>
    )}

    return (
        <>
            {menus.map(displayMenu)}
    </>
    )}

export default Index