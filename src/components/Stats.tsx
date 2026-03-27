export default function Stats() {
  return (
    <>
      <section id="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item reveal d-1">
              <div className="stat-icon">🏆</div>
              <div className="stat-val" data-target="21">
                0
              </div>
              <div className="stat-lbl">Лет опыта</div>
            </div>
            <div className="stat-item reveal d-2">
              <div className="stat-icon">❤️</div>
              <div className="stat-val" data-target="11619">
                0
              </div>
              <div className="stat-lbl">Вылеченных пациентов</div>
            </div>
            <div className="stat-item reveal d-3">
              <div className="stat-icon">👨‍⚕️</div>
              <div className="stat-val" data-target="21">
                0
              </div>
              <div className="stat-lbl">Специалистов в штате</div>
            </div>
            <div className="stat-item reveal d-4">
              <div className="stat-icon">💊</div>
              <div className="stat-val" data-target="35">
                0
              </div>
              <div className="stat-lbl">Медицинских услуг</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
