function Contact() {
  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "1000px",
        margin: "auto",
      }}
    >
      <h1 style={{ color: "#1355d0", marginBottom: "20px" }}>
        Contact Us
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        Have any questions or feedback?  
        Please fill out the form below and we will contact you soon.
      </p>

      <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
        {/* Contact Info */}
        <div
          style={{
            flex: "1",
            minWidth: "280px",
            border: "1px solid #ddd",
            padding: "25px",
            borderRadius: "8px",
          }}
        >
          <h3>....Contact Information....</h3>
          <p><b>Store:</b> Lokesh Store</p>
          <p><b>Email:</b> support@lokeshstore.com</p>
          <p><b>Phone:</b> +91 98765 43210</p>
          <p><b>Location:</b> Coimbatore, Tamil Nadu</p>
        </div>

        {/* Form */}
        <div
          style={{
            flex: "1",
            minWidth: "280px",
            border: "1px solid #ddd",
            padding: "25px",
            borderRadius: "8px",
          }}
        >
          <h3>✉️ Send Message</h3>

          <form>
            <div style={{ marginBottom: "15px" }}>
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                required
                style={{
                  width: "100%",
                  padding: "8px",
                  marginTop: "5px",
                }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                style={{
                  width: "100%",
                  padding: "8px",
                  marginTop: "5px",
                }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label>Message</label>
              <textarea
                rows="4"
                placeholder="Write your message"
                required
                style={{
                  width: "100%",
                  padding: "8px",
                  marginTop: "5px",
                }}
              ></textarea>
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: "#1355d0",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <p
        style={{
          marginTop: "30px",
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        We look forward to hearing from you 😊
      </p>
    </div>
  );
}

export default Contact;
