import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {

  const cartItems = useSelector((state) => state.cart.cartItems);

  return (

<nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">

<div className="container">

{/* Logo */}

<NavLink className="navbar-brand fw-bold" to="/">
📱 MobileStore
</NavLink>


{/* Menu */}

<div className="navbar-nav ms-auto">

<NavLink
to="/"
className="nav-link"
>
Home
</NavLink>
<NavLink
to="/about"
className="nav-link"
>
About
</NavLink>

<NavLink
to="/products"
className="nav-link"
>
Products
</NavLink>

<NavLink
to="/cart"
className="nav-link"
>
Cart ({cartItems.length})
</NavLink>

</div>
</div>
</nav>

  );
}

export default Navbar;

