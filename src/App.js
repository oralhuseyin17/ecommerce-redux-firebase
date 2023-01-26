import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ProtectedRoute from "./custom-hooks/ProtectedRoute";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route element={<Home />} path="home" />
        <Route element={<Shop />} path="shop" />
        <Route element={<ProductDetails />} path="shop/:id" />
        <Route element={<Cart />} path="cart" />
        <Route
          element=
          {
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
          path="checkout"
        />
        <Route element={<Login />} path="login" />
        <Route element={<Signup />} path="signup" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
