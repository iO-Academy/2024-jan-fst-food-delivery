import BasketItem from '../BasketItem/index.jsx'
import DisplayFees from "../DisplayFees/index.jsx";
import {useState, useEffect} from "react";

const Basket = (props) => {

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
           props.setVisible(!props.visible);
       }

    return (
        <div className='col-md-3'>
            <div className="bg-secondary-subtle p-4 m-1 w-auto rounded">
                <h3 className='text-primary'><span className="material-symbols-outlined">shopping_cart</span> Order</h3>
                <BasketItem/>
                <DisplayFees feeType={'Sub-Total:'} feePrice={'placeData'}/>
                <DisplayFees feeType={'Delivery Fee:'} feePrice={'£0.99'}/>
                <DisplayFees feeType={'Service Fee:'} feePrice={'£1.50'}/>
                <DisplayFees feeType={'Total:'} feePrice={'sum'}/>
                <button onClick={sendOrder} className=' col-10 p-2 btn btn-success fs-4'>Place Order</button>
            </div>
        </div>
    )
}

export default Basket