import { Children, createContext, useContext, useEffect, useState } from "react";

const CheckoutContext = createContext();

const CheckoutProvider = ({ children }) => {
    const [checkout, setCheckout] = useState([]);

    useEffect(()=>{
        let existingCartItem = localStorage.getItem('check');
        if(existingCartItem) setCheckout(JSON.parse(existingCartItem))
    },[])

    return (
        <CheckoutContext.Provider value={[checkout, setCheckout]}>
            {children}
        </CheckoutContext.Provider>
    )
};

const useCheckout = () => useContext(CheckoutContext);

export { useCheckout, CheckoutProvider };