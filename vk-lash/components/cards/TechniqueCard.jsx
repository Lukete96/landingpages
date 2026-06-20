import React from 'react';

/**
 * VKLD TechniqueCard — horizontal photo + name + description, mirroring the
 * "Técnicas" catalog page (Volume Brasileiro, Egípcio, Fox, Luxo).
 */
export function TechniqueCard({ image, name, description, reverse = false, imagePosition = 'center', style = {} }) {
  return (
    <article
      style={{
        display: 'grid',
        gridTemplateColumns: '120px 1fr',
        direction: reverse ? 'rtl' : 'ltr',
        alignItems: 'center',
        gap: 22,
        padding: 16,
        background: 'var(--surface-card)',
        border: '1px solid var(--border-soft)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-xs)',
        transition: 'box-shadow var(--dur-base) var(--ease-soft), transform var(--dur-base) var(--ease-soft)',
        ...style,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-xs)'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: 120, height: 130, objectFit: 'cover', objectPosition: imagePosition,
          borderRadius: 'var(--radius-md)', display: 'block', direction: 'ltr',
        }}
      />
      <div style={{ direction: 'ltr', textAlign: reverse ? 'right' : 'left' }}>
        <h3 style={{
          margin: '0 0 8px', fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', fontWeight: 600,
          letterSpacing: 'var(--ls-wider)', textTransform: 'uppercase', color: 'var(--text-strong)',
        }}>{name}</h3>
        <p style={{
          margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '0.8125rem',
          lineHeight: 1.7, color: 'var(--text-body)',
        }}>{description}</p>
      </div>
    </article>
  );
}
