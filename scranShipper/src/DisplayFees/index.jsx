const DisplayFees = (props) => {
    const bold = (props.feeType === 'Total:') ? 'fw-bold' : ''
    return (
        <div className='d-flex justify-content-between py-1'>
            <p className={bold}>{props.feeType}</p>
            <p className={bold}>{props.feePrice}</p>
        </div>
        )
}

export default DisplayFees