import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import Addproducts from "./Pages/Addproducts";
import Editproducts from "./Pages/Editproducts";
import Cart from "./Pages/Cart";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/products" element={<Products />} />

        <Route path="/product" element={<Addproducts />} />

        <Route path="/edit/:id" element={<Editproducts />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;