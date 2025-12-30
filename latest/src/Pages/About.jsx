function About() {
  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "1000px",
        margin: "auto",
        lineHeight: "1.8",
      }}
    >
      <h1 style={{ color: "#1355d0", marginBottom: "20px" }}>
        About Us
      </h1>

      <p style={{ fontSize: "18px" }}>
        Welcome to <b>Lokesh Store</b> – your trusted online destination for
        quality electronics at affordable prices.  
        We focus on providing a smooth, simple and secure shopping experience
        for all users.
      </p>

      <h2 style={{ color: "#1355d0", marginTop: "30px" }}>Who We Are</h2>
      <p>
        Lokesh Store is an online shopping platform designed to make purchasing
        electronics easy and convenient.  
        Our platform allows users to browse products, add them to the cart,
        manage quantities and view the total price instantly.
      </p>

      <h2 style={{ color: "#1355d0", marginTop: "30px" }}>What We Offer</h2>
      <ul>
        <li>High-quality electronic products</li>
        <li>Clear product pricing</li>
        <li>Easy add-to-cart functionality</li>
        <li>Real-time cart updates</li>
        <li>User-friendly interface</li>
      </ul>

      <h2 style={{ color: "#1355d0", marginTop: "30px" }}>Our Mission</h2>
      <p>
        Our mission is to build a simple and reliable e-commerce website that
        focuses on usability, speed and clarity.  
        We aim to provide users with a stress-free shopping experience using
        modern web technologies.
      </p>

      <h2 style={{ color: "#1355d0", marginTop: "30px" }}>Why Choose Lokesh Store?</h2>
      <ul>
        <li>Simple and clean design</li>
        <li>Fast navigation between pages</li>
        <li>Live cart count updates</li>
        <li>Accurate price calculation</li>
        <li>Beginner-friendly website flow</li>
      </ul>

      <h2 style={{ color: "#1355d0", marginTop: "30px" }}>Technology Behind the Website</h2>
      <p>
        This website is built using <b>React.js</b> and follows a component-based
        architecture.  
        Routing is handled using React Router, and cart data is managed using
        React state.
      </p>

      <p
        style={{
          marginTop: "30px",
          fontStyle: "italic",
          fontSize: "16px",
        }}
      >
        Lokesh Store – Smart Shopping Made Simple 🛒
      </p>
    </div>
  );
}

export default About;

