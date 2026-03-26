import { Link } from 'react-router-dom';
import { DiagnosisType } from '../../data/types';
import { ColorChip } from '../ui/ColorChip';

interface RelatedTypePreviewProps {
  type: DiagnosisType;
}

export function RelatedTypePreview({ type }: RelatedTypePreviewProps) {
  return (
    <Link to={`/types/${type.slug}`} className="related-card">
      <div className="related-card__top">
        <ColorChip group={type.group} label={type.group} />
      </div>
      <h3 className="related-card__title">{type.name}</h3>
      <p className="related-card__text">{type.content.catchCopy}</p>
    </Link>
  );
}
