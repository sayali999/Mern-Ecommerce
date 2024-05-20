import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import Layout from '../Layout/Layout';
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';


export default function SubCategoryTable() {
    const [tbdata, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState([]);



    //display table data
    const tableData = async () => {
        try {
            const {data} = await axios.get("http://localhost:5000/api/form/getall-subcategory");

            console.log(data.subCategory);
            if(data.success){
                setData(data.subCategory);
                setFilter(data.subCategory);
            } 
    
        } catch (error) {

            console.log(error);
        }
    };


    //delete button
    const deleteUser = async (id) => {
        try {
            const {data} = await axios.delete(`http://localhost:5000/api/form/delete-subcategory/${id}`);

            if(data.success){
                tableData();
                toast.success("Deleted Successfully");
            }


        } catch (error) {
            console.log(error);
        }

    };

    //table
    const columns = [
        {
            name: "Sub Category Name",
            selector: (row) => row.name
        },
        {
            name: "Category Name",
            selector: (row) => row.category.name
        },

        {
            name: "Action",
            cell: (row) => <div>
                <Link to={`/editsubcategory/${row.slug}`} className='btn btn-primary mx-1'>Edit</Link>
                <button className='btn btn-danger mx-1 ' onClick={() => deleteUser(row._id)}>Delete</button>
            </div>
        }
    ]

    //table style 
    const customeStyles = {
        headRow: {
            style: {
                backgroundColor: " rgb(249 250 251 )",
                minHeight: "40px"
            }
        },
        headCells: {
            style: {
                textTransform: "uppercase"
            }
        },
        cells: {
            style: {
                textTransform: "capitalize"
            }
        }
    }


    useEffect(() => {
        tableData();
    }, []);

    //filter
    useEffect(() => {
        const result = tbdata.filter((item) => {
            return item.username?.toLowerCase().match(search.toLocaleLowerCase())
        });
        setFilter(result);
    }, [search]);

    return (
        <Layout>


            <div className='p-3'>
                <nav id='breadcrumb' aria-label="breadcrumb" className=' py-2 fw-bold'>
                    <ol className="breadcrumb">
                        <li >
                            <span className="text-decoration-none text-dark px-2">Sub Category List</span> | </li>
                        <li className="breadcrumb-item">
                            <NavLink to='/home'>  <i className="bi bi-house-door-fill text-primary px-2"></i>
                            </NavLink></li>
                        <li className="breadcrumb-item active" aria-current="page">Sub Category List</li>
                    </ol>
                </nav>
                <div className='container shadow p-3 table-responsive-sm'>


                    <DataTable columns={columns} data={filter} pagination highlightOnHover customStyles={customeStyles}
                        subHeader
                        subHeaderComponent={<div>
                            <div className="row g-3 align-items-center">
                                <div className="col-auto">
                                    <label htmlFor="search" className="col-form-label">Search : </label>
                                </div>
                                <div className="col-auto">
                                    <input type="text" id="search" className="form-control" value={search} onChange={(e) => setSearch(e.target.value)} />
                                </div>

                            </div>
                        </div>

                        }


                    />
                </div>
            </div>

        </Layout>

    )
}
