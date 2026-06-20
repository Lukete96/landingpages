import React from 'react';

export interface PriceRowProps {
  /** Service name (uppercase). */
  name: string;
  /** Optional secondary line, e.g. 'manutenção'. */
  sub?: string;
  /** Primary price, e.g. 'R$110'. */
  price: string;
  /** Secondary price aligned to the sub line. */
  subPrice?: string;
  style?: React.CSSProperties;
}

/**
 * Price-list line with a dotted leader — the "Valores" page unit.
 * @startingPoint section="Cards" subtitle="Price-list line item" viewport="520x110"
 */
export function PriceRow(props: PriceRowProps): JSX.Element;
