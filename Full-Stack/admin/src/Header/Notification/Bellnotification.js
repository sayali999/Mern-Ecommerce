import React from 'react'

export default function Bellnotification() {
    return (
        <>
            <ul className="dropdown-menu dropdown-menu-lg bg-white dropdown-menu-end p-0 " style={{fontSize:".875rem",maxWidth: "300px",
    minWidth: "280px"}}>
        

                <div className='p-2 text-center' style={{fontSize:".875rem"}}>
                    Notification
                </div>
                <li className='border'>
                    <a href="/" className="dropdown-item" style={{ padding: "0.5rem 1rem"}}>
                    <i className="bi bi-envelope-fill me-2"></i> 4 new messages
                        <span className="float-end text-muted text-sm " style={{fontSize:".875rem"}}>3 mins</span>
                    </a>
                </li>
                <li className='border'>
                    <a href="/" className="dropdown-item"  style={{ padding: "0.5rem 1rem"}}>
                    <i className="bi bi-people-fill me-2"></i> 8 new user registered
                        <span className="float-end text-muted text-sm ">10 mins</span>
                    </a>
                </li>
                <li className='border'>
                    <a href="/" className="dropdown-item " style={{ padding: "0.5rem 1rem"}}>
                    <i className="bi bi-file-earmark-fill me-2"></i> 5 new orders
                        <span className="float-end text-muted text-sm " style={{fontSize:".875rem"}}>3 mins</span>
                    </a>
                </li>
                <li className='border'>
                    <a href="/" className="dropdown-item text-center text-danger fw-semibold"  style={{ padding: "0.5rem 1rem"}}>
                     <span >See All Notification</span>
                        
                    </a>
                </li>



            </ul>

        </>
    )
}
