const BasketItem = ({updateOrder, foodItem, itemPrice, order}) => {

    return (
        <div className='d-flex align-items-center justify-content-between py-3'>
            <p className='col-7 m-0 fw-bold'>{foodItem}</p>
            <div className='d-flex gap-2 align-items-center'>
                <button className='col-1 px-2 w-auto btn btn-primary d-flex m-1 justify-content-center'
                        onClick={() => updateOrder(foodItem, -1, itemPrice)}>-
                </button>
                <p className='col-1 text-center m-0'>{order[foodItem]}</p>
                <button className='col-1 px-2 btn w-auto btn-primary d-flex m-1 justify-content-center'
                        onClick={() => updateOrder(foodItem, +1, itemPrice)}>+
                </button>
            </div>
        </div>
    )
}


export default BasketItem


