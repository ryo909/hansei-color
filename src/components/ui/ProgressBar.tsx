interface ProgressBarProps {
  value: number;
}

export function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="progress-bar" aria-hidden="true">
      <div className="progress-bar__fill" style={{ width: `${value}%` }} />
    </div>
  );
}
