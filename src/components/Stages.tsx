import { useTranslation } from "react-i18next";

export default function Stages() {
	const { t } = useTranslation();

	const stages = [
		{ emoji: "🧪", num: "1", title: t('stages.stage1Title'), desc: t('stages.stage1Desc'), dur: t('stages.stage1Dur') },
		{ emoji: "🧬", num: "2", title: t('stages.stage2Title'), desc: t('stages.stage2Desc'), dur: t('stages.stage2Dur') },
		{ emoji: "🌱", num: "3", title: t('stages.stage3Title'), desc: t('stages.stage3Desc'), dur: t('stages.stage3Dur') },
		{ emoji: "♾️", num: "4", title: t('stages.stage4Title'), desc: t('stages.stage4Desc'), dur: t('stages.stage4Dur') },
	];

	return (
		<section id="stages" className="section">
			<div className="container" style={{ position: "relative" }}>
				<div className="section-head">
					<div className="reveal">
						<span className="eyebrow" style={{ color: "rgba(249,189,21,.8)" }}>
							{t('stages.eyebrow')}
						</span>
					</div>
					<h2 className="section-title on-dark reveal d-1">
						{t('stages.title')}
					</h2>
					<p className="section-sub on-dark reveal d-2">
						{t('stages.subtitle')}
					</p>
				</div>
				<div className="stages-grid" style={{ position: "relative" }}>
					<div className="stages-line"></div>
					{stages.map((stage, i) => (
						<div key={i} className={`stage-card reveal d-${i + 1}`}>
							<div className="stage-orb">{stage.emoji}</div>
							<div className="stage-num">{stage.num}</div>
							<div className="stage-title">{stage.title}</div>
							<p className="stage-desc">{stage.desc}</p>
							<span className="stage-dur">{stage.dur}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
