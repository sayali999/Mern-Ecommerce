import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/Cart'

import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';




const Viewcart = () => {
  const navigate = useNavigate();

  const {cartItems,removeCartItem,getCartTotal} = useContext(CartContext);
  const [tax, SetTax] = useState("100");
 

 

  // const removeCartItem = (pid) => {
  //   try {
  //     let myCart = [...cart]
  //     let index = myCart.findIndex(item => item._id === pid)
  //     myCart.splice(index, 1);
  //     setCart(myCart);
  //     localStorage.setItem('cart', JSON.stringify(myCart))

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


  return (
    <section>

      <div className='container p-5 my-5'>
        {cartItems?.length > 0 ?

          <div className='row'>

            <div className='col-lg-8'>
              <div className=' px-2'>
                <h5 className='mb-4'>Your Cart Item</h5>

                <div className='px-3 '>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Sub total</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartItems.map((item) => <tr>
                          <th className='d-flex'><img src={`http://localhost:5000/api/form/product-photo/${item._id}`} className='img-fluid' style={{ width: "100px", height: "130px", objectFit: "cover" }} />
                            <div className='py-3'>
                              <h6 className='px-3'>{item.name}</h6>
                              <h6 className='px-3'>{item.description}</h6>
                              <h6 className='px-3'>size : xs</h6>
                            </div>
                          </th>
                          <td className='py-3'>{item.price}</td>
                          <td className='py-3' >{item.qty}</td>
                          <td className='py-3' >{item.price * item.qty}</td>
                          <td className='py-3'>
                           
                            <i className="bi bi-x fs-4" style={{ cursor: "pointer" }} onClick={() =>  {
                            removeCartItem(item)
                            toast.success("Product Remove Successfully");
                          }
                            }></i></td>
                        </tr>
                        )}

                    </tbody>
                  </table>
                </div>
              </div>

            </div>
            <div className='col-lg-4 px-2 mb-2'>
              <h5 className='mb-4 '>Order Total </h5>
              <div className='your-order py-2' style={{ backgroundColor: "#f6f6f6" }}>
                <div className="d-flex justify-content-between px-5 py-3" >
                  <h6>Subtotal</h6>
                  <h6>$ {getCartTotal()}</h6>
                </div>

                <div className="d-flex justify-content-between px-5">
                  <p>Taxes</p>
                  <p>$ {tax}</p>
                </div>
                <hr className='mx-5 my-0 p-0' />
                <div className="d-flex justify-content-between px-5 py-3">
                  <h6>Grand Total</h6>
                  <h6>$ {getCartTotal() + parseInt(tax)}</h6>
                </div>

              </div>
              <div className="d-grid gap-2 mt-4 ">
                <button className="btn btn-primary rounded-0 py-2" type="button" onClick={() => {
                  navigate("/checkout")
                }}>Proceed To Checkout</button>
              </div>

            </div>

          </div>



          : <div className='row'>
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

    </section>




  )
}

export default Viewcart;
