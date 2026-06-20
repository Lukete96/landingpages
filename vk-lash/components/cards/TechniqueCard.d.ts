import React from 'react';

export interface TechniqueCardProps {
  image: string;
  /** Technique name (uppercase), e.g. 'Volume Brasileiro'. */
  name: string;
  description: string;
  /** Mirror the layout (image on the right). @default false */
  reverse?: boolean;
  /** CSS object-position for the thumbnail. @default 'center' */
  imagePosition?: string;
  style?: React.CSSProperties;
}

/**
 * Horizontal technique row: thumbnail + name + description.
 * @startingPoint section="Cards" subtitle="Technique description row" viewport="520x170"
 */
export function TechniqueCard(props: TechniqueCardProps): JSX.Element;
