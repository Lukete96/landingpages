import React from 'react';

/**
 * VKLD PriceRow — a single line of the price list (Valores page):
 * service name + optional maintenance sub-line on the left, price(s) on the right,
 * joined by a delicate dotted leader.
 */
export function PriceRow({ name, sub, price, subPrice, style = {} }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, ...style }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
        <span style={{
          fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', fontWeight: 600,
          letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--text-strong)',
          whiteSpace: 'nowrap',
        }}>{name}</span>
        <span style={{ flex: 1, borderBottom: '1px dotted var(--divider)', transform: 'translateY(-3px)' }} />
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600,
          color: 'var(--text-strong)', whiteSpace: 'nowrap',
        }}>{price}</span>
      </div>
      {(sub || subPrice) && (
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
          <span style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 300,
            color: 'var(--text-muted)', whiteSpace: 'nowrap', fontStyle: 'italic',
          }}>{sub}</span>
          <span style={{ flex: 1 }} />
          {subPrice && (
            <span style={{
              fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', fontWeight: 400,
              color: 'var(--text-muted)', whiteSpace: 'nowrap',
            }}>{subPrice}</span>
          )}
        </div>
      )}
    </div>
  );
}
