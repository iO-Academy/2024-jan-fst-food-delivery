import {useEffect, useState} from "react"
import Basket from "../Basket/index.jsx"

const RestaurantMenu = (props) => {
    const [menus, setMenus] = useState([])
    const [order, setOrder] = useState({})

    const fetchMenus = (id) => {
        fetch('https://food-delivery-api.dev.io-academy.uk/restaurants/' + id)
            .then(response => response.json())
            .then(data => {
                setMenus(data.foodItems)
            });
    };

    //First checks if foodItem exists in the array and is >= 0 and is valid for subtraction
    //It then creates a temporary copy of the order array as prevOrder
    //It then updates the item corresponding to foodItem with the quantity variable
    const updateOrder = (foodItem, quantity, price) => {

        if(!(quantity < 0 && (order[foodItem] === 0 || order[foodItem] === undefined))) {

            setOrder(prevOrder => {
            const updatedQuantity = (prevOrder[foodItem] || 0) + quantity
            let updatedFoodPrice = parseFloat(prevOrder['foodPrice']) || 0.0

            if (quantity === -1) {
                updatedFoodPrice -= price // Subtract price if quantity is -1
            } else {
                updatedFoodPrice += price * quantity // Add price multiplied by quantity
            }

            return {
                ...prevOrder,
                [foodItem]: updatedQuantity,
                ['foodPrice']: updatedFoodPrice.toFixed(2)
            }
        })
        }
    }

    useEffect(() => {
        fetchMenus(props.restaurantId)
    }, [])

    const displayMenu = (item) => {

        return (
            <div className='d-flex flex-column border border-primary rounded justify-content-between m-3 col-md-3 p-3 col-12' key={item.foodName}>
                <h3 className='fs-4'>{item.foodName}</h3>
                <div className='container row d-flex'>
                    {item.calories && <p className='rounded calories text-white bg-success object-fit-scale text-no-wrap w-auto fs-6'>Calories: {item.calories}</p>}
                    {item.foodType && <p className='rounded text-white bg-primary text-no-wrap w-auto fs-6'>Food Type: {item.foodType}</p>}
                    {item.sideItem && <p className='rounded bg-warning-subtle text-no-wrap w-auto fs-6'>Side</p>}
                    {item.breakfastItem && <p className='rounded text-white bg-danger text-no-wrap w-auto'>Breakfast</p>}
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='col-6 fw-bold align-self-end'>£{item.price.toFixed(2)}</p>
                    <div className='d-flex gap-2 align-items-center'>
                        <button className='col-1 px-2 w-auto btn btn-primary d-flex m-1 justify-content-center'
                                onClick={() => updateOrder(item.foodName, -1, item.price)}>-
                        </button>
                        <p className='col-1 text-center m-0'>{order[item.foodName] || 0}</p>
                        <button className='col-1 px-2 btn w-auto btn-primary d-flex m-1 justify-content-center'
                                onClick={() => updateOrder(item.foodName, 1, item.price)}>+
                        </button>
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
                <Basket order={order} updateOrder={updateOrder} menu={menus}/>
            </div>
        )

}

export default RestaurantMenu

