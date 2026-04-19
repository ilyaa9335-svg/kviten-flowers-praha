# Kviten' — Flowers & Decor · Praha

Single-page site for [kviten_flowers_praha](https://www.instagram.com/kviten_flowers_praha/) — a Prague floral atelier (Flowers, Wedding, Event decoration).

## Stack

Static HTML + in-browser JSX (React 18 via UMD + Babel Standalone). No build step.

## Structure

```
index.html        · single entry, contains all CSS
src/
  i18n.jsx        · strings (CZ / EN / UK / RU)
  chrome.jsx      · header, drawer, footer
  home.jsx        · home page + shared IMG map
  shop.jsx        · flower shop with category filters + lightbox
  dekor.jsx       · wedding & celebration decor page
  eventy.jsx      · corporate / private events page
  about.jsx       · O nás
  contact.jsx     · form + map
  app.jsx         · router + mount
assets/           · bouquet + decor photography
uploads/          · original source photos
```

## Local preview

```
python3 -m http.server 8765
open http://localhost:8765
```
