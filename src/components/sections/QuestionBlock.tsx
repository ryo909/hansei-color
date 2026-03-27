import { DiagnosisQuestion } from '../../data/questions';
import { SectionBlock } from '../layout/SectionBlock';

interface QuestionBlockProps {
  question: DiagnosisQuestion;
}

export function QuestionBlock({ question }: QuestionBlockProps) {
  return (
    <SectionBlock className="question-block">
      <p className="question-block__eyebrow">理想の自分ではなく、素の反応に近いものを選んでください。</p>
      <h2 className="question-block__title">{question.prompt}</h2>
    </SectionBlock>
  );
}
