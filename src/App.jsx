import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Products from "./Pages/Products.jsx";
import Contact from "./Pages/Contact.jsx";
import Cart from "./Pages/Cart.jsx";

function App() {

  const [cartItems, setCartItems] = useState([]);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <Navbar cartCount={cartCount} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route
          path="/products"
          element={
            <Products
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

