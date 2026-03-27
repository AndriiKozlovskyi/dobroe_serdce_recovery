import { useEffect, useRef } from 'react';

const STATS = [
  { icon: '🏆', target: 21,    suffix: '',  label: 'Лет опыта' },
  { icon: '❤️', target: 11619, suffix: '+', label: 'Вылеченных пациентов' },
  { icon: '👨‍⚕️', target: 21,   suffix: '',  label: 'Специалистов в штате' },
  { icon: '💊', target: 35,    suffix: '',  label: 'Медицинских услуг' },
];

export default function Stats() {
  const itemRefs = useRef([]);

  useEffect(() => {
    const DURATION = 2000;

    function animateCounter(el, target, suffix) {
      const valEl = el.querySelector('[data-val]');
      let start = null;
      function step(ts) {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / DURATION, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        valEl.textContent = Math.round(eased * target).toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add('show');
            const { target, suffix } = el.dataset;
            animateCounter(el, Number(target), suffix);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats">
      <div className="container">
        <div className="stats-grid">
          {STATS.map(({ icon, target, suffix, label }, i) => (
            <div
              key={i}
              className={`stat-item reveal d-${i + 1}`}
              data-target={target}
              data-suffix={suffix}
              ref={(el) => (itemRefs.current[i] = el)}
            >
              <div className="stat-icon">{icon}</div>
              <div className="stat-val" data-val>0</div>
              <div className="stat-lbl">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}