import React from 'react';
import './Offers.css'
import { Link } from 'react-router-dom';

const Offers = () => {
    return (
        < >
            <section id='offer' className='py-5'>
                <div className='container'>
                    <div className='row d-flex align-items-center text-center justify-content-lg-start text-lg-start'>
                        <div className='offer-content'>
                            <span className='text-white'>Discount upto 40%</span>
                            <h2 className='mt-2 mb-4 text-white '> Grand Sale Offer</h2>
                            <Link to='/collection' className='btn text-dark rounded-pill shadow px-4 py-2'>Buy Now</Link>
                        </div>

                    </div>
                </div>

            </section>

            <section id='newsletter' className='py-5'>
                <div className='container'>
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <div className='text-center pt-3 pb-5'>
                            <h2 className='position-relative d-inline-block ms-4'>
                                Newsletter Subscription
                            </h2>
                        </div>
                        <p className='text-center text-muted mb-5'>
                        Get E-mail updates about our latest shop and special offers.
                        </p>
                        <div className="input-group mb-3" style={{maxWidth:"450px"}}>
                            <input type="text" className="form-control rounded-0" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-outline-secondary rounded-0 text-uppercase" type="button" id="button-addon2">Subscribe</button>
                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}

export default Offers
