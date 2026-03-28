import { useTranslation } from "react-i18next";

export default function Team() {
	const { t } = useTranslation();

	const specialists = [
		{ name: t('team.spec1'), role: t('team.spec1Role'), emoji: "👨‍⚕️" },
		{ name: t('team.spec2'), role: t('team.spec2Role'), emoji: "👩‍⚕️" },
		{ name: t('team.spec3'), role: t('team.spec3Role'), emoji: "👨‍⚕️" },
		{ name: t('team.spec4'), role: t('team.spec4Role'), emoji: "👩‍⚕️" },
		{ name: t('team.spec5'), role: t('team.spec5Role'), emoji: "👨‍⚕️" },
	];

	return (
		<section id="team" className="section">
			<div className="container">
				<div className="section-head">
					<div className="reveal">
						<span className="eyebrow">{t('team.eyebrow')}</span>
					</div>
					<h2 className="section-title reveal d-1">
						{t('team.title').split('\n').map((line, i) => (
							<span key={i}>{line}<br /></span>
						))}
					</h2>
					<p className="section-sub reveal d-2">
						{t('team.subtitle')}
					</p>
				</div>
				<div className="team-grid">
					{specialists.map((spec, i) => (
						<div key={i} className={`team-card reveal d-${(i % 5) + 1}`}>
							<div className={`team-avatar ${i % 2 === 0 ? 'team-avatar-even' : 'team-avatar-odd'}`}>
								{spec.emoji}
								<div className="team-hover-overlay">
									<span className="team-overlay-txt">
										{t('team.consultation')}
									</span>
									<div className="team-overlay-line"></div>
								</div>
							</div>
							<div className="team-info">
								<div className="team-name">{spec.name}</div>
								<div className="team-role">{spec.role}</div>
							</div>
						</div>
					))}
				</div>
				<div style={{ textAlign: "center", marginTop: "3rem" }} className="reveal">
					<a href="#contact" className="btn btn-primary">
						{t('team.cta')}
					</a>
				</div>
			</div>
		</section>
	);
}
