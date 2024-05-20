import React, { useContext, useEffect, useState } from 'react'
import img from '../../../src/Components/Assets/p1_product.png';
import './Collection.css'
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../../Context/Cart';
import { WishlistContext } from '../../Context/Whishlist';
import { toast } from 'react-toastify';

const Collection = () => {
  // cart context
  const {cartItems,addToCart} = useContext(CartContext);

  // whislist context
  const { wishlistItems,addToWishlist} = useContext(WishlistContext);
  const [amount, setAmount] = useState(1);

  const [items, setItems] = useState([]);

  const [category, setCategory] = useState([]);

  const [subCategory, setSubCategory] = useState([]);

  const [accordian, setaccordian] = useState()

  const getItems = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/form/getall-product");
      if (data.success) {
        setItems(data.products);
      }
    } catch (error) {
      console.log(error);
    }

    //get all category and sub category for accordian
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

  const accordianToggle = (index) => {
    if (accordian === index) {
      setaccordian(null)
    } else {
      setaccordian(index)
    }
  }


  useEffect(() => {
    getItems();
   
                              
  }, []);

  return (

    <>
      <section id='collection'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 mt-5 p-5'>
              <div className='row '>
                <div className='cat-filter'>
                  <h4 className='fw-bolder mx-0 px-0 my-1 text-uppercase' style={{ fontSize: "18px" }}>Categories</h4>
                  <hr></hr>
                  <Link to="/collection" className="nav-link p-0 m-0 text-capitalize fw-semibold text-danger" >All Products</Link>

                  <div className="accordion mt-3 " id="accordionPanelsStayOpenExample">
                    {
                      category?.map((cat,key) => {
                        return <div className="accordion-item py-2" >
                          <h2 className="accordion-header">
                            <button className="accordion-button collapsed m-0 p-0 text-capitalize" type="button" data-bs-toggle="collapse" data-bs-target={"#demo" + key} aria-expanded="true" aria-controls={"demo" + key}>
                              {cat.name}
                            </button>
                          </h2>
                          <div id={"demo" + key} className="accordion-collapse collapse ">
                            <div className="accordion-body p-0 m-0">

                              <ul className="navbar-nav p-0 m-0">
                                {
                                  subCategory?.map((subcat) => {
                                    if (subcat.category._id === cat._id) {
                                      return <li className="nav-item p-0 m-0" >
                                        <Link className="nav-link px-2 py-2 m-0 text-capitalize" to={`/collection/${subcat.slug}`}>{subcat.name}</Link>
                                      </li>
                                    }
                                  }
                                  )
                                }

                              </ul>
                            </div>
                          </div>
                        </div>
                      })}

                  </div>

                </div>
              </div>


            </div>
            <div className='col-lg-9'>
              <div className='container  mt-5'>
                {/* single product start */}
                <div className='row mt-5'>

                  {
                    items.map((item) =>

                      <div className='col-md-4'>

                        <div className='card'>
                          <div className='bg-dark' style={{ width: "100%", height: "100%" }}>
                            <Link to={`/productdetails/${item.slug}`}>
                              <img src={`http://localhost:5000/api/form/product-photo/${item._id}`} className='img-fluid' style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </Link>
                          </div>

                          <div className='overlay'>
                            <button type='button' className='btn btn-secondary' onClick={() => {
                              addToWishlist(item)
                               toast.success("Product Added Successfully")
                            }}>
                              <i className="bi bi-heart"></i>
                            </button>
                            <button type='button' className='btn btn-secondary' onClick={() => { 
                              addToCart(item,amount)
                              toast.success("Product Added Successfully")
                              }}>
                              <i className="bi bi-cart"></i>
                            </button>
                            <Link to={`/productdetails/${item.slug}`} type='button' className='btn btn-secondary'>
                              <i className="bi bi-eye"></i>
                            </Link>
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

            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Collection
