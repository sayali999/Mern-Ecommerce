import React, { useContext, useEffect, useState } from 'react'
import img from '../Assets/p1_product.png';
import './Items.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../../Context/Cart';
import { toast } from 'react-toastify';

function Items() {

    // cart context
    const {cartItems,addToCart} = useContext(CartContext)

    const [items, setItems] = useState([]);
    const [amount, setAmount] = useState(1);

    const getItems = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/api/form/getall-product");

            if (data.success) {
                setItems(data.products);
                console.log("data", data.products);
            }
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getItems();
    }, []);



    return (
        <div className='container  mt-5'>

            <div className='product-container text-center'>
                <h2>New Arrivals</h2>
            </div>

            {/* single product start */}
            <div className='row mt-5'>

                {
                    items.slice(0, 8).map((item, index) =>

                        <div className='col-md-3' key={index}>

                            <div className='card' >

                                <div className='bg-dark' style={{ width: "100%", height: "100%" }}>
                                    <Link to={`/productdetails/${item.slug}`}>
                                        <img src={`http://localhost:5000/api/form/product-photo/${item._id}`} alt={`http://localhost:5000/api/form/product-photo/${item._id}`} className='img-fluid' style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    </Link>
                                </div>

                                <div className='overlay'>
                                    <button type='button' className='btn btn-secondary'>
                                        <i className="bi bi-heart"></i>
                                    </button>
                                    <button type='button' className='btn btn-secondary' onClick={() => {
                                        addToCart(item,amount);
                                        toast.success("Product Added Successfully")
                                        }}>
                                        <i className="bi bi-cart"></i>
                                    </button>
                                    <button type='button' className='btn btn-secondary'>
                                        <i className="bi bi-eye"></i>
                                    </button>
                                </div>
                            </div>


                            <div className=' card-body text-center'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <h3 className='text-capitalize'>{item.name}</h3>
                                <h5>$ {item.price}</h5>
                            </div>
                        </div>
                    )}


            </div>

            {/* single product end */}

        </div>
    )
}

export default Items
