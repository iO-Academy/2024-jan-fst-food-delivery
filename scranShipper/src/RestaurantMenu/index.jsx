import {useEffect, useState} from "react";
import Basket from "../Basket/index.jsx";
import UpdateOrder from "../UpdateOrder/index.jsx";

const RestaurantMenu = (props) => {
    const [menus, setMenus] = useState([]);


    const fetchMenus = (id) => {
        fetch('https://food-delivery-api.dev.io-academy.uk/restaurants/' + id)
            .then(response => response.json())
            .then(data => {
                setMenus(data.foodItems);
            });
    };

    useEffect(() => {
        fetchMenus(props.restaurantId);
    }, []);

    const displayMenu = (item) => {
        return (
            <div className='d-flex flex-column border border-primary rounded justify-content-between m-3 col-md-3 p-3 col-12' key={item.foodName}>
                <h3 className='fs-4'>{item.foodName}</h3>
                <div className='container row d-flex'>
                    {item.calories &&
                        <p className='rounded calories text-white bg-success object-fit-scale text-no-wrap w-auto fs-6'>Calories: {item.calories}</p>}
                    {item.foodType && <p className='rounded text-white bg-primary text-no-wrap w-auto fs-6'>Food
                        Type: {item.foodType}</p>}
                    {item.sideItem && <p className='rounded bg-warning-subtle text-no-wrap w-auto fs-6'>Side</p>}
                    {item.breakfastItem &&
                        <p className='rounded text-white bg-danger text-no-wrap w-auto'>Breakfast</p>}
                </div>
                <UpdateOrder price={item.price} foodName={item.foodName}/>
            </div>
        )
    }
    return (
        <div className='m-3 container-fluid row'>
            <div className='row justify-content-evenly col-md-9 col-12'>
                {menus.map(displayMenu)}
            </div>
            <Basket/>
        </div>
    )
}

export default RestaurantMenu;
