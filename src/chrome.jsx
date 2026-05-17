// ===== Chrome: Header, Drawer, Footer =====

function Logo({ small }) {
  return (
    <div className="brand">
      <div className="mark" style={small ? { fontSize: 20 } : {}}>KVITKA BOUTIQUE</div>
      <div className="sub">premium bouquets · Praha</div>
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

function CartPanel({ cart, removeFromCart, onClose, lang }) {
  const cs = lang === "cs";
  const [step, setStep] = React.useState("cart"); // cart | checkout | done
  const [form, setForm] = React.useState({ name: "", phone: "", email: "", address: "", date: "", note: "" });
  const [errors, setErrors] = React.useState({});

  const count = cart.reduce((s, i) => s + i.qty, 0);
  const numericPrices = cart.filter(i => /\d/.test(i.price)).map(i => parseInt(i.price.replace(/\s/g, "").replace(/[^\d]/g, "")) * i.qty);
  const total = numericPrices.length ? numericPrices.reduce((a, b) => a + b, 0) : null;
  const hasCustom = cart.some(i => !/\d/.test(i.price));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = true;
    if (!form.phone.trim()) e.phone = true;
    return e;
  };

  const submit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    const items = cart.map(i => `• ${i.name}${i.italic ? " " + i.italic : ""} (${i.code}) ×${i.qty} — ${i.price}`).join("\n");
    const msg = cs
      ? `Dobrý den! Posílám objednávku z webu.\n\nJméno: ${form.name}\nTelefon: ${form.phone}${form.email ? "\nEmail: " + form.email : ""}${form.address ? "\nAdresa: " + form.address : ""}${form.date ? "\nTermín: " + form.date : ""}${form.note ? "\nPoznámka: " + form.note : ""}\n\nObjednávka:\n${items}${total ? "\n\nCelkem: " + total.toLocaleString("cs") + " Kč" : ""}`
      : `Hello! Order from website.\n\nName: ${form.name}\nPhone: ${form.phone}${form.email ? "\nEmail: " + form.email : ""}${form.address ? "\nAddress: " + form.address : ""}${form.date ? "\nDate: " + form.date : ""}${form.note ? "\nNote: " + form.note : ""}\n\nOrder:\n${items}${total ? "\n\nTotal: " + total.toLocaleString("cs") + " Kč" : ""}`;
    window.open(`https://wa.me/420777772858?text=${encodeURIComponent(msg)}`, "_blank");
    setStep("done");
  };

  const set = (k, v) => { setForm(f => ({ ...f, [k]: v })); setErrors(e => ({ ...e, [k]: false })); };

  return (
    <div className="cart-panel">
      <div className="bg" onClick={onClose}></div>
      <div className="cp-drawer">

        {/* CART STEP */}
        {step === "cart" && <>
          <div className="cp-head">
            <h4 style={{ fontFamily: "var(--serif)", fontSize: 26 }}>{cs ? "Košík" : "Cart"} <span style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--ink-60)", fontWeight: 400 }}>({count})</span></h4>
            <button className="menu-btn" onClick={onClose} aria-label="close">
              <svg viewBox="0 0 16 16"><line x1="2" y1="2" x2="14" y2="14" stroke="currentColor" strokeWidth="1.3" /><line x1="14" y1="2" x2="2" y2="14" stroke="currentColor" strokeWidth="1.3" /></svg>
            </button>
          </div>
          <div className="cp-items">
            {cart.length === 0 && <div className="cart-empty">{cs ? "Košík je prázdný" : "Cart is empty"}</div>}
            {cart.map(item => (
              <div className="cp-item" key={item.code}>
                <img src={item.img} alt={item.name} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 17, lineHeight: 1.2 }}>{item.name}{item.italic ? <span style={{ fontStyle: "italic", color: "var(--plum-soft)", fontWeight: 300 }}> {item.italic}</span> : ""}</div>
                  <div style={{ fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--ink-60)", marginTop: 3 }}>{item.code} · {cs ? "ks" : "qty"} {item.qty}</div>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 15, color: "var(--plum)", marginTop: 4 }}>{item.price}</div>
                </div>
                <button className="cp-rm" onClick={() => removeFromCart(item.code)}>×</button>
              </div>
            ))}
          </div>
          {cart.length > 0 && (
            <div className="cp-foot">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "4px 0 8px" }}>
                <span style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--ink-60)" }}>{cs ? "Celkem" : "Total"}</span>
                <span style={{ fontFamily: "var(--serif)", fontSize: 24, color: "var(--plum)" }}>
                  {total ? total.toLocaleString("cs") + " Kč" : ""}{hasCustom ? (total ? " + " : "") + (cs ? "na míru" : "custom") : ""}
                </span>
              </div>
              <button className="cp-checkout-btn" onClick={() => setStep("checkout")}>
                {cs ? "Dokončit objednávku" : "Proceed to checkout"} →
              </button>
              <div style={{ textAlign: "center", fontSize: 11, color: "var(--ink-60)", letterSpacing: ".1em", marginTop: 4 }}>
                {cs ? "Bezpečná objednávka · Potvrdíme do 1 hod." : "Secure order · Confirmed within 1 hour"}
              </div>
            </div>
          )}
        </>}

        {/* CHECKOUT STEP */}
        {step === "checkout" && <>
          <div className="cp-head">
            <button onClick={() => setStep("cart")} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--plum)", background: "none", border: 0, cursor: "pointer" }}>
              ← {cs ? "Zpět" : "Back"}
            </button>
            <h4 style={{ fontFamily: "var(--serif)", fontSize: 22 }}>{cs ? "Vaše údaje" : "Your details"}</h4>
            <button className="menu-btn" onClick={onClose} aria-label="close">
              <svg viewBox="0 0 16 16"><line x1="2" y1="2" x2="14" y2="14" stroke="currentColor" strokeWidth="1.3" /><line x1="14" y1="2" x2="2" y2="14" stroke="currentColor" strokeWidth="1.3" /></svg>
            </button>
          </div>
          <div className="cp-items" style={{ gap: 0 }}>
            <div style={{ marginBottom: 18 }}>
              <div style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--ink-60)", marginBottom: 10 }}>{cs ? "Shrnutí" : "Summary"} ({count} {cs ? "ks" : "items"})</div>
              {cart.map(i => (
                <div key={i.code} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, padding: "5px 0", borderBottom: "1px solid var(--rule)", color: "var(--ink)" }}>
                  <span>{i.name}{i.italic ? <em style={{ color: "var(--plum-soft)", fontWeight: 300 }}> {i.italic}</em> : ""} ×{i.qty}</span>
                  <span style={{ fontFamily: "var(--serif)", color: "var(--plum)" }}>{i.price}</span>
                </div>
              ))}
              {total && <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--serif)", fontSize: 18, paddingTop: 10, color: "var(--plum)" }}>
                <span>{cs ? "Celkem" : "Total"}</span><span>{total.toLocaleString("cs")} Kč</span>
              </div>}
            </div>

            <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 18, display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { key: "name", label: cs ? "Jméno a příjmení *" : "Full name *", type: "text", req: true },
                { key: "phone", label: cs ? "Telefon *" : "Phone *", type: "tel", req: true },
                { key: "email", label: "Email", type: "email" },
                { key: "address", label: cs ? "Adresa doručení" : "Delivery address", type: "text" },
                { key: "date", label: cs ? "Datum a čas doručení" : "Delivery date & time", type: "datetime-local" },
                { key: "note", label: cs ? "Poznámka k objednávce" : "Order note", type: "textarea" }
              ].map(({ key, label, type, req }) => (
                <div key={key} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <label style={{ fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase", color: errors[key] ? "#c94a6e" : "var(--ink-60)" }}>{label}</label>
                  {type === "textarea"
                    ? <textarea value={form[key]} onChange={e => set(key, e.target.value)} rows={3} style={{ background: "transparent", border: 0, borderBottom: `1px solid ${errors[key] ? "#c94a6e" : "var(--rule)"}`, padding: "8px 0", font: "inherit", fontSize: 14, resize: "none", outline: "none", color: "var(--ink)" }} />
                    : <input type={type} value={form[key]} onChange={e => set(key, e.target.value)} style={{ background: "transparent", border: 0, borderBottom: `1px solid ${errors[key] ? "#c94a6e" : "var(--rule)"}`, padding: "8px 0", font: "inherit", fontSize: 14, outline: "none", color: "var(--ink)" }} />
                  }
                  {errors[key] && <span style={{ fontSize: 10, color: "#c94a6e", letterSpacing: ".1em" }}>{cs ? "Povinné pole" : "Required"}</span>}
                </div>
              ))}
            </div>
          </div>
          <div className="cp-foot">
            <button className="cp-checkout-btn" onClick={submit}>
              {cs ? "Odeslat objednávku" : "Place order"} →
            </button>
            <div style={{ textAlign: "center", fontSize: 10, color: "var(--ink-60)", letterSpacing: ".1em", lineHeight: 1.5 }}>
              {cs ? "Odesláním souhlasíte se zpracováním osobních údajů. Objednávka bude potvrzena telefonicky." : "By submitting you agree to processing of personal data. Order confirmed by phone."}
            </div>
          </div>
        </>}

        {/* DONE STEP */}
        {step === "done" && <>
          <div className="cp-head">
            <div></div>
            <button className="menu-btn" onClick={onClose} aria-label="close">
              <svg viewBox="0 0 16 16"><line x1="2" y1="2" x2="14" y2="14" stroke="currentColor" strokeWidth="1.3" /><line x1="14" y1="2" x2="2" y2="14" stroke="currentColor" strokeWidth="1.3" /></svg>
            </button>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 24px", textAlign: "center", gap: 18 }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", border: "2px solid var(--plum)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, color: "var(--plum)" }}>✓</div>
            <h3 style={{ fontFamily: "var(--serif)", fontSize: 30, color: "var(--plum)" }}>{cs ? "Odesláno!" : "Order sent!"}</h3>
            <p style={{ color: "var(--ink-60)", fontSize: 14, lineHeight: 1.6, maxWidth: 280 }}>
              {cs ? `Děkujeme, ${form.name.split(" ")[0]}! Vaše objednávka byla odeslána přes WhatsApp. Brzy se vám ozveme s potvrzením.` : `Thank you, ${form.name.split(" ")[0]}! Your order was sent via WhatsApp. We'll confirm shortly.`}
            </p>
            <div style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--ink-40)", marginTop: 8 }}>+420 777 772 858</div>
            <button className="cp-checkout-btn" style={{ marginTop: 16, width: "100%" }} onClick={onClose}>{cs ? "Zavřít" : "Close"}</button>
          </div>
        </>}

      </div>
    </div>
  );
}

