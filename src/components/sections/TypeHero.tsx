import { DiagnosisType } from '../../data/types';
import { ColorChip } from '../ui/ColorChip';
import { InfoLabel } from '../ui/InfoLabel';
import { ParagraphStack } from '../ui/ParagraphStack';

interface TypeHeroProps {
  type: DiagnosisType;
}

export function TypeHero({ type }: TypeHeroProps) {
  return (
    <section className="hero-card">
      <InfoLabel>タイプ詳細</InfoLabel>
      <h1 className="hero-card__title">{type.name}</h1>
      <p className="hero-card__lead">{type.content.catchCopy}</p>
      <ParagraphStack text={type.content.intro} className="hero-card__sublead paragraph-stack--hero" />
      <div className="inline-row">
        <ColorChip group={type.group} label={type.group} />
        <ColorChip group={type.group} label={type.density === 'dense' ? '濃い' : '薄い'} />
        <ColorChip group={type.group} label={type.vividness === 'vivid' ? '鮮やか' : 'くすみ'} />
      </div>
    </section>
  );
}
