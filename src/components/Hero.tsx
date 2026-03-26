export default function Hero() {
  const statVals = document.querySelectorAll('.stat-val[data-target]');
const co = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const el=e.target, target=+el.dataset.target;
      let val=0; const dur=2200; const step=target/(dur/16);
      const t=setInterval(()=>{ val=Math.min(val+step,target); el.textContent=Math.floor(val).toLocaleString(); if(val>=target)clearInterval(t); },16);
      co.unobserve(el);
    }
  });
},{threshold:0.3});
statVals.forEach(el=>co.observe(el));
  return (
        <>
        <section id="hero">
          <div class="hero-bg"></div>
          <div class="hero-blob-1"></div>
          <div class="hero-blob-2"></div>
          <div class="hero-ring-1"></div>
          <div class="hero-ring-2"></div>
          <div class="hero-ring-3"></div>
        
          <div class="hero-particle" style="left:8%;top:20%;width:3px;height:3px;background:var(--brand-500);animation:float 8s ease-in-out infinite"></div>
          <div class="hero-particle" style="left:22%;top:65%;width:2px;height:2px;background:rgba(255,255,255,.5);animation:drift 10s ease-in-out infinite 1s"></div>
          <div class="hero-particle" style="left:35%;top:30%;width:4px;height:4px;background:var(--brand-400);opacity:.5;animation:float 9s ease-in-out infinite 2s"></div>
          <div class="hero-particle" style="left:60%;top:75%;width:2px;height:2px;background:rgba(255,255,255,.4);animation:drift 7s ease-in-out infinite .5s"></div>
          <div class="hero-particle" style="left:78%;top:18%;width:3px;height:3px;background:var(--brand-300);animation:float 11s ease-in-out infinite 1.5s"></div>
          <div class="hero-particle" style="left:88%;top:55%;width:2px;height:2px;background:rgba(255,255,255,.3);animation:drift 8s ease-in-out infinite 3s"></div>
        
          <div style="position:absolute;top:22%;right:24%;width:18px;height:18px;opacity:.18;animation:float 9s ease-in-out infinite 1s;pointer-events:none">
            <div style="position:absolute;top:50%;left:0;width:100%;height:1.5px;background:var(--brand-500);transform:translateY(-50%)"></div>
            <div style="position:absolute;left:50%;top:0;width:1.5px;height:100%;background:var(--brand-500);transform:translateX(-50%)"></div>
          </div>
          <div style="position:absolute;top:70%;right:40%;width:12px;height:12px;opacity:.12;animation:drift 11s ease-in-out infinite 2s;pointer-events:none">
            <div style="position:absolute;top:50%;left:0;width:100%;height:1.5px;background:var(--brand-300);transform:translateY(-50%)"></div>
            <div style="position:absolute;left:50%;top:0;width:1.5px;height:100%;background:var(--brand-300);transform:translateX(-50%)"></div>
          </div>
        
          <div class="container">
            <div class="hero-grid">
              <div>
                <div class="hero-badge">
                  <span class="hero-dot"></span>
                  Частная клиника · Киев · Лицензия МЗ №1584
                </div>
                <h1 class="hero-title font-display">
                  Путь к<br>
                  <span class="text-gold">свободной</span><br>
                  жизни — здесь
                </h1>
                <p class="hero-sub font-body">
                  21 год помогаем людям преодолевать зависимость. Индивидуальный подход, передовые методы лечения и полная анонимность в сердце Киева.
                </p>
                <div class="hero-ctas">
                  <a href="#contact" class="btn btn-gold">
                    Получить помощь
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </a>
                  <a href="tel:+380931707989" class="btn btn-ghost">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    Позвонить сейчас
                  </a>
                </div>
                <div class="hero-trust">
                  <div class="hero-trust-item"><span class="ico">🔒</span>Полная анонимность</div>
                  <div class="hero-trust-item"><span class="ico">⚡</span>Помощь 24/7</div>
                  <div class="hero-trust-item"><span class="ico">🏥</span>Лицензированная клиника</div>
                </div>
              </div>
              <div class="hero-right">
                <div class="hero-card-main glass-dark">
                  <div style="font-family:'Playfair Display',serif;font-size:1.35rem;font-weight:600;color:#fff;margin-bottom:.4rem">Программа Recovery</div>
                  <p style="font-size:.84rem;color:rgba(255,255,255,.52);font-weight:300;line-height:1.6;margin-bottom:0">Детоксикация · Реабилитация · Постреабилитация</p>
                  <div class="hero-stats-grid">
                    <div class="hero-stat-box">
                      <div class="hero-stat-val">21</div>
                      <div class="hero-stat-lbl">Год опыта</div>
                    </div>
                    <div class="hero-stat-box">
                      <div class="hero-stat-val">11K+</div>
                      <div class="hero-stat-lbl">Пациентов</div>
                    </div>
                    <div class="hero-stat-box">
                      <div class="hero-stat-val">21</div>
                      <div class="hero-stat-lbl">Специалиста</div>
                    </div>
                  </div>
                </div>
                <div class="hero-badge-float glass-gold">
                  <div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,var(--sap-700),var(--sap-600));display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0">✓</div>
                  <div>
                    <div style="font-size:.77rem;font-weight:600;color:#fff">Анонимное лечение</div>
                    <div style="font-size:.63rem;color:rgba(249,189,21,.7);margin-top:2px">Конфиденциальность гарантирована</div>
                  </div>
                </div>
                <div class="hero-badge-float2 anim-float" style="animation-delay:1.5s">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="var(--sap-950)" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  093 170 79 89
                </div>
              </div>
            </div>
          </div>
        
          <div class="scroll-ind">
            <div class="scroll-mouse"><div class="scroll-wheel"></div></div>
            <span class="scroll-lbl">Прокрутить</span>
          </div>
        </section>
</>
  );
}
