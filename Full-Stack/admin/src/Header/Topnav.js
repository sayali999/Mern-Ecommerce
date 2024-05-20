import React from 'react'
import Bellnotification from './Notification/Bellnotification'
import MessageNotification from './Notification/MessageNotification'
import Profilenotification from './Notification/Profilenotification'



export default function Topnav() {

  
  return (
    <div className='shadow p-0 m-0'>
      
      <nav className="navbar bg-tertiary">
                    <div className="container-fluid">

                        <div className="navbar-brand " >
                            <div className='text-black  d-none d-sm-block d-md-none'  data-bs-toggle="offcanvas" data-bs-target="#sidebar">
                                <i className="bi bi-filter-left"></i>
                            </div>
                        </div>
                        <ul className="nav " id="topnav">
                            {/* <li className="nav-item me-2">
                                <div className="dropdown">
                                    <button className="btn  dropdown-toggle position-relative" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="bi bi-bell-fill" style={{ fontSize: "22px" }}></i>
                                        <span className="position-absolute  top-0 end-0 badge rounded-pill bg-primary">
                                            4
                                            <span className="visually-hidden">unread messages</span>
                                        </span>
                                    </button>
                                    <Bellnotification/>
                                </div>
                            </li> */}
                            {/* <li className="nav-item me-2">
                                <div className="dropdown">
                                    <button className="btn  dropdown-toggle position-relative" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="bi bi-chat-dots" style={{ fontSize: "22px" }}></i>
                                        <span className="position-absolute top-0 end-0  badge rounded-pill bg-primary">
                                            9
                                            <span className="visually-hidden">unread messages</span>
                                        </span>
                                    </button>
                                    
                                   <MessageNotification/>
                                </div>
                            </li> */}
                            <li className="nav-item me-3">
                                <div className="dropdown">
                                    <button className="btn  dropdown-toggle position-relative" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://react-demo.tailadmin.com/assets/user-02-5a304001.png" className="img-fluid" style={{ height: "35px" }} alt="..." />    
                                    </button>          
                                   <Profilenotification/>
                                </div>
                            </li>
                           

                        </ul>

                    </div>
                </nav>
    </div>
  )
}
