import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import Layout from '../Layout/Layout';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function CustomerTable() {
    const [tbdata, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState([]);

    //display table data
    const tableData = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/admin/users", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            setData(data);
            setFilter(data);

        } catch (error) {
            console.log(error);
        }
    };

    //delete button
    const deleteUser = async (id) =>{
        try {
            const res = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            toast.success("Deleted Successfully");

            if(res.ok){
                tableData();
            }
           

        } catch (error) {
            console.log(error);
        }
  
    };

    //table
    const columns = [
        {
            name: "Username",
            selector: (row) => row.username
        },
        {
            name: "Email",
            selector: (row) => row.email
        },
        {
            name: "Phone",
            selector: (row) => row.phone
        },
        {
            name: "Action",
            cell: (row) => <div>
                {/* <button className='btn btn-primary mx-1 ' onClick={() => alert(row._id)}>Edit</button> */}
                <button className='btn btn-danger mx-1 ' onClick={() => deleteUser(row._id)}>Delete</button>
            </div>
        }
    ]

    //table style 
    const customeStyles ={
        headRow :{
            style:{
                backgroundColor:" rgb(249 250 251 )",
                minHeight: "40px"    
            }
        },
        headCells:{
            style:{
               textTransform :"uppercase"    
            }
        },
        cells:{
            style:{
                   
            }
        }
    }

    
    useEffect(() => {
        tableData();
    }, []);

    //filter
    useEffect(()=>{
        const result = tbdata.filter((item)=>{
            return item.username.toLowerCase().match(search.toLocaleLowerCase())
        });
        setFilter(result);
    },[search]);

    return (
        <Layout>


            <div className='p-3'>
                <nav id='breadcrumb' aria-label="breadcrumb" className=' py-2 fw-bold'>
                    <ol className="breadcrumb">
                        <li >
                            <span className="text-decoration-none text-dark px-2">Customer List</span> | </li>
                        <li className="breadcrumb-item">
                            <NavLink to='/home'>  <i className="bi bi-house-door-fill text-primary px-2"></i>
                            </NavLink></li>
                        <li className="breadcrumb-item active" aria-current="page">Customer List</li>
                    </ol>
                </nav>
                <div className='container shadow p-3 table-responsive-sm'>

                    <DataTable columns={columns} data={filter}  pagination highlightOnHover customStyles={customeStyles}
                        subHeader 
                        subHeaderComponent={<div>
                            <div className="row g-3 align-items-center">
                                <div className="col-auto">
                                    <label htmlFor="search" className="col-form-label">Search : </label>
                                </div>
                                <div className="col-auto">
                                    <input type="text" id="search" className="form-control" value={search} onChange={(e)=> setSearch(e.target.value)}  />
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
