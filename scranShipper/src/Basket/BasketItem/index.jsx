const BasketItem = (props) => {

    const {updateOrder} = props

    return (
        <div className='d-flex align-items-center justify-content-between py-3'>
            <p className='col-7 m-0 fw-bold'>{props.foodItem}</p>
            <div className='d-flex gap-2 align-items-center'>
                <button className='col-1 px-2 w-auto btn btn-primary d-flex m-1 justify-content-center'
                        onClick={() => updateOrder(props.foodItem, -1, props.itemPrice)}>-
                </button>
                <p className='col-1 text-center m-0'>{props.order[props.foodItem]}</p>
                <button className='col-1 px-2 btn w-auto btn-primary d-flex m-1 justify-content-center'
                        onClick={() => updateOrder(props.foodItem, +1, props.itemPrice)}>+
                </button>
            </div>
        </div>
    )
}


export default BasketItem


