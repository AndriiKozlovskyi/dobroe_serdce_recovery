export default function Location() {
	return (
		<>
			<section id="locations" class="section-sm">
				<div class="container">
					<div class="section-head" style="margin-bottom:3rem">
						<div class="reveal">
							<span class="eyebrow">Наши отделения</span>
						</div>
						<h2
							class="section-title reveal d-1"
							style="font-size:clamp(1.8rem,3.5vw,2.8rem)"
						>
							Два центра в Киеве
						</h2>
					</div>
					<div class="loc-grid">
						<div class="loc-card reveal d-1">
							<div class="loc-ico">🏛️</div>
							<div>
								<div class="loc-city">г. Киев</div>
								<div class="loc-addr">ул. Казацкая, 88</div>
								<p class="loc-desc">
									Основное отделение. Круглосуточный приём, стационарное
									лечение, детоксикация. Полное оснащение для экстренной помощи.
								</p>
							</div>
						</div>
						<div class="loc-card reveal d-2">
							<div class="loc-ico">🌿</div>
							<div>
								<div class="loc-city">г. Киев</div>
								<div class="loc-addr">ул. Творческая, 57</div>
								<p class="loc-desc">
									Реабилитационное отделение. Длительные программы
									восстановления, групповая терапия и социальная адаптация.
								</p>
							</div>
						</div>
					</div>
					<p class="loc-note reveal">
						⚡ Оба отделения оснащены автономной подачей электроэнергии,
						отопления и воды
					</p>
				</div>
			</section>
		</>
	);
}
