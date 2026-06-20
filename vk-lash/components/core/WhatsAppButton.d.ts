import React from 'react';

export interface WhatsAppButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
  /** Full international number, digits only (e.g. '5511999999999'). */
  phone?: string;
  /** Prefilled message text. */
  message?: string;
  children?: React.ReactNode;
  /** @default 'lg' */
  size?: 'sm' | 'md' | 'lg';
  /** Stretch to container width. @default false */
  full?: boolean;
}

/**
 * WhatsApp booking CTA — opens a wa.me link with a prefilled message.
 * @startingPoint section="Core" subtitle="WhatsApp booking CTA" viewport="700x160"
 */
export function WhatsAppButton(props: WhatsAppButtonProps): JSX.Element;
