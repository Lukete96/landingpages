import React from 'react';

/**
 * VKLD Input — soft cream field with label, used in the booking form.
 * Renders <textarea> when multiline; otherwise <input>.
 */
export function Input({
  label,
  hint,
  multiline = false,
  rows = 4,
  style = {},
  id,
  ...rest
}) {
  const fieldId = id || (label ? `vk-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);
  const fieldStyle = {
    width: '100%',
    padding: '13px 16px',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.875rem',
    color: 'var(--text-strong)',
    background: 'var(--surface-raised)',
    border: '1px solid var(--border-soft)',
    borderRadius: 'var(--radius-md)',
    outline: 'none',
    transition: 'border-color var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)',
    resize: multiline ? 'vertical' : undefined,
    fontFamily: 'var(--font-sans)',
  };
  const onFocus = (e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = `0 0 0 3px var(--focus-ring)`; };
  const onBlur = (e) => { e.target.style.borderColor = 'var(--border-soft)'; e.target.style.boxShadow = 'none'; };

  return (
    <label htmlFor={fieldId} style={{ display: 'flex', flexDirection: 'column', gap: 7, ...style }}>
      {label && (
        <span style={{
          fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', fontWeight: 600,
          letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--text-muted)',
        }}>{label}</span>
      )}
      {multiline
        ? <textarea id={fieldId} rows={rows} style={fieldStyle} onFocus={onFocus} onBlur={onBlur} {...rest} />
        : <input id={fieldId} style={fieldStyle} onFocus={onFocus} onBlur={onBlur} {...rest} />}
      {hint && <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{hint}</span>}
    </label>
  );
}
