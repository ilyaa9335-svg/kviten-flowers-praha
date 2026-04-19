// ===== Kviten i18n — CZ / EN / RU / UK =====
const STRINGS = {
  cs: {
    nav: { home: "Domů", shop: "Květiny", dekor: "Dekor", eventy: "Eventy", about: "O nás", contact: "Kontakt" },
    top: { loc: "Francouzská · Praha 2 · Vinohrady", call: "Zavolejte", open: "Otevřeno", until: "do 19:00" },
    cta: { order: "Objednat", whatsapp: "WhatsApp", call: "Zavolat", enquire: "Poptávka", book: "Rezervovat" },
    hero: {
      eyebrow: "Pražský květinový atelier",
      title1: "Čerstvé",
      title2: "květiny",
      amp: "&",
      title3: "dekor",
      title4: "pro okamžiky",
      lede: "Autorské kytice, svatební floristika a dekor událostí. Každý den čerstvé květy z Holandska, Itálie a Ekvádoru. Rozvoz po celé Praze.",
      live: "Dnes odesíláme",
      featured: "Kytice dne",
      featuredName: "Luna",
      kpis: [
        { n: "11,8K", l: "Sledujících" },
        { n: "2h", l: "Rozvoz Praha" },
        { n: "7/7", l: "Dnů v týdnu" }
      ],
      marquee: ["Čerstvé květy denně", "Svatební floristika", "Event dekor", "Rozvoz Praha · 2 hodiny", "Autorské kytice", "Od roku 2019"]
    },
    services: {
      n: "01",
      title1: "Služby",
      title2: "pro každou příležitost",
      side: "Od svátečních kytic po plnohodnotný návrh svatebního dekoru.",
      items: [
        { n: "I", name: "Autorské\nkytice", desc: "Sezónní kompozice od 1 000 Kč. Navrženy floristkou na míru vašemu okamžiku.", cta: "Do obchodu" },
        { n: "II", name: "Svatební\nfloristika", desc: "Svatební kytice, dekor stolů, oblouky, butoniéry. Konzultace zdarma.", cta: "Rezervovat" },
        { n: "III", name: "Dekor\nudálostí", desc: "Narozeniny, firemní večery, výročí. Kompletní dekor prostoru na klíč.", cta: "Poptávka" },
        { n: "IV", name: "Rozvoz\npo Praze", desc: "Kurýr do 2 hodin. Anonymní doručení, karta se zprávou, fotografie předání.", cta: "Objednat" }
      ]
    },
    gallery: {
      n: "02",
      title1: "Vybrané",
      title2: "kompozice",
      side: "Malý výběr z posledních zakázek. Každá kytice je originál.",
      items: [
        { cap: "Luna · 3 200 Kč" },
        { cap: "Paulina · 2 400 Kč" },
        { cap: "Amber · 2 100 Kč" },
        { cap: "Sofia · 3 800 Kč" },
        { cap: "Lila · 1 600 Kč" },
        { cap: "Vesna · 2 800 Kč" }
      ]
    },
    quote: {
      eyebrow: "Manifest",
      text1: "Každá kytice",
      text2: "je dopis",
      text3: "bez slov.",
      text4: "Skládáme je s péčí, která nepotřebuje překlad.",
      att: "Kviten' · Flowers & Decor · Praha"
    },
    ig: { title: "Na Instagramu", handle: "@kviten_flowers_praha", followers: "11,8K sledujících", cta: "Sledovat", hover: "Zobrazit" },
    foot: {
      hello: "Dobrý den",
      tagline: "Autorský květinářský atelier v srdci Vinohrad. Čerstvé květy, svatební floristika a dekor událostí.",
      visit: "Navštivte nás",
      address: "Francouzská, Praha 2\nVinohrady · 120 00",
      hours: "Otevírací doba",
      hoursRows: [
        ["Po–Pá", "09:00 – 19:00"],
        ["Sobota", "10:00 – 18:00"],
        ["Neděle", "10:00 – 16:00"]
      ],
      contact: "Kontakt",
      languages: "Mluvíme česky, anglicky, ukrajinsky, rusky.",
      copy: "© 2026 Kviten' Flowers & Decor · IČO 05882648",
      built: "Vyrobeno s láskou v Praze"
    },
    shop: {
      eb: "Obchod · Jaro / Léto 2026",
      t1: "Naše",
      t2: "kolekce",
      lede: "Kytice na objednávku. Zaměřte se na cenové rozpětí, nebo nás kontaktujte pro zcela autorský návrh.",
      filterLb: "Kategorie",
      chips: ["Vše", "1 000–2 000", "1 500–2 500", "3 000–4 000", "Svatba", "Event"],
      orderCta: "Objednat telefonem",
      whatsappCta: "Napsat na WhatsApp",
      categories: [
        {
          id: "classic",
          range: "1 000 – 2 000 Kč",
          title1: "Každodenní",
          title2: "půvab",
          desc: "Menší kytice s důrazem na jednu hlavní květinu a sezónní zeleň. Ideální pro hosty, pozornost nebo ranní gesto."
        },
        {
          id: "signature",
          range: "1 500 – 2 500 Kč",
          title1: "Autorské",
          title2: "kytice",
          desc: "Signature kompozice floristky. Bohatší kytice s romantickým charakterem a přirozenou paletou."
        },
        {
          id: "premium",
          range: "3 000 – 4 000 Kč",
          title1: "Premium",
          title2: "kolekce",
          desc: "Luxusní velké kytice pro výjimečné okamžiky. Prémiové květy, ručně zavázaná mašle, podepsaná karta."
        },
        {
          id: "wedding",
          range: "Na míru · od 8 000 Kč",
          title1: "Svatební",
          title2: "floristika",
          desc: "Svatební kytice, boutonniéry, stolní běhouny, oblouky, květinové instalace. Konzultace zdarma."
        },
        {
          id: "event",
          range: "Na míru · od 5 000 Kč",
          title1: "Eventy",
          title2: "& dekor",
          desc: "Narozeniny, firemní eventy, výročí. Kompletní řešení od návrhu po realizaci."
        }
      ]
    },
    about: {
      eb: "O nás · Od roku 2019",
      t1: "Květiny",
      t2: "jsou",
      t3: "náš mateřský jazyk",
      lead1: "Kviten' je pražský atelier, který vznikl z lásky k ukrajinské tradici květinářství",
      leadEm: "a českému smyslu pro detail.",
      lead2: "Naše kytice vyprávějí tiché příběhy — nenechávají po sobě slova, ale pocit.",
      body1: "Byli jsme malým obchůdkem na rohu Francouzské ulice, kam si lidé chodili pro pozornost na oběd u rodiny. Dnes zdobíme svatby, otevření restaurací, filmové premiéry a narozeniny — a pořád vážeme každou kytici sami.",
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
        { yr: "2019", evt: "Otevření ateliéru", note: "Malý prostor na Vinohradech — jen dvě židle a chladicí box.", loc: "Francouzská 17" },
        { yr: "2021", evt: "První svatba", note: "Dekor pro svatbu v Lobkovickém paláci — počátek event sekce.", loc: "Praha 1" },
        { yr: "2023", evt: "Event Decor team", note: "Rozšíření o samostatný tým pro firemní eventy a premiéry.", loc: "Praha" },
        { yr: "2025", evt: "11,8K na Instagramu", note: "Komunita zákazníků i kolegů — inspirace napříč střední Evropou.", loc: "@kviten_flowers_praha" }
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
      emailSub: "Pro poptávky svateb a eventů (rozsáhlejší brief).",
      addressLb: "Adresa",
      addressSub: "Nejbližší metro A · Náměstí Míru · 4 min pěšky.",
      hoursLb: "Otevírací doba",
      igLb: "Instagram",
      langLb: "Jazyky",
      langSub: "Česky · English · Українська · Русский",
      form: {
        title: "Formulář poptávky",
        name: "Jméno", email: "E-mail", phone: "Telefon",
        occ: "Příležitost",
        occOpts: ["Kytice", "Svatba", "Event", "Dekorace", "Jiné"],
        budget: "Rozpočet",
        budgetOpts: ["Do 2 000 Kč", "2–4 000 Kč", "4–10 000 Kč", "10 000+ Kč"],
        date: "Datum",
        msg: "Zpráva",
        msgPh: "Řekněte nám o vašem okamžiku — pro koho, jaký styl, barvy, pocit…",
        submit: "Odeslat poptávku",
        note: "Odesláním souhlasíte se zpracováním údajů pro účely odpovědi na poptávku.",
        sent1: "Děkujeme!",
        sent2: "Dostali jsme vaši zprávu. Ozveme se vám do 30 minut během otevírací doby — obvykle dříve."
      },
      mapTitle: "Navštivte atelier",
      mapDesc: "Přijďte ochutnat kávu a poradit se. V pondělky máme nejvíce čerstvých dodávek."
    },
    dekor: {
      eb: "Dekor · Svatby · Oslavy",
      t1: "Dekor",
      t2: "vašich",
      t3: "okamžiků",
      lede: "Svatební floristika a dekor prostoru. Pracujeme s vinutou zelení, bílými gerberami, hortenziemi a signature paletou plum & cream. Konzultace zdarma.",
      tag: "Prague · Decor",
      captionEb: "Signature dekor",
      captionTitle: "Francouzská · Praha",
      captionDesc: "Svatba v centru Prahy, plum & blue paleta, sestaveno za 6 hodin.",
      leadEm1: "Dekor není dekorace —",
      leadEmHighlight: "je pozvánka",
      leadEm2: "do vašeho vlastního světa.",
      body1: "Ve studiu vznikají návrhy na míru každému příběhu. Začínáme konzultací — ať už v Kviten ateliéru nebo na místě, kde se bude událost odehrávat — a končíme u finální instalace a fotografií po svátku.",
      body2: "Pracujeme napříč Prahou: paláce, privátní vily, restaurace, střešní terasy. Spolupracujeme s ověřenými event-planery, půjčovnami nábytku i vlastním týmem florestů.",
      servicesTitle1: "Co",
      servicesTitle2: "navrhujeme",
      servicesSide: "Od jediné centrální kompozice po plný dekor svatby na klíč.",
      services: [
        { ico: "✻", t: "Svatební dekor", p: "Svatební oblouky, uličky, stolní běhouny, butoniéry, svatební kytice a dekor hostiny." },
        { ico: "❖", t: "Oslavy & výročí", p: "Narozeniny, zásnuby, výročí. Intimní dekor stolu i kompletní prostor pro 50+ hostů." },
        { ico: "✺", t: "Instalace", p: "Velké floristické instalace — fotozony, plakáty z květů, závěsné kompozice, stěny." }
      ],
      tlTitle1: "Jak",
      tlTitle2: "to funguje",
      timeline: [
        { yr: "01", evt: "Konzultace", note: "Krátký hovor nebo setkání v atelieru. Prostor, styl, rozpočet, termín.", loc: "60 min" },
        { yr: "02", evt: "Návrh & nabídka", note: "Moodboard, paleta, seznam kompozic a přesná cenová nabídka.", loc: "3–5 dní" },
        { yr: "03", evt: "Realizace", note: "Den události: instalace, dekor, fotodokumentace, úklid.", loc: "V den svátku" }
      ],
      ctaPrimary: "Poptávka svatby / eventu",
      ctaSecondary: "WhatsApp konzultace"
    },
    eventy: {
      eb: "Eventy · Firemní · Premiéry",
      t1: "Eventy",
      t2: "&",
      t3: "momenty",
      lede: "Firemní večery, otevření restaurací, filmové premiéry a soukromé oslavy. Navrhujeme dekor, který pracuje na kameru i naživo.",
      tag: "Prague · Events",
      captionEb: "Event instalace",
      captionTitle: "Signature piece",
      captionDesc: "Centrální kompozice pro premiéru — 8 hodin práce, 6 druhů květů.",
      leadEm1: "Pracujeme s",
      leadEmHighlight: "časem a prostorem",
      leadEm2: "— event je představení, kterému dáváme živou scénu.",
      body1: "Event dekor je pro nás samostatná disciplína. Jiné tempo než svatba — rychlejší nástup, ostřejší estetika, větší měřítko. Spolupracujeme s produkcemi, značkami i soukromými hostiteli.",
      body2: "Reference: otevírání restaurací v Praze 1, tiskové konference, narozeninové večery ve vinohradských vilách, premiéry v Lucerně, valentýnské instalace pro kavárny.",
      servicesTitle1: "Typy",
      servicesTitle2: "eventů",
      servicesSide: "Každý projekt je originál. Základní balíčky slouží jako orientační bod.",
      services: [
        { ico: "✻", t: "Firemní", p: "Konference, tiskovky, večeře, vánoční večírky. Prostor od 30 do 500 hostů." },
        { ico: "❖", t: "Soukromé", p: "Narozeniny, zásnuby, zahradní párty. Intimní dekor v plum & blush paletě." },
        { ico: "✺", t: "Premiéry & otevření", p: "Filmové premiéry, otevření restaurací a obchodů. Dekor pro foto & video." }
      ],
      kpis: [
        { n: "120+", l: "Eventů 2023–2026" },
        { n: "6 h", l: "Průměr instalace" },
        { n: "48 h", l: "Od poptávky k návrhu" }
      ],
      ctaPrimary: "Poptávka eventu",
      ctaSecondary: "Napsat na WhatsApp"
    }
  },

  en: {
    nav: { home: "Home", shop: "Flowers", dekor: "Decor", eventy: "Events", about: "About", contact: "Contact" },
    top: { loc: "Francouzská · Praha 2 · Vinohrady", call: "Call us", open: "Open", until: "until 19:00" },
    cta: { order: "Order", whatsapp: "WhatsApp", call: "Call", enquire: "Enquire", book: "Book" },
    hero: {
      eyebrow: "Prague floral atelier",
      title1: "Fresh",
      title2: "flowers",
      amp: "&",
      title3: "decor",
      title4: "for moments",
      lede: "Author bouquets, wedding florals, and event decor. Fresh stems daily from Holland, Italy, Ecuador. City-wide delivery in Prague.",
      live: "Shipping today",
      featured: "Bouquet of the day",
      featuredName: "Luna",
      kpis: [
        { n: "11.8K", l: "Followers" },
        { n: "2h", l: "Prague delivery" },
        { n: "7/7", l: "Days a week" }
      ],
      marquee: ["Fresh flowers daily", "Wedding florals", "Event decor", "Prague delivery · 2 hours", "Author bouquets", "Since 2019"]
    },
    services: {
      n: "01",
      title1: "Services",
      title2: "for every occasion",
      side: "From everyday bouquets to full wedding and event design.",
      items: [
        { n: "I", name: "Author\nbouquets", desc: "Seasonal compositions from 1,000 CZK. Designed by the florist for your moment.", cta: "Shop" },
        { n: "II", name: "Wedding\nflorals", desc: "Bridal bouquets, table decor, arches, boutonnières. Free consultation.", cta: "Book" },
        { n: "III", name: "Event\ndecor", desc: "Birthdays, corporate evenings, anniversaries. Full-space styling, turnkey.", cta: "Enquire" },
        { n: "IV", name: "Prague\ndelivery", desc: "Courier within 2 hours. Anonymous delivery, message card, handover photo.", cta: "Order" }
      ]
    },
    gallery: {
      n: "02",
      title1: "Selected",
      title2: "compositions",
      side: "A small selection from recent orders. Every bouquet is an original.",
      items: [
        { cap: "Luna · 3,200 CZK" },
        { cap: "Paulina · 2,400 CZK" },
        { cap: "Amber · 2,100 CZK" },
        { cap: "Sofia · 3,800 CZK" },
        { cap: "Lila · 1,600 CZK" },
        { cap: "Vesna · 2,800 CZK" }
      ]
    },
    quote: {
      eyebrow: "Manifesto",
      text1: "Every bouquet",
      text2: "is a letter",
      text3: "without words.",
      text4: "We write them with a care that needs no translation.",
      att: "Kviten' · Flowers & Decor · Prague"
    },
    ig: { title: "On Instagram", handle: "@kviten_flowers_praha", followers: "11.8K followers", cta: "Follow", hover: "View" },
    foot: {
      hello: "Hello",
      tagline: "An author floral atelier in the heart of Vinohrady. Fresh flowers, wedding florals, event decor.",
      visit: "Visit us",
      address: "Francouzská, Praha 2\nVinohrady · 120 00",
      hours: "Opening hours",
      hoursRows: [
        ["Mon–Fri", "09:00 – 19:00"],
        ["Saturday", "10:00 – 18:00"],
        ["Sunday", "10:00 – 16:00"]
      ],
      contact: "Contact",
      languages: "We speak Czech, English, Ukrainian, Russian.",
      copy: "© 2026 Kviten' Flowers & Decor · IČO 05882648",
      built: "Made with love in Prague"
    },
    shop: {
      eb: "Shop · Spring / Summer 2026",
      t1: "Our",
      t2: "collection",
      lede: "Bouquets made to order. Browse by price range, or reach out for a fully custom design.",
      filterLb: "Category",
      chips: ["All", "1,000–2,000", "1,500–2,500", "3,000–4,000", "Wedding", "Event"],
      orderCta: "Order by phone",
      whatsappCta: "Message on WhatsApp",
      categories: [
        { id: "classic", range: "1,000 – 2,000 CZK", title1: "Everyday", title2: "charm", desc: "Smaller bouquets focused on a single hero bloom and seasonal greens. Perfect for a guest, a gesture, a morning note." },
        { id: "signature", range: "1,500 – 2,500 CZK", title1: "Signature", title2: "bouquets", desc: "The florist's signature compositions. Richer arrangements with romantic character and a natural palette." },
        { id: "premium", range: "3,000 – 4,000 CZK", title1: "Premium", title2: "collection", desc: "Luxurious large bouquets for exceptional occasions. Premium stems, hand-tied ribbon, signed card." },
        { id: "wedding", range: "Custom · from 8,000 CZK", title1: "Wedding", title2: "florals", desc: "Bridal bouquets, boutonnières, table runners, arches, floral installations. Free consultation." },
        { id: "event", range: "Custom · from 5,000 CZK", title1: "Events", title2: "& decor", desc: "Birthdays, corporate events, anniversaries. Full solution from design to installation." }
      ]
    },
    about: {
      eb: "About · Since 2019",
      t1: "Flowers",
      t2: "are our",
      t3: "mother tongue",
      lead1: "Kviten' is a Prague atelier born from a love of Ukrainian floral craft",
      leadEm: "and a Czech sense of detail.",
      lead2: "Our bouquets tell quiet stories — they don't leave words behind, they leave a feeling.",
      body1: "We started as a little shop on the corner of Francouzská, where people stopped in to pick something up for lunch with family. Today we decorate weddings, restaurant openings, film premieres and birthdays — and we still tie every bouquet ourselves.",
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
        { yr: "2019", evt: "Atelier opens", note: "A little space in Vinohrady — two chairs and a cooler.", loc: "Francouzská 17" },
        { yr: "2021", evt: "First wedding", note: "Decor for a wedding at Lobkowicz Palace — the start of events work.", loc: "Prague 1" },
        { yr: "2023", evt: "Event decor team", note: "Expansion with a dedicated team for corporate events and premieres.", loc: "Prague" },
        { yr: "2025", evt: "11.8K on Instagram", note: "A community of clients and peers — inspiration across Central Europe.", loc: "@kviten_flowers_praha" }
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
      emailSub: "For weddings and events (longer brief).",
      addressLb: "Address",
      addressSub: "Nearest metro A · Náměstí Míru · 4 min walk.",
      hoursLb: "Opening hours",
      igLb: "Instagram",
      langLb: "Languages",
      langSub: "Česky · English · Українська · Русский",
      form: {
        title: "Enquiry form",
        name: "Name", email: "Email", phone: "Phone",
        occ: "Occasion",
        occOpts: ["Bouquet", "Wedding", "Event", "Decor", "Other"],
        budget: "Budget",
        budgetOpts: ["Under 2,000 CZK", "2–4,000 CZK", "4–10,000 CZK", "10,000+ CZK"],
        date: "Date",
        msg: "Message",
        msgPh: "Tell us about the moment — who, what style, colours, feeling…",
        submit: "Send enquiry",
        note: "By sending you agree to the processing of your data for the purpose of responding to your enquiry.",
        sent1: "Thank you!",
        sent2: "We've received your message. We'll reply within 30 minutes during opening hours — usually sooner."
      },
      mapTitle: "Visit the atelier",
      mapDesc: "Come in for a coffee and a consultation. Mondays have the most fresh arrivals."
    },
    dekor: {
      eb: "Decor · Weddings · Celebrations",
      t1: "Decor",
      t2: "of your",
      t3: "moments",
      lede: "Wedding florals and venue decor. We work with twisted greenery, white gerberas, hydrangeas and a signature plum & cream palette. Free consultation.",
      tag: "Prague · Decor",
      captionEb: "Signature decor",
      captionTitle: "Francouzská · Prague",
      captionDesc: "Wedding in central Prague — plum & blue palette, six-hour install.",
      leadEm1: "Decor isn't decoration —",
      leadEmHighlight: "it's an invitation",
      leadEm2: "into a world of your own.",
      body1: "Every design is drawn up from scratch for a specific story. We begin with a consultation — at our atelier or at the venue — and finish with the final install and post-event photos.",
      body2: "We work all over Prague: palaces, private villas, restaurants, rooftop terraces. We collaborate with trusted event planners, furniture rentals, and our own in-house florists.",
      servicesTitle1: "What",
      servicesTitle2: "we design",
      servicesSide: "From a single centrepiece to a full turnkey wedding.",
      services: [
        { ico: "✻", t: "Wedding decor", p: "Arches, aisles, table runners, boutonnières, bridal bouquets and reception florals." },
        { ico: "❖", t: "Celebrations", p: "Birthdays, engagements, anniversaries. Intimate table decor or a full venue for 50+ guests." },
        { ico: "✺", t: "Installations", p: "Large-scale floral installations — photo zones, floral walls, hanging pieces, backdrops." }
      ],
      tlTitle1: "How",
      tlTitle2: "it works",
      timeline: [
        { yr: "01", evt: "Consultation", note: "A short call or meeting in the atelier. Venue, style, budget, date.", loc: "60 min" },
        { yr: "02", evt: "Design & quote", note: "Moodboard, palette, composition list and precise pricing.", loc: "3–5 days" },
        { yr: "03", evt: "Install", note: "Event day: installation, decor, documentation, teardown.", loc: "On the day" }
      ],
      ctaPrimary: "Enquire about a wedding / event",
      ctaSecondary: "WhatsApp consultation"
    },
    eventy: {
      eb: "Events · Corporate · Premieres",
      t1: "Events",
      t2: "&",
      t3: "moments",
      lede: "Corporate evenings, restaurant openings, film premieres and private parties. We design decor that works on camera and in real life.",
      tag: "Prague · Events",
      captionEb: "Event installation",
      captionTitle: "Signature piece",
      captionDesc: "Centrepiece for a premiere — 8 hours of work, 6 flower varieties.",
      leadEm1: "We work with",
      leadEmHighlight: "time and space",
      leadEm2: "— an event is a show, and we give it a living set.",
      body1: "Event decor is its own discipline. Different tempo to a wedding — faster build-up, sharper aesthetic, larger scale. We collaborate with production agencies, brands and private hosts.",
      body2: "References: restaurant openings in Prague 1, press conferences, birthday evenings in Vinohrady villas, premieres at Lucerna, Valentine's installations for cafés.",
      servicesTitle1: "Event",
      servicesTitle2: "types",
      servicesSide: "Every project is one of a kind. The packages below are a starting point.",
      services: [
        { ico: "✻", t: "Corporate", p: "Conferences, press days, dinners, Christmas parties. Venues from 30 to 500 guests." },
        { ico: "❖", t: "Private", p: "Birthdays, engagements, garden parties. Intimate decor in plum & blush." },
        { ico: "✺", t: "Premieres & openings", p: "Film premieres, restaurant and boutique openings. Decor built for photo & video." }
      ],
      kpis: [
        { n: "120+", l: "Events 2023–2026" },
        { n: "6 h", l: "Average install" },
        { n: "48 h", l: "Enquiry to design" }
      ],
      ctaPrimary: "Enquire about an event",
      ctaSecondary: "Message on WhatsApp"
    }
  },

  uk: {
    nav: { home: "Головна", shop: "Квіти", dekor: "Декор", eventy: "Події", about: "Про нас", contact: "Контакти" },
    top: { loc: "Francouzská · Praha 2 · Виноградах", call: "Подзвоніть", open: "Відкрито", until: "до 19:00" },
    cta: { order: "Замовити", whatsapp: "WhatsApp", call: "Дзвінок", enquire: "Запит", book: "Бронювати" },
    hero: {
      eyebrow: "Квітковий ательє у Празі",
      title1: "Свіжі",
      title2: "квіти",
      amp: "&",
      title3: "декор",
      title4: "для миттєвостей",
      lede: "Авторські букети, весільна флористика та декор подій. Свіжі квіти щодня з Голландії, Італії, Еквадору. Доставка по всій Празі.",
      live: "Сьогодні доставляємо",
      featured: "Букет дня",
      featuredName: "Луна",
      kpis: [
        { n: "11,8K", l: "Підписників" },
        { n: "2 год", l: "Доставка Прага" },
        { n: "7/7", l: "Днів на тиждень" }
      ],
      marquee: ["Свіжі квіти щодня", "Весільна флористика", "Декор подій", "Доставка Прага · 2 години", "Авторські букети", "З 2019 року"]
    },
    services: {
      n: "01", title1: "Послуги", title2: "для кожної нагоди",
      side: "Від щоденних букетів до повного дизайну весільного та подієвого декору.",
      items: [
        { n: "I", name: "Авторські\nбукети", desc: "Сезонні композиції від 1 000 Kč. Створено флористкою для вашої миті.", cta: "До крамниці" },
        { n: "II", name: "Весільна\nфлористика", desc: "Весільні букети, декор столів, арки, бутоньєрки. Консультація безкоштовна.", cta: "Бронювати" },
        { n: "III", name: "Декор\nподій", desc: "Дні народження, корпоративи, ювілеї. Повний декор простору під ключ.", cta: "Запит" },
        { n: "IV", name: "Доставка\nПрагою", desc: "Кур'єр протягом 2 годин. Анонімна доставка, картка з повідомленням, фото вручення.", cta: "Замовити" }
      ]
    },
    gallery: {
      n: "02", title1: "Вибрані", title2: "композиції",
      side: "Невелика добірка з нещодавніх замовлень. Кожен букет — оригінал.",
      items: [
        { cap: "Луна · 3 200 Kč" }, { cap: "Поліна · 2 400 Kč" }, { cap: "Амбер · 2 100 Kč" },
        { cap: "Софія · 3 800 Kč" }, { cap: "Ліла · 1 600 Kč" }, { cap: "Весна · 2 800 Kč" }
      ]
    },
    quote: {
      eyebrow: "Маніфест",
      text1: "Кожен букет", text2: "— це лист", text3: "без слів.",
      text4: "Ми пишемо їх із турботою, що не потребує перекладу.",
      att: "Kviten' · Flowers & Decor · Прага"
    },
    ig: { title: "В Instagram", handle: "@kviten_flowers_praha", followers: "11,8K підписників", cta: "Підписатися", hover: "Дивитись" },
    foot: {
      hello: "Вітаємо",
      tagline: "Авторське квіткове ательє в серці Виноградів. Свіжі квіти, весільна флористика, декор подій.",
      visit: "Завітайте",
      address: "Francouzská, Praha 2\nВиноградах · 120 00",
      hours: "Години роботи",
      hoursRows: [["Пн–Пт", "09:00 – 19:00"], ["Субота", "10:00 – 18:00"], ["Неділя", "10:00 – 16:00"]],
      contact: "Контакти",
      languages: "Говоримо чеською, англійською, українською, російською.",
      copy: "© 2026 Kviten' Flowers & Decor · IČO 05882648",
      built: "Зроблено з любов'ю у Празі"
    },
    shop: {
      eb: "Крамниця · Весна / Літо 2026",
      t1: "Наша", t2: "колекція",
      lede: "Букети на замовлення. Оберіть за ціновим діапазоном, або напишіть нам для повністю авторського дизайну.",
      filterLb: "Категорія",
      chips: ["Усі", "1 000–2 000", "1 500–2 500", "3 000–4 000", "Весілля", "Подія"],
      orderCta: "Замовити по телефону",
      whatsappCta: "Написати на WhatsApp",
      categories: [
        { id: "classic", range: "1 000 – 2 000 Kč", title1: "Щоденна", title2: "краса", desc: "Менші букети з однією головною квіткою та сезонною зеленню. Ідеально для гостя, жесту, ранкової записки." },
        { id: "signature", range: "1 500 – 2 500 Kč", title1: "Авторські", title2: "букети", desc: "Підписні композиції флористки. Багатші композиції з романтичним характером і природною палітрою." },
        { id: "premium", range: "3 000 – 4 000 Kč", title1: "Преміум", title2: "колекція", desc: "Розкішні великі букети для виняткових моментів. Преміум квіти, ручна стрічка, підписана картка." },
        { id: "wedding", range: "На замовлення · від 8 000 Kč", title1: "Весільна", title2: "флористика", desc: "Весільні букети, бутоньєрки, доріжки, арки, квіткові інсталяції. Консультація безкоштовна." },
        { id: "event", range: "На замовлення · від 5 000 Kč", title1: "Події", title2: "& декор", desc: "Дні народження, корпоративи, ювілеї. Повне рішення від концепції до монтажу." }
      ]
    },
    about: {
      eb: "Про нас · З 2019 року",
      t1: "Квіти —", t2: "наша", t3: "рідна мова",
      lead1: "Kviten' — празьке ательє, народжене з любові до української квіткової традиції",
      leadEm: "та чеського відчуття деталі.",
      lead2: "Наші букети розповідають тихі історії — залишають не слова, а відчуття.",
      body1: "Ми починали з маленької крамнички на розі Francouzské, куди люди заходили за квітами на обід із родиною. Сьогодні декоруємо весілля, відкриття ресторанів, прем'єри фільмів та дні народження — і досі в'яжемо кожен букет самі.",
      body2: "Купуємо напряму з аукціонів в Аалсмері в Нідерландах, доповнюємо італійською зеленню та еквадорськими трояндами. Що не прибуває свіжим уранці — увечері не продаємо.",
      body3: "Працюємо чеською, англійською, українською та російською. Заходьте на каву — підкажемо саме те, що ви шукаєте.",
      values: [
        { ico: "✻", t: "Щодня свіжі", p: "Квіти прибувають щоранку о 6:30. Що не продалося до наступного вечора — віддаємо або компостуємо." },
        { ico: "❖", t: "Доставка Прагою", p: "Кур'єр до центру за 2 години, околиці за 3. Доставка з фото вручення." },
        { ico: "✺", t: "На замовлення", p: "Кожен букет розроблений для конкретної людини та моменту. Жодних готових букетів з холодильника." }
      ],
      tlTitle1: "Наш", tlTitle2: "шлях",
      timeline: [
        { yr: "2019", evt: "Відкриття ательє", note: "Маленький простір у Виноградах — два стільці та холодильник.", loc: "Francouzská 17" },
        { yr: "2021", evt: "Перше весілля", note: "Декор весілля в палаці Лобковіц — початок подієвого напрямку.", loc: "Прага 1" },
        { yr: "2023", evt: "Команда event decor", note: "Окрема команда для корпоративних подій та прем'єр.", loc: "Прага" },
        { yr: "2025", evt: "11,8K в Instagram", note: "Спільнота клієнтів і колег — натхнення по всій Центральній Європі.", loc: "@kviten_flowers_praha" }
      ]
    },
    contact: {
      eb: "Контакти · Напишіть нам",
      t1: "Втілімо", t2: "ваш букет", t3: "у життя",
      lede: "Зазвичай відповідаємо протягом 30 хвилин у робочий час. Для доставки сьогодні телефонуйте напряму.",
      phoneLb: "Телефон", phoneSub: "Відповідаємо українською, English, Русский, Česky.",
      waLb: "WhatsApp", waSub: "Фото, повідомлення, голосові.",
      emailLb: "Email", emailSub: "Для запитів весіль та подій (детальний бриф).",
      addressLb: "Адреса", addressSub: "Найближче метро А · Náměstí Míru · 4 хв пішки.",
      hoursLb: "Години роботи", igLb: "Instagram",
      langLb: "Мови", langSub: "Česky · English · Українська · Русский",
      form: {
        title: "Форма запиту", name: "Ім'я", email: "Email", phone: "Телефон",
        occ: "Нагода", occOpts: ["Букет", "Весілля", "Подія", "Декор", "Інше"],
        budget: "Бюджет", budgetOpts: ["До 2 000 Kč", "2–4 000 Kč", "4–10 000 Kč", "10 000+ Kč"],
        date: "Дата", msg: "Повідомлення",
        msgPh: "Розкажіть про вашу мить — для кого, який стиль, кольори, відчуття…",
        submit: "Надіслати запит",
        note: "Надсилаючи, ви погоджуєтесь з обробкою даних для відповіді на ваш запит.",
        sent1: "Дякуємо!",
        sent2: "Ми отримали ваше повідомлення. Відповімо протягом 30 хвилин у робочий час — зазвичай швидше."
      },
      mapTitle: "Завітайте в ательє",
      mapDesc: "Заходьте на каву та консультацію. У понеділок найбільше свіжих прибуттів."
    },
    dekor: {
      eb: "Декор · Весілля · Святкування",
      t1: "Декор",
      t2: "ваших",
      t3: "моментів",
      lede: "Весільна флористика та декор простору. Працюємо з витонченою зеленню, білими герберами, гортензіями і фірмовою палітрою plum & cream. Консультація безкоштовна.",
      tag: "Прага · Декор",
      captionEb: "Фірмовий декор",
      captionTitle: "Francouzská · Прага",
      captionDesc: "Весілля в центрі Праги — палітра plum & blue, шість годин монтажу.",
      leadEm1: "Декор — це не прикраса,",
      leadEmHighlight: "а запрошення",
      leadEm2: "у ваш власний світ.",
      body1: "Кожен проєкт ми розробляємо з нуля під конкретну історію. Починаємо з консультації — в ательє або на місці події — і завершуємо фінальним монтажем та фото після свята.",
      body2: "Працюємо по всій Празі: палаци, приватні вілли, ресторани, тераси. Співпрацюємо з перевіреними івент-планерами, прокатом меблів та власною командою флористів.",
      servicesTitle1: "Що",
      servicesTitle2: "ми створюємо",
      servicesSide: "Від однієї центральної композиції до повного весілля «під ключ».",
      services: [
        { ico: "✻", t: "Весільний декор", p: "Арки, доріжки, столові раннери, бутоньєрки, весільні букети та декор бенкету." },
        { ico: "❖", t: "Святкування", p: "Дні народження, заручини, ювілеї. Інтимний стільниковий декор або повний простір на 50+ гостей." },
        { ico: "✺", t: "Інсталяції", p: "Масштабні квіткові інсталяції — фотозони, квіткові стіни, підвісні композиції, задники." }
      ],
      tlTitle1: "Як",
      tlTitle2: "це працює",
      timeline: [
        { yr: "01", evt: "Консультація", note: "Короткий дзвінок або зустріч в ательє. Простір, стиль, бюджет, дата.", loc: "60 хв" },
        { yr: "02", evt: "Дизайн & кошторис", note: "Мудборд, палітра, список композицій і точна ціна.", loc: "3–5 днів" },
        { yr: "03", evt: "Реалізація", note: "День події: монтаж, декор, зйомка, демонтаж.", loc: "У день свята" }
      ],
      ctaPrimary: "Запит весілля / події",
      ctaSecondary: "Консультація у WhatsApp"
    },
    eventy: {
      eb: "Події · Корпоративи · Прем'єри",
      t1: "Події",
      t2: "&",
      t3: "моменти",
      lede: "Корпоративні вечори, відкриття ресторанів, прем'єри та приватні свята. Дизайнимо декор, який працює і на камеру, і наживо.",
      tag: "Прага · Події",
      captionEb: "Інсталяція події",
      captionTitle: "Фірмова композиція",
      captionDesc: "Центрова композиція для прем'єри — 8 годин роботи, 6 видів квітів.",
      leadEm1: "Ми працюємо з",
      leadEmHighlight: "часом і простором",
      leadEm2: "— подія це вистава, якій ми створюємо живу сцену.",
      body1: "Декор подій — окрема дисципліна. Інший темп, ніж у весілля — швидший монтаж, гостріша естетика, більший масштаб. Співпрацюємо з продакшенами, брендами і приватними замовниками.",
      body2: "Референси: відкриття ресторанів у Празі 1, прес-конференції, дні народження у віллах на Виноградах, прем'єри в Люцерні, валентинові інсталяції для кав'ярень.",
      servicesTitle1: "Типи",
      servicesTitle2: "подій",
      servicesSide: "Кожен проєкт — оригінал. Пакети нижче — лише орієнтир.",
      services: [
        { ico: "✻", t: "Корпоративні", p: "Конференції, прес-дні, вечері, різдвяні вечірки. Простори від 30 до 500 гостей." },
        { ico: "❖", t: "Приватні", p: "Дні народження, заручини, садові вечірки. Інтимний декор у плам та blush." },
        { ico: "✺", t: "Прем'єри & відкриття", p: "Прем'єри фільмів, відкриття ресторанів та бутиків. Декор для фото та відео." }
      ],
      kpis: [
        { n: "120+", l: "Подій 2023–2026" },
        { n: "6 год", l: "Середній монтаж" },
        { n: "48 год", l: "Від запиту до дизайну" }
      ],
      ctaPrimary: "Запит події",
      ctaSecondary: "Написати у WhatsApp"
    }
  },

  ru: {
    nav: { home: "Главная", shop: "Цветы", dekor: "Декор", eventy: "События", about: "О нас", contact: "Контакты" },
    top: { loc: "Francouzská · Praha 2 · Виноградах", call: "Позвоните", open: "Открыто", until: "до 19:00" },
    cta: { order: "Заказать", whatsapp: "WhatsApp", call: "Звонок", enquire: "Запрос", book: "Бронировать" },
    hero: {
      eyebrow: "Цветочное ателье в Праге",
      title1: "Свежие", title2: "цветы", amp: "&", title3: "декор", title4: "для мгновений",
      lede: "Авторские букеты, свадебная флористика и декор мероприятий. Свежие цветы ежедневно из Голландии, Италии, Эквадора. Доставка по всей Праге.",
      live: "Сегодня доставляем",
      featured: "Букет дня",
      featuredName: "Луна",
      kpis: [{ n: "11,8K", l: "Подписчиков" }, { n: "2 ч", l: "Доставка Прага" }, { n: "7/7", l: "Дней в неделю" }],
      marquee: ["Свежие цветы ежедневно", "Свадебная флористика", "Декор мероприятий", "Доставка Прага · 2 часа", "Авторские букеты", "С 2019 года"]
    },
    services: {
      n: "01", title1: "Услуги", title2: "для каждого случая",
      side: "От ежедневных букетов до полного дизайна свадебного и событийного декора.",
      items: [
        { n: "I", name: "Авторские\nбукеты", desc: "Сезонные композиции от 1 000 Kč. Созданы флористом для вашего момента.", cta: "В магазин" },
        { n: "II", name: "Свадебная\nфлористика", desc: "Свадебные букеты, декор столов, арки, бутоньерки. Консультация бесплатно.", cta: "Бронировать" },
        { n: "III", name: "Декор\nмероприятий", desc: "Дни рождения, корпоративы, юбилеи. Полный декор пространства под ключ.", cta: "Запрос" },
        { n: "IV", name: "Доставка\nпо Праге", desc: "Курьер в течение 2 часов. Анонимная доставка, карточка, фото вручения.", cta: "Заказать" }
      ]
    },
    gallery: {
      n: "02", title1: "Избранные", title2: "композиции",
      side: "Небольшая подборка из недавних заказов. Каждый букет — оригинал.",
      items: [
        { cap: "Луна · 3 200 Kč" }, { cap: "Полина · 2 400 Kč" }, { cap: "Амбер · 2 100 Kč" },
        { cap: "София · 3 800 Kč" }, { cap: "Лила · 1 600 Kč" }, { cap: "Весна · 2 800 Kč" }
      ]
    },
    quote: {
      eyebrow: "Манифест",
      text1: "Каждый букет", text2: "— это письмо", text3: "без слов.",
      text4: "Мы пишем их с заботой, не нуждающейся в переводе.",
      att: "Kviten' · Flowers & Decor · Прага"
    },
    ig: { title: "В Instagram", handle: "@kviten_flowers_praha", followers: "11,8K подписчиков", cta: "Подписаться", hover: "Смотреть" },
    foot: {
      hello: "Здравствуйте",
      tagline: "Авторское цветочное ателье в сердце Виноградов. Свежие цветы, свадебная флористика, декор мероприятий.",
      visit: "Посетите нас",
      address: "Francouzská, Praha 2\nВиноградах · 120 00",
      hours: "Часы работы",
      hoursRows: [["Пн–Пт", "09:00 – 19:00"], ["Суббота", "10:00 – 18:00"], ["Воскресенье", "10:00 – 16:00"]],
      contact: "Контакты",
      languages: "Говорим на чешском, английском, украинском, русском.",
      copy: "© 2026 Kviten' Flowers & Decor · IČO 05882648",
      built: "Сделано с любовью в Праге"
    },
    shop: {
      eb: "Магазин · Весна / Лето 2026",
      t1: "Наша", t2: "коллекция",
      lede: "Букеты на заказ. Выбирайте по ценовому диапазону или напишите нам для полностью авторского дизайна.",
      filterLb: "Категория",
      chips: ["Все", "1 000–2 000", "1 500–2 500", "3 000–4 000", "Свадьба", "Событие"],
      orderCta: "Заказать по телефону",
      whatsappCta: "Написать в WhatsApp",
      categories: [
        { id: "classic", range: "1 000 – 2 000 Kč", title1: "Повседневная", title2: "прелесть", desc: "Небольшие букеты с одним главным цветком и сезонной зеленью. Идеально для гостя, жеста, утренней записки." },
        { id: "signature", range: "1 500 – 2 500 Kč", title1: "Авторские", title2: "букеты", desc: "Подписные композиции флориста. Более насыщенные букеты с романтическим характером и природной палитрой." },
        { id: "premium", range: "3 000 – 4 000 Kč", title1: "Премиум", title2: "коллекция", desc: "Роскошные крупные букеты для особых случаев. Премиум цветы, ручная лента, подписанная карточка." },
        { id: "wedding", range: "На заказ · от 8 000 Kč", title1: "Свадебная", title2: "флористика", desc: "Свадебные букеты, бутоньерки, раннеры, арки, цветочные инсталляции. Консультация бесплатно." },
        { id: "event", range: "На заказ · от 5 000 Kč", title1: "События", title2: "& декор", desc: "Дни рождения, корпоративы, юбилеи. Полное решение от концепции до монтажа." }
      ]
    },
    about: {
      eb: "О нас · С 2019 года",
      t1: "Цветы —", t2: "наш", t3: "родной язык",
      lead1: "Kviten' — пражское ателье, рожденное из любви к украинской цветочной традиции",
      leadEm: "и чешскому чувству детали.",
      lead2: "Наши букеты рассказывают тихие истории — оставляют не слова, а ощущение.",
      body1: "Мы начинали с маленького магазинчика на углу Francouzské, куда люди заходили за цветами на обед с семьей. Сегодня мы декорируем свадьбы, открытия ресторанов, премьеры фильмов и дни рождения — и до сих пор вяжем каждый букет сами.",
      body2: "Покупаем напрямую с аукционов в Алсмере в Нидерландах, дополняем итальянской зеленью и эквадорскими розами. Что не приходит свежим утром, не продаем вечером.",
      body3: "Работаем на чешском, английском, украинском и русском. Заходите на кофе — подскажем именно то, что вы ищете.",
      values: [
        { ico: "✻", t: "Каждый день свежие", p: "Цветы приходят каждое утро в 6:30. Что не продалось к следующему вечеру — отдаем или компостируем." },
        { ico: "❖", t: "Доставка по Праге", p: "Курьер в центр за 2 часа, окраины за 3. Доставка с фото вручения." },
        { ico: "✺", t: "На заказ", p: "Каждый букет разработан для конкретного человека и момента. Никаких готовых букетов из холодильника." }
      ],
      tlTitle1: "Наш", tlTitle2: "путь",
      timeline: [
        { yr: "2019", evt: "Открытие ателье", note: "Маленькое пространство в Виноградах — два стула и холодильник.", loc: "Francouzská 17" },
        { yr: "2021", evt: "Первая свадьба", note: "Декор свадьбы во дворце Лобковиц — начало событийного направления.", loc: "Прага 1" },
        { yr: "2023", evt: "Команда event decor", note: "Отдельная команда для корпоративных событий и премьер.", loc: "Прага" },
        { yr: "2025", evt: "11,8K в Instagram", note: "Сообщество клиентов и коллег — вдохновение по всей Центральной Европе.", loc: "@kviten_flowers_praha" }
      ]
    },
    contact: {
      eb: "Контакты · Напишите нам",
      t1: "Воплотим", t2: "ваш букет", t3: "в жизнь",
      lede: "Обычно отвечаем в течение 30 минут в рабочее время. Для доставки сегодня звоните напрямую.",
      phoneLb: "Телефон", phoneSub: "Отвечаем на русском, English, Українська, Česky.",
      waLb: "WhatsApp", waSub: "Фото, сообщения, голосовые.",
      emailLb: "Email", emailSub: "Для запросов свадеб и событий (подробный бриф).",
      addressLb: "Адрес", addressSub: "Ближайшее метро А · Náměstí Míru · 4 мин пешком.",
      hoursLb: "Часы работы", igLb: "Instagram",
      langLb: "Языки", langSub: "Česky · English · Українська · Русский",
      form: {
        title: "Форма запроса", name: "Имя", email: "Email", phone: "Телефон",
        occ: "Повод", occOpts: ["Букет", "Свадьба", "Событие", "Декор", "Другое"],
        budget: "Бюджет", budgetOpts: ["До 2 000 Kč", "2–4 000 Kč", "4–10 000 Kč", "10 000+ Kč"],
        date: "Дата", msg: "Сообщение",
        msgPh: "Расскажите о вашем моменте — для кого, какой стиль, цвета, ощущение…",
        submit: "Отправить запрос",
        note: "Отправляя, вы соглашаетесь с обработкой данных для ответа на ваш запрос.",
        sent1: "Спасибо!",
        sent2: "Мы получили ваше сообщение. Ответим в течение 30 минут в рабочее время — обычно раньше."
      },
      mapTitle: "Посетите ателье",
      mapDesc: "Заходите на кофе и консультацию. По понедельникам больше всего свежих поставок."
    },
    dekor: {
      eb: "Декор · Свадьбы · Праздники",
      t1: "Декор",
      t2: "ваших",
      t3: "моментов",
      lede: "Свадебная флористика и декор пространства. Работаем с витой зеленью, белыми герберами, гортензиями и фирменной палитрой plum & cream. Консультация бесплатно.",
      tag: "Прага · Декор",
      captionEb: "Фирменный декор",
      captionTitle: "Francouzská · Прага",
      captionDesc: "Свадьба в центре Праги — палитра plum & blue, шестичасовой монтаж.",
      leadEm1: "Декор — не украшение,",
      leadEmHighlight: "это приглашение",
      leadEm2: "в ваш собственный мир.",
      body1: "Каждый проект мы разрабатываем с нуля под конкретную историю. Начинаем с консультации — в ателье или на площадке — и заканчиваем финальным монтажом и фотографиями после события.",
      body2: "Работаем по всей Праге: дворцы, частные виллы, рестораны, террасы. Сотрудничаем с проверенными ивент-планерами, прокатами мебели и собственной командой флористов.",
      servicesTitle1: "Что",
      servicesTitle2: "мы создаём",
      servicesSide: "От одной центральной композиции до полной свадьбы «под ключ».",
      services: [
        { ico: "✻", t: "Свадебный декор", p: "Арки, дорожки, раннеры, бутоньерки, свадебные букеты и декор банкета." },
        { ico: "❖", t: "Праздники", p: "Дни рождения, помолвки, юбилеи. Интимный декор стола или полное пространство на 50+ гостей." },
        { ico: "✺", t: "Инсталляции", p: "Масштабные цветочные инсталляции — фотозоны, цветочные стены, подвесные композиции, задники." }
      ],
      tlTitle1: "Как",
      tlTitle2: "это работает",
      timeline: [
        { yr: "01", evt: "Консультация", note: "Короткий звонок или встреча в ателье. Пространство, стиль, бюджет, дата.", loc: "60 мин" },
        { yr: "02", evt: "Дизайн & смета", note: "Мудборд, палитра, список композиций и точная цена.", loc: "3–5 дней" },
        { yr: "03", evt: "Реализация", note: "День события: монтаж, декор, съёмка, демонтаж.", loc: "В день события" }
      ],
      ctaPrimary: "Запрос свадьбы / события",
      ctaSecondary: "Консультация в WhatsApp"
    },
    eventy: {
      eb: "События · Корпоративы · Премьеры",
      t1: "События",
      t2: "&",
      t3: "моменты",
      lede: "Корпоративные вечера, открытия ресторанов, кинопремьеры и частные праздники. Декор, который работает и на камеру, и вживую.",
      tag: "Прага · События",
      captionEb: "Инсталляция события",
      captionTitle: "Фирменная композиция",
      captionDesc: "Центровая композиция для премьеры — 8 часов работы, 6 видов цветов.",
      leadEm1: "Мы работаем со",
      leadEmHighlight: "временем и пространством",
      leadEm2: "— событие это спектакль, которому мы создаём живую сцену.",
      body1: "Декор событий — отдельная дисциплина. Другой темп, чем у свадьбы — быстрее монтаж, острее эстетика, крупнее масштаб. Сотрудничаем с продакшенами, брендами и частными заказчиками.",
      body2: "Референсы: открытия ресторанов в Праге 1, пресс-конференции, дни рождения на виллах Виноградов, премьеры в Люцерне, валентиновые инсталляции для кофеен.",
      servicesTitle1: "Типы",
      servicesTitle2: "событий",
      servicesSide: "Каждый проект — оригинал. Пакеты ниже — только ориентир.",
      services: [
        { ico: "✻", t: "Корпоративные", p: "Конференции, пресс-дни, ужины, новогодние вечеринки. От 30 до 500 гостей." },
        { ico: "❖", t: "Частные", p: "Дни рождения, помолвки, садовые вечеринки. Интимный декор в плам и blush." },
        { ico: "✺", t: "Премьеры & открытия", p: "Кинопремьеры, открытия ресторанов и бутиков. Декор для фото и видео." }
      ],
      kpis: [
        { n: "120+", l: "Событий 2023–2026" },
        { n: "6 ч", l: "Средний монтаж" },
        { n: "48 ч", l: "От запроса к дизайну" }
      ],
      ctaPrimary: "Запрос события",
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
