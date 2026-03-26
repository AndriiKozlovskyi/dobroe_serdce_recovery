export default function Header() {
	window.addEventListener(
		"scroll",
		() => {
			const nav = document.getElementById("nav");
			nav.classList.toggle("scrolled", window.scrollY > 60);
			const btt = document.getElementById("btt");
			btt.classList.toggle("show", window.scrollY > 400);
		},
		{ passive: true },
	);

	document
		.getElementById("btt")
		.addEventListener("click", () =>
			window.scrollTo({ top: 0, behavior: "smooth" }),
		);

	function toggleMobile() {
		const m = document.getElementById("mobileMenu");
		const h = document.getElementById("hamburger");
		m.classList.toggle("open");
		h.classList.toggle("open");
		document.body.style.overflow = m.classList.contains("open") ? "hidden" : "";
	}
	function closeMobile() {
		document.getElementById("mobileMenu").classList.remove("open");
		document.getElementById("hamburger").classList.remove("open");
		document.body.style.overflow = "";
	}

	/* ── Scroll reveal ── */

	return (
		<>
			<button id="btt" aria-label="Наверх">
				↑
			</button>

			<div class="mobile-menu" id="mobileMenu">
				<a href="#hero" onclick="closeMobile()">
					Главная
				</a>
				<a href="#services" onclick="closeMobile()">
					Услуги
				</a>
				<a href="#about" onclick="closeMobile()">
					О нас
				</a>
				<a href="#team" onclick="closeMobile()">
					Специалисты
				</a>
				<a href="#testi" onclick="closeMobile()">
					Отзывы
				</a>
				<a href="#contact" onclick="closeMobile()">
					Контакты
				</a>
				<a
					href="tel:+380931707989"
					class="btn btn-gold btn-sm"
					style="margin-top:1rem"
				>
					093 170 79 89
				</a>
			</div>

			<nav id="nav">
				<div class="nav-inner">
					<a href="#hero" class="nav-logo">
						<span class="nav-logo-text">
							<span class="text-gold">RE</span>COVERY
						</span>
						<span class="nav-logo-sub">Клиника восстановления</span>
					</a>
					<div class="nav-links">
						<a href="#services" class="nav-link">
							Услуги
						</a>
						<a href="#about" class="nav-link">
							О нас
						</a>
						<a href="#stages" class="nav-link">
							Лечение
						</a>
						<a href="#team" class="nav-link">
							Специалисты
						</a>
						<a href="#testi" class="nav-link">
							Отзывы
						</a>
						<a href="#faq" class="nav-link">
							FAQ
						</a>
						<a href="#contact" class="nav-link">
							Контакты
						</a>
					</div>
					<a href="tel:+380931707989" class="btn btn-gold btn-sm nav-cta">
						<svg
							width="13"
							height="13"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2.5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/>
						</svg>
						093 170 79 89
					</a>
					<button
						class="hamburger"
						id="hamburger"
						onclick="toggleMobile()"
						aria-label="Меню"
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</nav>
		</>
	);
}
