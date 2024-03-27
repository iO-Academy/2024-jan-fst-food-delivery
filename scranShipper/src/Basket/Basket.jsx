const Basket = () => {

    const makeItem = () => {
        return (
            <div className='d-flex align-items-center justify-content-between py-3'>
                <p className='col-7 m-0 fw-bold'>Chicken Sandwich</p>
                <div className='d-flex gap-2 align-items-center'>
                    <button className='col-1 px-2 w-auto btn btn-primary d-flex m-1 justify-content-center'>-</button>
                    <p className='col-1 text-center m-0'>1</p>
                    <button className='col-1 px-2 btn w-auto btn-primary d-flex m-1 justify-content-center'>+</button>
                </div>
            </div>
        )
    }

    return (
        <div className='col-md-3'>
            <div className="bg-secondary-subtle p-4 m-1 w-auto rounded">
                <h3 className='text-primary'><span className="material-symbols-outlined">shopping_cart</span> Order</h3>
                <div className='d-flex align-items-center justify-content-between py-3'>
                    <p className='col-7 m-0 fw-bold'>Chicken Sandwich</p>
                    <div className='d-flex gap-2 align-items-center'>
                        <button className='col-1 px-2 w-auto btn btn-primary d-flex m-1 justify-content-center'>-</button>
                    <p className='col-1 text-center m-0'>1</p>
                    <button className='col-1 px-2 btn w-auto btn-primary d-flex m-1 justify-content-center'>+</button>
                </div>
            </div>
                <div className='d-flex justify-content-between  py-1'>
                    <p>Sub-total:</p>
                    <p>£17.99</p>
                </div>
                <div className='d-flex justify-content-between  py-1'>
                    <p>Delivery-fee:</p>
                <p>£0.99</p>
            </div>
            <div className='d-flex justify-content-between  py-1'>
                <p>Service fee:</p>
                <p>£1.50</p>
            </div>
            <div className='d-flex justify-content-between  py-1'>
                <p className='fw-bold'>Total:</p>
                <p className='fw-bold'>£20.48</p>
            </div>
            <button className=' col-10 p-2 btn btn-success fs-4'>Place Order</button>
            </div>
        </div>
    )
}

export default Basket