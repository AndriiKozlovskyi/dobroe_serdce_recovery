import { useTranslation } from "react-i18next";
import alcoholImg from "../assets/services/alcohol.jpg";
import drugsImg from "../assets/services/drugs.jpg";
import mentalImg from "../assets/services/mental.jpg";
import gamblingImg from "../assets/services/gambling.jpg";
import rehabImg from "../assets/services/rehab.jpg";
import homeImg from "../assets/services/home.jpg";

export default function Services() {
	const { t } = useTranslation();

	const services = [
		{
			image: alcoholImg,
			title: t('services.alcohol'),
		},
		{
			image: drugsImg,
			title: t('services.drugs'),
		},
		{
			image: mentalImg,
			title: t('services.gambling'),
		},
		{
			image: gamblingImg,
			title: t('services.mental'),
		},
		{
			image: rehabImg,
			title: t('services.rehab'),
		},
		{
			image: homeImg,
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
