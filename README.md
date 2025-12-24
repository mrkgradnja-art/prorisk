# Prorisk - Landing Page

Modern landing page za Prorisk osiguranje, izrađen s React i TypeScript.

## Značajke

- 🎨 Moderni dizajn s dinamičkim efektima
- 📱 Potpuno responzivan dizajn
- 🎯 Tri funkcionalne forme (Kontakt, Ponuda, Prijava štete)
- 🔧 Admin panel za uređivanje sadržaja
- 🗺️ Integrirana karta Zagreba
- ✨ Animacije s Framer Motion

## Boje

- Primarna plava: `#50535b`
- Akcent narančasta: `#f64a00`
- Crvena za detalje: `#CF1E07`

## Instalacija

```bash
npm install
```

## Pokretanje development servera

```bash
npm run dev
```

Aplikacija će biti dostupna na `http://localhost:5173`

## Build za produkciju

```bash
npm run build
```

## Struktura projekta

```
src/
├── components/
│   ├── Header.tsx          # Navigacijski header
│   ├── Footer.tsx          # Footer s blur efektom
│   ├── ZagrebMap.tsx       # Karta Zagreba
│   └── forms/
│       ├── ContactForm.tsx      # Kontakt forma
│       ├── OfferForm.tsx        # Forma za ponudu
│       └── DamageReportForm.tsx # Forma za prijavu štete
├── pages/
│   ├── Home.tsx            # Landing page
│   ├── Ponuda.tsx          # Stranica s ponudom
│   └── Admin.tsx           # Admin panel
└── App.tsx                 # Glavna aplikacija
```

## Funkcionalnosti

### Landing Page
- Hero sekcija s animiranim pozadinama
- Statistike
- Sekcija usluga
- Proširena središnja sekcija s prednostima
- Karta Zagreba na dnu

### Ponuda stranica
- Odabir vrste osiguranja
- Tri taba s formama:
  - Kontakt forma
  - Forma za podatke za ponudu (prilagođena vrstama osiguranja)
  - Forma za prijavu štete (s uputama po vrstama osiguranja)

### Admin Panel
- Uređivanje sadržaja stranice
- Dodavanje/brisanje sekcija
- Promjena redoslijeda
- Spremanje u localStorage

## Tehnologije

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- React Hook Form
- Lucide React (ikone)

