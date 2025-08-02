const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="footer-content" style={contentStyle}>
        <div>
          <h3 style={{ color: "#2563eb", marginBottom: 8 }}><a href="https://www.eduengine.co.ke">EduEngine</a></h3>
          <p style={{ color: "#555", maxWidth: 300 }}>
            Empowering learners with hands-on resources designed for Kenyan students. Discover, create, and innovate with EduEngine.
          </p>
        </div>
        <div style={socialStyle}>
          <a href="https://web.facebook.com/frankonyaboga" aria-label="Facebook" style={linkStyle}>Facebook</a>
          <a href="https://x.com/franknyaboga_" aria-label="Twitter" style={linkStyle}>Twitter</a>
          <a href="https://mail.google.com/mail/u/0/?fs=1&to=techsupport@eduengine.co.ke&tf=cm" aria-label="Instagram" style={linkStyle}>Contact us</a>
        </div>
      </div>
      <div style={copyStyle}>
        &copy; {new Date().getFullYear()} EduEngine. All rights reserved.
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "black",
  padding: "20px 40px",
  marginTop: "60px",
};

const contentStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "20px",
};

const socialStyle = {
  display: "flex",
  gap: "15px",
};

const linkStyle = {
  color: "#2563eb",
  textDecoration: "none",
  fontWeight: "600",
  cursor: "pointer",
};

const copyStyle = {
  marginTop: "15px",
  textAlign: "center",
  fontSize: "0.9rem",
  color: "#777",
};

export default Footer;
