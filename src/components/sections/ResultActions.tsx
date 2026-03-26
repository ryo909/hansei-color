import { DiagnosisType } from '../../data/types';
import { PrimaryButton } from '../ui/PrimaryButton';
import { SecondaryButton } from '../ui/SecondaryButton';

interface ResultActionsProps {
  type: DiagnosisType;
  onCopy: () => void;
  onShareImage: () => void;
  onRetake: () => void;
}

export function ResultActions({ type, onCopy, onShareImage, onRetake }: ResultActionsProps) {
  return (
    <div className="action-grid">
      <PrimaryButton to={`/types/${type.slug}`} fullWidth>
        詳しい解説を見る
      </PrimaryButton>
      <SecondaryButton onClick={onCopy} fullWidth>
        投稿文をコピー
      </SecondaryButton>
      <SecondaryButton onClick={onShareImage} fullWidth>
        画像でシェア
      </SecondaryButton>
      <SecondaryButton onClick={onRetake} fullWidth>
        もう一度診断する
      </SecondaryButton>
    </div>
  );
}
