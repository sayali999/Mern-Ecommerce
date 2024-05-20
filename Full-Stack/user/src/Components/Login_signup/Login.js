import React, { useState } from 'react'
import { useAuth} from '../../Store/Auth'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Login = () => {

  const navigate = useNavigate();
  const {storetokenInLS} = useAuth();

  const[user,setUser] = useState({
    email:"",password:""
  });

  const handleInput=(e)=>{
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
        const response = await fetch("http://localhost:5000/api/auth/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
        });
        const res_data = await response.json();

        if (response.ok) {
           
            console.log("res from server",res_data);
           
            storetokenInLS(res_data.token); 

            setUser({ email: "", password: "" });
            toast.success("Login Successfully");
            navigate("/")
        }
        else{
            setUser({ email: "", password: "" });
            
            toast.error("wrong credentials");
        }

    } catch (error) {

    }
  }



  return (
    <section>
      <div className='container p-5 d-flex align-item-center justify-content-center'>
        <div className=''>
          <div className='text-center my-4'>
            <h4>Login</h4>
          </div>
          <div className=' shadow p-5' style={{ width: "600px" }}>
            <form className="row g-3 p-5">
              <div className="col-md-12">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="text" className="form-control rounded-0 py-2" id="email" name='email' value={user.email} onChange={handleInput} />
              </div>

              <div className="col-md-12">
                <label htmlFor="password" className="form-label"> Password</label>
                <input type="password" className="form-control rounded-0 py-2 py-2" id="password" name='password' value={user.password} onChange={handleInput} />
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <button className="btn btn-dark px-5 py-2 rounded-0 " type="button" onClick={handleSubmit}>LOGIN</button>
                <p className='mt-3'>Don't have an account ?<Link to='/register' className=" text-decoration-none"> Register</Link></p>
              </div>
            </form>
          </div>


        </div>



      </div>
    </section>
  )
}

export default Login
