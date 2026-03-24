
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          height: "80vh",
          backgroundImage:
            "linear-gradient(rgba(15,42,68,0.7), rgba(15,42,68,0.7)), url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8')",
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
          <h1 style={{ fontSize: "56px", marginBottom: "20px", fontWeight: "bold" }}>
            Welcome to Lokesh Store
          </h1>

          <p style={{ fontSize: "20px", marginBottom: "30px", color: "#E3EEFF" }}>
            Smart electronics. Best prices. Trusted quality.
          </p>

          <Link to="/products">
            <button
              style={{
                backgroundColor: "#FFD700",
                color: "#0F2A44",
                border: "none",
                padding: "15px 35px",
                fontSize: "18px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
            >
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div
        style={{
          padding: "60px 20px",
          maxWidth: "1200px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "50px", color: "#0F2A44", fontSize: "36px", fontWeight: "600" }}>
          Why Shop With Us?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              backgroundColor: "white",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
            }}
          >
            <h3 style={{ marginBottom: "15px" }}>🚚 Fast Delivery</h3>
            <p>Quick and reliable delivery right to your doorstep.</p>
          </div>

          {/* Card 2 */}
          <div
            style={{
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              backgroundColor: "white",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
            }}
          >
            <h3 style={{ marginBottom: "15px" }}>💰 Best Prices</h3>
            <p>Affordable pricing with great value for money.</p>
          </div>

          {/* Card 3 */}
          <div
            style={{
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              backgroundColor: "white",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
            }}
          >
            <h3 style={{ marginBottom: "15px" }}>⭐ Quality Products</h3>
            <p>Carefully selected electronics you can trust.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


