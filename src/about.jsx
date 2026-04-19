// ===== About page =====

function About({ lang, go }) {
  const t = window.STRINGS[lang].about;
  return (
    <div className="page">
      <section className="page-hero wrap">
        <div className="eb">
          <span className="line"></span>
          <span className="eyebrow">{t.eb}</span>
        </div>
        <h1 className="display">
          {t.t1} <span className="em italic" style={{ color: "var(--plum)", fontWeight: 300 }}>{t.t2}</span><br />
          {t.t3}
        </h1>
      </section>

      <section className="about-photos wrap">
        <div className="ap big"><img src={IMG.shop} alt="Kviten shop front" /></div>
        <div className="ap"><img src={IMG.wedding} alt="Hand-tied pink bouquet" /></div>
        <div className="ap"><img src={IMG.boxGold} alt="Peach gladiolus bouquet" /></div>
        <div className="ap"><img src={IMG.peach} alt="Gold box with orchids" /></div>
        <div className="ap"><img src={IMG.premium} alt="Signature arrangement" /></div>
      </section>

      <section className="story wrap">
        <div className="lead">
          {t.lead1} <span className="em italic">{t.leadEm}</span> {t.lead2}
        </div>
        <div className="body">
          <p><span className="initial serif">K</span>{t.body1}</p>
          <p>{t.body2}</p>
          <p>{t.body3}</p>
          <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
            <a className="hbtn filled" onClick={() => go("shop")}>Prohlédnout kolekci</a>
            <a className="hbtn" onClick={() => go("contact")}>Kontaktovat nás</a>
          </div>
        </div>
      </section>

      <section className="wrap">
        <div className="values">
          {t.values.map((v, i) => (
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
          <span className="n">03</span>
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

Object.assign(window, { About });
