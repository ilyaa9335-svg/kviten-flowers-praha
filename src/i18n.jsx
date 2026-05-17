// ===== Kvitka Boutique i18n — CZ / EN / RU / UK =====
const STRINGS = {
  cs: {
    nav: { home: "Domů", shop: "Květiny", dekor: "Svatby", eventy: "Příležitosti", about: "O nás", contact: "Kontakt" },
    top: { loc: "Plzeňská 1282/105 · Praha 5-Košíře", call: "Zavolejte", open: "Otevřeno", until: "do 19:00" },
    cta: { order: "Objednat", whatsapp: "WhatsApp", call: "Zavolat", enquire: "Poptávka", book: "Rezervovat" },
    hero: {
      eyebrow: "Prémiové kytice v Praze",
      title1: "Prémiové",
      title2: "kytice",
      amp: "&",
      title3: "květiny",
      title4: "pro okamžiky",
      lede: "Prémiové kytice z hortenzií, pivoněk a růží. Každý den čerstvé květy z Holandska, Itálie a Ekvádoru. Rozvoz po celé Praze.",
      live: "Dnes odesíláme",
      featured: "Kytice dne",
      featuredName: "Luna",
      kpis: [
        { n: "500", l: "Sledujících" },
        { n: "2h", l: "Rozvoz Praha" },
        { n: "2023", l: "Od roku" }
      ],
      marquee: ["Čerstvé květy denně", "Svatební kytice", "Prémiové kytice", "Rozvoz Praha · 2 hodiny", "Hortenzie & pivoňky", "Od roku 2023"]
    },
    services: {
      n: "01",
      title1: "Služby",
      title2: "pro každou příležitost",
      side: "Od prémiových kytic po svatební floristiku a rozvoz po Praze.",
      items: [
        { n: "I", name: "Prémiové\nkytice", desc: "Sezónní kompozice od 1 500 Kč. Hortenzie, pivoňky, růže — navrženy na míru vašemu okamžiku.", cta: "Do obchodu" },
        { n: "II", name: "Svatební\nkytice", desc: "Svatební kytice, butoniéry, květinové doplňky. Konzultace zdarma.", cta: "Rezervovat" },
        { n: "III", name: "Rozvoz\npo Praze", desc: "Kurýr do 2 hodin. Anonymní doručení, karta se zprávou, fotografie předání.", cta: "Objednat" },
        { n: "IV", name: "Dárkové\nbalení", desc: "Elegantní krabice, dárkové sety a květinové boxy pro každou příležitost.", cta: "Poptávka" }
      ]
    },
    gallery: {
      n: "02",
      title1: "Vybrané",
      title2: "kompozice",
      side: "Malý výběr z posledních zakázek. Každá kytice je originál.",
      items: [
        { cap: "Blossom · 1 900 Kč" },
        { cap: "Hydrangea · 3 500 Kč" },
        { cap: "Aurora · 3 800 Kč" },
        { cap: "Grand · 6 500 Kč" },
        { cap: "Peony · 4 200 Kč" },
        { cap: "Lavender · 4 500 Kč" }
      ]
    },
    quote: {
      eyebrow: "Manifest",
      text1: "Každá kytice",
      text2: "je dopis",
      text3: "bez slov.",
      text4: "Skládáme je s péčí, která nepotřebuje překlad.",
      att: "Kvitka Boutique · Premium Bouquets · Praha"
    },
    ig: { title: "Na Instagramu", handle: "@kvitka_boutique_prague", followers: "500 sledujících", cta: "Sledovat", hover: "Zobrazit" },
    foot: {
      hello: "Dobrý den",
      tagline: "Prémiové květinářství na Plzeňské v Praze 9. Čerstvé kytice, hortenzie, pivoňky a svatební floristika.",
      visit: "Navštivte nás",
      address: "Plzeňská 1282/105, Praha 5\nKošíře",
      hours: "Otevírací doba",
      hoursRows: [
        ["Po–Pá", "09:00 – 19:00"],
        ["Sobota", "10:00 – 18:00"],
        ["Neděle", "10:00 – 16:00"]
      ],
      contact: "Kontakt",
      languages: "Mluvíme česky, anglicky, ukrajinsky, rusky.",
      copy: "© 2026 Kvitka Boutique Praha",
      built: "Vyrobeno s láskou v Praze"
    },
    shop: {
      eb: "Obchod · Jaro / Léto 2026",
      t1: "Naše",
      t2: "kolekce",
      lede: "Kytice na objednávku. Zaměřte se na cenové rozpětí, nebo nás kontaktujte pro zcela autorský návrh.",
      filterLb: "Kategorie",
      chips: ["Vše", "1 500–3 000", "3 000–5 000", "5 000–9 000", "Svatba", "Příležitost"],
      orderCta: "Objednat telefonem",
      whatsappCta: "Napsat na WhatsApp",
      categories: [
        {
          id: "classic",
          range: "1 500 – 3 000 Kč",
          title1: "Každodenní",
          title2: "půvab",
          desc: "Elegantní kytice s důrazem na jednu hlavní květinu a sezónní zeleň. Ideální pro hosty, pozornost nebo ranní gesto."
        },
        {
          id: "signature",
          range: "3 000 – 5 000 Kč",
          title1: "Autorské",
          title2: "kytice",
          desc: "Signature kompozice floristky. Bohatší kytice z hortenzií, pivoněk a růží s romantickým charakterem."
        },
        {
          id: "premium",
          range: "5 000 – 9 000 Kč",
          title1: "Premium",
          title2: "kolekce",
          desc: "Luxusní velké kytice pro výjimečné okamžiky. Prémiové květy, ručně zavázaná mašle, podepsaná karta."
        },
        {
          id: "wedding",
          range: "Na míru · od 8 000 Kč",
          title1: "Svatební",
          title2: "floristika",
          desc: "Svatební kytice, boutonniéry, květinové doplňky. Konzultace zdarma."
        },
        {
          id: "event",
          range: "Na míru · od 5 000 Kč",
          title1: "Zvláštní",
          title2: "příležitosti",
          desc: "Narozeniny, výročí, firemní dary. Prémiové kytice a květinové boxy na míru."
        }
      ]
    },
    about: {
      eb: "O nás · Od roku 2023",
      t1: "Květiny",
      t2: "jsou",
      t3: "náš mateřský jazyk",
      lead1: "Kvitka Boutique je pražské květinářství, které vzniklo z lásky k ukrajinské tradici květinářství",
      leadEm: "a českému smyslu pro detail.",
      lead2: "Naše kytice vyprávějí tiché příběhy — nenechávají po sobě slova, ale pocit.",
      body1: "Otevřeli jsme na Plzeňské v Praze 9, nedaleko metra Anděl, s vizí přinést prémiové kytice do každodenního života. Hortenzie, pivoňky, růže — vážeme každou kytici sami s důrazem na kvalitu a čerstvost.",
      body2: "Nakupujeme přímo z aukcí v Aalsmeer v Nizozemsku, doplňujeme italskou zelení a ekvádorskými růžemi. Co nedostaneme čerstvé ráno, toho večer neprodáme.",
      body3: "Pracujeme česky, anglicky, ukrajinsky a rusky. Přijďte na kávu — poradíme vám přesně to, co hledáte.",
      values: [
        { ico: "✻", t: "Každý den čerstvé", p: "Květy přebíráme každé ráno v 6:30. Co se neprodá do večera druhého dne, věnujeme nebo kompostujeme." },
        { ico: "❖", t: "Rozvoz po Praze", p: "Kurýr v centru do 2 hodin, vnější čtvrti do 3. Doručení s fotografií předání." },
        { ico: "✺", t: "Na míru", p: "Každá kytice je navržena pro konkrétního člověka a okamžik. Žádné předem hotové kytice z ledničky." }
      ],
      tlTitle1: "Naše",
      tlTitle2: "cesta",
      timeline: [
        { yr: "2023", evt: "Otevření květinářství", note: "Nový prostor na Plzeňské v Praze 9, nedaleko metra Anděl.", loc: "Plzeňská 1282/105" },
        { yr: "2024", evt: "První svatba", note: "Svatební kytice a květinové doplňky — začátek svatebního směru.", loc: "Praha" },
        { yr: "2025", evt: "Růst a rozvoj", note: "Rozšíření sortimentu o prémiové hortenzie, pivoňky a dárkové boxy.", loc: "Praha 5-Košíře" },
        { yr: "2026", evt: "500 na Instagramu", note: "Komunita zákazníků a milovníků květin — inspirace napříč Prahou.", loc: "@kvitka_boutique_prague" }
      ]
    },
    contact: {
      eb: "Kontakt · Napište nám",
      t1: "Pojďme",
      t2: "vaši kytici",
      t3: "uvést k životu",
      lede: "Odpovídáme obvykle do 30 minut během otevírací doby. Pro urgentní doručení dnes zavolejte přímo.",
      phoneLb: "Telefon",
      phoneSub: "Odpovíme i v Czech, English, Русский, Українська.",
      waLb: "WhatsApp",
      waSub: "Fotky referencí, zprávy, hlasové zprávy.",
      emailLb: "E-mail",
      emailSub: "Pro poptávky svateb a zvláštních příležitostí.",
      addressLb: "Adresa",
      addressSub: "Nejbližší metro B · Anděl · 5 min pěšky.",
      hoursLb: "Otevírací doba",
      igLb: "Instagram",
      langLb: "Jazyky",
      langSub: "Česky · English · Українська · Русский",
      form: {
        title: "Formulář poptávky",
        name: "Jméno", email: "E-mail", phone: "Telefon",
        occ: "Příležitost",
        occOpts: ["Kytice", "Svatba", "Dárkový box", "Zvláštní příležitost", "Jiné"],
        budget: "Rozpočet",
        budgetOpts: ["Do 3 000 Kč", "3–5 000 Kč", "5–9 000 Kč", "9 000+ Kč"],
        date: "Datum",
        msg: "Zpráva",
        msgPh: "Řekněte nám o vašem okamžiku — pro koho, jaký styl, barvy, pocit…",
        submit: "Odeslat poptávku",
        note: "Odesláním souhlasíte se zpracováním údajů pro účely odpovědi na poptávku.",
        sent1: "Děkujeme!",
        sent2: "Dostali jsme vaši zprávu. Ozveme se vám do 30 minut během otevírací doby — obvykle dříve."
      },
      mapTitle: "Navštivte květinářství",
      mapDesc: "Přijďte ochutnat kávu a poradit se. V pondělky máme nejvíce čerstvých dodávek."
    },
    dekor: {
      eb: "Svatby · Svatební floristika",
      t1: "Svatební",
      t2: "květiny",
      t3: "pro váš den",
      lede: "Svatební kytice a květinové doplňky. Pracujeme s hortenziemi, pivoňkami, růžemi a signature paletou. Konzultace zdarma.",
      tag: "Praha · Svatby",
      captionEb: "Svatební kytice",
      captionTitle: "Plzeňská · Praha 5-Košíře",
      captionDesc: "Svatební kytice z hortenzií a pivoněk — vytvořeno s láskou.",
      leadEm1: "Svatební květiny nejsou jen dekorace —",
      leadEmHighlight: "jsou součástí",
      leadEm2: "vašeho příběhu.",
      body1: "Každou svatební kytici navrhujeme od nuly pro váš konkrétní den. Začínáme konzultací — v našem květinářství nebo online — a končíme u dokonalé kytice ve vašich rukou.",
      body2: "Pracujeme s nevěstami po celé Praze. Nabízíme svatební kytice, butoniéry a květinové doplňky s důrazem na kvalitu a čerstvost.",
      servicesTitle1: "Co",
      servicesTitle2: "navrhujeme",
      servicesSide: "Od svatební kytice po kompletní květinové doplňky.",
      services: [
        { ico: "✻", t: "Svatební kytice", p: "Svatební kytice z prémiových květin — hortenzie, pivoňky, růže, butoniéry." },
        { ico: "❖", t: "Květinové doplňky", p: "Butoniéry, věnečky, květinové náramky a ozdoby do vlasů." },
        { ico: "✺", t: "Konzultace", p: "Bezplatná konzultace ke stylu, paletě a výběru květin pro váš svatební den." }
      ],
      tlTitle1: "Jak",
      tlTitle2: "to funguje",
      timeline: [
        { yr: "01", evt: "Konzultace", note: "Krátký hovor nebo setkání v květinářství. Styl, paleta, rozpočet, termín.", loc: "60 min" },
        { yr: "02", evt: "Návrh & nabídka", note: "Moodboard, paleta, seznam kompozic a přesná cenová nabídka.", loc: "3–5 dní" },
        { yr: "03", evt: "Realizace", note: "Den svatby: příprava kytice, kontrola kvality, předání.", loc: "V den svatby" }
      ],
      ctaPrimary: "Poptávka svatební kytice",
      ctaSecondary: "WhatsApp konzultace"
    },
    eventy: {
      eb: "Příležitosti · Dárky · Oslavy",
      t1: "Zvláštní",
      t2: "příležitosti",
      t3: "& momenty",
      lede: "Narozeniny, výročí, firemní dary a soukromé oslavy. Prémiové kytice a květinové boxy pro každý zvláštní okamžik.",
      tag: "Praha · Příležitosti",
      captionEb: "Prémiová kytice",
      captionTitle: "Dárkový box",
      captionDesc: "Prémiová kytice z hortenzií a pivoněk v elegantním balení.",
      leadEm1: "Každý okamžik si zaslouží",
      leadEmHighlight: "výjimečné květiny",
      leadEm2: "— vytváříme kytice, které promluví za vás.",
      body1: "Prémiové kytice pro zvláštní příležitosti jsou naší specializací. Hortenzie, pivoňky, růže — vše čerstvé a vybrané s péčí. Nabízíme také elegantní dárkové boxy.",
      body2: "Doručujeme po celé Praze do 2 hodin. Anonymní doručení, osobní kartička, fotografie předání.",
      servicesTitle1: "Typy",
      servicesTitle2: "příležitostí",
      servicesSide: "Každá kytice je originál. Nabídky níže slouží jako inspirace.",
      services: [
        { ico: "✻", t: "Narozeniny & výročí", p: "Prémiové kytice pro oslavu — hortenzie, pivoňky, růže v elegantním balení." },
        { ico: "❖", t: "Firemní dary", p: "Květinové boxy a kytice pro obchodní partnery, zaměstnance a klienty." },
        { ico: "✺", t: "Dárkové boxy", p: "Luxusní květinové boxy s čokoládou, svíčkami nebo vínem. Ideální dárek." }
      ],
      kpis: [
        { n: "184", l: "Příspěvků na IG" },
        { n: "2 h", l: "Rozvoz Praha" },
        { n: "48 h", l: "Od poptávky k návrhu" }
      ],
      ctaPrimary: "Poptávka kytice",
      ctaSecondary: "Napsat na WhatsApp"
    }
  },

  en: {
    nav: { home: "Home", shop: "Flowers", dekor: "Weddings", eventy: "Occasions", about: "About", contact: "Contact" },
    top: { loc: "Plzeňská 1282/105 · Praha 5-Košíře", call: "Call us", open: "Open", until: "until 19:00" },
    cta: { order: "Order", whatsapp: "WhatsApp", call: "Call", enquire: "Enquire", book: "Book" },
    hero: {
      eyebrow: "Premium bouquets in Prague",
      title1: "Premium",
      title2: "bouquets",
      amp: "&",
      title3: "flowers",
      title4: "for moments",
      lede: "Premium bouquets featuring hydrangeas, peonies and roses. Fresh stems daily from Holland, Italy, Ecuador. City-wide delivery in Prague.",
      live: "Shipping today",
      featured: "Bouquet of the day",
      featuredName: "Luna",
      kpis: [
        { n: "500", l: "Followers" },
        { n: "2h", l: "Prague delivery" },
        { n: "2023", l: "Since" }
      ],
      marquee: ["Fresh flowers daily", "Wedding bouquets", "Premium bouquets", "Prague delivery · 2 hours", "Hydrangeas & peonies", "Since 2023"]
    },
    services: {
      n: "01",
      title1: "Services",
      title2: "for every occasion",
      side: "From premium bouquets to wedding florals and Prague-wide delivery.",
      items: [
        { n: "I", name: "Premium\nbouquets", desc: "Seasonal compositions from 1,500 CZK. Hydrangeas, peonies, roses — designed for your moment.", cta: "Shop" },
        { n: "II", name: "Wedding\nbouquets", desc: "Bridal bouquets, boutonnières, floral accessories. Free consultation.", cta: "Book" },
        { n: "III", name: "Prague\ndelivery", desc: "Courier within 2 hours. Anonymous delivery, message card, handover photo.", cta: "Order" },
        { n: "IV", name: "Gift\nboxes", desc: "Elegant flower boxes, gift sets and floral arrangements for every occasion.", cta: "Enquire" }
      ]
    },
    gallery: {
      n: "02",
      title1: "Selected",
      title2: "compositions",
      side: "A small selection from recent orders. Every bouquet is an original.",
      items: [
        { cap: "Blossom · 1,900 CZK" },
        { cap: "Hydrangea · 3,500 CZK" },
        { cap: "Aurora · 3,800 CZK" },
        { cap: "Grand · 6,500 CZK" },
        { cap: "Peony · 4,200 CZK" },
        { cap: "Lavender · 4,500 CZK" }
      ]
    },
    quote: {
      eyebrow: "Manifesto",
      text1: "Every bouquet",
      text2: "is a letter",
      text3: "without words.",
      text4: "We write them with a care that needs no translation.",
      att: "Kvitka Boutique · Premium Bouquets · Prague"
    },
    ig: { title: "On Instagram", handle: "@kvitka_boutique_prague", followers: "500 followers", cta: "Follow", hover: "View" },
    foot: {
      hello: "Hello",
      tagline: "A premium flower boutique on Plzeňská in Praha 5-Košíře. Fresh bouquets, hydrangeas, peonies and wedding florals.",
      visit: "Visit us",
      address: "Plzeňská 1282/105, Praha 5\nKošíře",
      hours: "Opening hours",
      hoursRows: [
        ["Mon–Fri", "09:00 – 19:00"],
        ["Saturday", "10:00 – 18:00"],
        ["Sunday", "10:00 – 16:00"]
      ],
      contact: "Contact",
      languages: "We speak Czech, English, Ukrainian, Russian.",
      copy: "© 2026 Kvitka Boutique Praha",
      built: "Made with love in Prague"
    },
    shop: {
      eb: "Shop · Spring / Summer 2026",
      t1: "Our",
      t2: "collection",
      lede: "Bouquets made to order. Browse by price range, or reach out for a fully custom design.",
      filterLb: "Category",
      chips: ["All", "1,500–3,000", "3,000–5,000", "5,000–9,000", "Wedding", "Occasion"],
      orderCta: "Order by phone",
      whatsappCta: "Message on WhatsApp",
      categories: [
        { id: "classic", range: "1,500 – 3,000 CZK", title1: "Everyday", title2: "charm", desc: "Elegant bouquets focused on a single hero bloom and seasonal greens. Perfect for a guest, a gesture, a morning note." },
        { id: "signature", range: "3,000 – 5,000 CZK", title1: "Signature", title2: "bouquets", desc: "The florist's signature compositions. Richer arrangements with hydrangeas, peonies and roses." },
        { id: "premium", range: "5,000 – 9,000 CZK", title1: "Premium", title2: "collection", desc: "Luxurious large bouquets for exceptional occasions. Premium stems, hand-tied ribbon, signed card." },
        { id: "wedding", range: "Custom · from 8,000 CZK", title1: "Wedding", title2: "florals", desc: "Bridal bouquets, boutonnières, floral accessories. Free consultation." },
        { id: "event", range: "Custom · from 5,000 CZK", title1: "Special", title2: "occasions", desc: "Birthdays, anniversaries, corporate gifts. Premium bouquets and flower boxes to order." }
      ]
    },
    about: {
      eb: "About · Since 2023",
      t1: "Flowers",
      t2: "are our",
      t3: "mother tongue",
      lead1: "Kvitka Boutique is a Prague flower boutique born from a love of Ukrainian floral craft",
      leadEm: "and a Czech sense of detail.",
      lead2: "Our bouquets tell quiet stories — they don't leave words behind, they leave a feeling.",
      body1: "We opened on Plzeňská in Praha 5-Košíře, near Anděl metro, with a vision to bring premium bouquets into everyday life. Hydrangeas, peonies, roses — we tie every bouquet ourselves with an emphasis on quality and freshness.",
      body2: "We buy directly from the Aalsmeer auctions in the Netherlands, complement with Italian greenery and Ecuadorian roses. What doesn't arrive fresh in the morning, we don't sell in the evening.",
      body3: "We work in Czech, English, Ukrainian and Russian. Come for a coffee — we'll help you find exactly what you're looking for.",
      values: [
        { ico: "✻", t: "Fresh every day", p: "Flowers arrive every morning at 6:30. What doesn't sell by the next evening is donated or composted." },
        { ico: "❖", t: "Prague delivery", p: "Courier to the centre in 2 hours, outer districts in 3. Delivery with handover photo." },
        { ico: "✺", t: "Bespoke", p: "Every bouquet is designed for a specific person and moment. No prefab bouquets from a cold case." }
      ],
      tlTitle1: "Our",
      tlTitle2: "journey",
      timeline: [
        { yr: "2023", evt: "Boutique opens", note: "A fresh space on Plzeňská in Praha 5-Košíře, near Anděl metro.", loc: "Plzeňská 1282/105" },
        { yr: "2024", evt: "First wedding", note: "Wedding bouquets and floral accessories — the start of our bridal line.", loc: "Prague" },
        { yr: "2025", evt: "Growth & expansion", note: "Expanding into premium hydrangeas, peonies and gift boxes.", loc: "Praha 5-Košíře" },
        { yr: "2026", evt: "500 on Instagram", note: "A community of flower lovers and clients — inspiration across Prague.", loc: "@kvitka_boutique_prague" }
      ]
    },
    contact: {
      eb: "Contact · Get in touch",
      t1: "Let's bring",
      t2: "your bouquet",
      t3: "to life",
      lede: "We usually reply within 30 minutes during opening hours. For same-day delivery, please call directly.",
      phoneLb: "Phone",
      phoneSub: "We answer in Czech, English, Русский, Українська.",
      waLb: "WhatsApp",
      waSub: "Reference photos, text, voice notes.",
      emailLb: "Email",
      emailSub: "For wedding and special occasion enquiries.",
      addressLb: "Address",
      addressSub: "Nearest metro B · Anděl · 5 min walk.",
      hoursLb: "Opening hours",
      igLb: "Instagram",
      langLb: "Languages",
      langSub: "Česky · English · Українська · Русский",
      form: {
        title: "Enquiry form",
        name: "Name", email: "Email", phone: "Phone",
        occ: "Occasion",
        occOpts: ["Bouquet", "Wedding", "Gift box", "Special occasion", "Other"],
        budget: "Budget",
        budgetOpts: ["Under 3,000 CZK", "3–5,000 CZK", "5–9,000 CZK", "9,000+ CZK"],
        date: "Date",
        msg: "Message",
        msgPh: "Tell us about the moment — who, what style, colours, feeling…",
        submit: "Send enquiry",
        note: "By sending you agree to the processing of your data for the purpose of responding to your enquiry.",
        sent1: "Thank you!",
        sent2: "We've received your message. We'll reply within 30 minutes during opening hours — usually sooner."
      },
      mapTitle: "Visit the boutique",
      mapDesc: "Come in for a coffee and a consultation. Mondays have the most fresh arrivals."
    },
    dekor: {
      eb: "Weddings · Wedding florals",
      t1: "Wedding",
      t2: "flowers",
      t3: "for your day",
      lede: "Wedding bouquets and floral accessories. We work with hydrangeas, peonies, roses and a signature palette. Free consultation.",
      tag: "Prague · Weddings",
      captionEb: "Wedding bouquet",
      captionTitle: "Plzeňská · Praha 5-Košíře",
      captionDesc: "Wedding bouquet of hydrangeas and peonies — crafted with love.",
      leadEm1: "Wedding flowers aren't just decoration —",
      leadEmHighlight: "they're part of",
      leadEm2: "your story.",
      body1: "Every wedding bouquet is designed from scratch for your specific day. We start with a consultation — at our boutique or online — and finish with the perfect bouquet in your hands.",
      body2: "We work with brides across Prague. We offer bridal bouquets, boutonnières and floral accessories with an emphasis on quality and freshness.",
      servicesTitle1: "What",
      servicesTitle2: "we design",
      servicesSide: "From a bridal bouquet to complete floral accessories.",
      services: [
        { ico: "✻", t: "Wedding bouquets", p: "Bridal bouquets from premium flowers — hydrangeas, peonies, roses, boutonnières." },
        { ico: "❖", t: "Floral accessories", p: "Boutonnières, flower crowns, floral bracelets and hair pieces." },
        { ico: "✺", t: "Consultation", p: "Free consultation on style, palette and flower selection for your wedding day." }
      ],
      tlTitle1: "How",
      tlTitle2: "it works",
      timeline: [
        { yr: "01", evt: "Consultation", note: "A short call or meeting at the boutique. Style, palette, budget, date.", loc: "60 min" },
        { yr: "02", evt: "Design & quote", note: "Moodboard, palette, composition list and precise pricing.", loc: "3–5 days" },
        { yr: "03", evt: "Delivery", note: "Wedding day: bouquet preparation, quality check, handover.", loc: "On the day" }
      ],
      ctaPrimary: "Enquire about wedding flowers",
      ctaSecondary: "WhatsApp consultation"
    },
    eventy: {
      eb: "Occasions · Gifts · Celebrations",
      t1: "Special",
      t2: "occasions",
      t3: "& moments",
      lede: "Birthdays, anniversaries, corporate gifts and private celebrations. Premium bouquets and flower boxes for every special moment.",
      tag: "Prague · Occasions",
      captionEb: "Premium bouquet",
      captionTitle: "Gift box",
      captionDesc: "Premium bouquet of hydrangeas and peonies in elegant packaging.",
      leadEm1: "Every moment deserves",
      leadEmHighlight: "exceptional flowers",
      leadEm2: "— we create bouquets that speak for you.",
      body1: "Premium bouquets for special occasions are our specialty. Hydrangeas, peonies, roses — all fresh and carefully selected. We also offer elegant gift boxes.",
      body2: "We deliver across Prague within 2 hours. Anonymous delivery, personal card, handover photo.",
      servicesTitle1: "Event",
      servicesTitle2: "types",
      servicesSide: "Every bouquet is one of a kind. The options below are a starting point.",
      services: [
        { ico: "✻", t: "Birthdays & anniversaries", p: "Premium bouquets for celebrations — hydrangeas, peonies, roses in elegant packaging." },
        { ico: "❖", t: "Corporate gifts", p: "Flower boxes and bouquets for business partners, employees and clients." },
        { ico: "✺", t: "Gift boxes", p: "Luxury flower boxes with chocolate, candles or wine. The perfect gift." }
      ],
      kpis: [
        { n: "184", l: "Posts on IG" },
        { n: "2 h", l: "Prague delivery" },
        { n: "48 h", l: "Enquiry to design" }
      ],
      ctaPrimary: "Enquire about a bouquet",
      ctaSecondary: "Message on WhatsApp"
    }
  },

  uk: {
    nav: { home: "Головна", shop: "Квіти", dekor: "Весілля", eventy: "Нагоди", about: "Про нас", contact: "Контакти" },
    top: { loc: "Plzeňská 1282/105 · Praha 5-Košíře", call: "Подзвоніть", open: "Відкрито", until: "до 19:00" },
    cta: { order: "Замовити", whatsapp: "WhatsApp", call: "Дзвінок", enquire: "Запит", book: "Бронювати" },
    hero: {
      eyebrow: "Преміальні букети у Празі",
      title1: "Преміальні",
      title2: "букети",
      amp: "&",
      title3: "квіти",
      title4: "для миттєвостей",
      lede: "Преміальні букети з гортензій, півоній та троянд. Свіжі квіти щодня з Голландії, Італії, Еквадору. Доставка по всій Празі.",
      live: "Сьогодні доставляємо",
      featured: "Букет дня",
      featuredName: "Луна",
      kpis: [
        { n: "500", l: "Підписників" },
        { n: "2 год", l: "Доставка Прага" },
        { n: "2023", l: "З року" }
      ],
      marquee: ["Свіжі квіти щодня", "Весільні букети", "Преміальні букети", "Доставка Прага · 2 години", "Гортензії & півонії", "З 2023 року"]
    },
    services: {
      n: "01", title1: "Послуги", title2: "для кожної нагоди",
      side: "Від преміальних букетів до весільної флористики та доставки по Празі.",
      items: [
        { n: "I", name: "Преміальні\nбукети", desc: "Сезонні композиції від 1 500 Kč. Гортензії, півонії, троянди — створені для вашої миті.", cta: "До крамниці" },
        { n: "II", name: "Весільні\nбукети", desc: "Весільні букети, бутоньєрки, квіткові аксесуари. Консультація безкоштовна.", cta: "Бронювати" },
        { n: "III", name: "Доставка\nПрагою", desc: "Кур'єр протягом 2 годин. Анонімна доставка, картка з повідомленням, фото вручення.", cta: "Замовити" },
        { n: "IV", name: "Подарункові\nбокси", desc: "Елегантні коробки, подарункові сети та квіткові бокси для кожної нагоди.", cta: "Запит" }
      ]
    },
    gallery: {
      n: "02", title1: "Вибрані", title2: "композиції",
      side: "Невелика добірка з нещодавніх замовлень. Кожен букет — оригінал.",
      items: [
        { cap: "Blossom · 1 900 Kč" }, { cap: "Hydrangea · 3 500 Kč" }, { cap: "Aurora · 3 800 Kč" },
        { cap: "Grand · 6 500 Kč" }, { cap: "Peony · 4 200 Kč" }, { cap: "Lavender · 4 500 Kč" }
      ]
    },
    quote: {
      eyebrow: "Маніфест",
      text1: "Кожен букет", text2: "— це лист", text3: "без слів.",
      text4: "Ми пишемо їх із турботою, що не потребує перекладу.",
      att: "Kvitka Boutique · Premium Bouquets · Прага"
    },
    ig: { title: "В Instagram", handle: "@kvitka_boutique_prague", followers: "500 підписників", cta: "Підписатися", hover: "Дивитись" },
    foot: {
      hello: "Вітаємо",
      tagline: "Преміальне квітникарство на Колбеновій у Празі 9. Свіжі букети, гортензії, півонії та весільна флористика.",
      visit: "Завітайте",
      address: "Plzeňská 1282/105, Praha 5\nKošíře",
      hours: "Години роботи",
      hoursRows: [["Пн–Пт", "09:00 – 19:00"], ["Субота", "10:00 – 18:00"], ["Неділя", "10:00 – 16:00"]],
      contact: "Контакти",
      languages: "Говоримо чеською, англійською, українською, російською.",
      copy: "© 2026 Kvitka Boutique Praha",
      built: "Зроблено з любов'ю у Празі"
    },
    shop: {
      eb: "Крамниця · Весна / Літо 2026",
      t1: "Наша", t2: "колекція",
      lede: "Букети на замовлення. Оберіть за ціновим діапазоном, або напишіть нам для повністю авторського дизайну.",
      filterLb: "Категорія",
      chips: ["Усі", "1 500–3 000", "3 000–5 000", "5 000–9 000", "Весілля", "Нагода"],
      orderCta: "Замовити по телефону",
      whatsappCta: "Написати на WhatsApp",
      categories: [
        { id: "classic", range: "1 500 – 3 000 Kč", title1: "Щоденна", title2: "краса", desc: "Елегантні букети з однією головною квіткою та сезонною зеленню. Ідеально для гостя, жесту, ранкової записки." },
        { id: "signature", range: "3 000 – 5 000 Kč", title1: "Авторські", title2: "букети", desc: "Підписні композиції флористки. Багатші букети з гортензій, півоній та троянд." },
        { id: "premium", range: "5 000 – 9 000 Kč", title1: "Преміум", title2: "колекція", desc: "Розкішні великі букети для виняткових моментів. Преміум квіти, ручна стрічка, підписана картка." },
        { id: "wedding", range: "На замовлення · від 8 000 Kč", title1: "Весільна", title2: "флористика", desc: "Весільні букети, бутоньєрки, квіткові аксесуари. Консультація безкоштовна." },
        { id: "event", range: "На замовлення · від 5 000 Kč", title1: "Особливі", title2: "нагоди", desc: "Дні народження, ювілеї, корпоративні подарунки. Преміальні букети та квіткові бокси на замовлення." }
      ]
    },
    about: {
      eb: "Про нас · З 2023 року",
      t1: "Квіти —", t2: "наша", t3: "рідна мова",
      lead1: "Kvitka Boutique — празьке квітникарство, народжене з любові до української квіткової традиції",
      leadEm: "та чеського відчуття деталі.",
      lead2: "Наші букети розповідають тихі історії — залишають не слова, а відчуття.",
      body1: "Ми відкрилися на Колбеновій у Празі 9, біля метро Височанська, з візією принести преміальні букети в повсякденне життя. Гортензії, півонії, троянди — в'яжемо кожен букет самі з акцентом на якість та свіжість.",
      body2: "Купуємо напряму з аукціонів в Аалсмері в Нідерландах, доповнюємо італійською зеленню та еквадорськими трояндами. Що не прибуває свіжим уранці — увечері не продаємо.",
      body3: "Працюємо чеською, англійською, українською та російською. Заходьте на каву — підкажемо саме те, що ви шукаєте.",
      values: [
        { ico: "✻", t: "Щодня свіжі", p: "Квіти прибувають щоранку о 6:30. Що не продалося до наступного вечора — віддаємо або компостуємо." },
        { ico: "❖", t: "Доставка Прагою", p: "Кур'єр до центру за 2 години, околиці за 3. Доставка з фото вручення." },
        { ico: "✺", t: "На замовлення", p: "Кожен букет розроблений для конкретної людини та моменту. Жодних готових букетів з холодильника." }
      ],
      tlTitle1: "Наш", tlTitle2: "шлях",
      timeline: [
        { yr: "2023", evt: "Відкриття квітникарства", note: "Новий простір на Колбеновій у Празі 9, біля метро Височанська.", loc: "Plzeňská 1282/105" },
        { yr: "2024", evt: "Перше весілля", note: "Весільні букети та квіткові аксесуари — початок весільного напрямку.", loc: "Прага" },
        { yr: "2025", evt: "Зростання та розвиток", note: "Розширення асортименту преміальними гортензіями, півоніями та подарунковими боксами.", loc: "Прага 9" },
        { yr: "2026", evt: "500 в Instagram", note: "Спільнота любителів квітів та клієнтів — натхнення по всій Празі.", loc: "@kvitka_boutique_prague" }
      ]
    },
    contact: {
      eb: "Контакти · Напишіть нам",
      t1: "Втілімо", t2: "ваш букет", t3: "у життя",
      lede: "Зазвичай відповідаємо протягом 30 хвилин у робочий час. Для доставки сьогодні телефонуйте напряму.",
      phoneLb: "Телефон", phoneSub: "Відповідаємо українською, English, Русский, Česky.",
      waLb: "WhatsApp", waSub: "Фото, повідомлення, голосові.",
      emailLb: "Email", emailSub: "Для запитів весіль та особливих нагод.",
      addressLb: "Адреса", addressSub: "Найближче метро B · Anděl · 5 хв пішки.",
      hoursLb: "Години роботи", igLb: "Instagram",
      langLb: "Мови", langSub: "Česky · English · Українська · Русский",
      form: {
        title: "Форма запиту", name: "Ім'я", email: "Email", phone: "Телефон",
        occ: "Нагода", occOpts: ["Букет", "Весілля", "Подарунковий бокс", "Особлива нагода", "Інше"],
        budget: "Бюджет", budgetOpts: ["До 3 000 Kč", "3–5 000 Kč", "5–9 000 Kč", "9 000+ Kč"],
        date: "Дата", msg: "Повідомлення",
        msgPh: "Розкажіть про вашу мить — для кого, який стиль, кольори, відчуття…",
        submit: "Надіслати запит",
        note: "Надсилаючи, ви погоджуєтесь з обробкою даних для відповіді на ваш запит.",
        sent1: "Дякуємо!",
        sent2: "Ми отримали ваше повідомлення. Відповімо протягом 30 хвилин у робочий час — зазвичай швидше."
      },
      mapTitle: "Завітайте до квітникарства",
      mapDesc: "Заходьте на каву та консультацію. У понеділок найбільше свіжих прибуттів."
    },
    dekor: {
      eb: "Весілля · Весільна флористика",
      t1: "Весільні",
      t2: "квіти",
      t3: "для вашого дня",
      lede: "Весільні букети та квіткові аксесуари. Працюємо з гортензіями, півоніями, трояндами і фірмовою палітрою. Консультація безкоштовна.",
      tag: "Прага · Весілля",
      captionEb: "Весільний букет",
      captionTitle: "Plzeňská · Прага 9",
      captionDesc: "Весільний букет з гортензій та півоній — створено з любов'ю.",
      leadEm1: "Весільні квіти — це не просто прикраса,",
      leadEmHighlight: "це частина",
      leadEm2: "вашої історії.",
      body1: "Кожен весільний букет ми розробляємо з нуля для вашого конкретного дня. Починаємо з консультації — у нашому квітникарстві або онлайн — і завершуємо ідеальним букетом у ваших руках.",
      body2: "Працюємо з нареченими по всій Празі. Пропонуємо весільні букети, бутоньєрки та квіткові аксесуари з акцентом на якість та свіжість.",
      servicesTitle1: "Що",
      servicesTitle2: "ми створюємо",
      servicesSide: "Від весільного букету до повних квіткових аксесуарів.",
      services: [
        { ico: "✻", t: "Весільні букети", p: "Весільні букети з преміальних квітів — гортензії, півонії, троянди, бутоньєрки." },
        { ico: "❖", t: "Квіткові аксесуари", p: "Бутоньєрки, віночки, квіткові браслети та прикраси для волосся." },
        { ico: "✺", t: "Консультація", p: "Безкоштовна консультація щодо стилю, палітри та вибору квітів для вашого весільного дня." }
      ],
      tlTitle1: "Як",
      tlTitle2: "це працює",
      timeline: [
        { yr: "01", evt: "Консультація", note: "Короткий дзвінок або зустріч у квітникарстві. Стиль, палітра, бюджет, дата.", loc: "60 хв" },
        { yr: "02", evt: "Дизайн & кошторис", note: "Мудборд, палітра, список композицій і точна ціна.", loc: "3–5 днів" },
        { yr: "03", evt: "Реалізація", note: "День весілля: підготовка букету, контроль якості, передача.", loc: "У день весілля" }
      ],
      ctaPrimary: "Запит весільних квітів",
      ctaSecondary: "Консультація у WhatsApp"
    },
    eventy: {
      eb: "Нагоди · Подарунки · Свята",
      t1: "Особливі",
      t2: "нагоди",
      t3: "& моменти",
      lede: "Дні народження, ювілеї, корпоративні подарунки та приватні свята. Преміальні букети та квіткові бокси для кожного особливого моменту.",
      tag: "Прага · Нагоди",
      captionEb: "Преміальний букет",
      captionTitle: "Подарунковий бокс",
      captionDesc: "Преміальний букет з гортензій та півоній в елегантному пакуванні.",
      leadEm1: "Кожен момент заслуговує",
      leadEmHighlight: "виняткових квітів",
      leadEm2: "— ми створюємо букети, що говорять за вас.",
      body1: "Преміальні букети для особливих нагод — наша спеціалізація. Гортензії, півонії, троянди — все свіже та відібране з любов'ю. Також пропонуємо елегантні подарункові бокси.",
      body2: "Доставляємо по всій Празі протягом 2 годин. Анонімна доставка, особиста картка, фото вручення.",
      servicesTitle1: "Типи",
      servicesTitle2: "нагод",
      servicesSide: "Кожен букет — оригінал. Пропозиції нижче — лише орієнтир.",
      services: [
        { ico: "✻", t: "Дні народження & ювілеї", p: "Преміальні букети для святкування — гортензії, півонії, троянди в елегантному пакуванні." },
        { ico: "❖", t: "Корпоративні подарунки", p: "Квіткові бокси та букети для бізнес-партнерів, співробітників та клієнтів." },
        { ico: "✺", t: "Подарункові бокси", p: "Розкішні квіткові бокси з шоколадом, свічками або вином. Ідеальний подарунок." }
      ],
      kpis: [
        { n: "184", l: "Постів в IG" },
        { n: "2 год", l: "Доставка Прага" },
        { n: "48 год", l: "Від запиту до дизайну" }
      ],
      ctaPrimary: "Запит букету",
      ctaSecondary: "Написати у WhatsApp"
    }
  },

  ru: {
    nav: { home: "Главная", shop: "Цветы", dekor: "Свадьбы", eventy: "Поводы", about: "О нас", contact: "Контакты" },
    top: { loc: "Plzeňská 1282/105 · Praha 5-Košíře", call: "Позвоните", open: "Открыто", until: "до 19:00" },
    cta: { order: "Заказать", whatsapp: "WhatsApp", call: "Звонок", enquire: "Запрос", book: "Бронировать" },
    hero: {
      eyebrow: "Премиальные букеты в Праге",
      title1: "Премиальные", title2: "букеты", amp: "&", title3: "цветы", title4: "для мгновений",
      lede: "Премиальные букеты из гортензий, пионов и роз. Свежие цветы ежедневно из Голландии, Италии, Эквадора. Доставка по всей Праге.",
      live: "Сегодня доставляем",
      featured: "Букет дня",
      featuredName: "Луна",
      kpis: [{ n: "500", l: "Подписчиков" }, { n: "2 ч", l: "Доставка Прага" }, { n: "2023", l: "С года" }],
      marquee: ["Свежие цветы ежедневно", "Свадебные букеты", "Премиальные букеты", "Доставка Прага · 2 часа", "Гортензии & пионы", "С 2023 года"]
    },
    services: {
      n: "01", title1: "Услуги", title2: "для каждого случая",
      side: "От премиальных букетов до свадебной флористики и доставки по Праге.",
      items: [
        { n: "I", name: "Премиальные\nбукеты", desc: "Сезонные композиции от 1 500 Kč. Гортензии, пионы, розы — созданы для вашего момента.", cta: "В магазин" },
        { n: "II", name: "Свадебные\nбукеты", desc: "Свадебные букеты, бутоньерки, цветочные аксессуары. Консультация бесплатно.", cta: "Бронировать" },
        { n: "III", name: "Доставка\nпо Праге", desc: "Курьер в течение 2 часов. Анонимная доставка, карточка, фото вручения.", cta: "Заказать" },
        { n: "IV", name: "Подарочные\nбоксы", desc: "Элегантные коробки, подарочные сеты и цветочные боксы для любого повода.", cta: "Запрос" }
      ]
    },
    gallery: {
      n: "02", title1: "Избранные", title2: "композиции",
      side: "Небольшая подборка из недавних заказов. Каждый букет — оригинал.",
      items: [
        { cap: "Blossom · 1 900 Kč" }, { cap: "Hydrangea · 3 500 Kč" }, { cap: "Aurora · 3 800 Kč" },
        { cap: "Grand · 6 500 Kč" }, { cap: "Peony · 4 200 Kč" }, { cap: "Lavender · 4 500 Kč" }
      ]
    },
    quote: {
      eyebrow: "Манифест",
      text1: "Каждый букет", text2: "— это письмо", text3: "без слов.",
      text4: "Мы пишем их с заботой, не нуждающейся в переводе.",
      att: "Kvitka Boutique · Premium Bouquets · Прага"
    },
    ig: { title: "В Instagram", handle: "@kvitka_boutique_prague", followers: "500 подписчиков", cta: "Подписаться", hover: "Смотреть" },
    foot: {
      hello: "Здравствуйте",
      tagline: "Премиальный цветочный бутик на Колбеновой в Праге 9. Свежие букеты, гортензии, пионы и свадебная флористика.",
      visit: "Посетите нас",
      address: "Plzeňská 1282/105, Praha 5\nKošíře",
      hours: "Часы работы",
      hoursRows: [["Пн–Пт", "09:00 – 19:00"], ["Суббота", "10:00 – 18:00"], ["Воскресенье", "10:00 – 16:00"]],
      contact: "Контакты",
      languages: "Говорим на чешском, английском, украинском, русском.",
      copy: "© 2026 Kvitka Boutique Praha",
      built: "Сделано с любовью в Праге"
    },
    shop: {
      eb: "Магазин · Весна / Лето 2026",
      t1: "Наша", t2: "коллекция",
      lede: "Букеты на заказ. Выбирайте по ценовому диапазону или напишите нам для полностью авторского дизайна.",
      filterLb: "Категория",
      chips: ["Все", "1 500–3 000", "3 000–5 000", "5 000–9 000", "Свадьба", "Повод"],
      orderCta: "Заказать по телефону",
      whatsappCta: "Написать в WhatsApp",
      categories: [
        { id: "classic", range: "1 500 – 3 000 Kč", title1: "Повседневная", title2: "прелесть", desc: "Элегантные букеты с одним главным цветком и сезонной зеленью. Идеально для гостя, жеста, утренней записки." },
        { id: "signature", range: "3 000 – 5 000 Kč", title1: "Авторские", title2: "букеты", desc: "Подписные композиции флориста. Более насыщенные букеты из гортензий, пионов и роз." },
        { id: "premium", range: "5 000 – 9 000 Kč", title1: "Премиум", title2: "коллекция", desc: "Роскошные крупные букеты для особых случаев. Премиум цветы, ручная лента, подписанная карточка." },
        { id: "wedding", range: "На заказ · от 8 000 Kč", title1: "Свадебная", title2: "флористика", desc: "Свадебные букеты, бутоньерки, цветочные аксессуары. Консультация бесплатно." },
        { id: "event", range: "На заказ · от 5 000 Kč", title1: "Особые", title2: "поводы", desc: "Дни рождения, юбилеи, корпоративные подарки. Премиальные букеты и цветочные боксы на заказ." }
      ]
    },
    about: {
      eb: "О нас · С 2023 года",
      t1: "Цветы —", t2: "наш", t3: "родной язык",
      lead1: "Kvitka Boutique — пражский цветочный бутик, рождённый из любви к украинской цветочной традиции",
      leadEm: "и чешскому чувству детали.",
      lead2: "Наши букеты рассказывают тихие истории — оставляют не слова, а ощущение.",
      body1: "Мы открылись на Колбеновой в Праге 9, недалеко от метро Высочанска, с видением привнести премиальные букеты в повседневную жизнь. Гортензии, пионы, розы — вяжем каждый букет сами с акцентом на качество и свежесть.",
      body2: "Покупаем напрямую с аукционов в Алсмере в Нидерландах, дополняем итальянской зеленью и эквадорскими розами. Что не приходит свежим утром, не продаем вечером.",
      body3: "Работаем на чешском, английском, украинском и русском. Заходите на кофе — подскажем именно то, что вы ищете.",
      values: [
        { ico: "✻", t: "Каждый день свежие", p: "Цветы приходят каждое утро в 6:30. Что не продалось к следующему вечеру — отдаем или компостируем." },
        { ico: "❖", t: "Доставка по Праге", p: "Курьер в центр за 2 часа, окраины за 3. Доставка с фото вручения." },
        { ico: "✺", t: "На заказ", p: "Каждый букет разработан для конкретного человека и момента. Никаких готовых букетов из холодильника." }
      ],
      tlTitle1: "Наш", tlTitle2: "путь",
      timeline: [
        { yr: "2023", evt: "Открытие бутика", note: "Новое пространство на Колбеновой в Праге 9, рядом с метро Высочанска.", loc: "Plzeňská 1282/105" },
        { yr: "2024", evt: "Первая свадьба", note: "Свадебные букеты и цветочные аксессуары — начало свадебного направления.", loc: "Прага" },
        { yr: "2025", evt: "Рост и развитие", note: "Расширение ассортимента премиальными гортензиями, пионами и подарочными боксами.", loc: "Прага 9" },
        { yr: "2026", evt: "500 в Instagram", note: "Сообщество любителей цветов и клиентов — вдохновение по всей Праге.", loc: "@kvitka_boutique_prague" }
      ]
    },
    contact: {
      eb: "Контакты · Напишите нам",
      t1: "Воплотим", t2: "ваш букет", t3: "в жизнь",
      lede: "Обычно отвечаем в течение 30 минут в рабочее время. Для доставки сегодня звоните напрямую.",
      phoneLb: "Телефон", phoneSub: "Отвечаем на русском, English, Українська, Česky.",
      waLb: "WhatsApp", waSub: "Фото, сообщения, голосовые.",
      emailLb: "Email", emailSub: "Для запросов свадеб и особых поводов.",
      addressLb: "Адрес", addressSub: "Ближайшее метро B · Anděl · 5 мин пешком.",
      hoursLb: "Часы работы", igLb: "Instagram",
      langLb: "Языки", langSub: "Česky · English · Українська · Русский",
      form: {
        title: "Форма запроса", name: "Имя", email: "Email", phone: "Телефон",
        occ: "Повод", occOpts: ["Букет", "Свадьба", "Подарочный бокс", "Особый повод", "Другое"],
        budget: "Бюджет", budgetOpts: ["До 3 000 Kč", "3–5 000 Kč", "5–9 000 Kč", "9 000+ Kč"],
        date: "Дата", msg: "Сообщение",
        msgPh: "Расскажите о вашем моменте — для кого, какой стиль, цвета, ощущение…",
        submit: "Отправить запрос",
        note: "Отправляя, вы соглашаетесь с обработкой данных для ответа на ваш запрос.",
        sent1: "Спасибо!",
        sent2: "Мы получили ваше сообщение. Ответим в течение 30 минут в рабочее время — обычно раньше."
      },
      mapTitle: "Посетите бутик",
      mapDesc: "Заходите на кофе и консультацию. По понедельникам больше всего свежих поставок."
    },
    dekor: {
      eb: "Свадьбы · Свадебная флористика",
      t1: "Свадебные",
      t2: "цветы",
      t3: "для вашего дня",
      lede: "Свадебные букеты и цветочные аксессуары. Работаем с гортензиями, пионами, розами и фирменной палитрой. Консультация бесплатно.",
      tag: "Прага · Свадьбы",
      captionEb: "Свадебный букет",
      captionTitle: "Plzeňská · Прага 9",
      captionDesc: "Свадебный букет из гортензий и пионов — создан с любовью.",
      leadEm1: "Свадебные цветы — не просто украшение,",
      leadEmHighlight: "это часть",
      leadEm2: "вашей истории.",
      body1: "Каждый свадебный букет мы разрабатываем с нуля для вашего конкретного дня. Начинаем с консультации — в нашем бутике или онлайн — и завершаем идеальным букетом в ваших руках.",
      body2: "Работаем с невестами по всей Праге. Предлагаем свадебные букеты, бутоньерки и цветочные аксессуары с акцентом на качество и свежесть.",
      servicesTitle1: "Что",
      servicesTitle2: "мы создаём",
      servicesSide: "От свадебного букета до полных цветочных аксессуаров.",
      services: [
        { ico: "✻", t: "Свадебные букеты", p: "Свадебные букеты из премиальных цветов — гортензии, пионы, розы, бутоньерки." },
        { ico: "❖", t: "Цветочные аксессуары", p: "Бутоньерки, венки, цветочные браслеты и украшения для волос." },
        { ico: "✺", t: "Консультация", p: "Бесплатная консультация по стилю, палитре и выбору цветов для вашего свадебного дня." }
      ],
      tlTitle1: "Как",
      tlTitle2: "это работает",
      timeline: [
        { yr: "01", evt: "Консультация", note: "Короткий звонок или встреча в бутике. Стиль, палитра, бюджет, дата.", loc: "60 мин" },
        { yr: "02", evt: "Дизайн & смета", note: "Мудборд, палитра, список композиций и точная цена.", loc: "3–5 дней" },
        { yr: "03", evt: "Реализация", note: "День свадьбы: подготовка букета, контроль качества, передача.", loc: "В день свадьбы" }
      ],
      ctaPrimary: "Запрос свадебных цветов",
      ctaSecondary: "Консультация в WhatsApp"
    },
    eventy: {
      eb: "Поводы · Подарки · Праздники",
      t1: "Особые",
      t2: "поводы",
      t3: "& моменты",
      lede: "Дни рождения, юбилеи, корпоративные подарки и частные праздники. Премиальные букеты и цветочные боксы для каждого особого момента.",
      tag: "Прага · Поводы",
      captionEb: "Премиальный букет",
      captionTitle: "Подарочный бокс",
      captionDesc: "Премиальный букет из гортензий и пионов в элегантной упаковке.",
      leadEm1: "Каждый момент заслуживает",
      leadEmHighlight: "исключительных цветов",
      leadEm2: "— мы создаём букеты, которые говорят за вас.",
      body1: "Премиальные букеты для особых поводов — наша специализация. Гортензии, пионы, розы — всё свежее и отобранное с любовью. Также предлагаем элегантные подарочные боксы.",
      body2: "Доставляем по всей Праге в течение 2 часов. Анонимная доставка, личная карточка, фото вручения.",
      servicesTitle1: "Типы",
      servicesTitle2: "поводов",
      servicesSide: "Каждый букет — оригинал. Предложения ниже — только ориентир.",
      services: [
        { ico: "✻", t: "Дни рождения & юбилеи", p: "Премиальные букеты для праздника — гортензии, пионы, розы в элегантной упаковке." },
        { ico: "❖", t: "Корпоративные подарки", p: "Цветочные боксы и букеты для бизнес-партнёров, сотрудников и клиентов." },
        { ico: "✺", t: "Подарочные боксы", p: "Роскошные цветочные боксы с шоколадом, свечами или вином. Идеальный подарок." }
      ],
      kpis: [
        { n: "184", l: "Постов в IG" },
        { n: "2 ч", l: "Доставка Прага" },
        { n: "48 ч", l: "От запроса к дизайну" }
      ],
      ctaPrimary: "Запрос букета",
      ctaSecondary: "Написать в WhatsApp"
    }
  }
};

window.STRINGS = STRINGS;
window.LANGS = [
  { id: "cs", label: "CZ" },
  { id: "en", label: "EN" },
  { id: "uk", label: "UA" },
  { id: "ru", label: "RU" }
];
