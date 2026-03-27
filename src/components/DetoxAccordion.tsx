import { useEffect } from 'react';

export default function DetoxAccordion() {
  function toggleAcc(btn: HTMLElement) {
    const body = btn.nextElementSibling as HTMLElement;
    const ic = btn.querySelector('.acc-ic');
    const isOpen = body.classList.contains('open');
    const section = btn.closest('section');
    if (section) {
      section.querySelectorAll('.acc-body.open').forEach((b) => b.classList.remove('open'));
      section.querySelectorAll('.acc-ic.open').forEach((i) => i.classList.remove('open'));
    }
    if (!isOpen) {
      body.classList.add('open');
      ic?.classList.add('open');
    }
  }

  return (
    <section id="detox" className="section">
      <div className="container">
        <div className="detox-grid">
          <div className="detox-visual reveal-l">
            <div className="detox-vis-main">
              <div className="detox-vis-inner">
                <div className="detox-bar" style={{ width: '100%', animationDelay: '.1s' }}></div>
                <div className="detox-bar" style={{ width: '85%', animationDelay: '.2s' }}></div>
                <div className="detox-bar" style={{ width: '92%', animationDelay: '.3s' }}></div>
                <div className="detox-bar" style={{ width: '68%', animationDelay: '.4s' }}></div>
                <div className="detox-bar" style={{ width: '80%', animationDelay: '.5s' }}></div>
                <div className="detox-bar" style={{ width: '74%', animationDelay: '.6s' }}></div>
              </div>
            </div>
            <div className="detox-badge glass" style={{ boxShadow: '0 16px 48px rgba(0,36,85,.18)' }}>
              <div style={{ fontSize: '.85rem', fontWeight: 600, color: 'var(--sap-800)', marginBottom: '.3rem' }}>
                Процесс детоксикации
              </div>
              <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginTop: '.6rem' }}>
                <span style={{ padding: '.25rem .7rem', background: 'var(--sage-100)', color: 'var(--sage-700)', borderRadius: '9999px', fontSize: '.67rem', fontWeight: 600 }}>
                  Безопасно
                </span>
                <span style={{ padding: '.25rem .7rem', background: 'var(--sap-100)', color: 'var(--sap-700)', borderRadius: '9999px', fontSize: '.67rem', fontWeight: 600 }}>
                  Под наблюдением
                </span>
              </div>
            </div>
          </div>
          <div className="reveal-r">
            <div>
              <span className="eyebrow">Детоксикация</span>
            </div>
            <h2 className="section-title" style={{ textAlign: 'left', fontSize: 'clamp(1.8rem,3vw,2.6rem)', marginTop: '1rem' }}>
              Процесс детоксикации включает несколько ключевых этапов
            </h2>
            <div style={{ marginTop: '2rem' }}>
              {[
                { q: 'Оценка состояния пациента', a: 'Пациент проходит обширную медицинскую и психологическую диагностику, включающую анализ физического состояния, анамнез употребления веществ, психологическую и социальную историю. Это позволяет составить индивидуальный план лечения.' },
                { q: 'Медицинская поддержка', a: 'Клиника обеспечивает медикаментозную поддержку широким спектром препаратов для полного снятия физических симптомов отмены. Круглосуточный мониторинг состояния пациента опытными специалистами.' },
                { q: 'Психологическая поддержка', a: 'Пациенты получают психологическую помощь для преодоления эмоциональных и психологических аспектов детоксикации. Работа с тревожностью, страхами и эмоциональной нестабильностью в период отмены.' },
                { q: 'Мониторинг и корректировка', a: 'Регулярные проверки, анализы и оценки помогают адаптировать лечение в соответствии с потребностями пациента. Гибкий подход позволяет оперативно реагировать на изменения в состоянии.' },
                { q: 'Поддержка после детоксикации', a: 'После завершения детоксикации пациент участвует в реабилитационных программах и групповой поддержке. Плавный переход к следующему этапу лечения — реабилитации и социальной адаптации.' },
                { q: 'Знания и навыки для жизни', a: 'Пациенты получают образовательные материалы и практические навыки для понимания процесса детоксикации, а также развивают стратегии управления соблазнами и предотвращения рецидива.' },
              ].map((item) => (
                <div className="acc-item" key={item.q}>
                  <button className="acc-btn" onClick={(e) => toggleAcc(e.currentTarget)}>
                    <span className="acc-q">{item.q}</span>
                    <span className="acc-ic">+</span>
                  </button>
                  <div className="acc-body">
                    <p className="acc-p">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}