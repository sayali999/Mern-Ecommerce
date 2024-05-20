import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Store/Auth';
import axios from 'axios';
import { toast } from 'react-toastify';

const UserAccount = () => {
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

        <div className='border' style={{ boxShadow: "0 .3rem 1.525rem -.375rem rgba(0,0,0,.1" }}>
            <div className='m-0 p-0' style={{ backgroundColor: "#edf1f5" }}>
                <h6 className='p-3'>Profile Update</h6>
            </div>
            <form className="row p-4">

                <div className="col-md-6 mb-3">
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <input type="text" className="form-control rounded-0 py-2 " name='username' value={username} onChange={(e)=> setUsername(e.target.value)} id="firstname" />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <input type="text" className="form-control rounded-0 py-2 " name='lastname' value={lastname} onChange={(e)=> setLastname(e.target.value)} id="lastname" />
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="text" className="form-control rounded-0 py-2" id="phone" name='phone' value={phone} onChange={(e)=> setPhone(e.target.value)} />
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="text" className="form-control rounded-0 py-2" id="email" name='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div className=" mt-4 ">
                    <button className="btn btn-danger rounded-0 py-2" type="button" onClick={handleSubmit}>Save changes</button>
                </div>

            </form>

        </div>

    )
}

export default UserAccount
