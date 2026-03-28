import { DiagnosisType } from '../../data/types';
import { PrimaryButton } from '../ui/PrimaryButton';
import { SecondaryButton } from '../ui/SecondaryButton';

interface ResultActionsProps {
  type: DiagnosisType;
  onRetake: () => void;
  xShareUrl: string;
  lineShareUrl: string;
}

export function ResultActions({ type, onRetake, xShareUrl, lineShareUrl }: ResultActionsProps) {
  return (
    <section className="section-card result-actions-card">
      <div className="section-card__header">
        <div>
          <h2 className="section-card__title">次にすること</h2>
          <p className="section-card__description">この結果を、詳しく読むことも、そのまま共有することもできます。</p>
        </div>
      </div>
      <div className="action-grid action-grid--result">
        <PrimaryButton to={`/types/${type.slug}`} fullWidth>
          タイプ詳細を読む
        </PrimaryButton>
        <SecondaryButton href={xShareUrl} target="_blank" rel="noopener noreferrer" fullWidth>
          Xで共有
        </SecondaryButton>
        <SecondaryButton href={lineShareUrl} target="_blank" rel="noopener noreferrer" fullWidth>
          LINEで共有
        </SecondaryButton>
        <SecondaryButton onClick={onRetake} fullWidth className="button--quiet">
          もう一度診断する
        </SecondaryButton>
      </div>
    </section>
  );
}
