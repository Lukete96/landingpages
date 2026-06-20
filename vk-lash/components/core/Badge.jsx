import React from 'react';

/**
 * VKLD Badge — small tracked label/chip. Tones echo the brand palette.
 */
export function Badge({ children, tone = 'rose', style = {}, ...rest }) {
  const tones = {
    rose:  { background: 'var(--accent-soft)', color: 'var(--rose-600)' },
    nude:  { background: 'var(--nude-300)', color: 'var(--text-onnude)' },
    gold:  { background: 'transparent', color: 'var(--gold-500)', border: '1px solid var(--gold-400)' },
    ink:   { background: 'var(--ink-900)', color: 'var(--cream-100)' },
    soft:  { background: 'var(--cream-200)', color: 'var(--text-muted)' },
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '5px 12px',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.625rem',
        fontWeight: 600,
        letterSpacing: 'var(--ls-wider)',
        textTransform: 'uppercase',
        borderRadius: 'var(--radius-pill)',
        border: '1px solid transparent',
        whiteSpace: 'nowrap',
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
