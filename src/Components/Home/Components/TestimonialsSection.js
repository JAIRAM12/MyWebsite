export default function TestimonialsSection() {
  const testimonials = [
    {
      stars: 5,
      title: "The best decision of my life.",
      content: "The professors are incredibly supportive and the research opportunities prepared me for my dream career.",
      avatar: "https://framerusercontent.com/images/eKMVAPLnSIH0dO3Q2sAbp43k00.png",
      name: "Jessica L.",
      role: "Alumna, Class of 2022"
    },
    {
      stars: 5,
      title: "Found my community here.",
      content: "I've made lifelong friends and grown so much as a person, both inside and outside the classroom.",
      avatar: "https://framerusercontent.com/images/kK54VVzwxoCJrm6zaFFsJ9qWJNo.png",
      name: "David C.",
      role: "Senior, Computer Science"
    },
    {
      stars: 5,
      title: "Incredible global opportunities.",
      content: "My semester abroad was a life-changing experience, fully supported by the university's excellent program.",
      avatar: "https://framerusercontent.com/images/0XIOoF2Oain1ymw3aK4KMS8VDE.png",
      name: "Sophie M.",
      role: "Junior, International Relations"
    }
  ];

  const Star = () => (
    <img 
      src="https://framerusercontent.com/images/tL8avdiXVdQ0SWTBtkuREC5LP48.svg" 
      alt="Star" 
      style={{ width: '24px', height: '24px' }} 
    />
  );

  return (
    <section id="alumni" className="section-padding" style={{ backgroundColor: 'var(--neutral-surface)' }}>
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <span className="tag tag-yellow">From Our Students</span>
          <h2 className="h2-section text-center">A Transformative Experience</h2>
        </div>
        <div className="grid-3-col reveal-on-scroll">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="card-testimonial" 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '32px', 
                backgroundColor: 'var(--neutral-background)' 
              }}
            >
              <div style={{ display: 'flex', gap: '4px' }}>
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <div>
                <h4 className="h4-small">{testimonial.title}</h4>
                <p className="large-body text-secondary" style={{ marginTop: '16px' }}>
                  {testimonial.content}
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  style={{ width: '56px', height: '56px', borderRadius: '99px' }} 
                />
                <div>
                  <p className="button-text">{testimonial.name}</p>
                  <p className="tag-text text-secondary">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}