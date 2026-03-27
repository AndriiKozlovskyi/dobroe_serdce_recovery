export default function About() {
  return (
    <>
      <section id="about" className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-visual reveal-l">
              <div className="about-img-main">
                <div className="about-img-bg">
                  <div className="about-img-word">RECOVERY</div>
                  <div className="about-img-lines">
                    <div
                      className="about-img-line"
                      style={{
                        width: '100%',
                        background: 'linear-gradient(90deg,rgba(249,189,21,.18),transparent)',
                      }}
                    ></div>
                    <div
                      className="about-img-line"
                      style={{
                        width: '78%',
                        background: 'linear-gradient(90deg,rgba(249,189,21,.12),transparent)',
                      }}
                    ></div>
                    <div
                      className="about-img-line"
                      style={{
                        width: '90%',
                        background: 'linear-gradient(90deg,rgba(249,189,21,.15),transparent)',
                      }}
                    ></div>
                    <div
                      className="about-img-line"
                      style={{
                        width: '62%',
                        background: 'linear-gradient(90deg,rgba(249,189,21,.1),transparent)',
                      }}
                    ></div>
                    <div
                      className="about-img-line"
                      style={{
                        width: '85%',
                        background: 'linear-gradient(90deg,rgba(249,189,21,.14),transparent)',
                      }}
                    ></div>
                  </div>
                  <span className="about-img-lbl">Реабилитационный центр · Киев</span>
                </div>
                <div className="about-img-orb">🏥</div>
              </div>
              <div
                className="about-card-float glass"
                style={{ boxShadow: '0 24px 64px rgba(0,36,85,.16)' }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '.8rem',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg,var(--sap-700),var(--brand-500))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      flexShrink: 0,
                    }}
                  >
                    🔒
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '.82rem',
                        fontWeight: 600,
                        color: 'var(--sap-800)',
                      }}
                    >
                      Лицензия МЗ Украины
                    </div>
                    <div
                      style={{
                        fontSize: '.7rem',
                        color: 'var(--ink-500)',
                        marginTop: '2px',
                      }}
                    >
                      №1584/23/М
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-accent"></div>
            </div>
            <div>
              <div className="reveal">
                <span className="eyebrow">О центре Recovery</span>
              </div>
              <h2 className="section-title reveal d-1" style={{ textAlign: 'left' }}>
                Ваш надёжный партнёр
                <br />
                <em>по борьбе с зависимостью</em>
              </h2>
              <p
                className="reveal d-2"
                style={{
                  fontSize: '.95rem',
                  color: 'var(--ink-500)',
                  lineHeight: '1.86',
                  margin: '0 0 2.5rem',
                  fontWeight: 300,
                  marginTop: '1rem',
                }}
              >
                Реабилитационный центр Recovery — место, где вы найдёте не только лечение, но и
                надежду на новую, свободную жизнь. 21 год профессиональной работы, тысячи
                восстановленных судеб и команда настоящих специалистов.
              </p>
              <div className="about-features">
                <div className="feat-box reveal d-1">
                  <div className="feat-num">01</div>
                  <div className="feat-title">Индивидуальный подход</div>
                  <div className="feat-desc">
                    Персонализированные программы для каждого пациента
                  </div>
                </div>
                <div className="feat-box reveal d-2">
                  <div className="feat-num">02</div>
                  <div className="feat-title">Передовые методы</div>
                  <div className="feat-desc">
                    Медикаментозная, психологическая и социальная реабилитация
                  </div>
                </div>
                <div className="feat-box reveal d-3">
                  <div className="feat-num">03</div>
                  <div className="feat-title">Комфорт и безопасность</div>
                  <div className="feat-desc">Уютная атмосфера, способствующая выздоровлению</div>
                </div>
                <div className="feat-box reveal d-4">
                  <div className="feat-num">04</div>
                  <div className="feat-title">Полная анонимность</div>
                  <div className="feat-desc">Строгая конфиденциальность и защита данных</div>
                </div>
                <div className="feat-box reveal d-5">
                  <div className="feat-num">05</div>
                  <div className="feat-title">Постреабилитация</div>
                  <div className="feat-desc">
                    Поддержка после выписки для закрепления результатов
                  </div>
                </div>
                <div className="feat-box reveal d-6">
                  <div className="feat-num">06</div>
                  <div className="feat-title">Высокий уровень помощи</div>
                  <div className="feat-desc">Команда с глубокими знаниями в наркологии</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
