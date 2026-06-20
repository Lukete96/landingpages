import React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** Visual treatment. @default 'primary' */
  variant?: 'primary' | 'gold' | 'nude' | 'outline' | 'ghost';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Stretch to container width. @default false */
  full?: boolean;
  /** Leading icon node */
  icon?: React.ReactNode;
  /** Trailing icon node */
  iconRight?: React.ReactNode;
  /** Render as a different tag, e.g. 'a'. @default 'button' */
  as?: 'button' | 'a';
}

/**
 * Pill button in the VKLD rose / gold / nude treatments.
 * @startingPoint section="Core" subtitle="Brand pill button" viewport="700x180"
 */
export function Button(props: ButtonProps): JSX.Element;
