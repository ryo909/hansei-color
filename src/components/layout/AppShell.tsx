import { PropsWithChildren } from 'react';

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="app-shell">
      <div className="app-shell__glow" aria-hidden="true" />
      <main className="app-shell__main">{children}</main>
    </div>
  );
}
