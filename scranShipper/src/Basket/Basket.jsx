
import updateOrder from "../RestaurantMenu/index.jsx";
const Basket = (props) => {

    const { menu } = props
    const { updateOrder } = props

    const makeItem = () => {

       let orderArray = [];
       let itemPrice = 0;

        for (let key in props.order) {
            if (key !== 'foodPrice') {

                for (let item of menu) {
                    if (item.foodName === key) {
                        itemPrice = item.price
                    }
                }

                orderArray.push(
                    <div className='d-flex justify-content-between py-3'>
                        <p className='col-9 m-0 fw-bold'>{key}</p>
                        <button className='col-1 btn btn-primary' onClick={() => updateOrder(key, -1, itemPrice)}>-</button>
                        <p className='col-1 text-center m-0'>{props.order[key]}</p>
                        <button className='col-1 btn btn-primary'  onClick={() => updateOrder(key, +1, itemPrice)}>+</button>
                    </div>
                )
            }
        }
        return orderArray
    }


    return (
        <div className='col-12 col-lg-4 p-5 fs-5 bg-body-secondary'>
            <h3 className='text-primary'><span className="material-symbols-outlined">shopping_cart</span> Order</h3>
            {makeItem()}
            <div className='d-flex justify-content-between  py-1'>
                <p className='col-11'>Sub-total:</p>
                <p className='col-2'>£17.99</p>
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
                <p className='col-2 fw-bold'>£20.48</p>
            </div>
            <button className=' col-4 p-3 btn btn-success fs-3'>Place Order</button>
        </div>
    )
}

export default Basket