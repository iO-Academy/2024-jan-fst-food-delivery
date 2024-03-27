const BasketItem = () => {
    return (
        <div className='d-flex align-items-center justify-content-between py-3'>
            <p className='col-7 m-0 fw-bold'>placeChicken</p>
            <div className='d-flex gap-2 align-items-center'>
                <button className='col-1 px-2 w-auto btn btn-primary d-flex m-1 justify-content-center'>-</button>
                <p className='col-1 text-center m-0'>1</p>
                <button className='col-1 px-2 btn w-auto btn-primary d-flex m-1 justify-content-center'>+</button>
            </div>
        </div>
    )
}

export default BasketItem