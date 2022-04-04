import "./App.css";
import Router from './Router/Router'; 
import { CategoryProvider } from "./Contexts/CategoryContext";
import { ProductProvider } from "./Contexts/ProductContext";
import { CartProvider } from "./Contexts/CartContext";

function App() {
  return (
    <>
      <CategoryProvider>
        <ProductProvider>
          <CartProvider>
            <Router/>
          </CartProvider>
       </ProductProvider>
       </CategoryProvider>
    </>
  )
          
}

export default App;
