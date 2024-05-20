import React, { useEffect, useState } from 'react'
import img from '../../../src/Components/Assets/p1_product.png';
import './Collection.css'
import { Link, NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
const SubCategoryCollection = () => {

  const [items, setItems] = useState([]);

  const [category, setCategory] = useState([]);

  const [subCategory, setSubCategory] = useState([]);

  const [accordian, setaccordian] = useState();

  const params = useParams();

  const getItems = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/form/product-by-subcategory/${params.slug}`);
      if (data.success) {
        console.log("data by slug", data);
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
if(params?.slug) getItems();
  }, [params?.slug]);




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
                 
                  <a className="nav-link p-0 m-0 text-capitalize fw-semibold text-danger" href="#">All Products</a>

                  
                               
                  <div className="accordion mt-3 " id="accordionPanelsStayOpenExample">
                    
                    {
                      category.map((cat, key) =>{
                        return <div className="accordion-item py-2">
                          <h2 className="accordion-header">
                            <button className="accordion-button collapsed m-0 p-0 text-capitalize" type="button" data-bs-toggle="collapse" data-bs-target={"#demo" + key} aria-expanded="true" aria-controls={"demo" + key}>
                              {cat.name}
                            </button>
                          </h2>
                          <div id={"demo" + key} className="accordion-collapse collapse ">
                            <div className="accordion-body p-0 m-0">
                           
                              <ul className="navbar-nav p-0 m-0">
                                {
                                  subCategory.map(subcat => {
                                    if (subcat.category._id === cat._id) {
                                      return <li className="nav-item p-0 m-0">
                                        <Link className="nav-link px-2 py-1 m-0 text-capitalize" to={`/collection/${subcat.slug}`}>{subcat.name}</Link>
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

                {items.name}

                  {
                    items.map((item, index) =>

                      <div className='col-md-4'>
                        <Link to={`/productdetails/${item.slug}`}>
                          <div className='card'>
                            <img src={`http://localhost:5000/api/form/product-photo/${item._id}`} style={{ width: "100%" }} />
                            <div className='overlay'>
                              <button type='button' className='btn btn-secondary'>
                                <i className="bi bi-heart"></i>
                              </button>
                              <button type='button' className='btn btn-secondary'>
                                <i className="bi bi-cart"></i>
                              </button>
                              <button type='button' className='btn btn-secondary'>
                                <i className="bi bi-eye"></i>
                              </button>
                            </div>
                          </div>
                        </Link>

                        <div className=' card-body text-center'>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <h3>{item.name}</h3>
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

export default SubCategoryCollection
