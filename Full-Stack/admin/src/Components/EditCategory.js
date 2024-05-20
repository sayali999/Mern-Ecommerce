import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';


export default function EditCategory() {

    const navigate = useNavigate();

    const [catid, setCatid] = useState();
    const [catdata, setcatData] = useState({
        name: "",

    });

    const slug = useParams();
    const editData = async () => {
        try {

            const { data } = await axios.get(`http://localhost:5000/api/form/single-category/${slug.id}`);
            if (data.success) {

                setCatid(data.category._id);
                setcatData(data.category);
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
            const { data } = await axios.put(`http://localhost:5000/api/form/update-category/${catid}`,  catdata );
          
            if(data.success){
                toast.success(data.message);
                navigate("/categorylist");
            }
        } catch (error) {
            console.log(error);
        }

    }


    useEffect(() => {
        editData();
    }, []);




    return (
        <Layout>


            <div className='p-3'>
                <nav id='breadcrumb' aria-label="breadcrumb" className=' py-2 fw-bold'>
                    <ol className="breadcrumb">
                        <li >
                            <span className="text-decoration-none text-dark px-2">Update Category</span> | </li>
                        <li className="breadcrumb-item">
                            <NavLink to='/home'>  <i className="bi bi-house-door-fill text-primary px-2"></i>
                            </NavLink></li>
                        <li className="breadcrumb-item active" aria-current="page">Update Category</li>
                    </ol>
                </nav>
                <div className='container shadow p-3 table-responsive-sm'>
                    <div className="col-sm-6 px-3">
                        <form className=' px-5 py-4' >

                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Category Name</label>
                                <input type="text" className="form-control rounded-0" id="name" name="name" value={catdata.name} onChange={handleInput} />
                            </div>

                            <div className="d-grid gap-2 col-2 ">
                                <button type="submit" className="btn btn-success rounded-0" onClick={handleSubmit}>Update</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </Layout>

    )
}

