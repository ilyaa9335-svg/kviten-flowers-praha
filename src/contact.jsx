// ===== Contact page =====

function Contact({ lang, go }) {
  const t = window.STRINGS[lang].contact;
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", occ: 0, budget: 0, date: "", msg: "" });
  const [sent, setSent] = React.useState(false);

  const f = t.form;

  if (sent) {
    return (
      <div className="page wrap" style={{ padding: "80px 28px" }}>
        <div className="form-sent">
          <h4>{f.sent1}</h4>
          <p>{f.sent2}</p>
          <div style={{ marginTop: 26, display: "flex", gap: 10, justifyContent: "center" }}>
            <a className="hbtn filled" onClick={() => go("home")}>← Home</a>
            <a className="hbtn" onClick={() => go("shop")}>Shop</a>
          </div>
        </div>
      </div>
    );
  }

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
        <p className="lede">{t.lede}</p>

        <div className="quick-contact">
          <a className="qc" href="tel:+420703342207">
            <div className="mt">{t.phoneLb}</div>
            <div className="mv">+420 703 342 207</div>
            <div style={{ fontSize: 12, color: "var(--ink-60)" }}>{t.phoneSub}</div>
          </a>
          <a className="qc" href="https://wa.me/420703342207" target="_blank" rel="noreferrer">
            <div className="mt">{t.waLb}</div>
            <div className="mv">+420 703 342 207</div>
            <div style={{ fontSize: 12, color: "var(--ink-60)" }}>{t.waSub}</div>
          </a>
          <a className="qc" href="mailto:hello@kviten.cz">
            <div className="mt">{t.emailLb}</div>
            <div className="mv">hello@kviten.cz</div>
            <div style={{ fontSize: 12, color: "var(--ink-60)" }}>{t.emailSub}</div>
          </a>
        </div>
      </section>

      <section className="contact-grid wrap">
        <div className="contact-left">
          <div className="ci-row">
            <div className="lb">{t.addressLb}</div>
            <div className="val">
              Francouzská, Praha 2<br />Vinohrady · 120 00
              <span className="mute">{t.addressSub}</span>
            </div>
          </div>
          <div className="ci-row">
            <div className="lb">{t.hoursLb}</div>
            <div className="val" style={{ width: "100%" }}>
              <div className="hours">
                <span className="dy today">Po–Pá</span><span className="hr today">09:00 – 19:00</span>
                <span className="dy">Sobota</span><span className="hr">10:00 – 18:00</span>
                <span className="dy">Neděle</span><span className="hr">10:00 – 16:00</span>
              </div>
            </div>
          </div>
          <div className="ci-row">
            <div className="lb">{t.igLb}</div>
            <div className="val">
              <a href="https://instagram.com/kviten_flowers_praha" target="_blank" rel="noreferrer">@kviten_flowers_praha</a>
              <span className="mute">11,8K {lang === 'en' ? 'followers' : lang === 'uk' ? 'підписників' : lang === 'ru' ? 'подписчиков' : 'sledujících'} · 61 {lang === 'en' ? 'posts' : 'postů'}</span>
            </div>
          </div>
          <div className="ci-row">
            <div className="lb">{t.langLb}</div>
            <div className="val" style={{ fontSize: 16 }}>
              {t.langSub}
            </div>
          </div>
        </div>

        <div className="contact-right">
          <div className="eyebrow" style={{ marginBottom: 20 }}>{f.title}</div>
          <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <div className="row2">
              <div className="field">
                <label>{f.name}</label>
                <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="field">
                <label>{f.phone}</label>
                <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              </div>
            </div>
            <div className="field">
              <label>{f.email}</label>
              <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="field">
              <label>{f.occ}</label>
              <div className="radio-row">
                {f.occOpts.map((o, i) => (
                  <label key={i} className={form.occ === i ? "on" : ""}>
                    <input type="radio" checked={form.occ === i} onChange={() => setForm({ ...form, occ: i })} />
                    {o}
                  </label>
                ))}
              </div>
            </div>
            <div className="row2">
              <div className="field">
                <label>{f.budget}</label>
                <select value={form.budget} onChange={e => setForm({ ...form, budget: +e.target.value })}>
                  {f.budgetOpts.map((b, i) => <option key={i} value={i}>{b}</option>)}
                </select>
              </div>
              <div className="field">
                <label>{f.date}</label>
                <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
              </div>
            </div>
            <div className="field">
              <label>{f.msg}</label>
              <textarea placeholder={f.msgPh} value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })}></textarea>
            </div>
            <div className="submit">
              <button type="submit">{f.submit} →</button>
            </div>
            <div className="form-note">{f.note}</div>
          </form>
        </div>
      </section>

      <section className="wrap">
        <div className="map-wide">
          <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=14.435%2C50.072%2C14.460%2C50.084&layer=mapnik&marker=50.077%2C14.447" loading="lazy" title="Map"></iframe>
          <div className="map-overlay">
            <div className="eb">Kviten' · Flowers & Decor</div>
            <h4>{t.mapTitle}</h4>
            <p>{t.mapDesc}</p>
            <p style={{ fontFamily: "var(--serif)", fontSize: 16, marginTop: 12, color: "var(--plum)" }}>Francouzská, Praha 2<br />Vinohrady · 120 00</p>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { Contact });
