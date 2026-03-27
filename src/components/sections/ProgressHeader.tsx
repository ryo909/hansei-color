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
        <div className="progress-header__brand">
          <span className="progress-header__title">反省の色診断</span>
          <span className="progress-header__count">
            {current} / {total}
          </span>
        </div>
        <TextButton onClick={onBack} disabled={!canGoBack} className="progress-header__back">
          ← 前へ
        </TextButton>
      </div>
      <div className="progress-header__bar">
        <ProgressBar value={progress} />
      </div>
      <div className="progress-header__footer">
        <span className="progress-header__question">
          Q{current}
        </span>
        <span className="progress-header__caption">
          {current} / {total}
          問目を観測中
        </span>
      </div>
    </div>
  );
}
