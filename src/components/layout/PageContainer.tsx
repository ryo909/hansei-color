import { CSSProperties, PropsWithChildren } from 'react';
import { buildClassName } from '../../lib/utils';

interface PageContainerProps extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
}

export function PageContainer({ children, className, style }: PageContainerProps) {
  return (
    <div className={buildClassName('page-container', className)} style={style}>
      {children}
    </div>
  );
}
