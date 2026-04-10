import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
	const { i18n, t } = useTranslation();

	useEffect(() => {
		const nav = document.getElementById("nav");
		const btt = document.getElementById("btt");

		const onScroll = () => {
			nav?.classList.toggle("scrolled", window.scrollY > 60);
			btt?.classList.toggle("show", window.scrollY > 400);
		};
		window.addEventListener("scroll", onScroll, { passive: true });

		const onBttClick = () => window.scrollTo({ top: 0, behavior: "smooth" });
		btt?.addEventListener("click", onBttClick);

		return () => {
			window.removeEventListener("scroll", onScroll);
			btt?.removeEventListener("click", onBttClick);
		};
	}, []);

	function toggleMobile() {
		const m = document.getElementById("mobileMenu");
		const h = document.getElementById("hamburger");
		m?.classList.toggle("open");
		h?.classList.toggle("open");
		document.body.style.overflow = m?.classList.contains("open")
			? "hidden"
			: "";
	}

	function closeMobile() {
		document.getElementById("mobileMenu")?.classList.remove("open");
		document.getElementById("hamburger")?.classList.remove("open");
		document.body.style.overflow = "";
	}

	function toggleLanguage() {
		const newLang = i18n.language === 'ru' ? 'kz' : 'ru';
		i18n.changeLanguage(newLang);
		localStorage.setItem('language', newLang);
	}

	return (
		<>
			<button id="btt" aria-label={t('header.topButton')}>
				↑
			</button>
			<div className="mobile-menu" id="mobileMenu">
				<div className="mobile-menu-header">
					<a href="#hero" className="mobile-menu-logo">
						<span className="mobile-menu-logo-text">
							<span className="text-gold">FREE</span>DOM
						</span>
					</a>
				</div>
				
				<nav className="mobile-menu-nav">
					<a href="#hero" className="mobile-menu-link" onClick={closeMobile}>
						<span className="menu-link-icon">🏠</span>
						<span className="menu-link-text">{t('header.home')}</span>
					</a>
					<a href="#services" className="mobile-menu-link" onClick={closeMobile}>
						<span className="menu-link-icon">⚕️</span>
						<span className="menu-link-text">{t('header.services')}</span>
					</a>
					<a href="#about" className="mobile-menu-link" onClick={closeMobile}>
						<span className="menu-link-icon">ℹ️</span>
						<span className="menu-link-text">{t('header.about')}</span>
					</a>
					<a href="#stages" className="mobile-menu-link" onClick={closeMobile}>
						<span className="menu-link-icon">📋</span>
						<span className="menu-link-text">{t('header.treatment')}</span>
					</a>
					<a href="#team" className="mobile-menu-link" onClick={closeMobile}>
						<span className="menu-link-icon">👥</span>
						<span className="menu-link-text">{t('header.team')}</span>
					</a>
					<a href="#testi" className="mobile-menu-link" onClick={closeMobile}>
						<span className="menu-link-icon">⭐</span>
						<span className="menu-link-text">{t('header.testimonials')}</span>
					</a>
					<a href="#faq" className="mobile-menu-link" onClick={closeMobile}>
						<span className="menu-link-icon">❓</span>
						<span className="menu-link-text">{t('header.faq')}</span>
					</a>
					<a href="#contact" className="mobile-menu-link" onClick={closeMobile}>
						<span className="menu-link-icon">📍</span>
						<span className="menu-link-text">{t('header.contacts')}</span>
					</a>
				</nav>

				<div className="mobile-menu-divider"></div>

				<div className="mobile-menu-bottom">
					<a
						href="tel:+380931707989"
						className="btn btn-gold btn-sm mobile-menu-phone"
					>
						📞 {t('header.phone')}
					</a>
					<button
						onClick={toggleLanguage}
						className="mobile-menu-lang"
						aria-label="Переключить язык"
						title={i18n.language === 'ru' ? 'Қазақша' : 'Русский'}
					>
						{i18n.language === 'ru' ? '🇰🇿 KZ' : '🇷🇺 RU'}
					</button>
				</div>
			</div>

			<nav id="nav">
				<div className="nav-inner">
					<a href="#hero" className="nav-logo">
						<span className="nav-logo-text">
							<span className="text-gold">FREE</span>DOM
						</span>
						<span className="nav-logo-sub">{t('header.clinic')}</span>
					</a>
					<div className="nav-links">
						<a href="#services" className="nav-link">
							{t('header.services')}
						</a>
						<a href="#about" className="nav-link">
							{t('header.about')}
						</a>
						<a href="#stages" className="nav-link">
							{t('header.treatment')}
						</a>
						<a href="#team" className="nav-link">
							{t('header.team')}
						</a>
						<a href="#testi" className="nav-link">
							{t('header.testimonials')}
						</a>
						<a href="#faq" className="nav-link">
							{t('header.faq')}
						</a>
						<a href="#contact" className="nav-link">
							{t('header.contacts')}
						</a>
						<button
							onClick={toggleLanguage}
							className="lang-switcher"
							aria-label="Переключить язык"
							title={i18n.language === 'ru' ? 'Қазақша' : 'Русский'}
						>
							{i18n.language === 'ru' ? 'KZ' : 'RU'}
						</button>
					</div>
					<a href="tel:+380931707989" className="btn btn-gold btn-sm nav-cta">
						<svg
							width="13"
							height="13"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2.5"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/>
						</svg>
						{t('header.phone')}
					</a>
					<button
						className="hamburger"
						id="hamburger"
						onClick={toggleMobile}
						aria-label={t('header.menuLabel')}
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
