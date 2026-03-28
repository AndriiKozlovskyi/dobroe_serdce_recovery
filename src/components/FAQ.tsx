import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function FAQ() {
	const { t } = useTranslation();
	const [openIdx, setOpenIdx] = useState<number | null>(null);

	const FAQS = [
		{ q: t('faq.q1'), a: t('faq.a1') },
		{ q: t('faq.q2'), a: t('faq.a2') },
		{ q: t('faq.q3'), a: t('faq.a3') },
		{ q: t('faq.q4'), a: t('faq.a4') },
		{ q: t('faq.q5'), a: t('faq.a5') },
		{ q: t('faq.q6'), a: t('faq.a6') },
	];

	const toggle = (i: number) => {
		setOpenIdx((prev) => (prev === i ? null : i));
	};

	return (
		<section id="faq" className="section" style={{ background: "#fff" }}>
			<div className="container">
				<div className="section-head">
					<div className="reveal">
						<span className="eyebrow">{t('faq.eyebrow')}</span>
					</div>
					<h2 className="section-title reveal d-1">{t('faq.title')}</h2>
					<p className="section-sub reveal d-2">{t('faq.subtitle')}</p>
				</div>
				<div className="faq-wrap">
					{FAQS.map((item, i) => (
						<div key={i} className={`acc-item reveal${i > 0 ? ` d-${i}` : ""}`}>
							<button className="acc-btn" onClick={() => toggle(i)}>
								<span className="acc-q">{item.q}</span>
								<span className="acc-ic">{openIdx === i ? "−" : "+"}</span>
							</button>
							<div className={`acc-body${openIdx === i ? " open" : ""}`}>
								<p className="acc-p">{item.a}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
