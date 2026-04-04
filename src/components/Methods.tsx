import { useTranslation } from "react-i18next";

export default function Methods() {
	const { t } = useTranslation();

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
		{
			ico: "🎭",
			title: t('methods.method5'),
			desc: t('methods.method5Desc'),
			tags: [t('methods.method5Tag1'), t('methods.method5Tag2'), t('methods.method5Tag3'), t('methods.method5Tag4')],
		},
		{
			ico: "💬",
			title: t('methods.method6'),
			desc: t('methods.method6Desc'),
			tags: [t('methods.method6Tag1'), t('methods.method6Tag2'), t('methods.method6Tag3'), t('methods.method6Tag4')],
		},
		{
			ico: "🧘",
			title: t('methods.method7'),
			desc: t('methods.method7Desc'),
			tags: [t('methods.method7Tag1'), t('methods.method7Tag2'), t('methods.method7Tag3'), t('methods.method7Tag4')],
		},
		{
			ico: "🧩",
			title: t('methods.method8'),
			desc: t('methods.method8Desc'),
			tags: [t('methods.method8Tag1'), t('methods.method8Tag2'), t('methods.method8Tag3'), t('methods.method8Tag4')],
		},
	];

	return (
		<section id="methods" className="section">
			<style>{`
				.methods-grid-4col {
					display: grid;
					grid-template-columns: repeat(4, 1fr);
					gap: 1.5rem;
				}
				@media (max-width: 1200px) {
					.methods-grid-4col {
						grid-template-columns: repeat(2, 1fr);
					}
				}
				@media (max-width: 768px) {
					.methods-grid-4col {
						grid-template-columns: 1fr;
					}
				}
				.method-card {
					padding: 1.5rem;
					border-radius: 1rem;
					background-color: var(--card-bg, #FFFFFF);
					display: flex;
					flex-direction: column;
					height: 100%;
					transition: all 0.3s ease;
					border: 0.1px solid var(--border-100, #F2E9CA);
				}
				.method-card:hover {
					box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
					transform: translateY(-4px);
				}
			`}</style>
			<div className="container">
			<div className="reveal" style={{ marginBottom: "1rem", textAlign: "center" }}>
					<span className="eyebrow">{t('methods.eyebrow')}</span>
				</div>
				<h2 className="section-title reveal d-1" style={{ textAlign: "center", marginBottom: "1rem" }}>
					{t('methods.title').split('\n').map((line, i) => (
						<span key={i}>{line}<br /></span>
					))}
				</h2>
				<p style={{ fontSize: "0.93rem", color: "var(--ink-500)", lineHeight: 1.82, fontWeight: 300, textAlign: "center", maxWidth: "600px", margin: "0 auto 2.5rem" }} className="reveal d-2">
					{t('methods.subtitle')}
				</p>
				
				<div className="methods-grid-4col reveal d-3">
					{METHODS.map((method, i) => (
						<div key={i} className="method-card">
							<div style={{ fontSize: "3rem", marginBottom: "1rem", textAlign: "center" }}>{method.ico}</div>
							<h3 style={{
								fontSize: "1.125rem",
								fontWeight: 600,
								marginBottom: "0.75rem",
								color: "#003D8A",
							}}>{method.title}</h3>
							<p style={{
								fontSize: "0.875rem",
								lineHeight: 1.6,
								marginBottom: "1rem",
								color: "var(--ink-600)",
								flex: 1
							}}>{method.desc}</p>
							<div style={{
								display: "flex",
								flexWrap: "wrap",
								gap: "0.5rem",
								marginTop: "auto"
							}}>
								{method.tags.map((tag, j) => (
									<span
										key={j}
										style={{
											display: "inline-block",
											padding: "0.375rem 0.75rem",
											backgroundColor: "var(--primary-50, #f0f9ff)",
											color: "var(--primary-600, #0284c7)",
											borderRadius: "0.375rem",
											fontSize: "0.75rem",
											fontWeight: 500,
											whiteSpace: "nowrap"
										}}
									>{tag}</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
