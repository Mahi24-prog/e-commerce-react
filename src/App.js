import "./App.css";
import Router from './Router/Router'; 
import { CategoryProvider } from "./Contexts/CategoryContext";
import { ProductProvider } from "./Contexts/ProductContext";

function App() {
  return (
    <>
      <CategoryProvider>
        <ProductProvider>
            <Router/>
       </ProductProvider>
       </CategoryProvider>
    </>
  )
          
}

export default App;
