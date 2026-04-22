import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";

import employer1 from "../assets/team/employer1.jpeg";
import employer2 from "../assets/team/employer2.jpeg";
import employer3 from "../assets/team/employer3.jpeg";
import employer4 from "../assets/team/employer4.jpeg";
import employer5 from "../assets/team/employer5.jpeg";
import employer6 from "../assets/team/employer6.jpeg";
import employer7 from "../assets/team/employer7.jpeg";
import employer8 from "../assets/team/employer8.jpeg";

const IMAGES = [
  employer1, employer2, employer3,
  employer4, employer5, employer6,
  employer7, employer8,
];

const INTERVAL_MS = 4000;

const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M15 18l-6-6 6-6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M9 6l6 6-6 6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface TeamCarouselCardProps {
  startIndex: number;
  names: string[];
}

function TeamCarouselCard({ startIndex, names }: TeamCarouselCardProps) {
  const [current, setCurrent] = useState(startIndex);
  const [previous, setPrevious] = useState(startIndex);
  const [fading, setFading] = useState(false);

  const changeTo = useCallback((getNext: (prev: number) => number) => {
    setCurrent((prev) => {
      const next = getNext(prev);
      setPrevious(prev);
      setFading(true);
      setTimeout(() => setFading(false), 500);
      return next;
    });
  }, []);

  const next = useCallback(() => {
    changeTo((prev) => (prev + 1) % IMAGES.length);
  }, [changeTo]);

  const prev = useCallback(() => {
    changeTo((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  }, [changeTo]);

  useEffect(() => {
    const interval = setInterval(next, INTERVAL_MS);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <div className="team-card reveal d-1">
      <div className="team-avatar team-avatar-even" style={{ height: "100%" }}>
        <img src={IMAGES[previous]} alt={names[previous]} className="team-img-bg" />
        <img
          src={IMAGES[current]}
          alt={names[current]}
          className={`team-img-fg ${fading ? "team-img-fadein" : ""}`}
        />
        <button className="team-arrow team-arrow-left" onClick={prev} aria-label="Previous">
          <ArrowLeft />
        </button>
        <button className="team-arrow team-arrow-right" onClick={next} aria-label="Next">
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}

export default function Team() {
  const { t } = useTranslation();

  const names = Array.from({ length: 8 }, (_, i) => t(`team.spec${i + 1}`));

  const titleLines = t("team.title").split("\n");

  return (
    <section id="team" className="section">
      <div className="container">
        <div className="section-head">
          <div className="reveal">
            <span className="eyebrow">{t("team.eyebrow")}</span>
          </div>
          <h2 className="section-title reveal d-1">
            {titleLines.map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h2>
          <p className="section-sub reveal d-2">{t("team.subtitle")}</p>
        </div>

        <div className="team-grid">
          <TeamCarouselCard startIndex={0} names={names} />
        </div>

        <div className="team-cta" style={{ textAlign: "center" }}>
          <a href="#contact" className="btn btn-primary">
            {t("team.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}