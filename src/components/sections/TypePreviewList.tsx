import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { DiagnosisType } from '../../data/types';

interface TypePreviewListProps {
  items: DiagnosisType[];
}

export function TypePreviewList({ items }: TypePreviewListProps) {
  return (
    <section className="section-card top-preview-section">
      <div className="section-card__header top-preview-section__header">
        <div>
          <h2 className="section-card__title">結果タイプ見本</h2>
          <p className="section-card__description">
            トップはブランド主導、結果以降はタイプ色が主役になる設計です。
          </p>
        </div>
      </div>
      <div className="top-preview-strip" role="list" aria-label="タイプ見本">
        {items.map((item) => (
          <Link
            key={item.id}
            to={`/types/${item.slug}`}
            className="top-preview-card"
            style={
              {
                '--type-base': item.palette.base,
                '--type-light': item.palette.light,
                '--type-dark': item.palette.dark,
              } as CSSProperties
            }
          >
            <span className="top-preview-card__swatch" aria-hidden="true" />
            <span className="top-preview-card__name">{item.name}</span>
            <span className="top-preview-card__text">{item.content.catchCopy}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
