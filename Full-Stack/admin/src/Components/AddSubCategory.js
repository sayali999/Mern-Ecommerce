import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';


export default function AddSubCategory() {
    const navigate = useNavigate();

    //category
    const [values, setValues] = useState([]);


    // const [optionValue, setOptionValue] = useState();

    const [subCategory, setSubCategory] = useState({
        name: "", category: ""

    });


    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        // setOptionValue(e.target.value)
        setSubCategory({ ...subCategory, [name]: value, });

    };

    //get all gategory

    const tableData = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/api/form/getall-category");
            if (data.success) {
                setValues(data.category);
            }

        } catch (error) {
            console.log(error);
        }
    };

    //add sub category
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post("http://localhost:5000/api/form/create-subcategory", subCategory);

            if (data.success) {
                setSubCategory({ name: "", category: "" });
                navigate("/subcategorylist");
            }
        } catch (error) {
            console.log("register", error);
        }
    }


    useEffect(() => {
        tableData();
    }, []);

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

                            <div className='mb-3'>
                                <label htmlFor="name" className="form-label">Category Name</label>
                                <select class="form-select rounded-0 text-capitalize" name='category' value={subCategory.category} onChange={handleInput}>
                                    <option>Select Category</option>
                                    {
                                        values.map((opts, index) => <option value={opts._id} key={index}>{opts.name}</option>)
                                    }

                                </select>


                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Sub Category Name</label>
                                <input type="text" className="form-control rounded-0" id="name" name='name' value={subCategory.name} onChange={handleInput} />

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

