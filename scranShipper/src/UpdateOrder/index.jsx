import {useState} from "react";

const UpdateOrder = (props) => {

    const [order, setOrder] = useState({});

    const updateOrderArray = (foodItem, quantity) => {
        if (!(quantity < 0 && (order[foodItem] === 0 || order[foodItem] === undefined))) {
            setOrder(prevOrder => ({
                ...prevOrder,
                [foodItem]: (prevOrder[foodItem] || 0) + quantity
            }));
        }
    };
    return (
        <div className='d-flex justify-content-between align-items-center'>
            <p className='col-6 fw-bold align-self-end'>£{props.price.toFixed(2)}</p>

            <div className='d-flex gap-2 align-items-center'>
                <button className='col-1 px-2 w-auto btn btn-primary d-flex m-1 justify-content-center'
                        onClick={() => updateOrderArray(props.foodName, -1)}>-
                </button>
                <p className='col-1 text-center m-0'>{order[props.foodName] || 0}</p>
                <button className='col-1 px-2 btn w-auto btn-primary d-flex m-1 justify-content-center'
                        onClick={() => updateOrderArray(props.foodName, 1)}>+
                </button>
            </div>
        </div>
    )
}

export default UpdateOrder