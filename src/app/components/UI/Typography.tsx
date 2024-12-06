import { forwardRef, type ElementType, type HTMLAttributes } from 'react';
import styles from './Typography.module.scss';

type TypographyVariant =
  | 'logo'
  | 'title'
  | 'header'
  | 'subtitle'
  | 'body'
  | 'caption'
  | 'promo';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  variant?: TypographyVariant;
  color?: string;
  sx?: React.CSSProperties;
}

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ as: Component = 'p', variant, color, sx, children, ...props }, ref) => {
    const classNames = `${styles.typography} ${variant ? styles[variant] : ''}`;

    return (
      <Component
        ref={ref}
        style={{ color, ...sx }}
        className={classNames}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';

export default Typography;
