import React from 'react';

export interface SectionHeadingProps {
  /** Tracked uppercase kicker above the title. */
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** @default 'center' */
  align?: 'center' | 'left';
  /** Show the gold center-node divider under the title. @default true */
  divider?: boolean;
  /** @default 'default' */
  tone?: 'default' | 'inverse';
  style?: React.CSSProperties;
}

/**
 * Section header: eyebrow + serif title + optional divider & subtitle.
 * @startingPoint section="Sections" subtitle="Eyebrow + serif section title" viewport="700x260"
 */
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
