import Cart from "./pages/Cart/Cart";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";
import ProductList from "./pages/ProductList/ProductList";
import Register from "./pages/Register/Register";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

function App() {
  const user = true
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        {/* <Route exact path="/success" element={<Success/>}/> */}
        <Route exact path="/login" element={ user ? <Navigate to="/"/> : <Login/>}/>
        <Route path="/register" element={user ? <Navigate to="/"/> : <Register />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
