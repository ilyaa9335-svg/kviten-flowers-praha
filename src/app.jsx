// ===== App — routing + state =====

function App() {
  const [lang, setLang] = React.useState(() => {
    try { return localStorage.getItem("kvitka_lang") || "cs"; } catch (e) { return "cs"; }
  });
  const [route, setRoute] = React.useState("home");
  const [cart, setCart] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);

  React.useEffect(() => {
    try { localStorage.setItem("kvitka_lang", lang); } catch (e) {}
    document.documentElement.lang = lang;
  }, [lang]);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [route]);

  const go = (r) => setRoute(r);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.code === product.code);
      if (existing) return prev.map(i => i.code === product.code ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (code) => setCart(prev => prev.filter(i => i.code !== code));

  const page = route === "shop" ? <window.Shop lang={lang} go={go} addToCart={addToCart} key={"shop-" + lang} />
    : route === "dekor" ? <window.Dekor lang={lang} go={go} key={"dekor-" + lang} />
    : route === "eventy" ? <window.Eventy lang={lang} go={go} key={"eventy-" + lang} />
    : route === "about" ? <window.About lang={lang} go={go} key={"about-" + lang} />
    : route === "contact" ? <window.Contact lang={lang} go={go} key={"contact-" + lang} />
    : <window.Home lang={lang} go={go} key={"home-" + lang} />;

  return (
    <div data-screen-label={"Kvitka Boutique · " + route}>
      <window.Header lang={lang} setLang={setLang} route={route} go={go} cart={cart} cartOpen={cartOpen} setCartOpen={setCartOpen} removeFromCart={removeFromCart} />
      {page}
      <window.Footer lang={lang} go={go} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
