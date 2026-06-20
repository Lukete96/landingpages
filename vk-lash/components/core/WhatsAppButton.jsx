import React from 'react';

/** WhatsApp icon (official glyph, single path). */
function WhatsAppGlyph({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.207zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.078 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z" />
    </svg>
  );
}

/**
 * VKLD WhatsApp CTA — the studio's primary booking action.
 * Builds a wa.me link with a prefilled Portuguese message.
 */
export function WhatsAppButton({
  phone = '5500000000000',
  message = 'Olá! Gostaria de agendar um horário 💕',
  children = 'Agendar pelo WhatsApp',
  size = 'lg',
  full = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '9px 18px', fontSize: '0.75rem' },
    md: { padding: '13px 26px', fontSize: '0.8125rem' },
    lg: { padding: '16px 34px', fontSize: '0.875rem' },
  };
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        padding: sizes[size].padding,
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: sizes[size].fontSize,
        letterSpacing: 'var(--ls-wide)',
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: '#fff',
        background: 'var(--whatsapp)',
        borderRadius: 'var(--radius-pill)',
        boxShadow: 'var(--shadow-whatsapp)',
        width: full ? '100%' : 'auto',
        cursor: 'pointer',
        transition: 'transform var(--dur-fast) var(--ease-soft), filter var(--dur-fast) var(--ease-soft)',
        ...style,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.filter = 'brightness(1.05)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.filter = 'none'; }}
      {...rest}
    >
      <WhatsAppGlyph size={size === 'lg' ? 20 : 17} />
      {children}
    </a>
  );
}
