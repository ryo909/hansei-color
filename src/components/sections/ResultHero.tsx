import { DiagnosisType } from '../../data/types';
import { ColorChip } from '../ui/ColorChip';
import { InfoLabel } from '../ui/InfoLabel';
import { buildTypeCssVars } from '../../styles/theme';
import { splitHighlightText } from '../../lib/utils';

interface ResultHeroProps {
  type: DiagnosisType;
}

export function ResultHero({ type }: ResultHeroProps) {
  const nameParts = splitHighlightText(type.name, type.highlight);

  return (
    <section className="hero-card hero-card--result" style={buildTypeCssVars(type.palette)}>
      <div className="result-hero__topline" aria-hidden="true" />
      <InfoLabel>観測結果</InfoLabel>
      <p className="result-hero__label">あなたの反省の色は</p>
      <span className="result-hero__swatch" aria-hidden="true" />
      <h1 className="result-hero__title">
        {nameParts.before}
        {nameParts.highlight ? <span className="result-hero__accent">{nameParts.highlight}</span> : null}
        {nameParts.after}
      </h1>
      <p className="result-hero__copy">{type.content.catchCopy}</p>
      <div className="inline-row result-hero__chips">
        <ColorChip group={type.group} label={type.highlight} palette={type.palette} />
        <ColorChip group={type.group} label={type.density === 'dense' ? '濃い' : '薄い'} palette={type.palette} />
        <ColorChip
          group={type.group}
          label={type.vividness === 'vivid' ? '鮮やか' : 'くすみ'}
          palette={type.palette}
        />
      </div>
    </section>
  );
}
