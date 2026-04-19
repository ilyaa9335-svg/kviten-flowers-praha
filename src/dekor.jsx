// ===== Dekor page =====

function Dekor({ lang, go }) {
  const t = window.STRINGS[lang].dekor;
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
        <div className="feature-grid">
          <div className="feature-photo">
            <img src={IMG.b1} alt="Kviten wedding decor — Prague" />
            <div className="feature-tag">
              <span className="live"></span>
              {t.tag}
            </div>
          </div>
          <div className="feature-side">
            <div>
              <div className="eyebrow">{t.captionEb}</div>
              <h3 className="feature-title serif">{t.captionTitle}</h3>
              <p className="feature-desc">{t.captionDesc}</p>
            </div>
            <div className="feature-cta">
              <a className="hbtn filled" onClick={() => go("contact")}>{t.ctaPrimary}</a>
              <a className="hbtn" href="https://wa.me/420703342207" target="_blank" rel="noreferrer">{t.ctaSecondary}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="story wrap">
        <div className="lead">
          {t.leadEm1} <span className="em italic">{t.leadEmHighlight}</span> {t.leadEm2}
        </div>
        <div className="body">
          <p><span className="initial serif">D</span>{t.body1}</p>
          <p>{t.body2}</p>
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

      <section className="timeline wrap">
        <div className="sec-hd" style={{ marginBottom: 24 }}>
          <span className="n">02</span>
          <h2 className="t">{t.tlTitle1} <span className="em">{t.tlTitle2}</span></h2>
          <div className="side"></div>
        </div>
        <div className="tl-rows">
          {t.timeline.map((r, i) => (
            <div className="tl-row" key={i}>
              <div className="yr">{r.yr}</div>
              <div className="evt">{r.evt}</div>
              <div className="note">{r.note}</div>
              <div className="loc">{r.loc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { Dekor });
