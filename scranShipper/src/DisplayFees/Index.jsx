const DisplayFees = (props) => {
    if (props.feeType === 'Total:') {
    return (
            <div className='d-flex justify-content-between  py-1'>
                <p className='fw-bold'>{props.feeType}</p>
                <p className='fw-bold'>{props.feePrice}</p>
            </div>
    )} else {
        return (
            <div className='d-flex justify-content-between  py-1'>
                <p>{props.feeType}</p>
                <p>{props.feePrice}</p>
            </div>
        )
    }
}

export default DisplayFees;