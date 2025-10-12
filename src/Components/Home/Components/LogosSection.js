export default function LogosSection() {
  const logos = [
    "https://framerusercontent.com/images/m2iRqc0vjWCAjaKDXwpBZLHL6Q.svg",
    "https://framerusercontent.com/images/PrE34uenPJZDQexxT2w8id9mN0.svg",
    "https://framerusercontent.com/images/yC2iV2rmFwuP2ByxGcZkd2o4k6Y.svg",
    "https://framerusercontent.com/images/z5fRaFVV36hlMpbcgIeNIFBCs.svg",
    "https://framerusercontent.com/images/c79tfRehsXD5pu167lnIsRMVvnk.svg",
    "https://framerusercontent.com/images/VjMEe07s9HEE81fRBplh6VeiilY.svg"
  ];

  return (
    <section className="logos-section container">
      <div className="reveal-on-scroll">
        <p className="large-body text-center" style={{ fontWeight: '500' }}>
          Our graduates work at world-renowned companies
        </p>
        <div className="logo-marquee mt-l">
          <div className="logo-marquee-group">
            {logos.map((logo, index) => (
              <img key={index} src={logo} alt="Company logo" />
            ))}
          </div>
          <div className="logo-marquee-group" aria-hidden="true">
            {logos.map((logo, index) => (
              <img key={index} src={logo} alt="Company logo" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}