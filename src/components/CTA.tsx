import { useTranslation } from "react-i18next";

export default function CTA() {
	const { t } = useTranslation();

	return (
		<section id="cta">
			<div className="cta-ring-1"></div>
			<div className="cta-ring-2"></div>
			<div className="cta-inner">
				<div className="reveal">
					<div className="cta-eyebrow">
						<span className="cta-line"></span>
						{t('cta.eyebrow')}
						<span className="cta-line"></span>
					</div>
					<div className="cta-phone-txt">{t('cta.phone')}</div>
					<h2 className="cta-title font-display">
						{t('cta.title').split('\n').map((line, i) => (
							<span key={i}>{line}<br /></span>
						))}
					</h2>
					<p className="cta-sub">{t('cta.subtitle')}</p>
					<div className="cta-btns">
						<a href="tel:+380931707989" className="btn btn-gold" style={{ fontSize: ".9rem", padding: "1.1rem 2.8rem" }}>
							<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
								<path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
							{t('cta.cta1')}
						</a>
						<a href="#contact" className="btn btn-ghost" style={{ fontSize: ".9rem", padding: "1.1rem 2.8rem" }}>
							{t('cta.cta2')}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
