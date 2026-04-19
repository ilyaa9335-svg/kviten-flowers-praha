// ===== Chrome: Header, Drawer, Footer =====

function Logo({ small }) {
  return (
    <div className="brand">
      <div className="mark" style={small ? { fontSize: 20 } : {}}>KVITEN'</div>
      <div className="sub">flowers & decor</div>
    </div>
  );
}

function LangSwitcher({ lang, setLang }) {
  return (
    <div className="lang">
      {window.LANGS.map((l, i) => (
        <React.Fragment key={l.id}>
          {i > 0 && <span className="sep">/</span>}
          <button className={lang === l.id ? "active" : ""} onClick={() => setLang(l.id)}>
            {l.label}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}

function Header({ lang, setLang, route, go }) {
  const t = window.STRINGS[lang];
  const [drawer, setDrawer] = React.useState(false);
  const navItems = [
    { id: "home", label: t.nav.home },
    { id: "shop", label: t.nav.shop },
    { id: "dekor", label: t.nav.dekor },
    { id: "eventy", label: t.nav.eventy },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact }
  ];
  return (
    <>
      <header className="top">
        <div className="top-strip">
          <div className="loc">{t.top.loc}</div>
          <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#7cb28a", display: "inline-block" }}></span>
              {t.top.open} · {t.top.until}
            </span>
            <LangSwitcher lang={lang} setLang={setLang} />
          </div>
        </div>
        <div className="nav">
          <div className="nav-left">
            <a className={"nav-item" + (route === "home" ? " active" : "")} onClick={() => go("home")}>{t.nav.home}</a>
            <a className={"nav-item" + (route === "shop" ? " active" : "")} onClick={() => go("shop")}>{t.nav.shop}</a>
            <a className={"nav-item" + (route === "dekor" ? " active" : "")} onClick={() => go("dekor")}>{t.nav.dekor}</a>
          </div>
          <div onClick={() => go("home")}><Logo /></div>
          <div className="nav-right">
            <a className={"nav-item nav-secondary" + (route === "eventy" ? " active" : "")} onClick={() => go("eventy")}>{t.nav.eventy}</a>
            <a className={"nav-item" + (route === "about" ? " active" : "")} onClick={() => go("about")}>{t.nav.about}</a>
            <a className={"nav-item" + (route === "contact" ? " active" : "")} onClick={() => go("contact")}>{t.nav.contact}</a>
            <a href="tel:+420703342207" className="phone-pill hide-mob">
              <span className="dot"></span>
              +420 703 342 207
            </a>
            <a className="hbtn filled cta-head" onClick={() => go("contact")}>{t.cta.order}</a>
            <button className="menu-btn" onClick={() => setDrawer(true)} aria-label="menu">
              <svg viewBox="0 0 16 16"><line x1="1" y1="4" x2="15" y2="4" stroke="currentColor" strokeWidth="1.3" /><line x1="1" y1="12" x2="15" y2="12" stroke="currentColor" strokeWidth="1.3" /></svg>
            </button>
          </div>
        </div>
      </header>

      <div className={"drawer" + (drawer ? " open" : "")}>
        <div className="drawer-head">
          <Logo />
          <button className="menu-btn" onClick={() => setDrawer(false)} aria-label="close">
            <svg viewBox="0 0 16 16"><line x1="2" y1="2" x2="14" y2="14" stroke="currentColor" strokeWidth="1.3" /><line x1="14" y1="2" x2="2" y2="14" stroke="currentColor" strokeWidth="1.3" /></svg>
          </button>
        </div>
        <div className="drawer-nav">
          {navItems.map((it, i) => (
            <a key={it.id} onClick={() => { go(it.id); setDrawer(false); }}>
              <span className="italic" style={{ color: route === it.id ? "var(--plum)" : "inherit" }}>{it.label}</span>
              <span className="n">0{i + 1}</span>
            </a>
          ))}
        </div>
        <div className="drawer-foot">
          <LangSwitcher lang={lang} setLang={setLang} />
          <a href="tel:+420703342207" className="phone-pill"><span className="dot"></span>+420 703 342 207</a>
          <a className="hbtn filled" onClick={() => { go("contact"); setDrawer(false); }}>{t.cta.order}</a>
        </div>
      </div>
    </>
  );
}

function Footer({ lang, go }) {
  const t = window.STRINGS[lang].foot;
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div>
            <span className="sub">{t.hello}</span>
            <h4>Kviten'<br /><em style={{ fontStyle: "italic", color: "#e8c7dd" }}>flowers & decor</em></h4>
            <p style={{ marginTop: 14, maxWidth: 320 }}>{t.tagline}</p>
            <p style={{ marginTop: 22, fontSize: 12, opacity: .7 }}>{t.languages}</p>
          </div>
          <div>
            <span className="sub">{t.visit}</span>
            <p style={{ whiteSpace: "pre-line", fontFamily: "var(--serif)", fontSize: 18, lineHeight: 1.4 }}>{t.address}</p>
            <p style={{ marginTop: 18 }}><span className="sub" style={{ display: "block", marginBottom: 8 }}>{t.hours}</span></p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "6px 16px", fontSize: 13 }}>
              {t.hoursRows.map((r, i) => (
                <React.Fragment key={i}>
                  <span>{r[0]}</span>
                  <span style={{ opacity: .8 }}>{r[1]}</span>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div>
            <span className="sub">{t.contact}</span>
            <ul>
              <li><a href="tel:+420703342207" style={{ fontFamily: "var(--serif)", fontSize: 20 }}>+420 703 342 207</a></li>
              <li style={{ marginTop: 6 }}><a href="mailto:hello@kviten.cz">hello@kviten.cz</a></li>
              <li style={{ marginTop: 6 }}><a href="https://instagram.com/kviten_flowers_praha" target="_blank" rel="noreferrer">@kviten_flowers_praha</a></li>
              <li style={{ marginTop: 6 }}><a href="https://wa.me/420703342207" target="_blank" rel="noreferrer">WhatsApp →</a></li>
            </ul>
            <div style={{ marginTop: 22, display: "flex", gap: 10 }}>
              <a onClick={() => go("shop")} className="hbtn" style={{ borderColor: "rgba(255,255,255,.28)", color: "var(--cream)" }}>Shop</a>
              <a onClick={() => go("contact")} className="hbtn" style={{ borderColor: "rgba(255,255,255,.28)", color: "var(--cream)" }}>Contact</a>
            </div>
          </div>
          <div>
            <span className="sub">Map</span>
            <div className="map">
              <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=14.435%2C50.072%2C14.455%2C50.082&layer=mapnik&marker=50.077%2C14.445" loading="lazy" title="Map"></iframe>
            </div>
          </div>
        </div>
        <div className="foot-bot">
          <span>{t.copy}</span>
          <span style={{ fontStyle: "italic", fontFamily: "var(--serif)", textTransform: "none", letterSpacing: 0, fontSize: 13 }}>{t.built}</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Header, Footer, Logo, LangSwitcher });
