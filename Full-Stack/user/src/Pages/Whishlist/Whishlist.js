import React, { useContext } from 'react'
import { WishlistContext } from '../../Context/Whishlist'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Whishlist = () => {
  const { wishlistItems, removeWishlist } = useContext(WishlistContext);
  return (
    <section>

      <div className='container p-5 my-5'>
        {wishlistItems?.length > 0 ?
          <div className='row mt-5'>

            {
              wishlistItems.map((item, index) =>

                <div className='col-md-3'>
                  

                  <div className='card'>
                    <div className='bg-dark' style={{ width: "100%", height: "100%" }}>
                      <Link to={`/productdetails/${item.slug}`}>
                        <img src={`http://localhost:5000/api/form/product-photo/${item._id}`} alt='' className='img-fluid' style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </Link>
                    </div>
                    

                  </div>

                  
                  <div className=' card-body d-flex flex-column '>
                    <div className='p-0 m-0 text-center'>
                      <h3>{item.name}</h3>
                      <h5>$ {item.price}</h5>
                    </div>
                    <div className=" ">
                      <button className='btn rounded-0 w-100 text-white my-0' style={{backgroundColor:"rgba(220, 53, 69,1)"}}
                      onClick={()=> {
                        removeWishlist(item)
                        toast.success("Product Remove Successfully")
                      }}>REMOVE</button>
                    </div>
                  </div>

                </div>
              )}


          </div>

          // <div className='row'>

          //   <div className='col-lg-12'>


          //     <div className=' px-2'>
          //       <h5 className='mb-4'>Your Cart Item</h5>


          //       <div className='px-3 '>
          //         <table className="table">
          //           <thead>
          //             <tr>
          //               <th scope="col">Product</th>
          //               <th scope="col">Price</th>
          //               <th scope="col">Quantity</th>
          //               <th scope="col">Sub total</th>
          //               <th scope="col">Action</th>
          //             </tr>
          //           </thead>
          //           <tbody>
          //             {
          //               wishlistItems.map((item) => <tr>
          //                 <th className='d-flex'><img src={`http://localhost:5000/api/form/product-photo/${item._id}`} className='img-fluid' style={{ width: "100px", height: "130px", objectFit: "cover" }} />
          //                   <div className='py-3'>
          //                     <h6 className='px-3'>{item.name}</h6>
          //                     <h6 className='px-3'>{item.description}</h6>
          //                     <h6 className='px-3'>size : xs</h6>
          //                   </div>
          //                 </th>
          //                 <td className='py-3'>{item.price}</td>
          //                 <td className='py-3' >{item.qty}</td>
          //                 <td className='py-3' >{item.price * item.qty}</td>
          //                 <td className='py-3'><i className="bi bi-x fs-4" style={{ cursor: "pointer" }} onClick={() => removeWishlist(item)}></i></td>
          //               </tr>
          //               )}

          //           </tbody>
          //         </table>
          //       </div>
          //     </div>

          //   </div>

          // </div>



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

export default Whishlist
