import React, { useState } from 'react'
import { useAuth } from '../../Store/Auth';
import axios from 'axios';
import { toast } from 'react-toastify';

const UserAddress = () => {

  //show add address div
  const [showResults, setShowResults] = useState(false);

  const [contact, setContact] = useState({
    username: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: ""
  });

  const { user } = useAuth();
  const [id, setId] = useState('');

  const handleInput = (e) => {
    console.log(e.target.value)
    const name = e.target.name;
    const value = e.target.value;
    setContact({
      ...contact, [name]: value,
    })
  }

  const editAddress = (i) => {
    setContact({
      ...contact,
      username: i.username,
      phone: i.phone,
      address: i.address,
      city: i.city,
      state: i.state,
      zip: i.zip
    });

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const { data } = await axios.patch(`http://localhost:5000/api/auth/user/shipping_address/${id}`, contact);
      if (data.success) {
        toast.success(data.message)
        setShowResults(false)
      }

    } catch (error) {
      console.log(error);
    }


  }
  return (
    <div className='container p-0 m-0'>
      <div className='row'>
        <div className='col-md-12' style={{ backgroundColor: "#edf1f5" }}>
          <h6 className='p-3'> Addresses</h6>
        </div>
        <div className='col-md-12  p-0 m-0'>
          <div className='container p-0 my-1'>
            <div className='row m-0'>
              {user?.shipping_address.map((i, index) =>
                <div className=' col-md-6 m-0 p-1'>
                  <div className='m-0 p-0 d-flex justify-content-between border' >
                    <div className='p-4'>
                      <h6>
                        <p className='text-capitalize'>{i.username}</p>
                        <p> {i.address} ,
                          {i.city} - {i.zip}</p>
                        <p>{i.state} </p>
                      </h6>
                      <p >Mobile : {i.phone} </p>
                    </div>
                    <i className="bi bi-pencil-square p-2 m-0" style={{ cursor: "pointer" }} onClick={() => {
                      editAddress(i);
                      setShowResults(true)
                      setId(i._id)
                    }}></i>
                  </div>
                </div>

              )
              }
            </div>
          </div>
        </div>
        <div className='col-md-12 my-2'>

        { showResults && <form className="row border px-4 py-5">

            <div className="col-md-6 mb-3">
              <label htmlFor="firstname" className="form-label">First Name</label>
              <input type="text" className="form-control rounded-0 py-2 " name='username' value={contact.username} onChange={handleInput} id="firstname" />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="text" className="form-control rounded-0 py-2" id="phone" name='phone' value={contact.phone} onChange={handleInput} />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="text" className="form-label"> Address</label>
              <input type="text" className="form-control rounded-0 py-2" id="address" name='address' value={contact.address} onChange={handleInput} />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="city" className="form-label">City</label>
              <input type="text" className="form-control rounded-0 py-2 " name='city' value={contact.city} onChange={handleInput} id="city" />
            </div>
            <div className="col-md-6">
              <label for="state" className="form-label">State</label>
              <input type="text" className="form-control rounded-0 py-2" name='zip' id="state" value={contact.state} onChange={handleInput} />
            </div>
            <div className="col-md-6">
              <label for="zip" className="form-label">Zip</label>
              <input type="text" className="form-control rounded-0 py-2" name='zip' id="zip" value={contact.zip} onChange={handleInput} />
            </div>

            <div className=" mt-4 ">
              <button className="btn btn-danger rounded-0 py-2" type="button" onClick={handleSubmit}>Save changes</button>
            </div>

          </form>}
        </div>

      </div>


    </div>
  )
}

export default UserAddress
