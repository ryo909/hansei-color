import { DiagnosisType } from '../../data/types';
import { SectionBlock } from '../layout/SectionBlock';
import { RelatedTypePreview } from './RelatedTypePreview';

interface RelatedTypesSectionProps {
  items?: DiagnosisType[];
  groups?: Array<{
    title: string;
    items: DiagnosisType[];
  }>;
}

export function RelatedTypesSection({ items, groups }: RelatedTypesSectionProps) {
  return (
    <SectionBlock title="関連タイプ">
      {groups?.length ? (
        <div className="related-group-stack">
          {groups.map((group) => (
            <div className="related-group" key={group.title}>
              <h3 className="mini-heading">{group.title}</h3>
              <div className="card-stack">
                {group.items.map((item) => (
                  <RelatedTypePreview key={`${group.title}-${item.id}`} type={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card-stack">
          {items?.map((item) => (
            <RelatedTypePreview key={item.id} type={item} />
          ))}
        </div>
      )}
    </SectionBlock>
  );
}
