import './style.css'

const DisplayHomepage = () => {

    return (
        <>
            <div className="container shadow">
                <h1 className="col-12 text-center text-sm-start p-3 fs-3"><em className="text-primary">Scran</em>Shippers
                </h1>
            </div>
            <section className="container py-5 px-3 hero">
                <div className="container col-12 bg-light-subtle opacity-75 p-2 col-sm-6 p-sm-4">
                    <div className="row justify-content-center">
                        <h3 className="text-center text-primary fs-1">Food. Delivered.</h3>
                        <p className="lead text-center">Order your favourite food from local restaurants, right to your
                            door.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DisplayHomepage