import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css';

import cart_icon from '../Assets/cart_icon.png';
import img from '..//Assets/p1_product.png';

import Header from '../Header/Header';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../../Context/Cart';
import { useAuth } from '../../Store/Auth';
import { WishlistContext } from '../../Context/Whishlist';

const Navbar = () => {
    const {user} = useAuth();

    const { cartItems, getCartTotal } = useContext(CartContext);
    const { wishlistItems } = useContext(WishlistContext);

    const { isLoggedIn } = useAuth();

    const [category, setCategory] = useState([]);

    const [subCategory, setSubCategory] = useState([]);


    const getCategory = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/api/form/getall-category");
            if (data.success) {
                setCategory(data.category);
            }
        } catch (error) {
            console.log(error);
        }

        //sub category 
        try {
            const { data } = await axios.get("http://localhost:5000/api/form/getall-subcategory");
            if (data.success) {
                setSubCategory(data.subCategory);
            }

        } catch (error) {
            console.log(error);
        }

    }



    useEffect(() => {
        getCategory();
    }, [])


    return (
        < >
            <nav className="navbar navbar-expand-lg bg-body-tertiary py-4">

                <div className='container'>
                    <a className="navbar-brand d-flex justify-content-between align-item-center order-lg-0" href="#">
                        <img src={cart_icon}></img>
                        <span className='text-uppercase fw-lighter ms-2'>Attire</span>
                    </a>

                    <div className='order-lg-2 d-flex'>


                        <div className="dropdown ">

                            <button type="button" className="btn dropdown-toggle  position-relative" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-cart-fill"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge bg-primary">
                                    {cartItems?.length}
                                </span>
                            </button>

                            <div className="dropdown-menu dropdown-menu-lg-end rounded" style={{ width: "300px" }}>
                                {
                                    cartItems.length > 0 ?
                                        <div>
                                            {
                                                cartItems.map((item) =>

                                                    <div >
                                                        <div className="d-flex ">
                                                            <div className='drop-img p-2 '>
                                                                <img src={`http://localhost:5000/api/form/product-photo/${item._id}`} className='img-fluid p-0 m-0' width={60} />
                                                            </div>
                                                            <div className='p-2 mx-2'>
                                                                <h6>{item.name}</h6>
                                                                <p> ${item.price} x {item.qty}  </p>
                                                            </div>
                                                            <div className='ms-auto px-4 py-3'>
                                                                <p> ${item.price}   </p>
                                                            </div>
                                                        </div>
                                                        <hr className='mx-2 my-0 p-0' />
                                                    </div>
                                                )
                                            }
                                            <div className="d-flex justify-content-between p-0 m-0">
                                                <div className='drop-img  py-2 px-4 '>
                                                    <h6>Total</h6>
                                                </div>
                                                <div className='p-2 mx-2 '>
                                                    <p> {getCartTotal()}</p>
                                                </div>
                                            </div>


                                            <div className="d-flex justify-content-between px-2 py-0 m-0">
                                                <div className='drop-img  p-2 '>
                                                    <Link to="/viewcart" type='btn' className='btn btn-outline-primary rounded-0'>View Cart</Link>
                                                </div>
                                                <div className='p-2 mx-2 '>
                                                    <Link to="/checkout" type='btn' className='btn btn-outline-success rounded-0'>Checkout</Link>
                                                </div>
                                            </div>

                                        </div>
                                        : <div className='row'>
                                            <div className='container d-flex align-items-center justify-content-center'>
                                                <div className='text-center'>
                                                    <i className="bi bi-cart3" style={{ fontSize: "80px" }}></i>
                                                    <h5>No items found in cart</h5>
                                                    <div className='add-to-cart-btn m-4'>
                                                        <Link to='/collection' type='button' className='btn bg-dark rounded-0 border-0'>Shop Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>






                        <Link to="/whishlist" type="button" className="btn position-relative">
                            <i className="bi bi-heart-fill"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge bg-primary">
                                {wishlistItems?.length}
                            </span>
                        </Link>

                        {isLoggedIn ? (
                           
                            <div className="dropdown rounded-0">
                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                               
                                <i class="bi bi-person-circle" style={{fontSize:"20px"}}></i>
                            </button>
                            <ul className="dropdown-menu rounded-0 dropdown-menu-end mt-2">
                                <li><Link className="dropdown-item py-2 px-3 border-bottom" to="">Hello, {user.username}</Link></li>
                                <li><Link className="dropdown-item py-2 px-3"  to="/myaccount/user-account">My Account</Link></li>
                                <li><Link className="dropdown-item py-2 px-3"  to="/logout">Logout</Link></li>
                                
                            </ul>
                        </div>
                        ) : (
                            <Link to='/login' type="button" className="btn px-4">
                                Login
                            </Link>
                        )
                        }
                        <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                    </div>




                    <div className="offcanvas offcanvas-end order-lg-1" tabIndex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
                        <div className="offcanvas-header">

                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item px-2 py-2">
                                    <NavLink className="nav-link  text-uppercase " aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item px-2 py-2">
                                    <NavLink className="nav-link  text-uppercase " aria-current="page" to="/collection">Collection</NavLink>
                                </li>

                                <li className="nav-item px-1 py-2 dropdown-center" id='nav-dropdown'>
                                    <a className="nav-link dropdown-toggle text-uppercase " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categories
                                    </a>
                                    <div className="dropdown-menu border-0 rounded-0 shadow mt-2 py-4" id='navbar-dropdown'>

                                        {
                                            category.map(cat => <div className=' p-0 m-0'>
                                                <h6>{cat.name}</h6>
                                                <ul>
                                                    {
                                                        subCategory.map(subcat => {
                                                            if (subcat.category._id === cat._id) {
                                                                return <li>
                                                                    <a className="dropdown-item" href="#"> {subcat.name}</a>
                                                                </li>
                                                            }
                                                        }
                                                        )
                                                    }

                                                </ul>
                                            </div>

                                            )}

                                    </div>
                                </li>
                                <li className="nav-item px-2 py-2">
                                    <NavLink className="nav-link text-uppercase " aria-current="page" to="/contactus">Contact Us</NavLink>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </nav>

            {/* <Header/> */}
        </>
    )
}

export default Navbar
