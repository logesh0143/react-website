import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div
        style={{
          height: "70vh",
          backgroundImage:
            "linear-gradient(rgba(15,42,68,0.85), rgba(15,42,68,0.85)), url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "48px", marginBottom: "15px" }}>
            Welcome to Lokesh Store
          </h1>

          <p
            style={{
              fontSize: "20px",
              marginBottom: "25px",
              color: "#E3EEFF",
            }}
          >
            Smart electronics. Best prices. Trusted quality.
          </p>

          <a href="/products">
            <button
              style={{
                backgroundColor: "white",
                color: "#0F2A44",
                border: "none",
                padding: "12px 28px",
                fontSize: "16px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Shop Now
            </button>
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div
        style={{
          padding: "60px 20px",
          maxWidth: "1100px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "40px", color: "#0F2A44" }}>
          Why Shop With Us?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
          }}
        >
          <div style={{ padding: "25px", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
            <h3>🚚 Fast Delivery</h3>
            <p>Quick and reliable delivery right to your doorstep.</p>
          </div>

          <div style={{ padding: "25px", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
            <h3>💰 Best Prices</h3>
            <p>Affordable pricing with great value for money.</p>
          </div>

          <div style={{ padding: "25px", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
            <h3>⭐ Quality Products</h3>
            <p>Carefully selected electronics you can trust.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


