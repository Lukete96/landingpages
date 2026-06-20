import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Uppercase field label. */
  label?: string;
  /** Helper text under the field. */
  hint?: string;
  /** Render a textarea instead of an input. @default false */
  multiline?: boolean;
  /** Rows when multiline. @default 4 */
  rows?: number;
}

/** Soft cream form field with label & hint — used in the booking form. */
export function Input(props: InputProps): JSX.Element;
