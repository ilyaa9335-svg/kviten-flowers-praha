// ===== Home page =====

const REVIEWS = [
  { name: "Mykhaylo Prodan", when: "a year ago", s: 5, txt: "Nejlepší květinářství v celé Praze, výzdoba je prostě na nejvyšší úrovni 👍 doporučuji." },
  { name: "Anatoliy Pryyma", when: "a year ago", s: 5, txt: "Nejlepší a nejčerstvější květiny v Praze, výhodou je rozvoz květin po Praze. 🔥😍" },
  { name: "Tatiana", when: "10 months ago", s: 5, txt: "Якщо квіти, то тільки Kvitka Flower Boutique. Всі букети тільки від них — нереальна свіжість, деякі трималися більше тижня." },
  { name: "Marianna Popovich", when: "10 months ago", s: 5, txt: "Замовляла квіти на день народження сестри. Букет просто неймовірний, а дівчина яка робила — велика молодець. Бажаю вам процвітання." },
  { name: "KaarinA H", when: "a year ago", s: 5, txt: "Мікс букету зроблений за 15 хв, привітні працівники, атмосферний магазин, квіти довго простояли 👍🏻" },
  { name: "Taras Tsipino", when: "10 months ago", s: 5, txt: "Букетики просто неймовірні! Раджу всім замовляти у них." },
  { name: "Тетяна Мельник", when: "a year ago", s: 5, txt: "Квіти були свіжі тиждень, деякі довше, все чудово, дякуємо." },
  { name: "Ярослав Якіб'юк", when: "10 months ago", s: 5, txt: "Квіти неймовірні, дуже гарні. ❤️🫶" },
  { name: "Denys Subota", when: "2 months ago", s: 5, txt: "Super." },
  { name: "Леонид Лебеденко", when: "9 months ago", s: 5, txt: "Super." }
];

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

function GalleryLightbox({ src, onClose }) {
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(42,20,50,.94)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, cursor: "zoom-out" }}>
      <img src={src} alt="" style={{ maxWidth: "100%", maxHeight: "92vh", objectFit: "contain", boxShadow: "0 40px 80px rgba(0,0,0,.5)" }} onClick={e => e.stopPropagation()} />
      <button onClick={onClose} style={{ position: "absolute", top: 18, right: 18, width: 44, height: 44, borderRadius: "50%", background: "var(--cream)", border: 0, fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>
    </div>
  );
}

