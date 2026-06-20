import React from 'react';

/**
 * VKLD ServiceCard — a procedure/service with image, name, short note and price.
 * White card, soft shadow, gentle lift on hover; the catalog's core unit.
 */
export function ServiceCard({
  image,
  name,
  description,
  price,
  priceNote,
  badge,
  imageHeight = 220,
  imagePosition = 'center',
  onSelect,
  style = {},
}) {
  return (
    <article
      onClick={onSelect}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--border-soft)',
        cursor: onSelect ? 'pointer' : 'default',
        transition: 'transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
        ...style,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
    >
      <div style={{ position: 'relative', height: imageHeight, overflow: 'hidden' }}>
        <img
          src={image}
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: imagePosition, display: 'block' }}
        />
        {badge && (
          <span style={{ position: 'absolute', top: 14, left: 14 }}>
            <span style={{
              display: 'inline-block', padding: '5px 12px', fontFamily: 'var(--font-sans)',
              fontSize: '0.625rem', fontWeight: 600, letterSpacing: 'var(--ls-wider)',
              textTransform: 'uppercase', color: 'var(--rose-600)', background: 'rgba(255,255,255,0.92)',
              borderRadius: 'var(--radius-pill)', backdropFilter: 'blur(4px)',
            }}>{badge}</span>
          </span>
        )}
      </div>
      <div style={{ padding: '22px 24px 24px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        <h3 style={{
          margin: 0, fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', fontWeight: 600,
          letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--text-strong)',
        }}>{name}</h3>
        {description && (
          <p style={{
            margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '0.8125rem',
            lineHeight: 1.65, color: 'var(--text-body)', flex: 1,
          }}>{description}</p>
        )}
        {price && (
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 4 }}>
            <span style={{
              fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.75rem',
              color: 'var(--text-strong)', lineHeight: 1,
            }}>{price}</span>
            {priceNote && (
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{priceNote}</span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
