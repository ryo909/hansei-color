import { InfoLabel } from '../ui/InfoLabel';

interface AnalyzingHeroProps {
  message: string;
}

export function AnalyzingHero({ message }: AnalyzingHeroProps) {
  return (
    <section className="hero-card hero-card--center">
      <InfoLabel>観測演出</InfoLabel>
      <h1 className="hero-card__title">反省色を観測中…</h1>
      <p className="hero-card__sublead">{message}</p>
      <div className="loading-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}
