import { useTranslation } from "react-i18next";



export default function Footer() {
	const { t } = useTranslation();

	return (
		<footer id="footer" className="bg-white text-[#0f3352] border-t border-gray-200 mt-0">
			<div className="container mx-auto px-4">
				<div
					className="footer-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 py-10"
				>
					{/* Brand */}
					<div className="mb-8 md:mb-0">
						<div className="footer-brand-name font-bold text-2xl mb-2">
							<span className="text-gold">CZM </span>FREEDOM
						</div>
						<div className="footer-brand-sub text-[#0cb195] font-medium mb-2">{t('header.clinic')}</div>
						<p className="footer-brand-desc text-base text-[#6ba3d4] mb-4">{t('footer.brandDesc')}</p>
						<div className="flex gap-3 mt-4">
							<a href="https://wa.me/77788100900" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="text-[#0cb195]">
								{/* ...existing code... */}
								<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
							</a>
							<a href="https://t.me/czm_freedom" target="_blank" rel="noopener noreferrer" title="Telegram" className="text-[#368cbc]">
								<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
							</a>
							<a href="https://instagram.com/czmfreedom" target="_blank" rel="noopener noreferrer" title="Instagram" className="text-[#e1306c]">
								<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
							</a>
						</div>
					</div>

					{/* Main Navigation Links */}
					<div className="mb-8 md:mb-0">
						<div className="footer-col-title font-semibold mb-3">{t('header.menuLabel')}</div>
						<ul className="footer-links list-none p-0 m-0 space-y-2">
							<li><a href="#hero" className="footer-link hover:text-[#0cb195] transition">{t('header.home')}</a></li>
							<li><a href="#about" className="footer-link hover:text-[#0cb195] transition">{t('header.about')}</a></li>
							<li><a href="#services" className="footer-link hover:text-[#0cb195] transition">{t('header.services')}</a></li>
							<li><a href="#stages" className="footer-link hover:text-[#0cb195] transition">{t('header.treatment')}</a></li>
							<li><a href="#team" className="footer-link hover:text-[#0cb195] transition">{t('header.team')}</a></li>
							<li><a href="#testi" className="footer-link hover:text-[#0cb195] transition">{t('header.testimonials')}</a></li>
							<li><a href="#faq" className="footer-link hover:text-[#0cb195] transition">{t('header.faq')}</a></li>
							<li><a href="#contact" className="footer-link hover:text-[#0cb195] transition">{t('header.contacts')}</a></li>
						</ul>
					</div>

					{/* Sublinks Section */}
					<div className="mb-8 md:mb-0">
						<div className="footer-col-title font-semibold mb-3">{t('footer.servicesTitle')}</div>
						<ul className="footer-links list-none p-0 m-0 space-y-2">
							<li><a href="#certificates" className="footer-link hover:text-[#0cb195] transition">{t('footer.certificates')}</a></li>
							<li><a href="#detox" className="footer-link hover:text-[#0cb195] transition">{t('footer.detox')}</a></li>
							<li><a href="#rehab" className="footer-link hover:text-[#0cb195] transition">{t('footer.rehab')}</a></li>
							<li><a href="#psychotherapy" className="footer-link hover:text-[#0cb195] transition">{t('footer.psychotherapy')}</a></li>
							<li><a href="#consultation" className="footer-link hover:text-[#0cb195] transition">{t('footer.consultation')}</a></li>
						</ul>
					</div>

					{/* Contacts */}
					<div>
						<div className="footer-col-title font-semibold mb-3">{t('footer.contactsTitle')}</div>
						<a href="tel:+77788100900" className="footer-phone font-semibold text-lg text-[#0cb195] block mb-2 hover:underline">+7 778 810 09 00</a>
						<div className="footer-addr text-[#6ba3d4] text-base mb-2">г. Астана, Улица Едил, 20</div>
						<div className="flex gap-2 mt-2">
							<a href="https://wa.me/77788100900" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="text-[#0cb195]">
								<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
							</a>
							<a href="https://t.me/czm_freedom" target="_blank" rel="noopener noreferrer" title="Telegram" className="text-[#368cbc]">
								<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
							</a>
							<a href="https://instagram.com/czmfreedom" target="_blank" rel="noopener noreferrer" title="Instagram" className="text-[#e1306c]">
								<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
							</a>
						</div>
					</div>
				</div>
				<div className="footer-bottom border-t border-gray-200 pt-6 pb-2 flex flex-col md:flex-row justify-between items-center text-sm text-[#6ba3d4]">
					<span className="footer-copy mb-2 md:mb-0">{t('footer.copy')}</span>
					<span className="footer-tag">{t('footer.tag')}</span>
				</div>
			</div>
		</footer>
	);
}
