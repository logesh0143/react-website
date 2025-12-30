function Cart({ cartItems, setCartItems }) {

  const increaseQty = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    setCartItems(updatedCart);
  };

  const decreaseQty = (index) => {
    const updatedCart = [...cartItems];

    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    } else {
      updatedCart.splice(index, 1);
    }

    setCartItems(updatedCart);
  };

  const removeItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <h1 style={{ color: "#1355d0", marginBottom: "30px" }}>
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>🛒 Your cart is empty</h3>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "25px",
            justifyContent: "center",
          }}
        >
          {cartItems.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "15px",
                textAlign: "center",
                boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
                backgroundColor: "#fff",
              }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                style={{
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              />

              {/* Name */}
              <h4>{item.name}</h4>

              {/* Price */}
              <p style={{ fontWeight: "600", marginBottom: "10px" }}>
                ₹{item.price} × {item.quantity} =
                <span style={{ color: "#1355d0" }}>
                  {" "}₹{item.price * item.quantity}
                </span>
              </p>

              {/* Quantity */}
              <div
                style={{
                  
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "12px",
                }}
              >
                <button onClick={() => decreaseQty(index)}>-</button>

                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {item.quantity}
                </span>

                <button onClick={() => increaseQty(index)}>+</button>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeItem(index)}
                style={{
                  backgroundColor: "#ff4d4d",
                  color: "white",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
 