function OpenStatus({ lang }) {
  const [now, setNow] = React.useState(new Date());
  React.useEffect(() => { const id = setInterval(() => setNow(new Date()), 60000); return () => clearInterval(id); }, []);
  const prague = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Prague" }));
  const day = prague.getDay(); // 0=Sun
  const h = prague.getHours();
  const m = prague.getMinutes();
  const t = h * 60 + m;
  // Mon-Fri 9-19, Sat 10-18, Sun 10-16
  let openTime, closeTime;
  if (day >= 1 && day <= 5) { openTime = 9 * 60; closeTime = 19 * 60; }
  else if (day === 6) { openTime = 10 * 60; closeTime = 18 * 60; }
  else { openTime = 10 * 60; closeTime = 16 * 60; }
  const isOpen = t >= openTime && t < closeTime;
  const closeH = Math.floor(closeTime / 60);
  const labels = {
    cs: { open: "Otevřeno", closed: "Zavřeno", until: "do", opensAt: "od" },
    en: { open: "Open", closed: "Closed", until: "until", opensAt: "from" },
    uk: { open: "Відкрито", closed: "Зачинено", until: "до", opensAt: "від" },
    ru: { open: "Открыто", closed: "Закрыто", until: "до", opensAt: "с" }
  };
  const lb = labels[lang] || labels.en;
  const openH = Math.floor(openTime / 60);
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: isOpen ? "#7cb28a" : "#c94a6e", display: "inline-block" }}></span>
      {isOpen ? `${lb.open} · ${lb.until} ${closeH}:00` : `${lb.closed} · ${lb.opensAt} ${openH}:00`}
    </span>
  );
}

