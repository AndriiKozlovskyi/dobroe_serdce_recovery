import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contacts() {
	const { t } = useTranslation();
	const [form, setForm] = useState({ name: "", phone: "", message: "" });
	const [sent, setSent] = useState(false);

	const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSent(true);
	};

	return (
		<section id="contact" className="section">
			<div className="container">
				<div className="contact-grid">
					<div>
						<div className="reveal">
							<span className="eyebrow">{t('contacts.eyebrow')}</span>
						</div>
						<h2 className="section-title reveal d-1" style={{ textAlign: "left" }}>
							{t('contacts.title').split('\n').map((line, i) => (
								<span key={i}>{line}<br /></span>
							))}
						</h2>
						<div className="contact-items reveal d-2">
							<div className="contact-item">
								<div className="contact-ico-wrap">📍</div>
								<div>
									<div className="contact-lbl">{t('contacts.address')}</div>
									<span className="contact-val">{t('contacts.addressVal')}</span>
								</div>
							</div>
							<div className="contact-item">
								<div className="contact-ico-wrap">📞</div>
								<div>
									<div className="contact-lbl">{t('contacts.phone')}</div>
									<a href="tel:+380931707989" className="contact-val">
										{t('contacts.phoneVal')}
									</a>
								</div>
							</div>
							<div className="contact-item">
								<div className="contact-ico-wrap">✉️</div>
								<div>
									<div className="contact-lbl">{t('contacts.email')}</div>
									<a href="mailto:crmrenessans1@gmail.com" className="contact-val">
										{t('contacts.emailVal')}
									</a>
								</div>
							</div>
							<div className="contact-item">
								<div className="contact-ico-wrap">🕐</div>
								<div>
									<div className="contact-lbl">{t('contacts.hours')}</div>
									<span className="contact-val">{t('contacts.hoursVal')}</span>
								</div>
							</div>
						</div>
						<div className="social-pills reveal d-3">
							<a href="https://t.me/+380671915373" className="social-pill" style={{ background: "rgba(109,169,214,.12)", border: "1px solid rgba(109,169,214,.3)", color: "#6DA9D6" }}>
								{t('contacts.telegram')}
							</a>
							<a href="viber://chat?number=%2B380671915373" className="social-pill" style={{ background: "rgba(145,105,175,.12)", border: "1px solid rgba(145,105,175,.3)", color: "#9169AF" }}>
								{t('contacts.viber')}
							</a>
							<a href="https://wa.me/380671915373" className="social-pill" style={{ background: "rgba(46,184,65,.12)", border: "1px solid rgba(46,184,65,.3)", color: "#2EB841" }}>
								{t('contacts.whatsapp')}
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
