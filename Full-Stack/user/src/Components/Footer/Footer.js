import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className='bg-dark py-5 '>
                <div className='container'>
                    <div className='row text-white g-4'>
                        <div className='col-md-6 col-lg-3 px-3'>
                            <a className='text-uppercase text-decoration-none text-white brand'>Attire</a>
                            <p className=' text-white mt-3'>
                            Albert Street, New York, As 756, United States of America
                            Albert Street, New York, As 756, United States of America
                            </p>
                        </div>
                        <div className='col-md-6 col-lg-3 px-3'>
                            <h5 className='fw-light'>Links</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item ">
                                    <Link className="nav-link text-white m-0 px-0" to="/">
                                        <i className="bi bi-chevron-right"></i>
                                        Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white m-0 px-0" to="/collection">
                                        <i className="bi bi-chevron-right"></i>
                                        Collection
                                        </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white m-0 px-0" to="/contactus"><i className="bi bi-chevron-right"></i>
                                    Contact us
                                    </Link>
                                </li>

                            </ul>
                        </div>
                        <div className='col-md-6 col-lg-3 px-3'>
                            <h5 className='fw-light'>Contact Us</h5>
                            <div className="d-flex justify-content-start align-items-start text-white">
                                <span className='me-3'>
                                    <i className="bi bi-geo-alt"></i>
                                </span>
                                <span>Albert Street, New York, As 756, United States of America</span>
                            </div>
                            <div className="d-flex justify-content-start align-items-start my-2 text-white">
                                <span className='me-3'>
                                    <i className="bi bi-geo-alt"></i>
                                </span>
                                <span>attire.support@gmail.com</span>
                            </div>
                            <div className="d-flex justify-content-start align-items-start my-2 text-white">
                                <span className='me-3'>
                                    <i className="bi bi-geo-alt"></i>
                                </span>
                                <span>+91 9405436999</span>
                            </div>
                        </div>

                        <div className='col-md-6 col-lg-3 px-3'>
                            <h5 className='fw-light'>Follow Us</h5>
                            <div className="d-flex justify-content-start align-items-start my-2 text-white">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <Link className="nav-link text-white fs-5 fw-bold " to="https://www.facebook.com">
                                        <i className="bi bi-facebook"></i>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white fs-5 fw-bold " to="https://www.instagram.com">
                                        <i className="bi bi-instagram"></i>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white fs-5 fw-bold " to="https://www.twitter.com">
                                        <i className="bi bi-twitter"></i>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white fs-5 fw-bold"  to='https://www.youtube.com'>
                                        <i className="bi bi-youtube"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </footer>

        </>
    )
}

export default Footer



