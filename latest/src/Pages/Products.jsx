function Products({ cartItems, setCartItems }) {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      image: "https://tse4.mm.bing.net/th/id/OIP.ve6JNQq942nqUQ7ZU6Sj0AHaE8?pid=Api&P=0&h=180",
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000,
      image: "https://tse4.mm.bing.net/th/id/OIP.c4ZAM5Y83NDorfzBsbmBFQHaFj?pid=Api&P=0&h=180",
    },
    {
      id: 3,
      name: "Headphone",
      price: 2000,
      image: "https://tse2.mm.bing.net/th/id/OIP.qMnKupYMJvmaLZEtlxuF6AHaHa?pid=Api&P=0&h=180",
    },
  ];

  const addToCart = (product) => {
    const existingItem = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...product, quantity: 1 },
      ]);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ marginBottom: "20px", color: "#1355d0" }}>
        Our Products
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "transform 0.2s",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{             
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />

            <h4>{item.name}</h4>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              ₹{item.price}
            </p>

            <button
              onClick={() => addToCart(item)}
              style={{
                backgroundColor: "#1355d0",
                color: "white",
                border: "none",
                padding: "10px 18px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
