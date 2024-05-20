import React  from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../Store/Auth'

export default function Profilenotification() {

    
     const { user } = useAuth();
    
    return (
        <>
            <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 " style={{
                fontSize: ".875rem", maxWidth: "250px",
                minWidth: "250px"
            }}>


                <div className='p-2 text-center'>
                    <img src="https://react-demo.tailadmin.com/assets/user-02-5a304001.png" className="img-fluid m-2" style={{ height: "65px" }} alt="..." />
                    <li>

                        <div className="d-flex flex-column text-center" style={{ padding: "0.5rem 1rem" }}>
                            <div>
                                <span className='fw-bold text-capitalize'>{user.username}</span>
                            </div>
                            <div>
                                <span className='text-muted fw-semibold'>{user.email}</span>
                            </div>
                        </div>

                    </li>
                </div>


                <div className='pb-3'>
                    <li className='border-top'>
                        <NavLink to='/myaccount' className="dropdown-item" style={{ padding: "0.5rem 1rem" }}>
                            <i className="bi bi-person me-2 text-muted fw-bold"></i> My Account

                        </NavLink>
                    </li>
                    {/* <li >
                        <NavLink to='' className="dropdown-item " style={{ padding: "0.5rem 1rem" }}>
                            <i className="bi bi-gear me-2 text-muted fw-bold"></i> Setting
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to='' className="dropdown-item " style={{ padding: "0.5rem 1rem" }}>
                            <i className="bi bi-repeat me-2 text-success fw-bold"></i> Switch User
                        </NavLink>
                    </li> */}

                    <li >
                        <NavLink to='/logout' className="dropdown-item " style={{ padding: "0.5rem 1rem" }}>
                            <i className="bi bi-box-arrow-right me-2  fw-bold "></i> Logout
                        </NavLink>
                    </li>
                </div>



            </ul>

        </>
    )
}
