export function LogoCarousel() {
  const logos = [
    { src: "/Logo_Sika_AG.svg.png", alt: "Sika" },
    { src: "/scanfast.svg", alt: "Scanfast" },
    { src: "/contractor.jpg", alt: "Contractor" },
    { src: "/OFBygg_Liten.webp", alt: "OF Bygg" },
    { src: "/Hedin-Construction-Black_Hedin-Construction-Black.png", alt: "Hedin Construction" },
    { src: "/NP_logo_black.svg", alt: "Northpower" },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container">
        <h3 className="text-sm text-slate-500 mb-4 text-center">Kunder och leverantörer</h3>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            <div className="marquee-group">
              {logos.map((logo, idx) => (
                <div key={`a-${idx}`} className="marquee-item">
                  <img src={logo.src} alt={logo.alt} width={160} height={48} loading="eager" className="logo-img" />
                </div>
              ))}
            </div>
            <div className="marquee-group" aria-hidden="true">
              {logos.map((logo, idx) => (
                <div key={`b-${idx}`} className="marquee-item">
                  <img src={logo.src} alt={logo.alt} width={160} height={48} loading="eager" className="logo-img" />
                </div>
              ))}
            </div>
            <div className="marquee-group" aria-hidden="true">
              {logos.map((logo, idx) => (
                <div key={`c-${idx}`} className="marquee-item">
                  <img src={logo.src} alt={logo.alt} width={160} height={48} loading="eager" className="logo-img" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
