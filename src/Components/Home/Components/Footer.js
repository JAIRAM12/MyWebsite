import { Link } from "react-router-dom";

export default function Footer() {
  const socialIcons = [
    {
      src: "https://framerusercontent.com/images/7T9YWMusvVWnzuaA2uqNMPertY.svg",
      alt: "Twitter"
    },
    {
      src: "https://framerusercontent.com/images/0GDBHySwySzplUwE7TkY7ASwO4s.png",
      alt: "Facebook"
    },
    {
      src: "https://framerusercontent.com/images/3vdzRTYV1XV6UUX6QKcsDIfU.svg",
      alt: "LinkedIn"
    }
  ];

  const handleSocialHover = (e, opacity) => {
    e.target.style.opacity = opacity;
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column-1">
            <Link to="/" style={{ fontWeight: '700', color: 'white', textDecoration: 'none' }}>
              Academia University
            </Link>
            <p className="body-text text-on-primary" style={{ opacity: '0.7', marginTop: '16px' }}>
              Empowering minds through discovery, innovation, and community.
            </p>
          </div>
          <div className="footer-column">
            {/* <h4 className="large-body text-on-primary">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" className="nav-link-text footer-link">Home</Link></li>
              <li><a href="#academics" className="nav-link-text footer-link">Academics</a></li>
              <li><a href="#admissions" className="nav-link-text footer-link">Admissions</a></li>
              <li><a href="#alumni" className="nav-link-text footer-link">Alumni</a></li>
            </ul> */}
          </div>
          <div className="footer-column">
            <h4 className="large-body text-on-primary">Resources</h4>
            <ul className="footer-links">
              <li><Link to="/campus-map" className="nav-link-text footer-link">Campus Map</Link></li>
              <li><Link to="/library" className="nav-link-text footer-link">Library</Link></li>
              <li><Link to="/student-services" className="nav-link-text footer-link">Student Services</Link></li>
              <li><Link to="/contact" className="nav-link-text footer-link">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-column-2">
            <p className="large-body text-on-primary">Stay updated with university news!</p>
            <form 
              style={{ 
                display: 'flex', 
                width: '100%', 
                backgroundColor: 'white', 
                borderRadius: '99px', 
                padding: '6px', 
                marginTop: '16px' 
              }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input 
                type="email" 
                placeholder="Enter your email" 
                style={{
                  fontFamily: 'var(--font-family-primary)',
                  flexGrow: '1',
                  border: 'none',
                  background: 'transparent',
                  padding: '6px 14px',
                  outline: 'none',
                  color: 'var(--brand-primary)'
                }}
                className="body-text"
              />
              <button 
                type="submit" 
                className="btn button-text text-on-primary rounded-lg" 
                style={{ backgroundColor: '#9886fe', padding: '6px 18px', borderRadius: '100px' }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="body-text text-on-primary" style={{ opacity: '0.5' }}>
            © 2024 Academia University. All rights reserved.
          </p>
          <div className="flex-row" style={{ gap: '16px' }}>
            {socialIcons.map((icon, index) => (
              <a key={index} href="#">
                <img 
                  src={icon.src} 
                  alt={icon.alt}
                  style={{
                    width: '20px',
                    height: '20px',
                    opacity: '0.7',
                    transition: 'opacity 200ms ease',
                    ...(icon.alt === 'Facebook' && {
                      filter: 'brightness(0) invert(1)'
                    })
                  }}
                  onMouseOver={(e) => handleSocialHover(e, '1')}
                  onMouseOut={(e) => handleSocialHover(e, '0.7')}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}