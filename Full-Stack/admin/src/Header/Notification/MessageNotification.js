import React from 'react'

export default function MessageNotification() {
    return (
        <>
            <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 " style={{
                fontSize: ".84rem", minWidth: "280px"
            }}>

                <div className='px-3 p-2' style={{ fontSize: ".84rem" }}>
                    <i className="bi bi-envelope-at-fill me-2" style={{ fontSize: "1.2rem" }}></i> Gmail
                </div>
                <li className='border'>
                    <a href="#" className="dropdown-item " style={{ padding: "0.5rem 1rem" }}>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-column overflow-x-hidden">
                                <div> <span className="text-muted text-sm " style={{ fontSize: ".84rem" }}>3 mins</span></div>
                                <div>Sayali Khadse</div>
                                <div>Hello Admin, Please send me the hghjgj</div>
                            </div>
                            <div>
                                <img src="https://react-demo.tailadmin.com/assets/user-02-5a304001.png" className="img-fluid m-2" style={{ height: "35px" }} alt="..." />
                            </div>
                        </div>
                    </a>
                </li>

                <li className='border'>
                    <a href="#" className="dropdown-item " style={{ padding: "0.5rem 1rem" }}>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-column overflow-x-hidden">
                                <div> <span className="text-muted text-sm " style={{ fontSize: ".84rem" }}>3 mins</span></div>
                                <div>Sayali Khadse</div>
                                <div>Hello Admin, Please send me the details</div>
                            </div>
                            <div>
                                <img src="https://react-demo.tailadmin.com/assets/user-02-5a304001.png" className="img-fluid m-2" style={{ height: "35px" }} alt="..." />
                            </div>
                        </div>
                    </a>
                </li>

                <li className='border'>
                    <a href="#" className="dropdown-item " style={{ padding: "0.5rem 1rem" }}>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-column overflow-x-hidden">
                                <div> <span className="text-muted text-sm " style={{ fontSize: ".84rem" }}>3 mins</span></div>
                                <div>Sayali Khadse</div>
                                <div>Hello Admin, Please send me the</div>
                            </div>
                            <div>
                                <img src="https://react-demo.tailadmin.com/assets/user-02-5a304001.png" className="img-fluid m-2" style={{ height: "35px" }} alt="..." />
                            </div>
                        </div>
                    </a>
                </li>

                <li className='border'>
                    <a href="#" className="dropdown-item text-center text-danger fw-semibold" style={{ padding: "0.5rem 1rem", fontSize: ".875rem" }}>
                        <span >See All Messages</span>

                    </a>
                </li>



            </ul>

        </>
    )
}
