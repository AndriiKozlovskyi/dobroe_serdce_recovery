import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "../Stats.css";
import gisLogo from "../assets/logos/2GIS.png";
import googleLogo from "../assets/logos/googlemaps.png";

function RotatingText({ text }: { text: string }) {
	const chars = text.split('');
	const totalAngle = 360;
	const anglePerChar = totalAngle / chars.length;

	return (
		<div className="rotating-text" aria-label={text}>
			{chars.map((char, i) => {
				const angle = i * anglePerChar;
				return (
					<span
						key={i}
						style={{
							transform: `rotate(${angle}deg)`,
						}}
					>
						{char}
					</span>
				);
			})}
		</div>
	);
}

export default function Stats() {
	const { t } = useTranslation();
	const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

	const STATS = [
		{ target: 21, suffix: "", label: t('stats.label1'), sublabel: t('stats.sublabel1') },
		{ target: 11619, suffix: "", label: t('stats.label2'), sublabel: t('stats.sublabel2') },
		{ target: 21, suffix: "", label: t('stats.label3'), sublabel: t('stats.sublabel3') },
		{ target: 35, suffix: "", label: t('stats.label4'), sublabel: t('stats.sublabel4') },
	];

	useEffect(() => {
		const DURATION = 2000;

		function animateCounter(el: HTMLElement, target: number, suffix: string) {
			const valEl = el.querySelector<HTMLElement>("[data-val]");
			if (!valEl) return;

			let start: number | null = null;

			function step(ts: number) {
				if (start === null) start = ts;
				const progress = Math.min((ts - start) / DURATION, 1);
				const eased = 1 - Math.pow(1 - progress, 3);
				valEl!.textContent = Math.round(eased * target).toLocaleString() + suffix;
				if (progress < 1) requestAnimationFrame(step);
			}

			requestAnimationFrame(step);
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const el = entry.target as HTMLElement;
						el.classList.add("show");
						const target = Number(el.dataset.target);
						const suffix = el.dataset.suffix ?? "";
						animateCounter(el, target, suffix);
						observer.unobserve(el);
					}
				});
			},
			{ threshold: 0.2 }
		);

		itemRefs.current.forEach((el) => {
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<section id="stats">
			<div className="container">
				<h2 className="stats-title">{t('stats.title')}</h2>
				<div className="stats-grid">
					{STATS.map(({ target, suffix, label, sublabel }, i) => (
						<div key={i} className={`stat-item reveal d-${i + 1}`} data-target={target} data-suffix={suffix} ref={(el) => { itemRefs.current[i] = el; }}>
							<div className="icon-box">
								<RotatingText text="CZM FREEDOM CZM FREEDOM CZM FREEDOM CZM FREEDOM " />
								<div className="stat-val" data-val>0</div>
							</div>
							<p className="stat-label-small">{label}</p>
							<h5 className="stat-label-large">{sublabel}</h5>
						</div>
					))}
				</div>

				<div className="map-badges">
					<a href="https://2gis.kz/astana/firm/70000001059285683/tab/reviews" target="_blank" rel="noopener noreferrer" className="map-badge badge-2gis">
						<img src={gisLogo} alt="2GIS" className="badge-icon" />
						<span className="badge-rating">5.0</span>
						<div className="badge-info">
							<span className="badge-name">2ГИС</span>
							<div className="badge-stars">★★★★★</div>
						</div>
					</a>
					<a href="https://maps.app.goo.gl/wgLr55pZ6Lqy3cDf7" target="_blank" rel="noopener noreferrer" className="map-badge badge-google">
<img src={googleLogo} alt="Google Maps" className="badge-icon" />
						<span className="badge-rating">4.9</span>
						<div className="badge-info">
							<span className="badge-name">GOOGLE</span>
							<div className="badge-stars">★★★★★</div>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
}