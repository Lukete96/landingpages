import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** @default 'rose' */
  tone?: 'rose' | 'nude' | 'gold' | 'ink' | 'soft';
}

/** Small tracked uppercase label/chip in the brand palette. */
export function Badge(props: BadgeProps): JSX.Element;
