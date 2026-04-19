// ===== Shop page =====

function ShopProduct({ name, italic, price, code, badge, img, onOpen }) {
  return (
    <div className="prod" onClick={onOpen}>
      <div className="ph">
        <img src={img} alt={name} />
        {badge && <div className="badge">{badge}</div>}
        <div className="heart" aria-label="save">
          <svg viewBox="0 0 24 24"><path d="M12 21s-7-4.5-9.5-9C.5 8 3 4 6.5 4c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3 3.5 0 6 4 4 8-2.5 4.5-9.5 9-9.5 9z" /></svg>
        </div>
      </div>
      <div className="meta">
        <div>
          <div className="name">{name}<span className="it"> {italic}</span></div>
          <div className="code">{code}</div>
        </div>
        <div className="price">{price}</div>
      </div>
    </div>
  );
}

// Product fixtures — 4 items per category, using our real images rotated
const CATS = {
  classic: [
    { name: "Amber", italic: "", price: "1 600 Kč", code: "KV-001", img: IMG.wedding, badge: "Nová" },
    { name: "Luna", italic: "mini", price: "1 200 Kč", code: "KV-002", img: IMG.boxGold },
    { name: "Ivy", italic: "", price: "1 800 Kč", code: "KV-003", img: IMG.peach },
    { name: "Paulina", italic: "", price: "1 400 Kč", code: "KV-004", img: IMG.b2 }
  ],
  signature: [
    { name: "Vesna", italic: "signature", price: "2 400 Kč", code: "KV-011", img: IMG.peach },
    { name: "Sofia", italic: "", price: "1 800 Kč", code: "KV-012", img: IMG.b2 },
    { name: "Nadia", italic: "signature", price: "2 100 Kč", code: "KV-013", img: IMG.wedding, badge: "Bestseller" },
    { name: "Olea", italic: "", price: "2 500 Kč", code: "KV-014", img: IMG.premium }
  ],
  premium: [
    { name: "Luna", italic: "premium", price: "3 200 Kč", code: "KV-021", img: IMG.premium, badge: "Hero" },
    { name: "Aurora", italic: "", price: "3 800 Kč", code: "KV-022", img: IMG.boxGold },
    { name: "Selene", italic: "premium", price: "3 400 Kč", code: "KV-023", img: IMG.peach },
    { name: "Isolde", italic: "", price: "3 600 Kč", code: "KV-024", img: IMG.wedding }
  ],
  wedding: [
    { name: "Klára", italic: "bridal", price: "Na míru", code: "KV-W01", img: IMG.premium },
    { name: "Belle", italic: "bridal", price: "Na míru", code: "KV-W02", img: IMG.wedding },
    { name: "Flora", italic: "arch", price: "od 12 000", code: "KV-W03", img: IMG.boxGold },
    { name: "Élise", italic: "bridal", price: "Na míru", code: "KV-W04", img: IMG.peach }
  ],
  event: [
    { name: "Maison", italic: "centerpiece", price: "od 2 800", code: "KV-E01", img: IMG.boxGold },
    { name: "Velvet", italic: "installation", price: "od 8 000", code: "KV-E02", img: IMG.peach },
    { name: "Praha", italic: "opening", price: "Na míru", code: "KV-E03", img: IMG.premium },
    { name: "Jardin", italic: "runner", price: "od 4 500", code: "KV-E04", img: IMG.b2 }
  ]
};

function Shop({ lang, go }) {
  const t = window.STRINGS[lang].shop;
  const [filter, setFilter] = React.useState(0);
  const [open, setOpen] = React.useState(null);
  const showCats = filter === 0 ? t.categories : [t.categories[filter - 1]];

  return (
    <div className="page">
      <section className="page-hero wrap">
        <div className="eb">
          <span className="line"></span>
          <span className="eyebrow">{t.eb}</span>
        </div>
        <h1 className="display">{t.t1} <span className="em italic" style={{ color: "var(--plum)", fontWeight: 300 }}>{t.t2}</span></h1>
        <p className="lede">{t.lede}</p>

        <div className="filters">
          <span className="lb">{t.filterLb}</span>
          {t.chips.map((c, i) => (
            <button className={"chip" + (filter === i ? " active" : "")} key={i} onClick={() => setFilter(i)}>{c}</button>
          ))}
        </div>
      </section>

      {showCats.map((c, idx) => {
        const products = CATS[c.id] || [];
        return (
          <section className="category wrap" key={c.id}>
            <div className="cat-hd">
              <div className="lft">
                <div className="range">
                  <span className="dots"><span className="d"></span><span className="d"></span><span className="d"></span></span>
                  <span className="eyebrow">{c.range}</span>
                </div>
                <h2 className="title">{c.title1} <span className="em">{c.title2}</span></h2>
                <p className="desc">{c.desc}</p>
              </div>
              <div className="cta">
                <a className="hbtn" href="tel:+420703342207">{t.orderCta}</a>
                <a className="hbtn filled" href="https://wa.me/420703342207" target="_blank" rel="noreferrer">{t.whatsappCta}</a>
              </div>
            </div>
            <div className="prod-grid">
              {products.map((p, i) => (
                <ShopProduct key={i} {...p} onOpen={() => setOpen({ ...p, cat: c })} />
              ))}
            </div>
          </section>
        );
      })}

      {open && (
        <div className="lightbox open" onClick={() => setOpen(null)}>
          <div className="inner" onClick={e => e.stopPropagation()}>
            <img src={open.img} alt={open.name} />
            <div className="info">
              <div>
                <div className="eb">{open.cat.range}</div>
                <h3>{open.name} <span style={{ fontStyle: "italic", color: "var(--plum-soft)", fontWeight: 300 }}>{open.italic}</span></h3>
              </div>
              <div className="price">{open.price}</div>
              <div className="desc">Ručně vázaná kytice z čerstvých sezónních květin. Každá kytice je originál, drobné odchylky od fotografie jsou přirozené.</div>
              <div className="specs">
                <div><div className="lb">Kód</div><div className="vl">{open.code}</div></div>
                <div><div className="lb">Velikost</div><div className="vl">M · 45 cm</div></div>
                <div><div className="lb">Doručení</div><div className="vl">2 hodiny</div></div>
                <div><div className="lb">Kategorie</div><div className="vl">{open.cat.title1}</div></div>
              </div>
              <div className="ord">
                <a className="btn-ord primary" href="tel:+420703342207">Objednat telefonem · +420 703 342 207</a>
                <a className="btn-ord wh" href="https://wa.me/420703342207" target="_blank" rel="noreferrer">WhatsApp — rychlá odpověď</a>
                <a className="btn-ord out" onClick={() => { setOpen(null); go("contact"); }}>Formulář poptávky</a>
              </div>
            </div>
            <button className="close" onClick={() => setOpen(null)}>×</button>
          </div>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { Shop });
