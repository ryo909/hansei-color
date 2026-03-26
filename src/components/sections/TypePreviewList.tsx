import { DiagnosisType } from '../../data/types';
import { SectionBlock } from '../layout/SectionBlock';
import { RelatedTypePreview } from './RelatedTypePreview';

interface TypePreviewListProps {
  items: DiagnosisType[];
}

export function TypePreviewList({ items }: TypePreviewListProps) {
  return (
    <SectionBlock
      title="結果タイプ見本"
      description="ネタ診断ですが、名前はしっかり記憶に残る温度で並べています。"
    >
      <div className="card-stack">
        {items.map((item) => (
          <RelatedTypePreview key={item.id} type={item} />
        ))}
      </div>
    </SectionBlock>
  );
}
