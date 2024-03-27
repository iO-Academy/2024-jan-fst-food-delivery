import {useEffect, useState} from "react";
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
        <div className=' d-flex flex-column border border-primary rounded justify-content-between m-3 col-md-3 p-3 col-12' key={item.foodName}>
            <h3 className='fs-4'>{item.foodName}</h3>
            <div className=' container row d-flex'>
                {item.calories &&  <p className='rounded calories text-white bg-success object-fit-scale text-no-wrap w-auto fs-6'>Calories: {item.calories}</p>}
                {item.foodType && <p className='rounded text-white bg-primary text-no-wrap w-auto fs-6'>Food Type: {item.foodType}</p>}
                {item.sideItem && <p className='rounded bg-warning-subtle text-no-wrap w-auto fs-6'>Side</p>}
                {item.breakfastItem && <p className='rounded text-white bg-danger-subtle text-no-wrap w-auto'>Breakfast</p>}
            </div>
            <div className='d-flex justify-content-between align-items-center'>
                <p className='col-6 fw-bold align-self-end'>£{item.price.toFixed(2)}</p>

                <div className='d-flex gap-2 align-items-center'>
                    <button className='col-1 px-2 w-auto btn btn-primary d-flex m-1 justify-content-center'>-</button>
                    <p className='col-1 text-center m-0'>1</p>
                    <button className='col-1 px-2 btn w-auto btn-primary d-flex m-1 justify-content-center'>+</button>
                </div>

            </div>
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

export default RestaurantMenu