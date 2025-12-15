import { Routes, Route } from "react-router-dom";
import Landing from "./pages/LandingPage";
import Products from "./pages/ProductList";
import Cart from "./pages/CartItem";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
