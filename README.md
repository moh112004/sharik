# Sharik Creatives — React Project

موقع شارك كريتفز كمشروع React + Vite.

## التشغيل المحلي

```bash
npm install
npm run dev
```

الموقع راح يفتح على `http://localhost:5173`.

## البناء للنشر

```bash
npm run build
```

الناتج في مجلد `dist/` — ارفعه على أي استضافة ساكنة (Netlify, Vercel, GitHub Pages…).

## بنية المشروع

```
react-project/
├── index.html               # الـ entry HTML
├── package.json
├── vite.config.js
├── public/
│   └── assets/
│       ├── hero.png
│       └── logos/           # شعارات الشركاء
└── src/
    ├── main.jsx             # نقطة البداية
    ├── App.jsx              # المكون الرئيسي
    ├── styles.css           # كل الـ CSS
    └── data/
        ├── content.js       # نصوص العربي والإنجليزي
        └── projects.js      # المشاريع والفيديوهات
```

## الأصول
كل الصور في `public/assets/`. لما تضيف صور جديدة، حطها هناك واستدعِها بمسار `/assets/...`.
