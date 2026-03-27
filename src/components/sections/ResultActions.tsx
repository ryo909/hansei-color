import { DiagnosisType } from '../../data/types';
import { PrimaryButton } from '../ui/PrimaryButton';
import { SecondaryButton } from '../ui/SecondaryButton';

interface ResultActionsProps {
  type: DiagnosisType;
  onCopy: () => void;
  onShareImage: () => void;
  onRetake: () => void;
  shareState?: string | null;
}

export function ResultActions({ type, onCopy, onShareImage, onRetake, shareState }: ResultActionsProps) {
  return (
    <section className="section-card result-actions-card">
      <div className="section-card__header">
        <div>
          <h2 className="section-card__title">次にすること</h2>
          <p className="section-card__description">スクショ映えを崩さず、そのまま詳細とシェアに繋げます。</p>
        </div>
      </div>
      <div className="action-grid action-grid--result">
        <PrimaryButton to={`/types/${type.slug}`} fullWidth>
          タイプ詳細を読む
        </PrimaryButton>
        <SecondaryButton onClick={onCopy} fullWidth>
          投稿文をコピー
        </SecondaryButton>
        <SecondaryButton onClick={onShareImage} fullWidth>
          画像を保存
        </SecondaryButton>
        <SecondaryButton onClick={onRetake} fullWidth className="button--quiet">
          もう一度診断する
        </SecondaryButton>
      </div>
      {shareState ? <p className="notice-text">{shareState}</p> : null}
    </section>
  );
}
