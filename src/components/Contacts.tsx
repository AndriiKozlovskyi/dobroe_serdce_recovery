import { useState } from "react";
import styles from "./Contacts.module.css";

export default function Contacts() {
	function submitForm(e) {
		e.preventDefault();
		const box = document.getElementById("formBox");
		box.innerHTML = `
    <div class="form-success">
      <div class="form-success-icon">✅</div>
      <div class="form-success-title">Заявка отправлена!</div>
      <p class="form-success-sub">Наш специалист свяжется с вами в течение 15 минут.<br>Мы готовы помочь вам начать путь к выздоровлению.</p>
      <div style="margin-top:2rem">
        <a href="tel:+380931707989" class="btn btn-gold">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          Позвонить сейчас
        </a>
      </div>
    </div>
  `;
	}

	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [sent, setSent] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setSent(true);
	};

	return (
		<section id="contacts" className={`section ${styles.contacts}`}>
			<div className="container">
				<div className={styles.grid}>
					<div className={styles.left}>
						<div className="label-badge">Контакты</div>
						<h2>Свяжитесь с нами</h2>
						<div className="divider-line" />
						<div className={styles.infoList}>
							<div className={styles.infoItem}>
								<span className={styles.infoIcon}>📍</span>
								<div>
									<strong>Адрес</strong>
									<p>г. Киев, ул. Казацкая, 88</p>
								</div>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.infoIcon}>📞</span>
								<div>
									<strong>Телефон</strong>
									<p>
										<a href="tel:+380931707989">(093) 170 79 89</a>
									</p>
								</div>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.infoIcon}>✉️</span>
								<div>
									<strong>Email</strong>
									<p>
										<a href="mailto:crmrenessans1@gmail.com">
											crmrenessans1@gmail.com
										</a>
									</p>
								</div>
							</div>
						</div>
						<div className={styles.messengers}>
							<a
								href="https://t.me/+380671915373"
								className={styles.messengerBtn}
							>
								Telegram
							</a>
							<a
								href="viber://chat?number=%2B380671915373"
								className={styles.messengerBtn}
							>
								Viber
							</a>
							<a
								href="https://wa.me/380671915373"
								className={styles.messengerBtn}
							>
								WhatsApp
							</a>
						</div>
					</div>

					<div className={styles.right}>
						{sent ? (
							<div className={styles.success}>
								<div className={styles.successIcon}>✓</div>
								<h4>Сообщение отправлено!</h4>
								<p>Мы свяжемся с вами в ближайшее время.</p>
							</div>
						) : (
							<form className={styles.form} onSubmit={handleSubmit}>
								<h4 className={styles.formTitle}>Оставьте заявку</h4>
								<p className={styles.formSubtitle}>
									Мы перезвоним в течение 30 минут
								</p>
								<div className={styles.field}>
									<input
										type="text"
										placeholder="Ваше имя"
										required
										value={form.name}
										onChange={(e) => setForm({ ...form, name: e.target.value })}
									/>
								</div>
								<div className={styles.field}>
									<input
										type="email"
										placeholder="Ваш email"
										required
										value={form.email}
										onChange={(e) =>
											setForm({ ...form, email: e.target.value })
										}
									/>
								</div>
								<div className={styles.field}>
									<textarea
										placeholder="Ваше сообщение"
										rows={5}
										value={form.message}
										onChange={(e) =>
											setForm({ ...form, message: e.target.value })
										}
									/>
								</div>
								<button
									type="submit"
									className="btn btn-primary"
									style={{ width: "100%", justifyContent: "center" }}
								>
									Отправить заявку
								</button>
								<p className={styles.privacy}>
									Анонимно и конфиденциально. Ваши данные не передаются третьим
									лицам.
								</p>
							</form>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