function Header({ lang, setLang, route, go, cart = [], cartOpen, setCartOpen, removeFromCart }) {
  const t = window.STRINGS[lang];
  const [drawer, setDrawer] = React.useState(false);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
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
            <OpenStatus lang={lang} />
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
            <a href="tel:+420777772858" className="phone-pill hide-mob">
              <span className="dot"></span>
              +420 777 772 858
            </a>
            <button className="cart-btn" onClick={() => setCartOpen(true)} aria-label="cart">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
            <a className="hbtn filled cta-head" onClick={() => go("contact")}>{t.cta.order}</a>
            <button className="menu-btn" onClick={() => setDrawer(true)} aria-label="menu">
              <svg viewBox="0 0 16 16"><line x1="1" y1="4" x2="15" y2="4" stroke="currentColor" strokeWidth="1.3" /><line x1="1" y1="12" x2="15" y2="12" stroke="currentColor" strokeWidth="1.3" /></svg>
            </button>
          </div>
        </div>
      </header>

      {cartOpen && <CartPanel cart={cart} removeFromCart={removeFromCart} onClose={() => setCartOpen(false)} lang={lang} />}

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
          <a href="tel:+420777772858" className="phone-pill"><span className="dot"></span>+420 777 772 858</a>
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
            <h4>Kvitka Boutique<br /><em style={{ fontStyle: "italic", color: "#e8c7dd" }}>premium bouquets</em></h4>
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
              <li><a href="tel:+420777772858" style={{ fontFamily: "var(--serif)", fontSize: 20 }}>+420 777 772 858</a></li>
              <li style={{ marginTop: 6 }}><a href="mailto:info@kvitkaboutique.cz">info@kvitkaboutique.cz</a></li>
              <li style={{ marginTop: 6 }}><a href="https://instagram.com/kvitka_boutique_prague" target="_blank" rel="noreferrer">@kvitka_boutique_prague</a></li>
              <li style={{ marginTop: 6 }}><a href="https://wa.me/420777772858" target="_blank" rel="noreferrer">WhatsApp →</a></li>
            </ul>
            <div style={{ marginTop: 22, display: "flex", gap: 10 }}>
              <a onClick={() => go("shop")} className="hbtn" style={{ borderColor: "rgba(255,255,255,.28)", color: "var(--cream)" }}>Shop</a>
              <a onClick={() => go("contact")} className="hbtn" style={{ borderColor: "rgba(255,255,255,.28)", color: "var(--cream)" }}>Contact</a>
            </div>
          </div>
          <div>
            <span className="sub">Map</span>
            <div className="map">
              <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=14.3725%2C50.0658%2C14.3925%2C50.0758&layer=mapnik&marker=50.0708%2C14.3825" loading="lazy" title="Map"></iframe>
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
