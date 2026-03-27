import { DiagnosisType } from '../../data/types';
import { getFirstParagraph } from '../../lib/utils';
import { MetricBars } from '../ui/MetricBars';
import { buildTypeCssVars } from '../../styles/theme';
import { ObservationMemo } from './ObservationMemo';

interface ResultSummaryProps {
  type: DiagnosisType;
}

export function ResultSummary({ type }: ResultSummaryProps) {
  return (
    <section className="section-card result-summary-card" style={buildTypeCssVars(type.palette)}>
      <div className="result-summary-card__intro">
        <h2 className="section-card__title">見え方の輪郭</h2>
        <p className="result-summary__text">{getFirstParagraph(type.content.overview)}</p>
      </div>
      <div className="summary-box summary-box--type">
        <h3 className="summary-box__title">短い要約</h3>
        <p>{getFirstParagraph(type.content.summary)}</p>
      </div>
      <ObservationMemo type={type} />
      <div className="result-summary-card__metrics">
        <h3 className="summary-box__title">反省成分表</h3>
        <p className="section-card__description">謝意と保身の配合が、どこで誤解を生みやすいかを可視化しています。</p>
      </div>
      <MetricBars type={type} />
    </section>
  );
}
