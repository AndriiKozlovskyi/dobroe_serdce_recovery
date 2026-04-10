import { useTranslation } from "react-i18next";

export default function Services() {
	const { t } = useTranslation();

	const services = [
		{
			image: "/src/assets/services/alcohol.jpg",
			title: t('services.alcohol'),
		},
		{
			image: "/src/assets/services/drugs.jpg",
			title: t('services.drugs'),
		},
		{
			image: "/src/assets/services/mental.jpg",
			title: t('services.gambling'),
		},
		{
			image: "/src/assets/services/gambling.jpg",
			title: t('services.mental'),
		},
		{
			image: "/src/assets/services/rehab.jpg",
			title: t('services.rehab'),
		},
		{
			image: "/src/assets/services/home.jpg",
			title: t('services.home'),
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
							<img src={service.image} alt={service.title} className="srv-image" />
							<h3 className="srv-title">{service.title}</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
