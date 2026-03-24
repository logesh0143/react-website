import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateProduct } from "../store/Cartparts.jsx";
import { useState } from "react";

function EditProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = useSelector((state) =>
    state.shop.products.find(
      (item) => item.id === Number(id)
    )
  );

  const [updatedData, setUpdatedData] = useState(product);

  const handleChange = (e) => {
    setUpdatedData({
      ...updatedData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(updatedData));
    navigate("/products");
  };

  if (!product) return <h3>Product Not Found</h3>;

  return (
    <div className="container mt-4">
      <h2>Edit Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={updatedData.name}
          className="form-control mb-2"
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          value={updatedData.price}
          className="form-control mb-2"
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          value={updatedData.image}
          className="form-control mb-2"
          onChange={handleChange}
        />

        <button className="btn btn-primary">
          Update Product
        </button>
      </form>
    </div>
  );
}

export default EditProduct;

