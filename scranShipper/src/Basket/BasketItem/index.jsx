import {useState} from "react";

const BasketItem = (props) => {

    const { updateOrder } = props

    return (
        <div className='d-flex justify-content-between py-3'>
            <p className='col-9 m-0 fw-bold'>{props.foodItem}</p>
            <button className='col-1 btn btn-primary' onClick={() => updateOrder(props.foodItem, -1, props.itemPrice)}>-</button>
            <p className='col-1 text-center m-0'>{props.order[props.foodItem]}</p>
            <button className='col-1 btn btn-primary' onClick={() => updateOrder(props.foodItem, +1, props.itemPrice)}>+</button>
        </div>
    )
}

export default BasketItem