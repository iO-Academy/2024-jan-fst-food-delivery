import {useState, useEffect} from "react";
import BasketItem from "./BasketItem/index.jsx"
import DisplayFees from "../DisplayFees/index.jsx"

const Basket = (props) => {

    const {menu, updateOrder, order} = props

    const makeItem = () => {

        let orderArray = []
        let itemPrice = 0

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
        return order.foodPrice !== undefined ? (parseFloat(order.foodPrice) + 0.99 + 1.50).toFixed(2) : 0
    }

    const [orderState, setOrderState] = useState([])

       const sendOrder = async () => {
           const response = await fetch('https://food-delivery-api.dev.io-academy.uk/orders',
               {
                   method: 'POST',
                   body: JSON.stringify({
                       "items": [],
                       "total": 0
                   }), headers: {
                       'content-type': 'application/json'
                   }
               })
           const orderJson = await response.json();
           setOrderState(orderJson);
       }

useEffect(() => {
    sendOrder()},[])

    return (
        <div className='col-md-3'>
            <div className="bg-secondary-subtle p-4 m-1 w-auto rounded">
                <h3 className='text-primary'><span className="material-symbols-outlined">shopping_cart</span> Order</h3>
                {makeItem()}
                <DisplayFees feeType={'Sub-Total:'} feePrice={order.foodPrice}/>
                <DisplayFees feeType={'Delivery Fee:'} feePrice={'£0.99'}/>
                <DisplayFees feeType={'Service Fee:'} feePrice={'£1.50'}/>
                <DisplayFees feeType={'Total:'} feePrice={totalPrice()}/>
                <button onClick={sendOrder} className=' col-10 p-2 btn btn-success fs-4'>Place Order</button>
            </div>
        </div>
    )

}
export default Basket