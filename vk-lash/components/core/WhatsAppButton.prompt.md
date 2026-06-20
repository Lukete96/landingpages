The studio's signature booking action — a green WhatsApp pill that opens a `wa.me` link with a prefilled Portuguese message. Use it as the main CTA in the hero, sticky bar, and contact section.

```jsx
<WhatsAppButton phone="5511999999999" message="Olá! Quero agendar Volume Brasileiro 💕" />
```

Props: `phone` (digits only, with country code), `message`, `size` (`sm|md|lg`), `full`. Always green — do not restyle the color; it signals WhatsApp.
