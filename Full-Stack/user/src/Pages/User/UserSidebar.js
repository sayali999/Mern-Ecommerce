import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './User.css';
import userimg from '../../Components/Assets/user1.jpg';
import { useAuth } from '../../Store/Auth';

const UserSidebar = (activepage) => {

    const {user} = useAuth();
  
    return (
        <div className='user-side-bar border' style={{boxShadow: "0 .3rem 1.525rem -.375rem rgba(0,0,0,.1"}}>
            
             <div className='d-flex p-3 g-2'>
                <div>
                <img src={userimg} alt={userimg} className='img-fluid rounded-circle' ></img>
                </div>
                <div className='p-3'>
                    <h6>{user.username}</h6>
                    <p>{user.email}</p>
                   
                </div>
            </div>

            <div className=' p-3' id='dashboard' >
                <h6>Dashboard</h6>
            </div>
            <ul className="nav flex-column">
                <li className="nav-item p-2 border-bottom">
                    <NavLink className="nav-link " aria-current="page" to="/myaccount/user-account"> <i className="bi bi-person-gear"></i> Account</NavLink>
                </li>
                <li className="nav-item p-2 border-bottom">
                    <NavLink className="nav-link" to="/myaccount/user-address"><i className="bi bi-map"></i> Addresses</NavLink>
                </li>
                <li className="nav-item p-2 border-bottom">
                    <NavLink className="nav-link" to="/myaccount/user-order"><i className="bi bi-bag"></i> Order</NavLink>
                </li>
                {/* <li className="nav-item p-2 border-bottom">
                    <NavLink className="nav-link" to="/myaccount/user-payment"> <i className="bi bi-credit-card"></i> Payment</NavLink>
                </li> */}
                <li className="nav-item p-2 border-bottom">
                    <NavLink className="nav-link" to="/whishlist"><i className="bi bi-heart"></i> Whishlist</NavLink>
                </li>
                <li className="nav-item p-2 border-bottom">
                    <NavLink className="nav-link" to="/logout"><i className="bi bi-box-arrow-left"></i> Sign Out</NavLink>
                </li>
            </ul>

        </div>
    )
}

export default UserSidebar
