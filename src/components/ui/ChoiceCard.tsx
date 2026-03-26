import { ButtonHTMLAttributes } from 'react';
import { buildClassName } from '../../lib/utils';

interface ChoiceCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

export function ChoiceCard({ className, isActive, children, type = 'button', ...props }: ChoiceCardProps) {
  return (
    <button
      className={buildClassName('choice-card', isActive && 'choice-card--active', className)}
      type={type}
      {...props}
    >
      <span className="choice-card__text">{children}</span>
    </button>
  );
}
