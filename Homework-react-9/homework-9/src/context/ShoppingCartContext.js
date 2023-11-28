import { createContext, useEffect, useState } from "react";


const ShoppingContext = createContext({
    products: "",
    shoppingCartProducts: "",
    addToCart: () => {},
    removeFromCart: () => {},
    emptyCart: () => {},
})
  

export const ShoppingContextProvider = (props) => {

  const [products, setProducts] = useState([
    {
        id: 1,
        name: "Banana",
        description: "Some description about bananas",
        price: 5,
      },
      {
        id: 2,
        name: "Apple",
        description: "Some description about apples",
        price: 3,
      },
      {
        id: 3,
        name: "Cucumber",
        description: "Some description about cucumbers",
        price: 6,
      },
      {
        id: 4,
        name: "Spinach",
        description: "Some description about spinach",
        price: 5,
      },
      {
        id: 5,
        name: "Honey",
        description: "Some description about honey",
        price: 10,
      },
      {
        id: 6,
        name: "Juice",
        description: "Some description about juice",
        price: 8,
      },
    ]);
  const [shoppingCartProducts, setShoppingCartProducts] = useState([]);

  const addToCart = (id) => {
    setProducts((prevState) => {
      return prevState.filter((product) => product.id !== id);
    });

    setShoppingCartProducts((prevState) => {
      const newItem = products.filter((product) => product.id === id)[0];
      return [...prevState, newItem];
    });
  };

  const removeFromCart = (id) => {
    setShoppingCartProducts((prevState) => {
      return prevState.filter((product) => product.id !== id);
    });
  };

  const emptyCart = () => {
    setShoppingCartProducts([]);
  };

  return (
   <ShoppingContext.Provider
    value={{
        products : products,
        shoppingCartProducts : shoppingCartProducts,
        addToCart:addToCart,
        removeFromCart: removeFromCart,
        emptyCart : emptyCart,
    }}
   >
    {props.children}
   </ShoppingContext.Provider>
  );
}

export default ShoppingContext;