// ===== Eventy page =====

function Eventy({ lang, go }) {
  const t = window.STRINGS[lang].eventy;
  return (
    <div className="page">
      <section className="page-hero wrap">
        <div className="eb">
          <span className="line"></span>
          <span className="eyebrow">{t.eb}</span>
        </div>
        <h1 className="display">
          {t.t1} <span className="em italic" style={{ color: "var(--plum)", fontWeight: 300 }}>{t.t2}</span> {t.t3}
        </h1>
        <p className="lede">{t.lede}</p>
      </section>

      <section className="wrap feature">
        <div className="feature-grid reverse">
          <div className="feature-side">
            <div>
              <div className="eyebrow">{t.captionEb}</div>
              <h3 className="feature-title serif">{t.captionTitle}</h3>
              <p className="feature-desc">{t.captionDesc}</p>
            </div>
            <div className="kpi-mini">
              {t.kpis.map((k, i) => (
                <div className="kpi" key={i}>
                  <div className="num serif">{k.n}</div>
                  <div className="lb">{k.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="feature-photo">
            <img src={IMG.b1} alt="Kviten event decor — Prague" />
            <div className="feature-tag">
              <span className="live"></span>
              {t.tag}
            </div>
          </div>
        </div>
      </section>

      <section className="story wrap">
        <div className="lead">
          {t.leadEm1} <span className="em italic">{t.leadEmHighlight}</span> {t.leadEm2}
        </div>
        <div className="body">
          <p><span className="initial serif">E</span>{t.body1}</p>
          <p>{t.body2}</p>
          <div style={{ display: "flex", gap: 10, marginTop: 12, flexWrap: "wrap" }}>
            <a className="hbtn filled" onClick={() => go("contact")}>{t.ctaPrimary}</a>
            <a className="hbtn" href="https://wa.me/420703342207" target="_blank" rel="noreferrer">{t.ctaSecondary}</a>
          </div>
        </div>
      </section>

      <section className="sec wrap" style={{ paddingTop: 0 }}>
        <div className="sec-hd">
          <span className="n">01</span>
          <h2 className="t">{t.servicesTitle1} <span className="em">{t.servicesTitle2}</span></h2>
          <div className="side">{t.servicesSide}</div>
        </div>
        <div className="values">
          {t.services.map((v, i) => (
            <div className="value" key={i}>
              <div className="ico">{v.ico}</div>
              <h3>{v.t}</h3>
              <p>{v.p}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { Eventy });
