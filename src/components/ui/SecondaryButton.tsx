import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { buildClassName } from '../../lib/utils';

type ButtonLikeProps = {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  to?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export function SecondaryButton({
  children,
  className,
  fullWidth,
  to,
  type = 'button',
  ...props
}: ButtonLikeProps) {
  const classes = buildClassName('button', 'button--secondary', fullWidth && 'button--full', className);

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
