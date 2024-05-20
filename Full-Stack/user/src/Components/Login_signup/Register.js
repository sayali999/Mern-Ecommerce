import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Store/Auth';
import { toast } from 'react-toastify';


const Register = () => {
  const navigate = useNavigate();
  const {storetokenInLS} =useAuth();

  const [user, setUser] = useState({
      username: "", email: "", password: "", phone: ""
  });

  const handleInput = (e) =>{
      console.log(e);
     let name = e.target.name;
     let value = e.target.value;

     setUser({...user,[name]:value,})
  };

  //form submit

  const handleSubmit = async (e) =>{
      e.preventDefault();

      try {
          const response = await fetch("http://localhost:5000/api/auth/user/register",{
          method:"POST",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify(user),
      });

      const res_data = await response.json();
      if(response.ok){
         
          console.log("res from server",res_data);
         
          storetokenInLS(res_data.token);

          setUser({username: "", email: "", password: "", phone: ""});
          toast.success("User Register Successfully")
          navigate("/login")
      }
      else{
          toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
        
      }
      console.log(response);

          
      } catch (error) {
           console.log("register", error);
      }

      
  }

  return (
    <section>
      <div className='container p-5 d-flex align-item-center justify-content-center'>

        <div className=''>
          <div className='text-center my-4'>
            <h4>Register</h4>
          </div>
          <div className=' shadow p-5' style={{ width: "600px" }}>
            <form className="row g-3 p-5">

            <div className="col-md-12">
                <label htmlFor="username" className="form-label"> Username</label>
                <input type="text" className="form-control rounded-0 py-2 py-2" id="username" name='username'
                                              value={user.username} onChange={handleInput}/>
              </div>

              <div className="col-md-12">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="text" className="form-control rounded-0 py-2" id="email" name='email'
                                              value={user.eamil} onChange={handleInput}/>
              </div>              

              <div className="col-md-12">
                <label htmlFor="password" className="form-label"> Password</label>
                <input type="text" className="form-control rounded-0 py-2 py-2" id="password" name='password'
                                              value={user.password} onChange={handleInput}/>
              </div>

              <div className="col-md-12">
                <label htmlFor="phone" className="form-label"> Phone</label>
                <input type="text" className="form-control rounded-0 py-2 py-2" id="phone"  name='phone' value={user.phone} onChange={handleInput}/>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <button className="btn btn-dark px-5 py-2 rounded-0 " type="button" onClick={handleSubmit}>REGISTER</button>
                <p className='mt-3'>Already have an account ?<Link to='/login' className=" text-decoration-none"> Login</Link></p>
              </div>


            </form>
          </div>


        </div>



      </div>
    </section>
  )
}

export default Register
