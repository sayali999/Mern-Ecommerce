import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Contactus = () => {

  const [contact,setContact] = useState({
    username:"",
    email:"",
    subject:"",
    message:""

  });

  const handleInput = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setContact({...contact,[name]:value})

  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(contact);
    const {data} = await axios.post('http://localhost:5000/api/form/contact',contact);
    if(data.success){
      toast.success("contact send successfully")
    }

  }

  return (
    <section>
      <div className='container p-5 d-flex align-item-center justify-content-center'>


        <div className='billing-details ' style={{ width: "600px" }}>
          <h5 className='mb-4'>Get In Touch</h5>
          <form className="row g-3">
            <div className="col-md-6">
              <label for="username" className="form-label"> Name</label>
              <input type="text" className="form-control rounded-0 py-2 py-2" name='username' value={contact.username} onChange={handleInput} />
            </div>

            <div className="col-md-6">
              <label for="email" className="form-label">Email Address</label>
              <input type="text" className="form-control rounded-0 py-2" name="email" value={contact.email} onChange={handleInput} />
            </div>
            <div className="col-12">
              <label for="subject" className="form-label">Subject</label>
              <input type="text" className="form-control rounded-0 py-2 mb-3" name="subject" value={contact.subject} onChange={handleInput} />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Your Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" name='message' value={contact.message} onChange={handleInput} ></textarea>
            </div>

            <div className="d-grid gap-2 d-md-block">
              <button className="btn btn-dark px-5 py-2 rounded-0" type="button" onClick={handleSubmit}>SEND</button>
            </div>
          

          </form>

        </div>



      </div>
    </section>
  )
}

export default Contactus
