import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { DiagnosisType } from '../../data/types';
import { SectionBlock } from '../layout/SectionBlock';
import { RelatedTypePreview } from './RelatedTypePreview';

interface RelatedTypesSectionProps {
  items?: DiagnosisType[];
  groups?: Array<{
    title: string;
    items: DiagnosisType[];
  }>;
  variant?: 'cards' | 'chips';
}

function RelatedTypeChip({ item }: { item: DiagnosisType }) {
  return (
    <Link
      to={`/types/${item.slug}`}
      className="related-chip"
      style={
        {
          '--type-base': item.palette.base,
          '--type-light': item.palette.light,
          '--type-dark': item.palette.dark,
        } as CSSProperties
      }
    >
      {item.name}
    </Link>
  );
}

export function RelatedTypesSection({ items, groups, variant = 'cards' }: RelatedTypesSectionProps) {
  const renderItems = (sectionItems: DiagnosisType[], prefix: string) =>
    variant === 'chips' ? (
      <div className="related-chips">
        {sectionItems.map((item) => (
          <RelatedTypeChip key={`${prefix}-${item.id}`} item={item} />
        ))}
      </div>
    ) : (
      <div className="card-stack">
        {sectionItems.map((item) => (
          <RelatedTypePreview key={`${prefix}-${item.id}`} type={item} />
        ))}
      </div>
    );

  return (
    <SectionBlock title="関連タイプ" className={variant === 'chips' ? 'related-types-section' : undefined}>
      {groups?.length ? (
        <div className="related-group-stack">
          {groups.map((group) => (
            <div className="related-group" key={group.title}>
              <h3 className="mini-heading">{group.title}</h3>
              {renderItems(group.items, group.title)}
            </div>
          ))}
        </div>
      ) : (
        renderItems(items ?? [], 'related')
      )}
    </SectionBlock>
  );
}
