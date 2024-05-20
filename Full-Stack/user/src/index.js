import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './Store/Auth';
import { BrowserRouter } from 'react-router-dom';
import { CheckoutProvider } from './Context/Checkout';
import { WishlistProvider } from './Context/Whishlist';
import { CartProvider } from './Context/Cart';

import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <AuthProvider>
    <CartProvider>
      <CheckoutProvider>
        <WishlistProvider>
          <BrowserRouter>
            <React.StrictMode>
              <App />
              <ToastContainer
                position="top-right"
                autoClose={500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Slide}
              />
            </React.StrictMode>
          </BrowserRouter>
          </WishlistProvider>
      </CheckoutProvider>
    </CartProvider>
  </AuthProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
