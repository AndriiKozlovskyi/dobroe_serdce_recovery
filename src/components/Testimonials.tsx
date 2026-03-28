import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function Testimonials() {
	const { t } = useTranslation();
	const [activeT, setActiveT] = useState<number>(0);
	const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

	const TESTIS = [
		{
			text: t('testimonials.testi1'),
			name: t('testimonials.testi1Name'),
			city: t('testimonials.testi1City'),
			age: t('testimonials.testi1Age'),
			r: 5,
		},
		{
			text: t('testimonials.testi2'),
			name: t('testimonials.testi2Name'),
			city: t('testimonials.testi2City'),
			age: t('testimonials.testi2Age'),
			r: 5,
		},
		{
			text: t('testimonials.testi3'),
			name: t('testimonials.testi3Name'),
			city: t('testimonials.testi3City'),
			age: t('testimonials.testi3Age'),
			r: 5,
		},
	];

	const resetTimer = () => {
		if (timerRef.current) {
			clearInterval(timerRef.current);
		}
		timerRef.current = setInterval(() => {
			setActiveT((prev) => (prev + 1) % TESTIS.length);
		}, 5500);
	};

	useEffect(() => {
		resetTimer();
		return () => {
			if (timerRef.current) {
				clearInterval(timerRef.current);
			}
		};
	}, []);

	const handleSetTesti = (i: number) => {
		setActiveT(i);
		resetTimer();
	};

	return (
		<section id="testi" className="section">
			<div className="container">
				<div className="testi-grid">
					<div>
						<div className="reveal">
							<span className="eyebrow">{t('testimonials.eyebrow')}</span>
						</div>
						<h2 className="section-title reveal d-1" style={{ textAlign: "left" }}>
							{t('testimonials.title').split('\n').map((line, i) => (
								<span key={i}>{line}<br /></span>
							))}
						</h2>
						<p style={{ fontSize: "0.93rem", color: "var(--ink-500)", lineHeight: 1.82, marginTop: "1rem", marginBottom: "2rem", fontWeight: 300 }} className="reveal d-2">
							{t('testimonials.subtitle')}
						</p>
						<div className="testi-dots reveal d-3">
							{TESTIS.map((_, i) => (
								<button key={i} className={`testi-dot${i === activeT ? " active" : ""}`} onClick={() => handleSetTesti(i)} />
							))}
						</div>
					</div>

					<div className="testi-cards reveal-r d-2">
						{TESTIS.map((testi, i) => (
							<div key={i} className={`testi-card${i === activeT ? " active" : ""}`} onClick={() => handleSetTesti(i)}>
								<div className="testi-stars">
									{Array.from({ length: testi.r }).map((_, si) => (
										<span key={si} className="testi-star">★</span>
									))}
								</div>
								<p className="testi-text">{testi.text}</p>
								<div className="testi-author">
									<div className="testi-avatar">👤</div>
									<div>
										<div className="testi-author-name">{testi.name}</div>
										<div className="testi-author-meta">{testi.city} · {testi.age}</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
