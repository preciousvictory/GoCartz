/* Setting Up Context API to create a global state that 
will be available in every part of the application */
import { createContext, useState } from "react";
import { PRODUCTS } from "../data/data.js";

export const CartContext = createContext(null);

//set default cart value count for all items to 0
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const getDefaultFavorite = () => {
  let Favorite = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    Favorite[i] = 0;
  }
  return Favorite;
};

export const Context = (props) => {
  const [cartItems, setCartItem] = useState(getDefaultCart());
  const [favoriteItems, setFavoriteItem] = useState(getDefaultFavorite());
  const [searchValue, setSearch] = useState("");
  const [filteredData, setfilteredData] = useState(PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selected, setSelected] = useState(['All']);


  console.log("data", filteredData);
  console.log('cate', selectedCategory);

  const loadUserData = async () => {
    // setfilteredData(PRODUCTS);
    console.log("lud");
  };

  const addToCart = (itemID) => {
    setCartItem((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
  };

  const removeFromCart = (itemID) => {
    setCartItem((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  };

  const deleteCart = (itemID) => {
    setCartItem((prev) => ({ ...prev, [itemID]: 0 }));
  };

  const updateCartItemCount = (newAmount, itemID) => {
    setCartItem((prev) => ({ ...prev, [itemID]: newAmount }));
  };

  const gettotalPrice = (PRODUCTS, cartItems) => {
    let total = 0;
    let c = 1;

    for (const i in PRODUCTS) {
      let pricesum = 0;
      const item = PRODUCTS[i];

      if (cartItems[c] > 0) {
        pricesum = item.price * cartItems[c];
      }
      total += pricesum;
      c += 1;
    }
    return total;
  };

  const addFavoriteItem = (itemID) => {
    if (favoriteItems[itemID] < 1) {
      setFavoriteItem((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
    }
  };

  const removeFavoriteItem = (itemID) => {
    setFavoriteItem((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  };

  const moveToCart = (itemID) => {
    addToCart(itemID);
    removeFavoriteItem(itemID);
  };

  const setSearchValue = (value) => {
    setSearch(value);
  };

  const addSelectedCategory = (value) => {
    setSelectedCategory(value);
  };

  const removeSelectedCategory = () => {
    setSelectedCategory('');
  };

  const addToSelected = (value) => {
    setSelected((prev) => [...prev, value]);
  }

  const removeFromSelected = (value) => {
    setSelected(selected.filter((item) => item !== value));
  }

  // Create Context Value
  const contextValue = {
    searchValue,
    setSearchValue,
    filteredData,
    setfilteredData,
    loadUserData,

    selectedCategory,
    setSelectedCategory,
    addSelectedCategory,
    removeSelectedCategory,
    selected,
    setSelected,
    addToSelected,
    removeFromSelected,

    cartItems,
    addToCart,
    removeFromCart,
    deleteCart,
    updateCartItemCount,
    gettotalPrice,
    favoriteItems,
    addFavoriteItem,
    removeFavoriteItem,
    moveToCart,
  };

  console.log(cartItems);
  console.log(favoriteItems);
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
