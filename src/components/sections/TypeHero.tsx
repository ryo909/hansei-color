import { DiagnosisType } from '../../data/types';
import { ColorChip } from '../ui/ColorChip';
import { ParagraphStack } from '../ui/ParagraphStack';
import { buildTypeCssVars } from '../../styles/theme';
import { splitHighlightText } from '../../lib/utils';

interface TypeHeroProps {
  type: DiagnosisType;
}

export function TypeHero({ type }: TypeHeroProps) {
  const nameParts = splitHighlightText(type.name, type.highlight);

  return (
    <section className="hero-card hero-card--type" style={buildTypeCssVars(type.palette)}>
      <span className="type-hero__tag">タイプ詳細</span>
      <h1 className="hero-card__title type-hero__title">
        {nameParts.before}
        {nameParts.highlight ? <span className="type-hero__accent">{nameParts.highlight}</span> : null}
        {nameParts.after}
      </h1>
      <p className="hero-card__lead type-hero__catch">{type.content.catchCopy}</p>
      <ParagraphStack text={type.content.intro} className="hero-card__sublead paragraph-stack--hero" />
      <div className="inline-row type-hero__chips">
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
