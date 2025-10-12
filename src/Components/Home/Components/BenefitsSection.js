export default function BenefitsSection() {
  const benefits = [
    {
      icon: "https://framerusercontent.com/images/iea21zZiEUNB7QBlnhdIEYhx0A.svg",
      iconBg: "icon-badge-yellow",
      title: "World-Class Faculty",
      description: "Learn from leading experts and passionate educators dedicated to your success."
    },
    {
      icon: "https://framerusercontent.com/images/c49xdNrkpz0kfcdgzCgBuiNvMhc.svg",
      iconBg: "icon-badge-cyan",
      title: "Cutting-Edge Research",
      description: "Engage in groundbreaking research opportunities across a variety of disciplines."
    },
    {
      icon: "https://framerusercontent.com/images/8pGrn7vkpsghfWzLkSfgAdy3Y.svg",
      iconBg: "icon-badge-purple",
      title: "Vibrant Campus Life",
      description: "Join a diverse community with over 200 clubs, sports, and activities."
    }
  ];

  return (
    <section id="academics" className="container section-padding">
      <div className="section-header reveal-on-scroll">
        <span className="tag tag-yellow">The Academia Advantage</span>
        <h2 className="h2-section text-center">Excellence in Education</h2>
        <p className="large-body text-secondary text-center max-w-xl">
          Discover the pillars of our institution, designed to foster intellectual growth and real-world success.
        </p>
      </div>
      <div className="grid-3-col reveal-on-scroll">
        {benefits.map((benefit, index) => (
          <div key={index} className="card" style={{ gap: '16px' }}>
            <div className={`icon-badge ${benefit.iconBg}`}>
              <img src={benefit.icon} alt={`${benefit.title} icon`} />
            </div>
            <div>
              <p className="large-body" style={{ fontWeight: '700' }}>{benefit.title}</p>
              <p className="body-text text-secondary mt-s">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}