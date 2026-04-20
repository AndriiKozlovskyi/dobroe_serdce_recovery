import { useTranslation } from "react-i18next";

export default function Contacts() {
	const { t } = useTranslation();

	return (
		<section id="contact" className="section">
			<div className="container">
				<div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
					<div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
						<div className="reveal">
							<span className="eyebrow">{t('contacts.eyebrow')}</span>
						</div>
						<h2 className="section-title reveal d-1" style={{ textAlign: "center" }}>
							{t('contacts.title').split('\n').map((line, i) => (
								<span key={i}>{line}<br /></span>
							))}
						</h2>
						<a
							href="https://2gis.kz/astana/geo/70000001059285683"
							target="_blank"
							rel="noreferrer noopener"
							className="contact-location-btn reveal d-2"
						>
							<span className="contact-location-icon">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
							</span>
							<span className="contact-location-text">г. Астана, Улица Едил, 20</span>
						</a>
						<div className="social-pills reveal d-3" style={{ display: "flex", gap: "8px", marginTop: "1.5rem", justifyContent: "center" }}>
							<a href="tel:87788100900" style={{ display: "inline-flex", flexShrink: 0 }}>
								<img src="https://static.tildacdn.pro/tild3633-6333-4138-a264-663361613230/logopdf_8.png" alt="Phone" width="50" height="50" style={{ width: 50, height: 50, objectFit: "contain", display: "block" }} />
							</a>
							<a href="https://api.whatsapp.com/send/?phone=77788100900" target="_blank" rel="nofollow noopener noreferrer" style={{ display: "inline-flex", flexShrink: 0 }}>
								<img src="https://static.tildacdn.pro/tild6162-6535-4562-b636-616564303634/logopdf_9.png" alt="WhatsApp" width="50" height="50" style={{ width: 50, height: 50, objectFit: "contain", display: "block" }} />
							</a>
							<a href="https://t.me/CZM_Freedom" target="_blank" rel="nofollow noopener noreferrer" style={{ display: "inline-flex", flexShrink: 0 }}>
								<img src="https://static.tildacdn.pro/tild6537-6463-4436-a234-323061326563/logopdf_12.png" alt="Telegram" width="50" height="50" style={{ width: 50, height: 50, objectFit: "contain", display: "block" }} />
							</a>
							<a href="https://www.instagram.com/czmfreedom" target="_blank" rel="nofollow noopener noreferrer" style={{ display: "inline-flex", flexShrink: 0 }}>
								<img src="https://static.tildacdn.pro/tild3530-6563-4563-a131-373232623933/logopdf_10.png" alt="Instagram" width="50" height="50" style={{ width: 50, height: 50, objectFit: "contain", display: "block" }} />
							</a>
						</div>
					</div>
					<iframe
						width="100%"
						height="100%"
						style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", border: "none" }}
						src="https://yandex.com/map-widget/v1/?from=mapframe&ll=71.527353%2C51.147403&source=mapframe&um=constructor%3A5332a1fab4fbe19a99b57d64fe0514e406121e979d3eb230da1eddb403efa9d5&utm_source=mapframe&z=14.51"
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	);
}
