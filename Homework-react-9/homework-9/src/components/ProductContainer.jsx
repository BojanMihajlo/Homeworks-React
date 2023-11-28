import Product from "./Product";
import styles from "./Container.module.css";
import { useContext } from "react";
import ShoppingContext from "../context/ShoppingCartContext";

const ProductContainer = () => {
  const shoppingContext = useContext(ShoppingContext);
  return (
    <div className={styles.container}>
      {shoppingContext.products.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            addToCart={shoppingContext.addToCart}
          />
        );
      })}
    </div>
  );
};

export default ProductContainer;