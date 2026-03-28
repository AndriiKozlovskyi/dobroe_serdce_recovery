import { useTranslation } from "react-i18next";

export default function About() {
	const { t } = useTranslation();

	const features = [
		{ num: "01", title: t('about.feat1'), desc: t('about.feat1Desc') },
		{ num: "02", title: t('about.feat2'), desc: t('about.feat2Desc') },
		{ num: "03", title: t('about.feat3'), desc: t('about.feat3Desc') },
		{ num: "04", title: t('about.feat4'), desc: t('about.feat4Desc') },
		{ num: "05", title: t('about.feat5'), desc: t('about.feat5Desc') },
		{ num: "06", title: t('about.feat6'), desc: t('about.feat6Desc') },
	];

	return (
		<section id="about" className="section" style={{ background: "#fff" }}>
			<div className="container">
				<div className="about-grid">
					<div className="about-visual reveal-l">
						<div className="about-img-main">
							<div className="about-img-bg" style={{ justifyContent: "flex-start", gap: "1.5rem" }}>
								{/* Header */}
								<div>
									<div style={{ fontSize: ".6rem", letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(249,189,21,.6)", marginBottom: ".4rem" }}>
										Центр Recovery · Астана
									</div>
									<div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 700, color: "#fff", lineHeight: 1.1 }}>
										{t('about.yearsTitle')}
										<br />
										<span style={{ fontSize: "1rem", fontWeight: 400, color: "rgba(255,255,255,.5)" }}>
											{t('about.yearsSub')}
										</span>
									</div>
								</div>

								{/* Stats row */}
								<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: ".75rem" }}>
									{[
										{ val: "11K+", lbl: t('about.stat1') },
										{ val: "96%", lbl: t('about.stat2') },
										{ val: "24/7", lbl: t('about.stat3') },
									].map(({ val, lbl }) => (
										<div key={lbl} style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(249,189,21,.12)", borderRadius: ".9rem", padding: ".85rem .6rem", textAlign: "center" }}>
											<div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--brand-400)", lineHeight: 1 }}>
												{val}
											</div>
											<div style={{ fontSize: ".58rem", color: "rgba(255,255,255,.38)", marginTop: "4px", letterSpacing: ".08em", textTransform: "uppercase" }}>
												{lbl}
											</div>
										</div>
									))}
								</div>

								{/* Heartbeat SVG line */}
								<div style={{ padding: ".5rem 0" }}>
									<div style={{ fontSize: ".58rem", color: "rgba(255,255,255,.3)", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: ".5rem" }}>
										{t('about.monitoring')}
									</div>
									<svg viewBox="0 0 260 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
										<polyline points="0,24 30,24 40,8 50,38 60,18 70,28 80,24 120,24 130,4 140,42 150,14 160,32 170,24 260,24" stroke="rgba(249,189,21,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
										<circle cx="170" cy="24" r="3" fill="var(--brand-500)" opacity=".9">
											<animate attributeName="opacity" values="0.9;0.2;0.9" dur="1.8s" repeatCount="indefinite" />
										</circle>
									</svg>
								</div>

								{/* Status pills */}
								<div style={{ display: "flex", flexDirection: "column", gap: ".6rem" }}>
									{[
										{ dot: "#4ade80", label: t('about.accepting') },
										{ dot: "var(--brand-500)", label: t('about.anonymity') },
										{ dot: "var(--sap-400)", label: t('about.license') },
									].map(({ dot, label }) => (
										<div key={label} style={{ display: "flex", alignItems: "center", gap: ".6rem" }}>
											<div style={{ width: 7, height: 7, borderRadius: "50%", background: dot, flexShrink: 0 }}></div>
											<div style={{ fontSize: ".75rem", color: "rgba(255,255,255,.52)", fontWeight: 300 }}>
												{label}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className="about-accent"></div>
					</div>
					<div>
						<div className="reveal">
							<span className="eyebrow">{t('about.eyebrow')}</span>
						</div>
						<h2 className="section-title reveal d-1" style={{ textAlign: "left" }}>
							{t('about.title').split('\n').map((line, i) => (
								<span key={i}>{line}<br /></span>
							))}
						</h2>
						<p className="reveal d-2" style={{ fontSize: ".95rem", color: "var(--ink-500)", lineHeight: "1.86", margin: "0 0 2.5rem", fontWeight: 300, marginTop: "1rem" }}>
							{t('about.subtitle')}
						</p>
						<div className="about-features">
							{features.map((feat, i) => (
								<div key={i} className={`feat-box reveal d-${i + 1}`}>
									<div className="feat-num">{feat.num}</div>
									<div className="feat-title">{feat.title}</div>
									<div className="feat-desc">{feat.desc}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
