import BasketItem from "./BasketItem/index.jsx";

const Basket = (props) => {

    const { menu } = props
    const { updateOrder } = props

    const makeItem = () => {

       let orderArray = [];
       let itemPrice = 0;

        for (let key in props.order) {
            if (key !== 'foodPrice' && props.order[key] !== 0) {

                for (let item of menu) {
                    if (item.foodName === key) {
                        itemPrice = item.price
                    }
                }

                orderArray.push(
                    <BasketItem foodItem={key} itemPrice={itemPrice} order={props.order} updateOrder={updateOrder}/>
                )
                console.log(orderArray)
            }
        }
        return orderArray
    }

    const totalPrice = () => {
        if (props.order.foodPrice !== undefined) {
            return (
                (parseFloat(props.order.foodPrice) + 0.99 + 1.50).toFixed(2)
            )
        }
        return (
            0
        )
    }


    return (
        <div className='col-12 col-lg-4 p-5 fs-5 bg-body-secondary'>
            <h3 className='text-primary'><span className="material-symbols-outlined">shopping_cart</span> Order</h3>
            {makeItem()}
            <div className='d-flex justify-content-between  py-1'>
                <p className='col-11'>Sub-total:</p>
                <p className='col-2'>£{props.order.foodPrice}</p>
            </div>
            <div className='d-flex justify-content-between  py-1'>
                <p className='col-11'>Delivery-fee:</p>
                <p className='col-2'>£0.99</p>
            </div>
            <div className='d-flex justify-content-between  py-1'>
                <p className='col-11'>Service fee:</p>
                <p className='col-2'>£1.50</p>
            </div>
            <div className='d-flex justify-content-between  py-1'>
                <p className='col-11 fw-bold'>Total:</p>
                <p className='col-2 fw-bold'>£ {totalPrice()}</p>
            </div>
            <button className=' col-4 p-3 btn btn-success fs-3'>Place Order</button>
        </div>
    )
}

export default Basket