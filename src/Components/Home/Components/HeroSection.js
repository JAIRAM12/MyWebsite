import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-gradient-bg"></div>
      <div className="container hero-content">
        <h1 className="h1-hero text-center">Shape Your Future at Academia University</h1>
        <p className="large-body text-secondary text-center max-w-2xl">
          Empowering minds through discovery, innovation, and community.
        </p>
        <div className="flex-row gap-m mt-l">
          <Link to="/programs" className="btn btn-secondary button-text">Explore Programs</Link>
          <Link to="/campus" className="btn btn-tertiary button-text">Visit Campus</Link>
        </div>
        <div className="tag" style={{ backgroundColor: 'transparent', gap: '16px', marginTop: '24px' }}>
          <img 
            src="https://framerusercontent.com/images/eKMVAPLnSIH0dO3Q2sAbp43k00.png" 
            alt="Student icon" 
            style={{ width: '30px', height: '30px', borderRadius: '50%' }} 
          />
          <p className="body-text text-secondary">
            <strong>15,000+</strong> Students • <strong>500+</strong> Faculty • Endless Opportunities
          </p>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
          alt="University Campus" 
          style={{ 
            width: '85%', 
            marginTop: '60px', 
            borderRadius: 'var(--corner-radius-lg)', 
            objectFit: 'cover', 
            height: '500px', 
            boxShadow: 'var(--shadow-soft)' 
          }} 
        />
      </div>
    </section>
  );
}