import React, { useContext, useEffect, useState } from 'react'
import { useAuth } from '../../Store/Auth';
import { useCheckout } from '../../Context/Checkout';
import { CartContext } from '../../Context/Cart';
import axios from 'axios';
import DropIn from 'braintree-web-drop-in-react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Checkout = () => {
    const navigate = useNavigate();

    const { cartItems, getCartTotal, clearCart } = useContext(CartContext);

    const [clientToken, setClientToken] = useState('');
    const [instance, setInstance] = useState("");
    const [loading, setLoading] = useState(false);
    const [userid, setUserid] = useState('');

    const [tax, SetTax] = useState("100");

    //total price
    //   const totalPrice = () => {
    //     try {
    //       let total = 0;

    //       cart?.map(item => {
    //         total = total + (item.price * item.qty);
    //       })
    //       return total
    //     } catch (error) {

    //     }
    //   }

    //   const grandTotal = () => {
    //     try {
    //       let grandTotal = 0;
    //       grandTotal = totalPrice() + parseInt(tax);
    //       return grandTotal
    //     } catch (error) {

    //     }
    //   }


    //state
    const options = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Redux",
    ];

    const [contact, setContact] = useState({
        username: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: ""
    });


    const { user } = useAuth();
    const { isLoggedIn } = useAuth();

    const [address, setAddress] = useState({
        username: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: ""
    });
    //show add address div
    const [showResults, setShowResults] = useState(false);


    const handleInput = (e) => {
        console.log(e.target.value)
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact, [name]: value,
        })
    }

    const addAddress = async () => {
        try {
            const { data } = await axios.put(`http://localhost:5000/api/auth/user/${user._id}`, contact);
            if (data.success) {
                // console.log(data.message);
                navigate("/checkout");
            }

        } catch (error) {
            console.log(error);
        }
    }

    // console.log("contact",contact);

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {

           
            setLoading(true)
            const { nonce } = await instance.requestPaymentMethod();
            setUserid(user._id);
            const { data } = await axios.post('http://localhost:5000/api/form/braintree/payment', { nonce, cartItems, user, address });
            console.log("data",data);
            setLoading(false)
            clearCart();
            Swal.fire({
                title: "Congratulation!",
                text: "You order has been placed!",
                icon: "success",
                showConfirmButton: false,
                timer: 1500
            });
            // localStorage.removeItem('cart')
            // setCart([]);
            navigate("/")


        } catch (error) {
            console.log(error);
            setLoading(false)

        }
    }

    //get payment gateway token
    const getToken = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/api/form/braintree/token');
            setClientToken(data?.clientToken);
            console.log(clientToken);
        } catch (error) {
            console.log(error);
        }
    }



    useEffect(() => {
        getToken();
    }, [])

    return (
        <section>
            {!isLoggedIn ? navigate("/login")
                : (<div className='container p-5 my-5'>
                    {
                        cartItems?.length > 0 ?
                            <div className='row'>
                                <div className='col-lg-7  '>

                                    <div className='billing-details px-2 '>
                                        <h5 className='mb-4'>Billing Details</h5>
                                        <div className='my-5'>
                                            {
                                                user?.shipping_address?.map((i, index) =>
                                                (
                                                    <div className="form-check border shadow-sm px-5 py-3 mx-1 my-3" onClick={() => {
                                                        setAddress({
                                                            ...address,
                                                            username: i.username,
                                                            phone: i.phone,
                                                            address: i.address,
                                                            city: i.city,
                                                            state: i.state,
                                                            zip: i.zip
                                                        });
                                                        // console.log(address);
                                                    }}
                                                    >
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id={i._id} defaultChecked
                                                        />
                                                        <label className="form-check-label w-100 px-3 py-0" htmlFor={i._id} style={{ cursor: "pointer" }}>
                                                            <div>
                                                                <h6 className='text-capitalize'>{i.username}</h6>
                                                            </div>
                                                            <div className='d-flex flex-column'>
                                                                <span>{i.address}</span>
                                                                <span>{i.city}, {i.state} - {i.zip}</span>
                                                            </div>
                                                            <div className='text-capitalize'>
                                                                Mobile: <span>{i.phone}</span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                )
                                                )
                                            }
                                            <div className='text-danger p-4 m-1' style={{ border: '1px dashed gray', cursor: "pointer" }}>
                                                <h6 onClick={() => setShowResults(true)}> <i className="bi bi-plus"></i> Add New Address</h6>
                                            </div>
                                        </div>
                                        {
                                            showResults && <form className="row g-3">
                                                <div className="col-md-6">
                                                    <label for="firstname" className="form-label">First Name</label>
                                                    <input type="text" className="form-control rounded-0 py-2 py-2" name='username' value={contact.username} onChange={handleInput} id="firstname" />
                                                </div>

                                                <div className="col-md-6">
                                                    <label for="phone" className="form-label">Phone</label>
                                                    <input type="text" className="form-control rounded-0 py-2" id="phone" name='phone' value={contact.phone} onChange={handleInput} />
                                                </div>

                                                <div className="col-12">
                                                    <label for="inputAddress" className="form-label">Street Address</label>
                                                    <input type="text" className="form-control rounded-0 py-2 mb-3" id="inputAddress" name='address' placeholder="House number and street name" value={contact.address} onChange={handleInput} />
                                                </div>

                                                <div className="col-md-6">
                                                    <label for="inputCity" className="form-label">City</label>
                                                    <input type="text" className="form-control rounded-0 py-2" id="inputCity" name='city' value={contact.city} onChange={handleInput} />
                                                </div>
                                                <div className="col-md-6">
                                                    <label for="inputState" className="form-label">State</label>

                                                    <select id="inputState" className="form-select" name='state' value={contact.state} onChange={handleInput}>


                                                        <option selected>Choose...</option>

                                                        {options?.map((option, index) => {
                                                            return (
                                                                <option key={index}>
                                                                    {option}
                                                                </option>
                                                            );
                                                        })}

                                                    </select>
                                                </div>
                                                <div className="col-md-6">
                                                    <label for="inputZip" className="form-label">Zip</label>
                                                    <input type="text" className="form-control rounded-0 py-2" name='zip' id="inputZip" value={contact.zip} onChange={handleInput} />
                                                </div>

                                                <div className="d-grid gap-2 mt-4 ">
                                                    <button className="btn btn-primary rounded-0 py-2" type="button" onClick={addAddress}>Add Address</button>
                                                </div>
                                            </form>
                                        }

                                    </div>

                                </div>
                                <div className='col-lg-5 px-5 mb-2'>
                                    {
                                        !clientToken || !cartItems?.length ? (" ") : (
                                            <div className='mt-5'>
                                                <DropIn options={{
                                                    authorization: clientToken,
                                                }}
                                                    onInstance={instance => setInstance(instance)}
                                                />

                                            </div>

                                        )

                                    }
                                    <h5 className='mb-4 '>Your Order</h5>


                                    <div className='your-order py-2' style={{ backgroundColor: "#f6f6f6" }}>
                                        <div className="d-flex justify-content-between px-5 py-3" >
                                            <h6>Product</h6>
                                            <h6>Total</h6>
                                        </div>
                                        <hr className='mx-5 my-0 p-0' />
                                        {cartItems?.map((x) =>
                                            <div className="d-flex justify-content-between px-5 py-3">
                                                <p>{x.name} x {x.qty}</p>
                                                <p>$ {getCartTotal()}</p>
                                            </div>
                                        )
                                        }

                                        <hr className='mx-5 my-0 p-0' />
                                        <div className="d-flex justify-content-between px-5 py-3">
                                            <p>Shipping</p>
                                            <p>$ {tax}</p>
                                        </div>
                                        <hr className='mx-5 my-0 p-0' />
                                        <div className="d-flex justify-content-between px-5 py-3">
                                            <h6>Total</h6>
                                            <h6>€ {getCartTotal() + parseInt(tax)} </h6>
                                        </div>
                                        <hr className='mx-5 my-0 pb-5' />
                                    </div>


                                    <div className="d-grid gap-2 mt-4 ">
                                        <button className="btn btn-primary rounded-0 py-2" type="button" onClick={handleSubmit}>Make Payment</button>
                                    </div>

                                </div>

                            </div>

                            :
                            <div className='row'>
                                <div className='container d-flex align-items-center justify-content-center'>
                                    <div className='text-center'>
                                        <i className="bi bi-cart3" style={{ fontSize: "200px" }}></i>
                                        <h5>No items found in cart</h5>
                                        <div className='add-to-cart-btn m-4'>
                                            <Link to='/collection' type='button' className='btn bg-dark rounded-0 border-0'>Shop Now</Link>
                                        </div>
                                    </div>


                                </div>

                            </div>
                    }

                </div>
                )

            }

        </section>
    )
}

export default Checkout
