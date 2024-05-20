import React, { useEffect, useState } from 'react'
import { useAuth } from '../Store/Auth';
import Layout from '../Layout/Layout';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function MyAccount() {

    // const [contact, setContact] = useState({
    //     username: "",
    //     lastname: "",
    //     email: "",
    //     phone: "",

    // });

    const [username,setUsername] = useState("");
    const [lastname,setLastname] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    

    // const [userdata, setUserdata] = useState(true);

    const { user } = useAuth();

    // if (userdata && user) {
    //     setContact({
    //         username: user.username,
    //         lastname: user.lastname,
    //         email: user.email,
    //         phone: user.phone,

    //     })

    //     setUserdata(false);

    // }

    // const handleInput = (e) => {
    //     console.log(e.target.value)
    //     const name = e.target.name;
    //     const value = e.target.value;

    //     setContact({
    //         ...contact, [name]: value,
    //     })
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           

            const { data } = await axios.put(`http://localhost:5000/api/auth/user/update/${user._id}`,{
                username,lastname,email,phone
            } );
           
            if (data.success) {
                // setItems(data.products);
                
                toast.success("User Updated Successfully")
            }
            else{
                toast.success("error while updating")
            }
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(()=>{
        const {username,lastname,email,phone} = user;
        setUsername(username);
        setLastname(lastname)
        setEmail(email);
        setPhone(phone);

    },[user]);

    return (
        <Layout>



            <section className='p-2'>
                <nav id='breadcrumb' aria-label="breadcrumb" className=' py-3 fw-bold'>
                    <ol className="breadcrumb">
                        <li ><span className="text-decoration-none text-dark px-2">My Account</span> | </li>
                        <li className="breadcrumb-item"> <NavLink to="/home"> <i className="bi bi-house-door-fill text-primary px-2"></i></NavLink></li>
                        <li className="breadcrumb-item active" aria-current="page">Profile</li>
                    </ol>
                </nav>
                <div className="container m-2 p-5 shadow">
                    <div className="row">
                        <div className="col-sm-3 ">
                            <div className="card" >
                                <div className='d-flex  justify-content-center align-items-center' style={{ backgroundColor: "#9053e1" }}>
                                    {/* <img src="https://react-demo.tailadmin.com/assets/user-02-5a304001.png" className=" img-fluid card-img-top" style={{ padding: "45px" }} alt="..." /> */}
                                    <i className="bi bi-person me-2 text-muted fw-bold" style={{ fontSize:"130px" }}></i>
                                </div>
                                <div className="card-body text-center">
                                    <p className="card-text text-capitalize fs-4 fw-semibold">{username}</p>
                                    <span>{email}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-9 px-3">
                            <form className="row p-4">

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstname" className="form-label">First Name</label>
                                    <input type="text" className="form-control rounded-0 py-2 " name='username' value={username} onChange={(e) => setUsername(e.target.value)} id="firstname" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastname" className="form-label">Last Name</label>
                                    <input type="text" className="form-control rounded-0 py-2 " name='lastname' value={lastname} onChange={(e) => setLastname(e.target.value)} id="lastname" />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input type="text" className="form-control rounded-0 py-2" id="phone" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="text" className="form-control rounded-0 py-2" id="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className=" mt-4 ">
                                    <button className="btn btn-danger rounded-0 py-2" type="button" onClick={handleSubmit}>Save changes</button>
                                </div>

                            </form>

                        </div>
                    </div>

                </div>
            </section>




        </Layout>

    )
}

export default MyAccount
