import React from 'react';

/**
 * VKLD Divider — the catalog's signature thin rule with a small center node.
 * Use to separate sections gracefully.
 */
export function Divider({ width = '100%', node = true, tone = 'nude', style = {} }) {
  const lineColor = tone === 'gold' ? 'var(--gold-400)' : 'var(--border-nude)';
  const dotColor = tone === 'gold' ? 'var(--gold-500)' : 'var(--taupe-500)';
  return (
    <div
      role="separator"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 0,
        width,
        ...style,
      }}
    >
      <span style={{ flex: 1, height: 1, background: lineColor }} />
      {node && (
        <span
          style={{
            width: 6,
            height: 6,
            margin: '0 10px',
            borderRadius: '50%',
            background: dotColor,
            flex: 'none',
          }}
        />
      )}
      {node && <span style={{ flex: 1, height: 1, background: lineColor }} />}
    </div>
  );
}
