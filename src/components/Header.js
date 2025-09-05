import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userName, setUserName] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Check localStorage for user on route change
  useEffect(() => {
    closeMenu();
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        setUserName(parsed.name);
        //alert(parsed.name);
      } catch {
        setUserName(null);
      }
    } else {
      setUserName(null);
    }
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUserName(null);
    navigate('/auth');
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Logo */}
        <Link to="/" style={styles.logoLink}>
          <img src="/MYLOGO.png" alt="Sim-portal Logo" style={styles.logo} />
        </Link>

        {/* Hamburger for small screens */}
        <button
          onClick={toggleMenu}
          style={styles.hamburger}
          className="hamburger"
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Navigation Links */}
        <nav
          className={`nav-menu ${menuOpen ? 'open' : ''}`}
          style={{
            ...styles.nav,
            ...(menuOpen ? styles.navOpen : {}),
          }}
        >
          <Link to="/chemistry" style={styles.navLink}>Chemistry</Link>
          <Link to="/physics" style={styles.navLink}>Physics</Link>
          <Link to="/consult" style={styles.navLink}>Projects</Link>
          <Link to="/stem" style={styles.navLink}>Kits</Link>
          <Link to="/requests" style={styles.navLink}>Available bids</Link>
          <Link to="/chats" style={styles.navLink}>My bids</Link>
          

          {userName ? (
            <>
              <span style={{ ...styles.navLink, fontWeight: 'bold' }}>Hi, {userName}</span>
              <button onClick={handleLogout} style={{ ...styles.navLink, background: 'none', border: 'none', cursor: 'pointer' }}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/auth" style={styles.navLink}>Login</Link>
          )}
        </nav>
      </div>

      {/* CSS overrides */}
      <style>{`
        @media (min-width: 768px) {
          .nav-menu {
            display: flex !important;
            flex-direction: row !important;
            position: static !important;
            background: none !important;
            box-shadow: none !important;
            width: auto !important;
            max-height: none !important;
            opacity: 1 !important;
            align-items: center !important;
            gap: 20px !important;
            justify-content: flex-end !important;
          }

          .hamburger {
            display: none !important;
          }
        }

        .nav-menu a:hover {
          background-color: #444;
        }

        .nav-menu {
          transition: max-height 0.3s ease, opacity 0.3s ease;
        }
      `}</style>
    </header>
  );
};

const styles = {
  header: {
    background: '#1f1f1f',
    padding: '10px 20px',
    color: '#fff',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  logo: {
    height: '40px',
  },
  logoLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  hamburger: {
    fontSize: '28px',
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    display: 'block',
  },
  nav: {
    display: 'none',
    flexDirection: 'column',
    alignItems: 'flex-start',
    background: '#2b2b2b',
    width: '100%',
    padding: '10px 0',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    borderRadius: '4px',
    marginTop: '10px',
    maxHeight: '0',
    overflow: 'hidden',
    opacity: 0,
  },
  navOpen: {
    display: 'flex',
    maxHeight: '500px',
    opacity: 1,
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    width: '100%',
  }
};

export default Header;
