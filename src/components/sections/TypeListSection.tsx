import { DiagnosisType } from '../../data/types';
import { SectionBlock } from '../layout/SectionBlock';
import { TypeListCard } from './TypeListCard';

interface TypeListSectionProps {
  title: string;
  description?: string;
  items: DiagnosisType[];
}

export function TypeListSection({ title, description, items }: TypeListSectionProps) {
  return (
    <SectionBlock title={title} description={description} className="type-list-section">
      <div className="type-list-grid">
        {items.map((item) => (
          <TypeListCard key={item.id} type={item} />
        ))}
      </div>
    </SectionBlock>
  );
}
