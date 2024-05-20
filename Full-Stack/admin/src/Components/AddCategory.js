import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';


export default function AddCategory() {
    const navigate = useNavigate();

    const [category, setCategory] = useState({
        name: ""
    });

    const handleInput = (e) =>{
        console.log(e.target.value);
       let name = e.target.name;
       let value = e.target.value;

       setCategory({...category,[name]:value,})
    };
    
    const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
            const {data} = await axios.post("http://localhost:5000/api/form/create-category",category);
      
          if(data.success){  
            toast.success(data.message);
            setCategory({name: ""});
            navigate("/categorylist");
        }
       
      
        } catch (error) {
            //  console.log("register", error);
        }
    }

       return (
        <Layout>


            <div className='p-3'>
                <nav id='breadcrumb' aria-label="breadcrumb" className=' py-2 fw-bold'>
                    <ol className="breadcrumb">
                        <li >
                            <span className="text-decoration-none text-dark px-2">Add Category</span> | </li>
                        <li className="breadcrumb-item">
                            <NavLink to='/home'>  <i className="bi bi-house-door-fill text-primary px-2"></i>
                            </NavLink></li>
                        <li className="breadcrumb-item active" aria-current="page">Add Category</li>
                    </ol>
                </nav>
                <div className='container shadow p-3 table-responsive-sm'>
                <div className="col-sm-6 px-3">
                            <form className=' px-5 py-4'>

                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Category Name</label>
                                    <input type="text" className="form-control rounded-0"  id="name" name='name' value={category.name} onChange={handleInput}/>
                                </div>
                              
                                <div className="d-grid gap-2 col-2 ">
                                <button type="submit" className="btn btn-success rounded-0 " onClick={handleSubmit}>Save</button>
                                </div>
                            </form>
                        </div>
                    
                </div>
            </div>

        </Layout>

    )
}

