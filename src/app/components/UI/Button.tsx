import {
  type ButtonHTMLAttributes,
  forwardRef,
  type CSSProperties,
} from "react";

import styles from "./Button.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeButton?: "primary" | "secondary" | "tertiary" | "error" | "cancel";
  sx?: CSSProperties;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    { typeButton = "primary", children, sx, "aria-label": ariaLabel, ...props },
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
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
