import "./App.css";
import ProductContainer from "./components/ProductContainer";
import ShoppingCartContainer from "./components/ShoppingCartContainer";
import { useContext} from "react";
import ShoppingContext from "./context/ShoppingCartContext";



function App() {
  const shoppingContext = useContext(ShoppingContext);
  
  return (
    <div className="App">
      <ProductContainer products={shoppingContext.products} addToCart={shoppingContext.addToCart} />
      <ShoppingCartContainer
        shoppingCartProducts={shoppingContext.shoppingCartProducts}
        removeFromCart={shoppingContext.removeFromCart}
        emptyCart={shoppingContext.emptyCart}
      />
    </div>
  );
}

export default App;