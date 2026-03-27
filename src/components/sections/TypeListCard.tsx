import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { DiagnosisType } from '../../data/types';
import { getFirstParagraph } from '../../lib/utils';

interface TypeListCardProps {
  type: DiagnosisType;
}

export function TypeListCard({ type }: TypeListCardProps) {
  return (
    <Link
      to={`/types/${type.slug}`}
      className="type-list-card"
      style={
        {
          '--type-base': type.palette.base,
          '--type-light': type.palette.light,
          '--type-dark': type.palette.dark,
        } as CSSProperties
      }
    >
      <div className="type-list-card__header">
        <span className="type-list-card__swatch" aria-hidden="true" />
        <span className="type-list-card__detail-link">詳細を見る</span>
      </div>
      <h3 className="type-list-card__name">{type.name}</h3>
      <p className="type-list-card__catch">{getFirstParagraph(type.content.catchCopy)}</p>
      <p className="type-list-card__memo">{type.content.resultMemo}</p>
    </Link>
  );
}
