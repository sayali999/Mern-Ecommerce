
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Login from './Components/Login_signup/Login';
import Register from './Components/Login_signup/Register';

import Footer from './Components/Footer/Footer';
import Collection from './Pages/Collection/Collection';
import ProductDetail from './Components/Product-Detail/ProductDetail';
import Checkout from './Pages/Checkout/Checkout';
import Viewcart from './Pages/Viewcart/Viewcart';
import Contactus from './Pages/Contact-us/Contactus';
import SubCategoryCollection from './Pages/Collection/SubCategoryCollection';
import Logout from './Components/Login_signup/Logout';
import UserProfile from './Pages/User/UserProfile';
import Whishlist from './Pages/Whishlist/Whishlist';

function App() {
  return (
    <div>
    
      <Navbar />
        <Routes>
          <Route path='/' element={<Header/>}></Route>
          <Route path='/collection' element={<Collection/>}></Route>
          <Route path='/collection/:slug' element={<SubCategoryCollection/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/logout' element={<Logout/>}></Route>
          <Route path='/myaccount/:activepage' element={<UserProfile/>}></Route>
          <Route path='/contactus' element={<Contactus/>}></Route>
          <Route path='/productdetails/:id' element={<ProductDetail/>}></Route>
          <Route path='/viewcart' element={<Viewcart/>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
          <Route path='/whishlist' element={<Whishlist/>}></Route>
          {/*
           <Route path='/product' element={<Product/>}></Route> */}
        </Routes>
        <Footer/>
      

    </div>
  );
}

export default App;
