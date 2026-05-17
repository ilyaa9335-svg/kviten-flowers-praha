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
    { name: "Blossom", italic: "", price: "1 900 Kč", code: "FB-001", img: IMG.peach, badge: "Nová" },
    { name: "Rosé", italic: "mini", price: "1 500 Kč", code: "FB-002", img: IMG.b1 },
    { name: "Lila", italic: "", price: "2 200 Kč", code: "FB-003", img: IMG.boxPink },
    { name: "Bella", italic: "", price: "2 800 Kč", code: "FB-004", img: IMG.b2 }
  ],
  signature: [
    { name: "Hydrangea", italic: "dream", price: "3 500 Kč", code: "FB-011", img: IMG.premium, badge: "Bestseller" },
    { name: "Peony", italic: "cloud", price: "4 200 Kč", code: "FB-012", img: IMG.boxGold },
    { name: "Aurora", italic: "signature", price: "3 800 Kč", code: "FB-013", img: IMG.wedding },
    { name: "Lavender", italic: "mix", price: "4 500 Kč", code: "FB-014", img: IMG.b2 }
  ],
  premium: [
    { name: "Grand", italic: "peony", price: "6 500 Kč", code: "FB-021", img: IMG.boxGold, badge: "Hero" },
    { name: "Royal", italic: "hydrangea", price: "7 200 Kč", code: "FB-022", img: IMG.premium },
    { name: "Luxe", italic: "garden", price: "8 500 Kč", code: "FB-023", img: IMG.peach },
    { name: "Imperial", italic: "roses", price: "9 000 Kč", code: "FB-024", img: IMG.b1 }
  ],
  wedding: [
    { name: "Bridal", italic: "classic", price: "Na míru", code: "FB-W01", img: IMG.wedding },
    { name: "Ceremony", italic: "arch", price: "od 15 000", code: "FB-W02", img: IMG.premium },
    { name: "Table", italic: "runner", price: "od 8 000", code: "FB-W03", img: IMG.boxGold },
    { name: "Garden", italic: "bridal", price: "Na míru", code: "FB-W04", img: IMG.peach }
  ],
  event: [
    { name: "Birthday", italic: "luxe", price: "od 3 500", code: "FB-E01", img: IMG.b1 },
    { name: "Corporate", italic: "gift", price: "od 5 000", code: "FB-E02", img: IMG.boxPink },
    { name: "Anniversary", italic: "grand", price: "Na míru", code: "FB-E03", img: IMG.premium },
    { name: "Thank You", italic: "bouquet", price: "od 2 500", code: "FB-E04", img: IMG.wedding }
  ]
};

function Shop({ lang, go, addToCart }) {
  const t = window.STRINGS[lang].shop;
  const [filter, setFilter] = React.useState(0);
  const [open, setOpen] = React.useState(null);
  const [added, setAdded] = React.useState(false);

  const handleAddToCart = (product) => {
    if (addToCart) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };
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
              <div className="desc">{lang === "cs" ? "Prémiová kytice z čerstvých sezónních květin. Každá kytice je originál." : lang === "uk" ? "Преміальний букет зі свіжих сезонних квітів. Кожен букет — оригінал." : lang === "ru" ? "Премиальный букет из свежих сезонных цветов. Каждый букет — оригинал." : "Premium bouquet from fresh seasonal flowers. Each bouquet is unique."}</div>
              <div className="specs">
                <div><div className="lb">Kód</div><div className="vl">{open.code}</div></div>
                <div><div className="lb">{lang === "cs" ? "Velikost" : "Size"}</div><div className="vl">M · 45 cm</div></div>
                <div><div className="lb">{lang === "cs" ? "Doručení" : "Delivery"}</div><div className="vl">{lang === "cs" ? "2 hodiny" : "2 hours"}</div></div>
                <div><div className="lb">Kategorie</div><div className="vl">{open.cat.title1}</div></div>
              </div>
              <div className="ord">
                <button className={"btn-ord btn-add-cart" + (added ? " added" : "")} onClick={() => handleAddToCart(open)}>
                  {added ? (lang === "cs" ? "✓ Přidáno do košíku" : "✓ Added to cart") : (lang === "cs" ? "Přidat do košíku" : "Add to cart")}
                </button>
                <a className="btn-ord out" onClick={() => { setOpen(null); go("contact"); }}>{lang === "cs" ? "Formulář poptávky" : lang === "uk" ? "Форма запиту" : lang === "ru" ? "Форма запроса" : "Enquiry form"}</a>
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
