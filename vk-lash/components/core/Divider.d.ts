import React from 'react';

export interface DividerProps {
  /** CSS width. @default '100%' */
  width?: string;
  /** Show the small center node. @default true */
  node?: boolean;
  /** @default 'nude' */
  tone?: 'nude' | 'gold';
  style?: React.CSSProperties;
}

/** Thin rule with an optional center node — the catalog's section separator. */
export function Divider(props: DividerProps): JSX.Element;
