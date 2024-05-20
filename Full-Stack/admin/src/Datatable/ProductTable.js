import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import Layout from '../Layout/Layout';
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';


export default function ProductTable() {
    const [tbdata, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState([]);

    //display table data
    const tableData = async () => {
        try {
            const {data} = await axios.get("http://localhost:5000/api/form/getall-product");

            if(data.success){
                console.log(data.count);
                console.log(" prod data ",data.products);
    
                setData(data.products);
                setFilter(data.products);
    
            }
        
          
        } catch (error) {
            console.log(error);
        }
    };

    
    //delete button
    const deleteUser = async (id) =>{
        try {
            const {data} = await axios.delete(`http://localhost:5000/api/form/delete-product/${id}`);

            if(data.success){
                tableData();
                toast.success(data.message);
            }


        } catch (error) {
            console.log(error);
        }
    };

    


    //table
    const columns = [
        {
            name: "Name",
            selector: row =>  <div className='flex items-center'>
                <span><img className='rounded ' src={`http://localhost:5000/api/form/product-photo/${row._id}`}  style={{ height: "45px" }} alt="..." /></span>
                <span className='mx-2'>{row.name}</span>
            </div>  
        }, 
        
        {
            name: "Description",
            selector: row =>  row.description   
        },
        {
            name: "Category",
            selector: row => row.category.name
        },
        {
            name: "Sub Category",
            selector: row => row.subcategory.name
        },
        {
            name: "Quantity",
            selector: row => row.quantity
        },
        {
            name: "Status",
            selector: row => row.status
        },
        {
            name: "Price",
            selector: row => row.price
        },
        
        {
            name: "Action",
            cell: (row) => <div>
                <Link to={`/editproduct/${row.slug}`} className='mx-1'>  <i className="bi bi-pencil" style={{ fontSize: "15px",color:"red"}}></i></Link>
                <i className='bi bi-trash mx-1 ' style={{ fontSize: "15px",color:"blue" }} onClick={() => deleteUser(row._id)}></i>
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
                textTransform :"capitalize"       
            }
        }
    }

    useEffect(() => {
        tableData();
    }, []);

    //filter
    useEffect(()=>{
        const result = tbdata.filter((item)=>{
            return item.username?.toLowerCase().match(search.toLocaleLowerCase())
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
