import { DiagnosisType } from '../../data/types';
import { SectionBlock } from '../layout/SectionBlock';
import { getFirstParagraph } from '../../lib/utils';
import { MetricBars } from '../ui/MetricBars';

interface ResultSummaryProps {
  type: DiagnosisType;
}

export function ResultSummary({ type }: ResultSummaryProps) {
  return (
    <SectionBlock title="結果カード" description="長文はここでは出さず、見え方の輪郭だけを短くまとめています。">
      <p className="result-summary__text">{getFirstParagraph(type.content.overview)}</p>
      <MetricBars type={type} />
      <div className="summary-box">
        <h3 className="summary-box__title">短い要約</h3>
        <p>{getFirstParagraph(type.content.summary)}</p>
      </div>
    </SectionBlock>
  );
}
