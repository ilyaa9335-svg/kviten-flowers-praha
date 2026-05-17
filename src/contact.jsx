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
          <a className="qc" href="tel:+420777772858">
            <div className="mt">{t.phoneLb}</div>
            <div className="mv">+420 777 772 858</div>
            <div style={{ fontSize: 12, color: "var(--ink-60)" }}>{t.phoneSub}</div>
          </a>
          <a className="qc" href="https://wa.me/420777772858" target="_blank" rel="noreferrer">
            <div className="mt">{t.waLb}</div>
            <div className="mv">+420 777 772 858</div>
            <div style={{ fontSize: 12, color: "var(--ink-60)" }}>{t.waSub}</div>
          </a>
          <a className="qc" href="mailto:info@kvitkaboutique.cz">
            <div className="mt">{t.emailLb}</div>
            <div className="mv">info@kvitkaboutique.cz</div>
            <div style={{ fontSize: 12, color: "var(--ink-60)" }}>{t.emailSub}</div>
          </a>
        </div>
      </section>

      <section className="contact-grid wrap">
        <div className="contact-left">
          <div className="ci-row">
            <div className="lb">{t.addressLb}</div>
            <div className="val">
              Plzeňská 1282/105, Praha 5<br />Košíře · 150 00
              <span className="mute">{t.addressSub}</span>
            </div>
          </div>
          <div className="ci-row">
            <div className="lb">{t.hoursLb}</div>
            <div className="val" style={{ width: "100%" }}>
              <div className="hours">
                {window.STRINGS[lang].foot.hoursRows.map((r, i) => (
                  <React.Fragment key={i}>
                    <span className="dy">{r[0]}</span><span className="hr">{r[1]}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className="ci-row">
            <div className="lb">{t.igLb}</div>
            <div className="val">
              <a href="https://instagram.com/kvitka_boutique_prague" target="_blank" rel="noreferrer">@kvitka_boutique_prague</a>
              <span className="mute">500 {lang === 'en' ? 'followers' : lang === 'uk' ? 'підписників' : lang === 'ru' ? 'подписчиков' : 'sledujících'} · 47 {lang === 'en' ? 'posts' : 'postů'}</span>
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
          <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=14.3725%2C50.0658%2C14.3925%2C50.0758&layer=mapnik&marker=50.0708%2C14.3825" loading="lazy" title="Map"></iframe>
          <div className="map-overlay">
            <div className="eb">Kvitka Boutique · Premium Bouquets</div>
            <h4>{t.mapTitle}</h4>
            <p>{t.mapDesc}</p>
            <p style={{ fontFamily: "var(--serif)", fontSize: 16, marginTop: 12, color: "var(--plum)" }}>Plzeňská 1282/105, Praha 5<br />Košíře · 150 00</p>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { Contact });
