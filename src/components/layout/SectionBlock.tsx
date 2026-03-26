import { PropsWithChildren, ReactNode } from 'react';
import { buildClassName } from '../../lib/utils';

interface SectionBlockProps extends PropsWithChildren {
  title?: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export function SectionBlock({
  title,
  description,
  action,
  className,
  children,
}: SectionBlockProps) {
  return (
    <section className={buildClassName('section-card', className)}>
      {(title || description || action) && (
        <div className="section-card__header">
          <div>
            {title ? <h2 className="section-card__title">{title}</h2> : null}
            {description ? <p className="section-card__description">{description}</p> : null}
          </div>
          {action ? <div>{action}</div> : null}
        </div>
      )}
      {children}
    </section>
  );
}
