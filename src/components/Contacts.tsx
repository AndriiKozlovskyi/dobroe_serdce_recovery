import { useState } from 'react';

export default function Contacts() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacts" className="section contacts">
      <div className="container">
        <div className="contacts-grid">
          <div className="contacts-left">
            <div className="label-badge">Контакты</div>
            <h2>Свяжитесь с нами</h2>
            <div className="divider-line" />
            <div className="contacts-info-list">
              <div className="contacts-info-item">
                <span className="contacts-info-icon">📍</span>
                <div>
                  <strong>Адрес</strong>
                  <p>г. Киев, ул. Казацкая, 88</p>
                </div>
              </div>
              <div className="contacts-info-item">
                <span className="contacts-info-icon">📞</span>
                <div>
                  <strong>Телефон</strong>
                  <p>
                    <a href="tel:+380931707989">(093) 170 79 89</a>
                  </p>
                </div>
              </div>
              <div className="contacts-info-item">
                <span className="contacts-info-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>
                    <a href="mailto:crmrenessans1@gmail.com">crmrenessans1@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="contacts-messengers">
              <a href="https://t.me/+380671915373" className="contacts-messenger-btn">Telegram</a>
              <a href="viber://chat?number=%2B380671915373" className="contacts-messenger-btn">Viber</a>
              <a href="https://wa.me/380671915373" className="contacts-messenger-btn">WhatsApp</a>
            </div>
          </div>

          <div className="contacts-right">
            {sent ? (
              <div className="contacts-success">
                <div className="contacts-success-icon">✓</div>
                <h4>Сообщение отправлено!</h4>
                <p>Мы свяжемся с вами в ближайшее время.</p>
                <div style={{ marginTop: '2rem' }}>
                  <a href="tel:+380931707989" className="btn btn-gold">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Позвонить сейчас
                  </a>
                </div>
              </div>
            ) : (
              <form className="contacts-form" onSubmit={handleSubmit}>
                <h4 className="contacts-form-title">Оставьте заявку</h4>
                <p className="contacts-form-subtitle">Мы перезвоним в течение 30 минут</p>
                <div className="contacts-field">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="contacts-field">
                  <input
                    type="tel"
                    placeholder="Ваш телефон"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div className="contacts-field">
                  <textarea
                    placeholder="Ваше сообщение"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Отправить заявку
                </button>
                <p className="contacts-privacy">
                  Анонимно и конфиденциально. Ваши данные не передаются третьим лицам.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}