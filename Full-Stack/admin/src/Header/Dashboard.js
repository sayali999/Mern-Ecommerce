import React from 'react'

export default function Dashboard() {
    return (
        <div className='p-3'>
            <nav id='breadcrumb' aria-label="breadcrumb" className=' py-2 fw-bold'>
                <ol className="breadcrumb">
                    <li ><a href="#" className="text-decoration-none text-dark px-2">Dashboard</a></li>
                </ol>
            </nav>
            <div className='container-fluid shadow mt-4'>

                <div className="row row-cols-1 row-cols-md-4 row-cols-sm-2 row-cols-xs-2 row-cols-1 g-4">
                    
                  
                <div className="col">
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-3 col-3 d-flex align-items-center justify-content-center">
                                        <i className="bi bi-people-fill p-3" style={{color:'#727cf5',backgroundColor:'rgba(114, 124, 245,.25)'}}></i>
                                </div>
                                <div className="col-md-9 col-9">
                                    <div className="card-body">
                                        <h5 className="card-title">Customers</h5>
                                        <p className="card-text">36,254</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary me-2 fs-6"> <i className="bi bi-arrow-down "></i>  5.27% </small> 
                                        <small className="text-body-secondary"> Since last month</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><div className="col">
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-3 col-3 d-flex align-items-center justify-content-center">
                                        <i className="bi bi-people-fill p-3" style={{color:'#727cf5',backgroundColor:'rgba(114, 124, 245,.25)'}}></i>
                                </div>
                                <div className="col-md-9 col-9">
                                    <div className="card-body">
                                        <h5 className="card-title">Customers</h5>
                                        <p className="card-text">36,254</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary me-2 fs-6"> <i className="bi bi-arrow-down "></i>  5.27% </small> 
                                        <small className="text-body-secondary"> Since last month</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><div className="col">
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-3 col-3 d-flex align-items-center justify-content-center">
                                        <i className="bi bi-people-fill p-3" style={{color:'#727cf5',backgroundColor:'rgba(114, 124, 245,.25)'}}></i>
                                </div>
                                <div className="col-md-9 col-9">
                                    <div className="card-body">
                                        <h5 className="card-title">Customers</h5>
                                        <p className="card-text">36,254</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary me-2 fs-6"> <i className="bi bi-arrow-down "></i>  5.27% </small> 
                                        <small className="text-body-secondary"> Since last month</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><div className="col">
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-3 col-3 d-flex align-items-center justify-content-center">
                                        <i className="bi bi-people-fill p-3" style={{color:'#727cf5',backgroundColor:'rgba(114, 124, 245,.25)'}}></i>
                                </div>
                                <div className="col-md-9 col-9">
                                    <div className="card-body">
                                        <h5 className="card-title">Customers</h5>
                                        <p className="card-text">36,254</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary me-2 fs-6"> <i className="bi bi-arrow-down "></i>  5.27% </small> 
                                        <small className="text-body-secondary"> Since last month</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
