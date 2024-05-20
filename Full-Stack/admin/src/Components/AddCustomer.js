
import React, { useEffect, useState } from 'react'

import Layout from '../Layout/Layout';
import { NavLink } from 'react-router-dom';


export default function AddCustomer() {
       return (
        <Layout>


            <div className='p-3'>
                <nav id='breadcrumb' aria-label="breadcrumb" className=' py-2 fw-bold'>
                    <ol className="breadcrumb">
                        <li >
                            <span className="text-decoration-none text-dark px-2">Add Customer</span> | </li>
                        <li className="breadcrumb-item">
                            <NavLink to='/home'>  <i className="bi bi-house-door-fill text-primary px-2"></i>
                            </NavLink></li>
                        <li className="breadcrumb-item active" aria-current="page">Add Customer</li>
                    </ol>
                </nav>
                <div className='container shadow p-3 table-responsive-sm'>

                    
                </div>
            </div>

        </Layout>

    )
}

