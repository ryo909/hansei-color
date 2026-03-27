import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { buildClassName } from '../../lib/utils';

type ButtonLikeProps = {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  to?: string;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export function SecondaryButton({
  children,
  className,
  fullWidth,
  to,
  href,
  type = 'button',
  ...props
}: ButtonLikeProps) {
  const classes = buildClassName('button', 'button--secondary', fullWidth && 'button--full', className);

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}
