import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Store/Auth';
import { map } from 'jquery';

const UserOrder = () => {


  const [order, setOrder] = useState([]);
  const { user } = useAuth();

  const getOrder = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/form/getuser-order/${user._id}`);
      if (data.success) {
        setOrder(data.order);
        console.log("order", data.order);
      }
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getOrder()
  }, [])

  return (
    <div className='container p-0 m-0'>
      <div className='row'>
        <div className='col-md-12' style={{ backgroundColor: "#edf1f5" }}>

          <h6 className='p-3'> All Order</h6>

        </div>
        <div className='col-md-10  p-0 m-0'>
          <div className='container'>
            <div className='row '>
              {
                order?.map((item) => {
                  return <div className=''>

                    {item.products?.map((p) => <div className=' border mx-2 my-2'>
                      <div className='d-flex p-1 m-0  align-items-center '>
                        <div className=' bg-success p-1 m-2 rounded-circle' style={{width:"30px",height:"30px",textAlign:"center",justifyContent:"center",}}>
                          <i className="bi bi-box-fill " ></i>
                        </div>
                        <div >
                          <h6 className='p-0 m-0'>Delivered</h6>
                          <h6 p-0 m-0>On Wed, 7 Feb </h6>
                        </div>
                      </div>

                      <div className="d-flex  align-items-center px-4" style={{ backgroundColor: "#F5F5F5", cursor: "pointer" }}>
                        <div className="p-2">
                          <img src={`http://localhost:5000/api/form/product-photo/${p._id}`} className='img-fluid' style={{ width: "80px", height: "100px", objectFit: "cover" }} />
                        </div>
                        <div className="p-2">
                          <h6>{p.name}</h6>
                          <h6>{p.description}</h6>
                          <h6>Price : {p.price}</h6>
                        </div>
                        <div className="ms-auto p-2 me-4">
                          <i className="bi bi-chevron-right"></i>
                        </div>
                      </div>

                    </div>
                    )}



                  </div>
                })
              }
              <div>
              </div>
            </div>


          </div>

        </div>


      </div>






    </div>
  )
}

export default UserOrder
