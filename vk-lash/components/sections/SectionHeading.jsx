import React from 'react';

/**
 * VKLD SectionHeading — eyebrow + elegant serif title, with the brand's
 * tracked-uppercase kicker and optional decorative divider.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  divider = true,
  tone = 'default',
  style = {},
}) {
  const titleColor = tone === 'inverse' ? 'var(--cream-100)' : 'var(--text-strong)';
  const subColor = tone === 'inverse' ? 'rgba(246,237,228,0.72)' : 'var(--text-muted)';
  return (
    <header
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align,
        gap: 14,
        maxWidth: align === 'center' ? 640 : 'none',
        marginInline: align === 'center' ? 'auto' : 0,
        ...style,
      }}
    >
      {eyebrow && (
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            fontSize: '0.6875rem',
            letterSpacing: 'var(--ls-wider)',
            textTransform: 'uppercase',
            color: 'var(--accent-deep)',
          }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        style={{
          margin: 0,
          fontFamily: 'var(--font-display)',
          fontWeight: 500,
          fontSize: 'clamp(2rem, 4vw, 3.25rem)',
          lineHeight: 1.05,
          letterSpacing: '0.02em',
          color: titleColor,
        }}
      >
        {title}
      </h2>
      {divider && (
        <div style={{ width: 90, marginTop: 2, display: 'flex', alignItems: 'center' }}>
          <span style={{ flex: 1, height: 1, background: 'var(--gold-400)' }} />
          <span style={{ width: 6, height: 6, margin: '0 9px', borderRadius: '50%', background: 'var(--gold-500)' }} />
          <span style={{ flex: 1, height: 1, background: 'var(--gold-400)' }} />
        </div>
      )}
      {subtitle && (
        <p
          style={{
            margin: '4px 0 0',
            maxWidth: 560,
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: '0.9375rem',
            lineHeight: 1.7,
            color: subColor,
          }}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}
