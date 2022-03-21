import { NavigationBar } from "./components/NavigationBar"
import { Home } from "./pages/Home"
import { Register } from "./pages/Register"
import { Login } from "./pages/Login"
import { Profile } from "./pages/Profile"
import ProductList from "./pages/ProductList"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import { useSelector } from "react-redux"

import 'bootstrap/dist/css/bootstrap.min.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Shop } from "./pages/Shop"
import { CreateShop } from "./components/CreateShop"

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={user ? <Shop /> : <Navigate to="/login" />} />
        <Route path="/shop/create" element={user ? <CreateShop /> : <Navigate to="/login" />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;