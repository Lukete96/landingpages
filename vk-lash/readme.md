# VKLD — Vitória Kelly Lash Design System

A design system for **Vitória Kelly Lash Designer** (VKLD / `@vk_lashdesigner`) — a studio
specializing in high-end lash design and eyelash extensions. The system powers an elegant,
minimal landing page / digital catalog that presents the studio's services and speeds up
client bookings over WhatsApp.

> **Idioma:** the brand and all copy are in **Brazilian Portuguese**. Keep UI copy in pt-BR.

---

## Brand at a glance

- **Name:** Vitória Kelly · Lash Designer (Cílios & Sobrancelhas)
- **Handle:** `@vk_lashdesigner`
- **Services:** Extensão de cílios, Design de sobrancelha, Limpeza de pele
- **Lash techniques:** Volume Brasileiro, Volume Egípcio, Volume Fox, Volume Luxo
- **Primary action:** booking via WhatsApp
- **Aesthetic:** elegant, minimal, feminine — warm cream, nude/taupe, rose-quartz & rose-gold

---

## Sources (for whoever extends this system)

- **Figma:** `Catalogo-base.fig` — 12 image frames of the printed catalog pages (Procedimentos,
  Técnicas, Valores). No tokens/components were defined in the file; it is a reference for layout
  and content only. The palette and type below were derived from these pages.
- **Uploaded brand assets** (in `assets/`): circular logo, the designer's portrait, and the three
  catalog pages (técnicas, procedimentos, valores).
- **GitHub:** `https://github.com/Lukete96/landingpages` — referenced as a landing-page reference
  repo. It was **empty / inaccessible** at build time; explore it yourself for more context if it
  later has content.

---

## Content fundamentals

How the brand writes:

