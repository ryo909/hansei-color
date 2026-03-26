import { DiagnosisQuestion } from '../../data/questions';
import { ChoiceCard } from '../ui/ChoiceCard';

interface ChoiceListProps {
  question: DiagnosisQuestion;
  selectedOptionKey?: string;
  disabled?: boolean;
  onSelect: (optionKey: string) => void;
}

export function ChoiceList({ question, selectedOptionKey, disabled, onSelect }: ChoiceListProps) {
  return (
    <div className="choice-list">
      {question.options.map((option) => (
        <ChoiceCard
          key={option.key}
          isActive={option.key === selectedOptionKey}
          disabled={disabled}
          onClick={() => onSelect(option.key)}
        >
          {option.label}
        </ChoiceCard>
      ))}
    </div>
  );
}
