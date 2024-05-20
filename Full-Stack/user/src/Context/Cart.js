// import {  createContext, useContext, useEffect, useState } from "react";

// const CartContext = createContext();

// const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);

//     useEffect(()=>{
//         let existingCartItem = localStorage.getItem('cart');
//         if(existingCartItem) setCart(JSON.parse(existingCartItem))
//     },[])

   
//     return (
//         <CartContext.Provider value={[cart,setCart]}>
//             {children}
//         </CartContext.Provider>
//     )
// };

// const useCart = () => useContext(CartContext);

// export { useCart, CartProvider };


import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{

    const [cartItems, setcartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);

    const addToCart = (item,amount) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem._id === item._id);
    
        if (isItemInCart) {
            setcartItems(
            cartItems.map((cartItem) =>
              cartItem._id === item._id
                ? { ...cartItem, qty: cartItem.qty + 1 }
                : cartItem
            )
          );

        } else {
            setcartItems([...cartItems, { ...item, qty: amount }]);
        }
      };

      const removeCartItem = (item) => {
          cartItems.find((cartItem) => cartItem._id === item._id);
          setcartItems(cartItems.filter((cartItem) => cartItem._id !== item._id));
        
      };

      const clearCart = () => {
        setcartItems([]); // set the cart items to an empty array
      };

      const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
      };

      useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }, [cartItems]);

      useEffect(() => {
        const cartItems = localStorage.getItem("cartItems");
        if (cartItems) {
          setcartItems(JSON.parse(cartItems));
        }
      }, []);


      return (
        <CartContext.Provider
          value={{
            cartItems,
            addToCart,
            removeCartItem,
            getCartTotal,
            clearCart
          }}
        >
          {children}
        </CartContext.Provider>
      );

}