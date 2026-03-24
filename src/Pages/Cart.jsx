import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/Cartparts.jsx";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Calculate Total Price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h2>🛒 Cart Items</h2>

      {cartItems.length === 0 ? (
        <h4>Your cart is empty</h4>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "8px",
              }}
            >
              <h4>{item.name}</h4>
              <p>Price: ₹ {item.price}</p>
              <img src={item.image} alt={item.name} style={{ maxWidth: "100px", height: "auto" }} />
              <p>Quantity: {item.quantity}</p>
              <p>
                Subtotal: ₹ {item.price * item.quantity}
              </p>

              <button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  dispatch(removeFromCart(item.id))
                }
              >
                Remove
              </button>
            </div>
          ))}

          <hr />
          <h3>Total: ₹ {totalPrice}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;
