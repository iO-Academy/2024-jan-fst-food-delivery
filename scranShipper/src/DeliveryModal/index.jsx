import { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const DeliveryModal = () => {
    return (
   <div>
       <div className="d-flex flex-column w-50 m-auto modal-content">
           <h3>Thank you</h3>
           <hr></hr>
           <p>The restaurant has received your order.</p>
           <p>Estimated time of arrival: 15:45</p>
           <ProgressBar striped variant="info" now={20}/>
           <br></br>
           <p>Your order is being prepared</p>
           <hr></hr>
           <button className="align-self-end btn btn-secondary w-25">Close</button>
       </div>
   </div>
    )
}

export default DeliveryModal