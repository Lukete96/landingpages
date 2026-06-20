import React from 'react';

/**
 * VKLD Button — elegant pill button in the brand's rose / gold / nude treatments.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  full = false,
  icon = null,
  iconRight = null,
  as = 'button',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 18px', fontSize: '0.75rem', gap: 7 },
    md: { padding: '13px 28px', fontSize: '0.8125rem', gap: 9 },
    lg: { padding: '17px 38px', fontSize: '0.875rem', gap: 10 },
  };

  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--ink-900)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-cta)',
    },
    gold: {
      background: 'var(--gold-gradient)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-md)',
    },
    nude: {
      background: 'var(--nude-400)',
      color: 'var(--text-onnude)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-xs)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid var(--taupe-500)',
      boxShadow: 'none',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent',
      boxShadow: 'none',
    },
  };

  const Tag = as;
  return (
    <Tag
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: sizes[size].gap,
        padding: sizes[size].padding,
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: sizes[size].fontSize,
        letterSpacing: 'var(--ls-wide)',
        textTransform: 'uppercase',
        textDecoration: 'none',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        width: full ? '100%' : 'auto',
        transition: 'transform var(--dur-fast) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft), filter var(--dur-fast) var(--ease-soft)',
        ...variants[variant],
        ...style,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.filter = 'brightness(1.04)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.filter = 'none'; }}
      onMouseDown={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(0.98)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'translateY(-2px) scale(1)'; }}
      {...rest}
    >
      {icon && <span style={{ display: 'inline-flex' }}>{icon}</span>}
      {children}
      {iconRight && <span style={{ display: 'inline-flex' }}>{iconRight}</span>}
    </Tag>
  );
}
