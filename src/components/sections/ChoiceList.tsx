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
      {question.options.map((option, index) => (
        <ChoiceCard
          key={option.key}
          isActive={option.key === selectedOptionKey}
          marker={String.fromCharCode(65 + index)}
          disabled={disabled}
          onClick={() => onSelect(option.key)}
        >
          {option.label}
        </ChoiceCard>
      ))}
    </div>
  );
}
