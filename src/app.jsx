// ===== App — routing + state =====

function App() {
  const [lang, setLang] = React.useState(() => {
    try { return localStorage.getItem("kviten_lang") || "cs"; } catch (e) { return "cs"; }
  });
  const [route, setRoute] = React.useState(() => {
    try { return localStorage.getItem("kviten_route") || "home"; } catch (e) { return "home"; }
  });

  React.useEffect(() => {
    try { localStorage.setItem("kviten_lang", lang); } catch (e) {}
    document.documentElement.lang = lang;
  }, [lang]);

  React.useEffect(() => {
    try { localStorage.setItem("kviten_route", route); } catch (e) {}
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [route]);

  const go = (r) => setRoute(r);

  const page = route === "shop" ? <window.Shop lang={lang} go={go} key={"shop-" + lang} />
    : route === "dekor" ? <window.Dekor lang={lang} go={go} key={"dekor-" + lang} />
    : route === "eventy" ? <window.Eventy lang={lang} go={go} key={"eventy-" + lang} />
    : route === "about" ? <window.About lang={lang} go={go} key={"about-" + lang} />
    : route === "contact" ? <window.Contact lang={lang} go={go} key={"contact-" + lang} />
    : <window.Home lang={lang} go={go} key={"home-" + lang} />;

  return (
    <div data-screen-label={"Kviten · " + route}>
      <window.Header lang={lang} setLang={setLang} route={route} go={go} />
      {page}
      <window.Footer lang={lang} go={go} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
