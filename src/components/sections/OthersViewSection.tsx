import { OthersView } from '../../data/types';
import { SectionBlock } from '../layout/SectionBlock';

interface OthersViewSectionProps {
  views: OthersView;
}

const labels: Array<{ key: keyof OthersView; label: string }> = [
  { key: 'friend', label: '友達' },
  { key: 'boss', label: '上司' },
  { key: 'stranger', label: '初対面' },
];

export function OthersViewSection({ views }: OthersViewSectionProps) {
  return (
    <SectionBlock title="周囲の本音">
      <div className="others-grid">
        {labels.map((item) => (
          <article className="mini-card" key={item.key}>
            <h3 className="mini-card__title">{item.label}</h3>
            <p>{views[item.key]}</p>
          </article>
        ))}
      </div>
    </SectionBlock>
  );
}
