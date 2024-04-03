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
  const [selectedPrice, setSelectedPrice] = useState([]);

  // console.log("data", filteredData);
  // console.log('category', selectedCategory);

  const loadUserData = async () => {
    setfilteredData(PRODUCTS);
    setSelectedCategory("");
    setSearch("");
    setSelected(['All']);
    setSelectedPrice([]);
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
    if (selected.includes(value) === true) {
        setSelected((prev) => [...prev, value]);
    }
  }

  const addToSelectedPrice = (value) => {
    if (selected.includes(value) === false) {
        setSelectedPrice((prev) => [...prev, value]);
    }
    // console.log('selected', selectedPrice);
  }

  const removeFromSelected = (value) => {
    // console.log('select', selected);

    for (let i = 0; i < selected.length; i++) { 
      if (selected[i] === value) { 
          selected.splice(i, 1);
      }
    }

    // console.log('selected', selected);
    if (selected.length === 0) {
      addToSelected('All');
    }
  }

  const removeFromSelectedPrice = (value) => {
    for (let i = 0; i < selectedPrice.length; i++) {
      if (JSON.stringify(selectedPrice[i]) === JSON.stringify(value.split(","))) {
        selectedPrice.splice(i, 1);
      }
    }
    // console.log('selectPrice', selectedPrice);
  }


  const filterAdd = (value) => {
    // Filter for Gender
    const filterdata = [];

    addToSelected(value);
    // console.log('selected', selected);

    const select = selected;

    PRODUCTS.map((product) => {
      const query = product.category.toLowerCase();
      for (let i = 0; i < select.length; i++) {
        if (filterdata.includes(product) === false) {
          if (query.indexOf(select[i].toLowerCase()) !== -1) {
            filterdata.push(product);
          }
        }
      }
    });
    // console.log('filter', filterdata);
    setfilteredData(filterdata);
  }

  const filterAddPrice = (value) => {
    // Filter for price
    const filterdata = [];

    addToSelectedPrice(value.split(","));

    const select = selectedPrice;
    select.push(value.split(","));

    PRODUCTS.map((product) => {
      const query = product.price;
      for (let i = 0; i < selectedPrice.length; i++) {
        if (filterdata.includes(product) === false) {
          if (query > parseInt(selectedPrice[i][0]) && query < parseInt(selectedPrice[i][1])) {
            filterdata.push(product);
          }
        }
      }
    });
    // console.log('filter', filterdata);
    setfilteredData(filterdata);
  }

  const filterRemove = (value) => {
    // Filter remove gender 
    let filterdata = [];

    removeFromSelected(value);
    const select = selected;
    // select.push(value);

    filteredData.map((product) => {
      const query = product.category.toLowerCase();
      for (let i = 0; i < select.length; i++) {
        if (query.indexOf(select[i].toLowerCase()) !== -1) {
          filterdata.push(product);
        }
      }
    });

    if (filterdata.length === 0) {
      filterdata = PRODUCTS;
    }

    // console.log('filter', filterdata);
    setfilteredData(filterdata);
  }

  const filterRemovePrice = (value) => {
    // filter Remove Price
    let filterdata = [];

    removeFromSelectedPrice(value);
    const select = selectedPrice;
    // select.push(value);

    filteredData.map((product) => {
      const query = product.price;
      for (let i = 0; i < select.length; i++) {
        if (filterdata.includes(product) === false) {
          if ((query > parseInt(select[i][0]) && query < parseInt(select[i][1])) === true) {
            filterdata.push(product);
          }
        }
      }
    });

    if (filterdata.length === 0) {
      filterdata = PRODUCTS;
    }

    // console.log('filter', filterdata);
    setfilteredData(filterdata);
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

    filterAdd,
    filterRemove,
    filterAddPrice,
    filterRemovePrice,
  };

  // console.log('çartItems', cartItems);
  // console.log('favouriteItems', favoriteItems);

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
