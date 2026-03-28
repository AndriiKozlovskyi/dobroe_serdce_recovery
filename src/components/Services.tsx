import { useTranslation } from "react-i18next";

export default function Services() {
	const { t } = useTranslation();

	const services = [
		{
			icon: "🍷",
			title: t('services.alcohol'),
			desc: t('services.alcoholDesc'),
			price: t('services.alcoholPrice'),
		},
		{
			icon: "💉",
			title: t('services.drugs'),
			desc: t('services.drugsDesc'),
			price: t('services.drugsPrice'),
		},
		{
			icon: "🎰",
			title: t('services.gambling'),
			desc: t('services.gamblingDesc'),
			price: t('services.gamblingPrice'),
		},
		{
			icon: "🧠",
			title: t('services.mental'),
			desc: t('services.mentalDesc'),
			price: t('services.mentalPrice'),
		},
		{
			icon: "💪",
			title: t('services.rehab'),
			desc: t('services.rehabDesc'),
			price: t('services.rehabPrice'),
		},
		{
			icon: "🏠",
			title: t('services.home'),
			desc: t('services.homeDesc'),
			price: t('services.homePrice'),
		},
	];

	return (
		<section id="services" className="section">
			<div className="container">
				<div className="section-head">
					<div className="reveal">
						<span className="eyebrow">{t('services.eyebrow')}</span>
					</div>
					<h2 className="section-title reveal d-1">
						{t('services.title').split('\n').map((line, i) => (
							<span key={i}>{line}<br /></span>
						))}
					</h2>
					<p className="section-sub reveal d-2">
						{t('services.subtitle')}
					</p>
				</div>
				<div className="services-grid">
					{services.map((service, i) => (
						<div key={i} className={`srv-card reveal d-${(i % 3) + 1}`}>
							<div className="srv-inner">
								<div className="srv-icon-wrap">{service.icon}</div>
								<h3 className="srv-title">{service.title}</h3>
								<p className="srv-desc">{service.desc}</p>
								<div className="srv-footer">
									<span className="srv-price">{service.price}</span>
									<span className="srv-arrow">→</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
