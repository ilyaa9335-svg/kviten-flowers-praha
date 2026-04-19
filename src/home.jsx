// ===== Home page =====

const IMG = {
  premium: "assets/bouquet-premium.jpg",
  b1: "assets/bouquet-1.jpg",
  b2: "assets/bouquet-2.jpg",
  wedding: "assets/wedding.jpg",
  boxGold: "assets/box-gold.jpg",
  peach: "assets/bouquet-peach.jpg",
  boxPink: "assets/box-pink.jpg",
  shop: "assets/shop.jpg",
  logo: "assets/logo.jpg"
};

function Marquee({ items }) {
  const rep = [...items, ...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {rep.map((s, i) => (
          <span key={i}>
            {s}
            <span className="dot"></span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Home({ lang, go }) {
  const t = window.STRINGS[lang];
  const h = t.hero;
  return (
    <div className="page">
      <section className="hero wrap">
        <div className="hero-grid">
          <div className="hero-text">
            <div>
              <div className="hero-meta">
                <span className="line"></span>
                <span className="eyebrow">{h.eyebrow}</span>
              </div>
              <h1 className="display">
                {h.title1} <span className="flourish italic">{h.title2}</span><br />
                <span className="amp">{h.amp}</span> {h.title3}<br />
                <span className="italic" style={{ color: "var(--plum-soft)", fontWeight: 300 }}>{h.title4}</span>
              </h1>
              <p className="hero-lede">{h.lede}</p>
              <div className="hero-cta">
                <a className="hbtn filled" onClick={() => go("shop")}>{t.cta.order} →</a>
                <a className="hbtn" href="https://wa.me/420703342207" target="_blank" rel="noreferrer">{t.cta.whatsapp}</a>
              </div>
            </div>
            <div className="hero-kpis">
              {h.kpis.map((k, i) => (
                <div className="kpi" key={i}>
                  <div className="num serif">{k.n}</div>
                  <div className="lb">{k.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-image">
            <img className="main" src={IMG.premium} alt="featured bouquet" />
            <div className="hero-tag">
              <span className="live"></span>
              {h.live}
            </div>
            <div className="hero-floating">
              <div className="eyebrow" style={{ fontSize: 9.5 }}>{h.featured}</div>
              <div className="ttl">{h.featuredName}</div>
              <div className="price">3 200 Kč</div>
              <div className="meta">
                <span>Rose · Hydrangea · Calla</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={h.marquee} />

      <section className="sec wrap">
        <div className="sec-hd">
          <span className="n">{t.services.n}</span>
          <h2 className="t">{t.services.title1} <span className="em">{t.services.title2}</span></h2>
          <div className="side">{t.services.side}</div>
        </div>
        <div className="svcs">
          {t.services.items.map((s, i) => (
            <div className="svc" key={i} onClick={() => go(i === 0 || i === 3 ? "shop" : "contact")}>
              <span className="num">{s.n}</span>
              <div className="name serif" style={{ whiteSpace: "pre-line" }}>{s.name}</div>
              <div className="desc">{s.desc}</div>
              <span className="more">{s.cta} <span className="arrow"></span></span>
            </div>
          ))}
        </div>
      </section>

      <section className="sec wrap" style={{ paddingTop: 0 }}>
        <div className="sec-hd">
          <span className="n">{t.gallery.n}</span>
          <h2 className="t">{t.gallery.title1} <span className="em">{t.gallery.title2}</span></h2>
          <div className="side">{t.gallery.side}</div>
        </div>
        <div className="strip">
          <div className="cell tall"><img src={IMG.peach} alt="" /><span className="cap">{t.gallery.items[0].cap}</span></div>
          <div className="cell"><img src={IMG.wedding} alt="" /><span className="cap">{t.gallery.items[1].cap}</span></div>
          <div className="cell"><img src={IMG.boxGold} alt="" /><span className="cap">{t.gallery.items[2].cap}</span></div>
          <div className="cell"><img src={IMG.b2} alt="" /><span className="cap">{t.gallery.items[3].cap}</span></div>
          <div className="cell"><img src={IMG.premium} alt="" /><span className="cap">{t.gallery.items[4].cap}</span></div>
          <div className="cell"><img src={IMG.peach} alt="" /><span className="cap">{t.gallery.items[5].cap}</span></div>
        </div>
      </section>

      <section className="editorial">
        <div className="wrap">
          <div className="logo-wheel hide-mob">
            <svg viewBox="0 0 220 220" aria-hidden>
              <defs>
                <path id="circle" d="M 110,110 m -90,0 a 90,90 0 1,1 180,0 a 90,90 0 1,1 -180,0" />
              </defs>
              <text fill="#e8c7dd" style={{ fontFamily: "var(--serif)", fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase" }}>
                <textPath href="#circle">  FLOWERS  ·  WEDDING  ·  EVENT DECOR  ·  PRAHA  ·  SINCE 2019  ·  FLOWERS  ·  WEDDING  ·  </textPath>
              </text>
            </svg>
            <div className="inner">
              <img src={IMG.logo} alt="Kviten logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
          <div>
            <div className="eyebrow" style={{ color: "#e8c7dd" }}>— {t.quote.eyebrow}</div>
            <div className="q" style={{ marginTop: 22 }}>
              {t.quote.text1} <span className="em">{t.quote.text2}</span> {t.quote.text3}
              <br />
              <span style={{ color: "rgba(250,245,238,.68)", fontSize: "0.62em", fontStyle: "normal", fontFamily: "var(--sans)", letterSpacing: 0, lineHeight: 1.6, display: "inline-block", marginTop: 18 }}>{t.quote.text4}</span>
            </div>
            <div className="att">— {t.quote.att}</div>
          </div>
        </div>
      </section>

      <section className="sec wrap">
        <div className="ig-hd">
          <div>
            <div className="eyebrow">{t.ig.title}</div>
            <h3 className="serif" style={{ marginTop: 8 }}>{t.ig.handle}</h3>
            <div style={{ color: "var(--ink-60)", fontSize: 13, marginTop: 4 }}>{t.ig.followers}</div>
          </div>
          <a className="hbtn" href="https://instagram.com/kviten_flowers_praha" target="_blank" rel="noreferrer">{t.ig.cta} →</a>
        </div>
        <div className="ig-grid">
          {[IMG.wedding, IMG.peach, IMG.boxGold, IMG.b2, IMG.premium, IMG.boxGold].map((src, i) => (
            <div className="ig-cell" key={i}>
              <img src={src} alt="" />
              <div className="ov">{t.ig.hover} →</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { Home, IMG, Marquee });
