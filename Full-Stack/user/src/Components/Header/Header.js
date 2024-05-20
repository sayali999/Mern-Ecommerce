import React from 'react'
import './Header.css';
import Items from '../Items/Items';
import Offers from '../Offers/Offers';
import support1 from '../Assets/support-1.png';
import support2 from '../Assets/support-2.png';
import support3 from '../Assets/support-3.png';
import support4 from '../Assets/support-4.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header id='header' className='vh-100 carousel slide' data-bs-ride="carousel" style={{ paddingTop: "104px" }}>
                <div className='container h-100 d-flex align-items-center carousel-inner'>
                    <div className='text-center carousel-item active'>
                        <h2 className='text-capitalize text-white'>Best collection</h2>
                        <h1 className='text-uppercase py-2 fw-bold text-white'>new arrivals</h1>
                        <Link to='/collection' className='btn shop-btn mt-3 text-uppercase'>shop now</Link>
                    </div>

                    <div className='text-center carousel-item '>
                        <h2 className='text-capitalize text-white'>Best price & offer</h2>
                        <h1 className='text-uppercase py-2 fw-bold text-white'>new season</h1>
                        <Link to='/collection' className='btn shop-btn mt-3 text-uppercase'>buy now</Link>
                    </div>

                </div>
                <button className='carousel-control-prev' type='button' data-bs-target="#header" data-bs-slide="prev">
                    <span className='carousel-control-prev-icon'></span>

                </button>
                <button className='carousel-control-next' type='button' data-bs-target="#header" data-bs-slide="next">
                    <span className='carousel-control-next-icon'></span>

                </button>

            </header>
            <section id='support-area '>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-lg-3 col-sm-6'>

                            <div className='support-wrap d-flex'>
                                <div className='support-icon p-3'>
                                <img src={support1} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className='support-content py-3'>
                                    <h5 style={{fontSize:"18px"}}>Free Shipping</h5>
                                    <p className='fw-bolder' style={{fontSize:"14px",color:"#adb5bd"}}>Free Shipping on all order</p>
                                </div>
                            </div>

                            
                        </div>
                        <div className='col-lg-3 col-sm-6'>

                            <div className='support-wrap d-flex'>
                                <div className='support-icon p-3'>
                                <img src={support2} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className='support-content py-3'>
                                    <h5 style={{fontSize:"18px"}}>Support 24/7</h5>
                                    <p className='fw-bolder' style={{fontSize:"14px",color:"#adb5bd"}}>Call us anytime</p>
                                </div>
                            </div>

                            
                        </div>
                        <div className='col-lg-3 col-sm-6'>

                            <div className='support-wrap d-flex'>
                                <div className='support-icon p-3'>
                                <img src={support3} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className='support-content py-3'>
                                    <h5 style={{fontSize:"18px"}}>Money Return</h5>
                                    <p className='fw-bolder' style={{fontSize:"14px",color:"#adb5bd"}}>100% Money Return</p>
                                </div>
                            </div>

                            
                        </div>
                        <div className='col-lg-3 col-sm-6'>

                            <div className='support-wrap d-flex'>
                                <div className='support-icon p-3'>
                                <img src={support4} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className='support-content py-3'>
                                    <h5 style={{fontSize:"18px"}}>Order Discount</h5>
                                    <p className='fw-bolder' style={{fontSize:"14px",color:"#adb5bd"}}>Discount up tp 60%</p>
                                </div>
                            </div>

                            
                        </div>
                    </div>

                </div>
            </section>

            <Items />
            <Offers />
        </>

    )
}

export default Header
