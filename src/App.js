import "./App.css";
import Router from './Router/Router'; 
import { CategoryProvider } from "./Contexts/CategoryContext";
import { ProductProvider } from "./Contexts/ProductContext";
import { CartProvider } from "./Contexts/CartContext";
import { WishlistProvider } from "./Contexts/wishlistContext";

function App() {
  return (
    <>
      <CategoryProvider>
        <ProductProvider>
          <CartProvider>
            <WishlistProvider>
              <Router/>
            </WishlistProvider>
          </CartProvider>
        </ProductProvider>
      </CategoryProvider>
    </>
  )
          
}

export default App;
