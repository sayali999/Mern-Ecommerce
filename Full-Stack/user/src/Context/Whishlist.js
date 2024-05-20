
import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({children}) =>{

    const [wishlistItems, setwishlistItems] = useState(localStorage.getItem('wishlistItems') ? JSON.parse(localStorage.getItem('wishlistItems')) : []);

    const addToWishlist = (item) => {
        const isItemInWishlist = wishlistItems.find((wishlistItem) => wishlistItem._id === item._id);
    
        if (isItemInWishlist) {
            setwishlistItems(
            wishlistItems.map((wishlistItem) =>
              wishlistItem._id === item._id
                ? { ...wishlistItem, qty: wishlistItem.qty + 1 }
                : wishlistItem
            )
          );

        } else {
            setwishlistItems([...wishlistItems, { ...item, qty: 1 }]);
        }
      };

      const removeWishlist = (item) => {
          wishlistItems.find((wishlistItem) => wishlistItem._id === item._id);
          setwishlistItems(wishlistItems.filter((wishlistItem) => wishlistItem._id !== item._id));
        
      };

      
      const getWishlistTotal = () => {
        return wishlistItems.reduce((total, item) => total + item.price * item.qty, 0);
      };

      


      useEffect(() => {
        localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
      }, [wishlistItems]);

      useEffect(() => {
        const wishlistItems = localStorage.getItem("wishlistItems");
        if (wishlistItems) {
          setwishlistItems(JSON.parse(wishlistItems));
        }
      }, []);


      return (
        <WishlistContext.Provider
          value={{
            wishlistItems,
            addToWishlist,
            removeWishlist,
            getWishlistTotal
          }}
        >
          {children}
        </WishlistContext.Provider>
      );

}