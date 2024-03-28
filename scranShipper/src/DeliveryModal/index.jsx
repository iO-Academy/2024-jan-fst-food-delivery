import { useState } from 'react';
import './style.css'
import ProgressBar from 'react-bootstrap/ProgressBar';

const DeliveryModal = ({visible, setVisible}) => {

    return (
        <>
            {visible && <div className="position-fixed h-100 w-100 zindex-modal-backdrop modalBackground">
       <div className="d-flex flex-column w-50 m-auto modal-content bg-white my-4 p-4 zindex-modal modalBody rounded">
           <br></br>
           <h3>Thank you</h3>
           <hr></hr>
           <h6>The restaurant has received your order.</h6>
           <h6>Estimated time of arrival: 15:45</h6>
           <ProgressBar striped variant="info" now={20}/>
           <br></br>
           <h6>Your order is being prepared</h6>
           <hr></hr>
           <button onClick={()=> setVisible(!visible)} className="align-self-end btn btn-secondary w-25">Close</button>
       </div>
   </div>}
        </>
    )
}

export default DeliveryModal