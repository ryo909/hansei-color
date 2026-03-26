import { DiagnosisType } from '../../data/types';
import { ColorChip } from '../ui/ColorChip';
import { InfoLabel } from '../ui/InfoLabel';

interface ResultHeroProps {
  type: DiagnosisType;
}

export function ResultHero({ type }: ResultHeroProps) {
  return (
    <section className="hero-card hero-card--result">
      <InfoLabel>観測結果</InfoLabel>
      <p className="result-hero__label">あなたの反省の色は</p>
      <h1 className="result-hero__title">{type.name}</h1>
      <p className="result-hero__copy">{type.content.catchCopy}</p>
      <div className="inline-row">
        <ColorChip group={type.group} label={type.group} />
        <ColorChip group={type.group} label={type.density === 'dense' ? '濃い' : '薄い'} />
        <ColorChip group={type.group} label={type.vividness === 'vivid' ? '鮮やか' : 'くすみ'} />
      </div>
    </section>
  );
}
