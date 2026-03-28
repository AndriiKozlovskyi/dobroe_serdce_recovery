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
							<div className="about-img-bg" style={{ justifyContent: "flex-start", gap: "2rem", position: "relative" }}>
								{/* Medical Header */}
								<div style={{ display: "flex", alignItems: "center", gap: "1rem", paddingBottom: "1rem", borderBottom: "1px solid rgba(249,189,21,.2)" }}>
									<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(249,189,21,0.9)" strokeWidth="2">
										<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
										<path d="M12 8v8M16 12H8"/>
									</svg>
									<div>
										<div style={{ fontSize: ".55rem", letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(249,189,21,.7)" }}>
											Центр Recovery · Астана
										</div>
										<div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, color: "#fff" }}>
											{t('about.yearsTitle')}
										</div>
									</div>
								</div>

								{/* Core Metrics Grid */}
								<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
									{[
										{ val: "11K+", lbl: t('about.stat1'), icon: "👥", color: "#4ade80" },
										{ val: "96%", lbl: t('about.stat2'), icon: "✓", color: "var(--brand-500)" },
										{ val: "24/7", lbl: t('about.stat3'), icon: "🏥", color: "#60a5fa" },
										{ val: "50+", lbl: "Врачей", icon: "👨‍⚕️", color: "var(--sap-400)" },
									].map(({ val, lbl, icon, color }) => (
										<div key={lbl} style={{ 
											background: "rgba(255,255,255,.08)", 
											border: `1.5px solid ${color}22`, 
											borderRadius: "1.2rem", 
											padding: "1.2rem .9rem", 
											textAlign: "center",
											transition: "all 0.3s ease",
											cursor: "pointer",
											position: "relative",
											overflow: "hidden"
										}}
										onMouseEnter={(e) => {
											e.currentTarget.style.background = `${color}15`;
											e.currentTarget.style.borderColor = `${color}44`;
											e.currentTarget.style.transform = "translateY(-4px)";
										}}
										onMouseLeave={(e) => {
											e.currentTarget.style.background = "rgba(255,255,255,.08)";
											e.currentTarget.style.borderColor = `${color}22`;
											e.currentTarget.style.transform = "translateY(0)";
										}}>
											<div style={{ fontSize: "1.8rem", marginBottom: ".4rem" }}>
												{icon}
											</div>
											<div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 700, color: color, lineHeight: 1 }}>
												{val}
											</div>
											<div style={{ fontSize: ".55rem", color: "rgba(255,255,255,.45)", marginTop: ".5rem", letterSpacing: ".08em", textTransform: "uppercase", fontWeight: 500 }}>
												{lbl}
											</div>
										</div>
									))}
								</div>
								{/* Animated Heartbeat */}
								<div style={{ paddingTop: ".5rem" }}>
									<div style={{ fontSize: ".55rem", color: "rgba(255,255,255,.4)", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: ".6rem", fontWeight: 600 }}>
										Мониторинг здоровья
									</div>
									<svg viewBox="0 0 300 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", filter: "drop-shadow(0 0 8px rgba(249,189,21,0.3))" }}>
										<defs>
											<linearGradient id="beatGrad" x1="0%" y1="0%" x2="100%">
												<stop offset="0%" style={{ stopColor: "rgba(249,189,21,0.3)", stopOpacity: 1 }} />
												<stop offset="50%" style={{ stopColor: "rgba(249,189,21,0.9)", stopOpacity: 1 }} />
												<stop offset="100%" style={{ stopColor: "rgba(249,189,21,0.3)", stopOpacity: 1 }} />
											</linearGradient>
										</defs>
										<polyline points="0,25 20,25 25,10 30,40 35,20 40,28 45,25 80,25 85,8 92,45 100,15 110,35 120,25 300,25" stroke="url(#beatGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
										<circle cx="120" cy="25" r="4" fill="rgba(249,189,21,0.9)">
											<animate attributeName="r" values="4;7;4" dur="1.2s" repeatCount="indefinite" />
											<animate attributeName="opacity" values="0.9;0.3;0.9" dur="1.2s" repeatCount="indefinite" />
										</circle>
									</svg>
								</div>

								{/* Certifications & Trust */}
								<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: ".7rem", paddingTop: "0rem" }}>
									{[
										{ badge: "🔒", label: "Анонимность", color: "#4ade80" },
										{ badge: "⚖️", label: "Лицензия", color: "var(--sap-400)" },
										{ badge: "✅", label: "Сертифика", color: "var(--brand-500)" },
									].map(({ badge, label, color }) => (
										<div key={label} style={{
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											gap: ".4rem",
											padding: ".8rem .6rem",
											background: "rgba(255,255,255,.05)",
											border: `1px solid ${color}33`,
											borderRadius: "1rem",
											fontSize: ".58rem",
											color: "rgba(255,255,255,.6)"
										}}>
											<div style={{ fontSize: "1.5rem" }}>{badge}</div>
											{label}
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
