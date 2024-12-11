import {
  type ButtonHTMLAttributes,
  forwardRef,
  type CSSProperties,
} from 'react';

import styles from './Button.module.scss';

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'primary_accent'
  | 'error'
  | 'cancel';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeButton?: ButtonType;
  fullwidth?: boolean;
  sx?: CSSProperties;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    { typeButton = 'primary', children, sx, 'aria-label': ariaLabel, ...props },
    ref
  ) => {
    const buttonClass = `${styles.button} ${styles[typeButton]}`;

    return (
      <button
        ref={ref}
        className={buttonClass}
        style={sx}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
        {(typeButton === 'primary' && (
          <span className={styles.primary_gradient}></span>
        )) ||
          (typeButton === 'primary_accent' && (
            <span className={styles.primary_accent_gradient}></span>
          ))}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
