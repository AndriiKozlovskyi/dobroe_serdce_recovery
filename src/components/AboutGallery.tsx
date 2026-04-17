import { useTranslation } from "react-i18next";
import room1 from "../assets/house/room1.jpeg";
import room2 from "../assets/house/room2.jpeg";
import room3 from "../assets/house/room3.jpeg";
import room4 from "../assets/house/room4.jpeg";
import room5 from "../assets/house/room5.jpeg";

const icons = {
  individual: <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" stroke="#2dd4bf" strokeWidth="2" fill="#f0fdfa"/><path d="M24 16a4 4 0 110 8 4 4 0 010-8zm0 10c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z" fill="#2dd4bf"/><circle cx="34" cy="16" r="3" stroke="#2dd4bf" strokeWidth="1.5" fill="none"/></svg>,
  program: <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="4" y="6" width="40" height="36" rx="4" stroke="#2dd4bf" strokeWidth="2" fill="#f0fdfa"/><path d="M4 14h40M16 6v8M32 6v8" stroke="#2dd4bf" strokeWidth="2"/><rect x="10" y="20" width="6" height="6" rx="1" fill="#2dd4bf"/><rect x="21" y="20" width="6" height="6" rx="1" fill="#2dd4bf" opacity=".5"/><rect x="32" y="20" width="6" height="6" rx="1" fill="#2dd4bf" opacity=".3"/><rect x="10" y="30" width="6" height="6" rx="1" fill="#2dd4bf" opacity=".5"/></svg>,
  monitoring: <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" stroke="#2dd4bf" strokeWidth="2" fill="#f0fdfa"/><text x="24" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="#2dd4bf">24</text><line x1="18" y1="26" x2="30" y2="26" stroke="#2dd4bf" strokeWidth="2"/><text x="24" y="36" textAnchor="middle" fontSize="14" fontWeight="700" fill="#2dd4bf">7</text></svg>,
  certified: <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="8" y="4" width="32" height="28" rx="3" stroke="#2dd4bf" strokeWidth="2" fill="#f0fdfa"/><path d="M24 32l-6 12 6-4 6 4-6-12z" fill="#2dd4bf"/><path d="M16 14h16M16 20h10" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round"/></svg>,
};

export default function AboutGallery() {
  const { t } = useTranslation();

  const features = [
    { icon: icons.individual, title: t("aboutGallery.feat1"), desc: t("aboutGallery.feat1Desc") },
    { icon: icons.program, title: t("aboutGallery.feat2"), desc: t("aboutGallery.feat2Desc") },
    { icon: icons.monitoring, title: t("aboutGallery.feat3"), desc: t("aboutGallery.feat3Desc") },
    { icon: icons.certified, title: t("aboutGallery.feat4"), desc: t("aboutGallery.feat4Desc") },
  ];

  const photos = [room1, room2, room3, room4, room5];

  return (
    <section id="about-gallery" className="about-gallery-section">
      <div className="container">
        <h2 className="about-gallery-title reveal">{t("aboutGallery.title")}</h2>
        <p className="about-gallery-subtitle reveal d-1">{t("aboutGallery.subtitle")}</p>

        <div className="about-gallery-grid">
          {/* Left feature cards */}
          <div className="about-gallery-cards about-gallery-cards--left">
            {features.slice(0, 2).map((f, i) => (
              <div key={i} className={`about-gallery-card reveal d-${i + 1}`}>
                <div className="about-gallery-card__icon">{f.icon}</div>
                <h4 className="about-gallery-card__title">{f.title}</h4>
                <p className="about-gallery-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Center photo mosaic */}
          <div className="about-gallery-mosaic reveal d-2">
            {photos.map((src, i) => (
              <div key={i} className={`about-gallery-mosaic__item about-gallery-mosaic__item--${i + 1}`}>
                <img src={src} alt={`Room ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>

          {/* Right feature cards */}
          <div className="about-gallery-cards about-gallery-cards--right">
            {features.slice(2).map((f, i) => (
              <div key={i} className={`about-gallery-card reveal d-${i + 3}`}>
                <div className="about-gallery-card__icon">{f.icon}</div>
                <h4 className="about-gallery-card__title">{f.title}</h4>
                <p className="about-gallery-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
