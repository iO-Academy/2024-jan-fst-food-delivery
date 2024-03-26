const Basket = () => {

    const makeItem = () => {
        return (
            <div className='d-flex justify-content-between py-3'>
                <p className='col-9 m-0 fw-bold'>Chicken Sandwich</p>
                <button className='col-1 btn btn-primary'>-</button>
                <p className='col-1 text-center m-0'>1</p>
                <button className='col-1 btn btn-primary'>+</button>
            </div>
        )
    }

    return (
        <div className='container-fluid p-5 fs-5 bg-body-secondary'>
            <h3 className='text-primary'><span className="material-symbols-outlined">shopping_cart</span> Order</h3>
            <div className='d-flex justify-content-between py-3'>
                <p className='col-9 m-0 fw-bold'>Chicken Sandwich</p>
                <button className='col-1 btn btn-primary'>-</button>
                <p className='col-1 text-center m-0'>1</p>
                <button className='col-1 btn btn-primary'>+</button>
            </div>
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