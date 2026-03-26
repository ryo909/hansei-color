import { ReactNode } from 'react';

interface InfoLabelProps {
  children: ReactNode;
}

export function InfoLabel({ children }: InfoLabelProps) {
  return <span className="info-label">{children}</span>;
}
