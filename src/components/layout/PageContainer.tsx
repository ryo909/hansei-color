import { PropsWithChildren } from 'react';
import { buildClassName } from '../../lib/utils';

interface PageContainerProps extends PropsWithChildren {
  className?: string;
}

export function PageContainer({ children, className }: PageContainerProps) {
  return <div className={buildClassName('page-container', className)}>{children}</div>;
}
