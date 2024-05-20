
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import CustomerTable from './Datatable/CustomerTable';
import ProductTable from './Datatable/ProductTable';
import OrderTable from './Datatable/OrderTable';
import Register from './Components/Register';
import Error from './Components/Error';
import Logout from './Components/Logout';
import MyAccount from './Components/MyAccount';
import AddCustomer from './Components/AddCustomer';
import CategoryTable from './Datatable/CategoryTable';
import AddCategory from './Components/AddCategory';
import EditCategory from './Components/EditCategory';
import AddSubCategory from './Components/AddSubCategory';
import SubCategoryTable from './Datatable/SubCategoryTable';
import EditSubCategory from './Components/EditSubCategory';
import AddProduct from './Components/Product/AddProduct';
import EditProduct from './Components/Product/EditProduct';
import MessagesTable from './Datatable/MessagesTable';

function App() {
  return (

    <>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/customerlist' element={<CustomerTable />}></Route>
        <Route path='/addcustomer' element={<AddCustomer />}></Route>

        {/* category route */}
        <Route path='/categorylist' element={<CategoryTable />}></Route>
        <Route path='/addcategory' element={<AddCategory />}></Route>
        <Route path='/editcategory/:id' element={<EditCategory />}></Route>

        {/* sub-category route */}
        <Route path='/subcategorylist' element={<SubCategoryTable />}></Route>
        <Route path='/addSubCategory' element={<AddSubCategory />}></Route>
        <Route path='/editsubcategory/:id' element={<EditSubCategory />}></Route>

        {/* product */}
        <Route path='/productlist' element={<ProductTable />}></Route>
        <Route path='/addproduct' element={<AddProduct />}></Route>
        <Route path='/editproduct/:id' element={<EditProduct />}></Route>

        <Route path='/orderlist' element={<OrderTable />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
        <Route path='/myaccount' element={<MyAccount />}></Route>

        {/* messages */}
        <Route path='/messageList' element={<MessagesTable />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