- **Language:** Brazilian Portuguese, always.
- **Voice:** warm, personal, reassuring — first person from Vitória ("eu te respondo", "definimos
  juntas"). Speaks directly to the client as **você**.
- **Tone:** aspirational but down-to-earth; emphasizes care, hygiene, and natural beauty
  ("realçar a sua beleza natural", "com técnica e delicadeza").
- **Casing:** service names and labels are **UPPERCASE with generous letter-spacing**
  (e.g. `EXTENSÃO DE CÍLIOS`). Section titles use an elegant serif, often Title Case or uppercase
  (`Valores`, `TÉCNICAS`).
- **Prices:** Brazilian format — `R$110`, `R$79,90`. Maintenance ("manutenção") is shown as a
  secondary line under each lash technique.
- **Emoji:** used sparingly and warmly — `💕` in WhatsApp messages and the footer. Not in headings.
- **Vibe words:** delicadeza, sob medida, olhar, volume, natural, beleza, agendamento.

Examples:
- Hero: "Realce o seu olhar com cílios sob medida."
- CTA: "Vamos agendar o seu horário?"
- WhatsApp prefilled: "Olá, Vitória! 💕 Meu nome é … Gostaria de agendar: Volume Brasileiro."

---

## Visual foundations

- **Colors.** Warm **cream** page background (`#F6EDE4`), **nude/taupe** for bands and accent bars
  (`#DBB9A8`), near-black **ink** text (`#211C19`). The signature accent is **rose quartz / coral**
  (`#FFB0AC`, from the logo). **Rose-gold** gradients mark premium moments (catalog download,
  dividers, hero ring). WhatsApp green (`#25D366`) is reserved exclusively for the booking CTA.
- **Typography.** Display = **Cormorant Garamond** (elegant high-contrast serif — the catalog's
  "VALORES"/"TÉCNICAS" lettering, often italic for emphasis). Body/UI = **Montserrat**
  (light-to-semibold geometric sans; uppercase tracked labels). *These are Google-Fonts matches —
  the original brand fonts were not embedded in the Figma file (see Caveats).*
- **Spacing.** 4px base scale; airy, generous section padding (~90px block). Centered max-width
  container (1180px).
- **Backgrounds.** Mostly flat cream. One alternate band uses `--cream-200`; the booking band is
  ink (`#211C19`). Soft radial rose wash behind the hero. No busy patterns or textures.
- **Imagery.** Warm, close-up beauty photography — eyes, lashes, the designer's portrait. Soft
  natural light, neutral/cream backdrops. Rounded corners, a cream inner border, and a rose-gold
  glow frame the hero portrait.
- **Corners & cards.** Soft radii everywhere (cards `22px`, buttons pill). Cards are white with a
  `1px` warm border (`--border-soft`) and a diffuse low-contrast shadow; they lift ~6px on hover.
- **Shadows.** Warm, diffuse, brown-tinted (never gray/black). Five-step elevation plus dedicated
  CTA glows (rose, WhatsApp green).
- **Borders & dividers.** Hairline rules with a small center node (dot) — lifted from the catalog.
  Gold dividers under section titles; dotted leaders in the price list.
- **Motion.** Gentle and elegant — soft ease (`cubic-bezier(0.22,0.61,0.36,1)`), fades with a small
  upward translate on reveal. **No bounce.** Hover lifts 2px and brightens slightly; press shrinks
  to ~0.98 scale.
- **Transparency / blur.** Sticky header turns to translucent cream with a backdrop blur once
  scrolled. Floating badges over the portrait use a light translucent white with blur.

---

## Iconography

- The brand is **icon-light**. The only essential brand glyph is the **WhatsApp logo**, drawn as a
  single official path inside `components/core/WhatsAppButton.jsx`.
- A small **download** icon (Feather-style, 2px stroke) accompanies the "Baixar catálogo" button.
- **No icon font or sprite** ships with the brand. If you need more icons, use **Lucide/Feather**
  (1.75–2px stroke, rounded caps) to stay consistent with the download glyph, and keep them
  taupe/ink colored. Avoid filled or playful icon styles.
- **Emoji** appear only in copy (`💕`), never as UI affordances. Decorative dots/nodes (•) act as
  the brand's tiny ornament.
- The **logo** (`assets/logo-vkld.jpeg`) is a circular rose-gold-rimmed mark; use it round, never
  cropped square.

---

## Index / manifest

**Root**
- `styles.css` — global entry (import this). `@import`s the token + base files.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `base.css`.
- `assets/` — `logo-vkld.jpeg`, `portrait-vitoria.jpeg`, `tecnicas.jpeg`, `procedimentos.jpeg`,
  `valores.jpeg`.
- `SKILL.md` — Agent-Skill manifest for using this system in Claude Code.

**Components** (`window.VKLDVitRiaKellyLashDesignSystem_b37c80`)
- `core/` — `Button`, `WhatsAppButton`, `Badge`, `Divider`, `Input`
- `sections/` — `SectionHeading`
- `cards/` — `ServiceCard`, `TechniqueCard`, `PriceRow`

**UI kit**
- `ui_kits/landing/` — full lash-studio landing page (Header, Hero, Procedimentos, Técnicas,
  Valores, Agendamento + WhatsApp form, Footer) assembled in `index.html`. Also a Starting Point.

**Foundation cards** (`guidelines/`) — color, type, spacing and brand specimens for the Design
System tab.

---

## Deploying the landing page (Vercel)

The landing page is plain static HTML/CSS/JS — no build step. To deploy:
1. The page at `ui_kits/landing/index.html` references the compiled bundle (`_ds_bundle.js`) and
   `styles.css` via relative paths, plus React/Babel from CDN. For production, consider
   pre-compiling the JSX (in-browser Babel is dev-only).
2. Replace the placeholder WhatsApp number `5511999999999` (in `ui_kits/landing/Header.jsx`) with
   the studio's real number.
3. Swap the "Baixar catálogo" link to a real PDF when available (currently links the Valores image).
4. Drop the folder on Vercel as a static site.