function Home({ lang, go }) {
  const t = window.STRINGS[lang];
  const h = t.hero;
  const [lightboxSrc, setLightboxSrc] = React.useState(null);
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
                <a className="hbtn" href="https://wa.me/420777772858" target="_blank" rel="noreferrer">{t.cta.whatsapp}</a>
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
            <video className="main" src="assets/hero.mp4" autoPlay muted loop playsInline preload="auto" style={{ width: "100%", height: "100%", objectFit: "cover", background: "var(--ivory)" }} />
            <div className="hero-tag">
              <span className="live"></span>
              {h.live}
            </div>
            <div className="hero-floating">
              <div className="eyebrow" style={{ fontSize: 9.5 }}>{h.featured}</div>
              <div className="ttl">{h.featuredName}</div>
              <div className="price">3 500 Kč</div>
              <div className="meta">
                <span>Peony · Hydrangea · Rose</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={h.marquee} />

      <section className="sec wrap" style={{ paddingTop: 0 }}>
        <div className="sec-hd">
          <span className="n">{t.gallery.n}</span>
          <h2 className="t">{t.gallery.title1} <span className="em">{t.gallery.title2}</span></h2>
          <div className="side">{t.gallery.side}</div>
        </div>
        <div className="strip">
          <div className="cell tall" onClick={() => setLightboxSrc(IMG.peach)} style={{ cursor: "zoom-in" }}><img src={IMG.peach} alt="" /><span className="cap">{t.gallery.items[0].cap}</span></div>
          <div className="cell" onClick={() => setLightboxSrc(IMG.wedding)} style={{ cursor: "zoom-in" }}><img src={IMG.wedding} alt="" /><span className="cap">{t.gallery.items[1].cap}</span></div>
          <div className="cell" onClick={() => setLightboxSrc(IMG.boxGold)} style={{ cursor: "zoom-in" }}><img src={IMG.boxGold} alt="" /><span className="cap">{t.gallery.items[2].cap}</span></div>
          <div className="cell" onClick={() => setLightboxSrc(IMG.b2)} style={{ cursor: "zoom-in" }}><img src={IMG.b2} alt="" /><span className="cap">{t.gallery.items[3].cap}</span></div>
          <div className="cell" onClick={() => setLightboxSrc(IMG.premium)} style={{ cursor: "zoom-in" }}><img src={IMG.premium} alt="" /><span className="cap">{t.gallery.items[4].cap}</span></div>
          <div className="cell" onClick={() => setLightboxSrc(IMG.peach)} style={{ cursor: "zoom-in" }}><img src={IMG.peach} alt="" /><span className="cap">{t.gallery.items[5].cap}</span></div>
        </div>
        {lightboxSrc && <GalleryLightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
      </section>

      <section className="editorial">
        <div className="wrap">
          <div className="logo-wheel hide-mob">
            <svg viewBox="0 0 220 220" aria-hidden>
              <defs>
                <path id="circle" d="M 110,110 m -90,0 a 90,90 0 1,1 180,0 a 90,90 0 1,1 -180,0" />
              </defs>
              <text fill="#e8c7dd" style={{ fontFamily: "var(--serif)", fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase" }}>
                <textPath href="#circle">  KVITKA BOUTIQUE  ·  PREMIUM  ·  BOUQUETS  ·  PRAHA  ·  SINCE 2023  ·  KVITKA BOUTIQUE  ·  PRAHA  ·  </textPath>
              </text>
            </svg>
            <div className="inner">
              <img src={IMG.logo} alt="Kvitka Boutique logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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

      <section className="reviews wrap">
        <div className="reviews-hd">
          <div className="left">
            <div className="eyebrow">{lang === 'cs' ? 'Recenze · Google' : lang === 'uk' ? 'Відгуки · Google' : lang === 'ru' ? 'Отзывы · Google' : 'Reviews · Google'}</div>
            <h3>{lang === 'cs' ? 'Co o nás říkají klienti' : lang === 'uk' ? 'Що кажуть наші клієнти' : lang === 'ru' ? 'Что говорят клиенты' : 'What our clients say'}</h3>
          </div>
          <div className="score">
            <div className="num">4.9</div>
            <div>
              <div className="stars">★★★★★</div>
              <div className="sub">{lang === 'cs' ? 'na základě Google recenzí' : lang === 'uk' ? 'на основі Google відгуків' : lang === 'ru' ? 'по отзывам Google' : 'based on Google reviews'}</div>
            </div>
            <a className="hbtn" href="https://share.google/9sjPJkPKylkpbQBqR" target="_blank" rel="noreferrer">{lang === 'cs' ? 'Vše na Google' : lang === 'uk' ? 'Всі на Google' : lang === 'ru' ? 'Все на Google' : 'All on Google'} →</a>
          </div>
        </div>
        <div className="reviews-grid">
          {REVIEWS.map((r, i) => (
            <div className="rcard" key={i}>
              <div className="top">
                <div className="who">
                  <div className="av">{r.name.charAt(0)}</div>
                  <div>
                    <div className="name">{r.name}</div>
                    <div className="when">{r.when}</div>
                  </div>
                </div>
                <div className={"stars" + (r.s < 4 ? " bad" : "")}>{"★".repeat(r.s)}{"☆".repeat(5 - r.s)}</div>
              </div>
              <div className="txt">"{r.txt}"</div>
              <div className="source">Google review</div>
            </div>
          ))}
        </div>
      </section>

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

      <section className="sec wrap">
        <div className="ig-hd">
          <div>
            <div className="eyebrow">{t.ig.title}</div>
            <h3 className="serif" style={{ marginTop: 8 }}>{t.ig.handle}</h3>
            <div style={{ color: "var(--ink-60)", fontSize: 13, marginTop: 4 }}>{t.ig.followers}</div>
          </div>
          <a className="hbtn" href="https://instagram.com/kvitka_boutique_prague" target="_blank" rel="noreferrer">{t.ig.cta} →</a>
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
