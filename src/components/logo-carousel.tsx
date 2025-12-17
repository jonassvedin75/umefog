export function LogoCarousel() {
  const logos = [
    "/byggtema_logo.webp",
    "/Hedin-Construction-Black_Hedin-Construction-Black.png",
    "/NP_logo_black.svg",
    "/OFBygg_Liten.webp",
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container">
        <h3 className="text-sm text-slate-500 mb-4 text-center">Kunder och leverantörer</h3>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            <div className="marquee-group">
              {logos.map((src, idx) => (
                <div key={`a-${idx}`} className="marquee-item">
                  <img src={src} alt={`Logotyp ${idx + 1}`} width={160} height={48} loading="eager" className="logo-img" />
                </div>
              ))}
            </div>
            <div className="marquee-group" aria-hidden="true">
              {logos.map((src, idx) => (
                <div key={`b-${idx}`} className="marquee-item">
                  <img src={src} alt={`Logotyp ${idx + 1}`} width={160} height={48} loading="eager" className="logo-img" />
                </div>
              ))}
            </div>
            <div className="marquee-group" aria-hidden="true">
              {logos.map((src, idx) => (
                <div key={`c-${idx}`} className="marquee-item">
                  <img src={src} alt={`Logotyp ${idx + 1}`} width={160} height={48} loading="eager" className="logo-img" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
