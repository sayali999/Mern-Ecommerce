import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Store/Auth';
import { toast } from 'react-toastify';


export default function Login() {
    const navigate = useNavigate();
    
    const {storetokenInLS} =useAuth();

    const [user, setUser] = useState({
        email: "", password: ""
    });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({ ...user, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
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
                navigate("/home")
            }
            else{
                setUser({ email: "", password: "" });
                
                toast.error("wrong credentials");
            }

        } catch (error) {

        }
    }
    return (
        <>

            <section>
                <div className='container mt-5 pt-5' id='authform'>
                    <div className='row'>
                        <div className='col-4 col-sm-4 col-md-4 m-auto'>
                            <div className='card border-0 shadow px-4 py-5'>
                                <div className='card-body'>
                                    <div className="d-grid gap-2">
                                        <h3 className='text-center'>Login</h3>
                                    </div>
                                    <form method='POST'>
                                        <div className="input-group my-3  py-2 ">
                                            <span className="input-group-text rounded-0" id="email">
                                                <i className="bi bi-person-fill"></i>
                                            </span>
                                            <input type="text" className="form-control rounded-0 py-2" name='email'
                                                value={user.email} onChange={handleInput} autoComplete='off' placeholder="Email" aria-label="Username" aria-describedby="email" />
                                        </div>

                                        <div className="input-group my-3  py-2">
                                            <span className="input-group-text rounded-0" id="password">
                                                <i className="bi bi-lock-fill"></i>
                                            </span>
                                            <input type="password" className="form-control rounded-0 py-2" name='password'
                                                value={user.password} onChange={handleInput} autoComplete='off' placeholder="Password" aria-label="Password" aria-describedby="password" />
                                        </div>
                                        <div className="d-grid gap-2">
                                            <button className="btn text-white py-2 rounded-0" type="button" onClick={handleSubmit}
                                            >Login</button>

                                        </div>
                                    </form>
                                    <div className="d-grid gap-2 mt-4">
                                        <span className='text-center'>Don't have an account?
                                            <Link to="/register" className='text-decoration-none'> Register</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
