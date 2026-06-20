import React from 'react';

export interface ServiceCardProps {
  /** Image URL. */
  image: string;
  /** Service name (rendered uppercase). */
  name: string;
  description?: string;
  /** Formatted price, e.g. 'R$110'. */
  price?: string;
  /** Small note next to price, e.g. 'a partir de'. */
  priceNote?: string;
  /** Corner badge text. */
  badge?: string;
  /** Image area height in px. @default 220 */
  imageHeight?: number;
  /** CSS object-position for the image. @default 'center' */
  imagePosition?: string;
  onSelect?: () => void;
  style?: React.CSSProperties;
}

/**
 * Procedure/service card: image + name + note + price.
 * @startingPoint section="Cards" subtitle="Service / procedure card" viewport="380x440"
 */
export function ServiceCard(props: ServiceCardProps): JSX.Element;
