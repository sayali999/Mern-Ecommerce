import React, { useContext, useEffect, useState } from 'react'
import './Product-Detail.css'
import img from '../../../src/Components/Assets/p1_product.png';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { CartContext } from '../../Context/Cart';

const ProductDetail = () => {
  const {cartItems,addToCart} = useContext(CartContext);

  const [amount, setAmount] = useState(1);

  const stock = 10;

  const setDescrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  }

  const setIncrease = () => {
    
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  }


  const [prodid,setProdId] = useState();
  const [prodDetail, setProdDetail] = useState([]);
  const [prodcat,setProdcat] = useState();
  const [prodImg,setProdImg] = useState();

  const slug = useParams();

  const productDetails = async () =>{
   
 

    try {
      const {data} =  await axios.get(`http://localhost:5000/api/form/single-product/${slug.id}`);
      console.log(data.products);
      if (data.success) {
        setProdDetail(data.products);
        setProdcat(data.products.category.name);
        
      }
    } catch (error) {
      console.log(error);
    }
    
  }

  useEffect(()=>{
    productDetails();
  },[]);
  
  return (
    <section id='product-detail'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 p-5'>
            <div className='prod-img p-5'>
              <img src={`http://localhost:5000/api/form/product-photo/${prodDetail._id}`} className='img-fluid ' style={{width:"100%",height:"100%"}}/>
            </div>
          </div>
          <div className='col-lg-6 p-5'>
            <div className='prod-detail py-5'>
              <h5>{prodDetail.name}</h5>
              <h6> <s className='text-danger mx-2'>$500</s> $ {prodDetail.price}</h6>

              <div className='d-flex my-3'>
                <div className='star'>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                </div>
                <div className='mx-2'>
                  (200)
                </div>
              </div>

              <h6 className='mt-4'>Product Detail :</h6>
              <p className='mb-4'>
              
              {prodDetail.description}</p>
            

              <div className='prod-size'>
                {/* <h6>Select Size</h6>
                <div className="btn-group my-3" role="group" aria-label="Basic radio toggle button group">
                  <input type="radio" className="btn-check mx-2" name="btnradio" id="btnradio1" autocomplete="off" />
                  <label className="btn mx-2" htmlFor="btnradio1">S</label>

                  <input type="radio" className="btn-check mx-2" name="btnradio" id="btnradio2" autocomplete="off" />
                  <label className="btn mx-2" htmlFor="btnradio2">M</label>

                  <input type="radio" className="btn-check mx-2" name="btnradio" id="btnradio3" autocomplete="off" />
                  <label className="btn mx-2" htmlFor="btnradio3">L</label>

                  <input type="radio" className="btn-check mx-2" name="btnradio" id="btnradio4" autocomplete="off" />
                  <label className="btn mx-2" htmlFor="btnradio4">XL</label>

                  <input type="radio" className="btn-check mx-2" name="btnradio" id="btnradio5" autocomplete="off" />
                  <label className="btn mx-2" htmlFor="btnradio5">XXL</label>

                </div> */}

                <div className=' my-3'>
                <h6>Select Quantity</h6>
                   <div className='quantity-btn my-3 px-2'>
                   
                   <button type='button' className='btn' onClick={() => setDescrease()}> - </button>
                    <input type='text' value={amount}/>
                    <button type='button' className='btn' onClick={() => setIncrease()}> + </button>
                   </div> 
                </div>

                <hr></hr>

                <div className='add-to-cart-btn mx-2'>
                  <button type='button' className='btn'onClick={() => {
                              addToCart(prodDetail,amount)
                               toast.success("Product Added Successfully")
                            }} >Add To Cart</button>
                </div>

                <div className='my-3 mx-3'>
                  <h6 className='text-capitalize'>Categories : {prodcat}</h6>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default ProductDetail
