import BasketItem from "./BasketItem/index.jsx";

const Basket = (props) => {

    const { menu } = props
    const { updateOrder } = props
    const { order } = props

    const makeItem = () => {

       let orderArray = [];
       let itemPrice = 0;

        for (let foodItem in order) {
            if (foodItem !== 'foodPrice' && order[foodItem] !== 0) {

                for (let item of menu) {
                    if (item.foodName === foodItem) {
                        itemPrice = item.price
                    }
                }

                orderArray.push(
                    <BasketItem foodItem={foodItem} itemPrice={itemPrice} order={order} updateOrder={updateOrder}/>
                )
            }
        }
        return orderArray
    }

    const totalPrice = () => {
        if (order.foodPrice !== undefined) {
            return (
                (parseFloat(order.foodPrice) + 0.99 + 1.50).toFixed(2)
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
                <p className='col-2'>£{order.foodPrice}</p>
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