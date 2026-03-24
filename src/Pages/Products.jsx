import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/Cartparts";
import { Link } from "react-router-dom";
import productsData from "../data/productsData";

function Products() {

  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("");

  // Load products from LocalStorage
  useEffect(() => {

    const savedProducts = JSON.parse(localStorage.getItem("products"));

    if (savedProducts && savedProducts.length > 0) {
      setProducts(savedProducts);
    } else {
      setProducts(productsData);
    }

  }, []);

  // Save products to LocalStorage
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // Search + Filter
  const filteredProducts = products.filter((p) => {
    return (
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (price === "" || p.price <= Number(price))
    );
  });

  return (

    <div className="container mt-4">

      <h2 className="mb-4 text-center">📱 Mobile Store</h2>

      {/* Search Bar */}

      <input
        type="text"
        placeholder="Search Mobile..."
        className="form-control mb-3"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Price Filter */}

      <select
        className="form-control mb-4"
        onChange={(e) => setPrice(e.target.value)}
      >
        <option value="">Filter by Price</option>
        <option value="20000">Below ₹20,000</option>
        <option value="50000">Below ₹50,000</option>
        <option value="80000">Below ₹80,000</option>
      </select>

      <div className="row">

        {filteredProducts.map((product) => (

          <div className="col-md-4 mb-4" key={product.id}>

            <div className="card shadow-sm h-100 border-0">

              {/* Click Product → Product Details */}

              <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top p-3"
                  style={{ height: "220px", objectFit: "contain" }}
                />

                <div className="card-body text-center">

                  <h5 className="card-title">
                    {product.name}
                  </h5>

                  <p className="text-success fw-bold">
                    ₹{product.price}
                  </p>

                </div>

              </Link>

              <div className="card-footer bg-white border-0 text-center">

                {/* Add To Cart */}

                <button
                  className="btn btn-primary me-2"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add To Cart
                </button>

                {/* Buy Now */}

                <Link to="/cart">
                  <button className="btn btn-success">
                    Buy Now
                  </button>
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Empty Product Message */}

      {filteredProducts.length === 0 && (
        <h4 className="text-center mt-4">
          No Products Found
        </h4>
      )}

    </div>

  );
}

export default Products;