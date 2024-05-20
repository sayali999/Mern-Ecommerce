import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidenav() {
    return (
        <>
            <aside>
                <div id='sidebar' className='d-flex flex-column flex-shrink-0 offcanvas-md offcanvas-start'>
                    {/* <Sidenav/> */}
                    <div className='sidebar-logo'>
                        <NavLink to='/home'><i className="bi bi-alexa"></i> Pabna</NavLink>
                    </div>
                    <ul className='sidebar-nav'>

                        <span className=' px-4  py-5 text-secondary'>MENU</span>

                        <li className='sidebar-item mt-3'>
                            <NavLink to='/home' className='sidebar-link'>
                                <i className="bi bi-columns-gap"></i>
                                <span>Dashboard</span>
                            </NavLink>
                        </li>



                        <li className="sidebar-item">

                            <NavLink to='' className=" sidebar-link has-dropdown collapsed" data-bs-toggle="collapse" data-bs-target="#customers" aria-expanded="false" aria-controls="customers">
                                <i className="bi bi-people"></i>
                                <span>Customers</span>
                            </NavLink>

                            <ul id="customers" className="sidebar-dropdown list-unstyled collapse" >
                                <li className='sidebar-item'>
                                    <NavLink to='/customerlist' className='sidebar-link'> <i className="bi bi-chevron-right"></i>Customer List</NavLink>
                                </li>
                                {/* <li className='sidebar-item'>
                                    <NavLink to='/addcustomer' className='sidebar-link'> <i className="bi bi-chevron-right"></i>Add Customers</NavLink>
                                </li> */}
                            </ul>
                        </li>

                        <li className="sidebar-item">

                            <NavLink to='' className=" sidebar-link has-dropdown collapsed" data-bs-toggle="collapse" data-bs-target="#category" aria-expanded="false" aria-controls="category">
                                <i className="bi bi-people"></i>
                                <span>Categories</span>
                            </NavLink>

                            <ul id="category" className="sidebar-dropdown list-unstyled collapse" >
                                <li className='sidebar-item'>
                                    <NavLink to='/categorylist' className='sidebar-link'> <i className="bi bi-chevron-right"></i>Category List</NavLink>
                                </li>
                                <li className='sidebar-item'>
                                    <NavLink to='/addcategory' className='sidebar-link'> <i className="bi bi-chevron-right"></i>Add category</NavLink>
                                </li>


                            </ul>
                        </li>
                        <li className="sidebar-item">

                            <NavLink to='' className=" sidebar-link has-dropdown collapsed" data-bs-toggle="collapse" data-bs-target="#subcategory" aria-expanded="false" aria-controls="subcategory">
                                <i className="bi bi-people"></i>
                                <span>Sub Categories</span>
                            </NavLink>

                            <ul id="subcategory" className="sidebar-dropdown list-unstyled collapse" >
                                <li className='sidebar-item'>
                                    <NavLink to='/subcategorylist' className='sidebar-link'> <i className="bi bi-chevron-right"></i>Sub Category List</NavLink>
                                </li>
                                <li className='sidebar-item'>
                                    <NavLink to='/addsubcategory' className='sidebar-link'> <i className="bi bi-chevron-right"></i>Add sub category</NavLink>
                                </li>



                            </ul>
                        </li>


                        <li className="sidebar-item">

                            <NavLink to='' className=" sidebar-link has-dropdown collapsed" data-bs-toggle="collapse" data-bs-target="#product" aria-expanded="false" aria-controls="product">
                                <i className="bi bi-cart"></i>
                                <span>Product</span>
                            </NavLink>

                            <ul id="product" className="sidebar-dropdown list-unstyled collapse" >
                                <li className='sidebar-item'>
                                    <NavLink to='/productlist' className='sidebar-link'> <i className="bi bi-chevron-right"></i>Product List</NavLink>
                                </li>
                                <li className='sidebar-item'>
                                    <NavLink to='/addproduct' className='sidebar-link'> <i className="bi bi-chevron-right"></i>Add Product</NavLink>
                                </li>
                            </ul>
                        </li>

                        <li className="sidebar-item">

                            <NavLink to='/orderlist' className=" sidebar-link" >
                                <i className="bi bi-file-earmark"></i>
                                <span>Order</span>
                            </NavLink>

                            
                        </li>

                        <li className="sidebar-item">

                            <NavLink to='/messageList' className=" sidebar-link" >
                                <i className="bi bi-card-list"></i>
                                <span>Messages</span>
                            </NavLink>


                        </li>

                    </ul>

                </div>
            </aside>
        </>
    )
}
