import Product from "./Product";
import styles from "./Container.module.css";
import { useContext } from "react";
import ShoppingContext from "../context/ShoppingCartContext";

const ShoppingCartContainer = () => {
  const shoppingContext = useContext(ShoppingContext);
  return (
    <div className={styles.container}>
      {shoppingContext.shoppingCartProducts.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            removeFromCart={shoppingContext.removeFromCart}
          />
        );
      })}
      <button onClick={shoppingContext.emptyCart}>Delete all</button>
    </div>
  );
};

export default ShoppingCartContainer;