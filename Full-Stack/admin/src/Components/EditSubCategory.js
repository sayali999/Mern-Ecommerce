import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';


export default function EditSubCategory() {
    const navigate = useNavigate();
    //category
    const [values, setValues] = useState([]);

    const [catid, setCatid] = useState();

    const [catdata, setcatData] = useState({
        name: "", category: ""

    });

    const slug = useParams();
    const editData = async () => {
        try {

            const {data} = await axios.get(`http://localhost:5000/api/form/single-subcategory/${slug.id}`);
            console.log("proddata", data);
            if (data.success) {
                setCatid(data.subCategory._id);
               
                setcatData(data.subCategory);
            }

        } catch (error) {
            console.log(error);
        }
    };

    const handleInput = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        setcatData({
            ...catdata, [name]: value,
        })
    }

    //update data button

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const { data } = await axios.put(`http://localhost:5000/api/form/update-subcategory/${catid}`, catdata);

            if (data.success) {
                toast.success(data.message);
                navigate("/subcategorylist");
            }

        } catch (error) {
            console.log(error);
        }

    }
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



    useEffect(() => {
        editData();
        tableData();
    }, []);


    return (
        <Layout>


            <div className='p-3'>
                <nav id='breadcrumb' aria-label="breadcrumb" className=' py-2 fw-bold'>
                    <ol className="breadcrumb">
                        <li >
                            <span className="text-decoration-none text-dark px-2">Edit Sub Category</span> | </li>
                        <li className="breadcrumb-item">
                            <NavLink to='/home'>  <i className="bi bi-house-door-fill text-primary px-2"></i>
                            </NavLink></li>
                        <li className="breadcrumb-item active" aria-current="page">Edit Sub Category</li>
                    </ol>
                </nav>
                <div className='container shadow p-3 table-responsive-sm'>
                    <div className="col-sm-6 px-3">
                        <form className=' px-5 py-4'>

                            <div className='mb-3'>
                                <label htmlFor="name" className="form-label">Category Name</label>
                                <select class="form-select rounded-0 text-capitalize" name='category' value={catdata.category._id} onChange={handleInput}>
                                    <option>Select Category</option>
                                    {
                                        values.map((opts) => {
                                            return (
                                                <option value={opts._id} key={opts._id}>{opts.name}</option>
                                            )

                                        })
                                    }

                                </select>


                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Sub Category Name</label>
                                <input type="text" className="form-control rounded-0" id="name" name='name' value={catdata.name} onChange={handleInput} />


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

