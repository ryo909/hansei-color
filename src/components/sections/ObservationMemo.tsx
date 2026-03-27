import { DiagnosisType } from '../../data/types';
import { buildTypeCssVars } from '../../styles/theme';

interface ObservationMemoProps {
  type: DiagnosisType;
}

export function ObservationMemo({ type }: ObservationMemoProps) {
  return (
    <section className="summary-box summary-box--memo" style={buildTypeCssVars(type.palette)}>
      <h3 className="summary-box__title">観測メモ</h3>
      <p>{type.content.resultMemo}</p>
    </section>
  );
}
