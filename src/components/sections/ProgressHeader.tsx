import { ProgressBar } from '../ui/ProgressBar';
import { TextButton } from '../ui/TextButton';

interface ProgressHeaderProps {
  current: number;
  total: number;
  progress: number;
  onBack: () => void;
  canGoBack: boolean;
}

export function ProgressHeader({ current, total, progress, onBack, canGoBack }: ProgressHeaderProps) {
  return (
    <div className="progress-header">
      <div className="progress-header__top">
        <TextButton onClick={onBack} disabled={!canGoBack}>
          戻る
        </TextButton>
        <span className="progress-header__count">
          {current} / {total}
        </span>
      </div>
      <ProgressBar value={progress} />
    </div>
  );
}
