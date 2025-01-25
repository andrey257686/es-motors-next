import { forwardRef, type ElementType, type HTMLAttributes } from 'react';
import styles from './Typography.module.scss';

type TypographyVariant =
  | 'logo'
  | 'title'
  | 'header'
  | 'subheader'
  | 'body'
  | 'caption'
  | 'promo';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  variant?: TypographyVariant;
  color?: string;
  sx?: React.CSSProperties;
}

const Typography = forwardRef<
  HTMLElement,
  TypographyProps & {
    children: React.ReactNode | ((props: TypographyProps) => React.ReactNode);
  }
>(
  (
    { as: Component = 'p', variant, color, sx, className, children, ...props },
    ref
  ) => {
    if (children === 'Аккумуляторы') {
      console.log(className);
    }
    const classNames = `${styles.typography} ${
      variant ? styles[variant] : ''
    } ${className ? className : ''}`;

    return (
      <Component
        ref={ref}
        style={{ color, ...sx }}
        className={classNames}
        {...props}
      >
        {typeof children === 'function'
          ? children({ variant, color, sx, ...props })
          : children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';

export default Typography;
