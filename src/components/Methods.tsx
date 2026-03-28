import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Methods() {
	const { t } = useTranslation();
	const [activeIdx, setActiveIdx] = useState(0);

	const METHODS = [
		{
			ico: "💊",
			title: t('methods.method1'),
			desc: t('methods.method1Desc'),
			tags: [t('methods.method1Tag1'), t('methods.method1Tag2'), t('methods.method1Tag3'), t('methods.method1Tag4')],
		},
		{
			ico: "🧠",
			title: t('methods.method2'),
			desc: t('methods.method2Desc'),
			tags: [t('methods.method2Tag1'), t('methods.method2Tag2'), t('methods.method2Tag3'), t('methods.method2Tag4')],
		},
		{
			ico: "🏃",
			title: t('methods.method3'),
			desc: t('methods.method3Desc'),
			tags: [t('methods.method3Tag1'), t('methods.method3Tag2'), t('methods.method3Tag3'), t('methods.method3Tag4')],
		},
		{
			ico: "🎨",
			title: t('methods.method4'),
			desc: t('methods.method4Desc'),
			tags: [t('methods.method4Tag1'), t('methods.method4Tag2'), t('methods.method4Tag3'), t('methods.method4Tag4')],
		},
	];

	const m = METHODS[activeIdx];

	return (
		<section id="methods" className="section">
			<div className="container">
				<div className="methods-grid">
					<div>
						<div className="reveal">
							<span className="eyebrow">{t('methods.eyebrow')}</span>
						</div>
						<h2 className="section-title reveal d-1" style={{ textAlign: "start" }}>
							{t('methods.title').split('\n').map((line, i) => (
								<span key={i}>{line}<br /></span>
							))}
						</h2>
						<p style={{ fontSize: "0.93rem", color: "var(--ink-500)", lineHeight: 1.82, marginBottom: "2.5rem", fontWeight: 300, marginTop: "1rem" }} className="reveal d-2">
							{t('methods.subtitle')}
						</p>
						<div className="method-tabs reveal d-3">
							{METHODS.map((method, i) => (
								<button key={i} className={`method-tab${i === activeIdx ? " active" : ""}`} onClick={() => setActiveIdx(i)}>
									<span className="method-tab-ico">{method.ico}</span>
									<span className="method-tab-txt">{method.title}</span>
								</button>
							))}
						</div>
					</div>

					<div className="reveal-r d-2">
						<div className="method-panel">
							<div style={{ fontSize: "3.5rem", marginBottom: "1.5rem" }}>{m.ico}</div>
							<div className="method-panel-title">{m.title}</div>
							<p className="method-panel-desc">{m.desc}</p>
							<div className="method-tags">
								{m.tags.map((tag, i) => (
									<span key={i} className="method-tag">{tag}</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
