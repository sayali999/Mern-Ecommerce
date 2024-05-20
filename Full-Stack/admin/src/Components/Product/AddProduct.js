import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import Layout from '../../Layout/Layout';


export default function AddProduct() {
    const navigate = useNavigate();

    //category
    const [values, setValues] = useState([]);
    //sub-category 
    const [valuesSub, setValuesSub] = useState([]);


    // const [optionValue, setOptionValue] = useState();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setcategory] = useState([]);
    const [subcategory, setsubcategory] = useState([]);
    const [quantity, setquantity] = useState("");

    const [photo, setPhoto] = useState("");


    //get all category

    const tableData = async () => {
        // category
        try {
            const {data} = await axios.get("http://localhost:5000/api/form/getall-category");
            if(data.success){
                setValues(data.category);
            }
        } catch (error) {
            console.log(error);
        }

        //sub category 
        try {
            const {data} = await axios.get("http://localhost:5000/api/form/getall-subcategory");

            if(data.success){
            setValuesSub(data.subCategory);
            }

        } catch (error) {
            console.log(error);
        }
    };

    //add sub category
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const productData = new FormData();
            productData.append("name", name);
            productData.append("description", description);
            productData.append("price", price);
            productData.append("quantity", quantity);
            productData.append("photo", photo);
            productData.append("category", category);
            productData.append("subcategory", subcategory);

            const {data} = await axios.post("http://localhost:5000/api/form/create-product", productData);
         
            if (data?.success) {
                console.log("success",data);
                toast.success(data.message);
            }
            else {
                // toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);

            }

         

        } catch (error) {
           
        }
    }


    useEffect(() => {
        tableData();
    }, []);

    return (
        <Layout>


            <div className='p-5'>
                <nav id='breadcrumb' aria-label="breadcrumb" className=' py-2 fw-bold'>
                    <ol className="breadcrumb">
                        <li>
                            <span className="text-decoration-none text-dark px-2">Add Product</span> | </li>
                        <li className="breadcrumb-item">
                            <NavLink to='/home'>  <i className="bi bi-house-door-fill text-primary px-2"></i>
                            </NavLink></li>
                        <li className="breadcrumb-item active" aria-current="page">Add Product</li>
                    </ol>
                </nav>
                <div className='container shadow p-3 table-responsive-sm'>
                    <div className="col-sm-12 px-3">

                        <form className='row g-3 px-4 py-4'>

                            <div className="col-md-6 entryarea">
                                <input type="text" required="required" value={name} onChange={(e) => setName(e.target.value)} />
                                <span>Name</span>
                            </div>

                            <div className="col-md-6 entryarea">
                                <input type="text" required="required" value={quantity} onChange={(e) => setquantity(e.target.value)} />
                                <span>Quantity</span>
                            </div>

                            <div className="col-md-6 entryarea">
                                <input type="text" required="required" value={price} onChange={(e) => setPrice(e.target.value)} />
                                <span>Price</span>
                            </div>
                            {/* <div className="col-md-6 entryarea">
                                <input type="text" required="required" name='discount' value={discount}  />
                                <span>Discount</span>
                            </div> */}

                            <div className='mb-3 col-md-6 entryarea'>

                                <select className="text-capitalize rounded-0" name='category' value={category} onChange={(e) => setcategory(e.target.value)} >
                                    <option className='rounded-0'></option>
                                    {
                                        values.map((opts, index) => <option className='rounded-0' value={opts._id} key={index}>{opts.name}</option>)
                                    }

                                </select>
                                <span>Category</span>

                            </div>

                            <div className='mb-3 col-md-6 entryarea'>

                                <select className="text-capitalize rounded-0" name='subcategory' value={subcategory} onChange={(e) => setsubcategory(e.target.value)}>
                                    <option ></option>
                                    {
                                        valuesSub.map((opts, index) => <option value={opts._id} key={index}>{opts.name}</option>)
                                    }

                                </select>
                                <span>Sub Category</span>

                            </div>
                            <div className="col-md-6 entryarea">
                                <textarea type="text" required="required" rows="4" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                <span>Product Description</span>
                            </div>

                            <div className="col-md-6 " id='fileinput'>
                                <input type="file" id='file' name='photo' accept='image/*' onChange={(e) => setPhoto(e.target.files[0])} />
                                <label htmlFor="file"> {photo ? photo.name : "Upload file"}</label>
                            </div>


                            <div className="d-grid gap-2 col-2 ">
                                <button type="submit" className="btn btn-success rounded-0 " onClick={handleSubmit}>Add Product</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </Layout>

    )
}

