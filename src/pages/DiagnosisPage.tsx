import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { ChoiceList } from '../components/sections/ChoiceList';
import { ProgressHeader } from '../components/sections/ProgressHeader';
import { QuestionBlock } from '../components/sections/QuestionBlock';
import { useDiagnosis } from '../hooks/useDiagnosis';

export function DiagnosisPage() {
  const navigate = useNavigate();
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    selectedOptionKey,
    progress,
    canGoBack,
    isSubmitting,
    answerCurrentQuestion,
    goBack,
  } = useDiagnosis();

  if (!currentQuestion) {
    return null;
  }

  return (
    <PageContainer className="page-container--diagnosis">
      <ProgressHeader
        current={currentQuestionIndex + 1}
        total={totalQuestions}
        progress={progress}
        onBack={goBack}
        canGoBack={canGoBack}
      />
      <QuestionBlock question={currentQuestion} />
      <ChoiceList
        question={currentQuestion}
        selectedOptionKey={selectedOptionKey}
        disabled={isSubmitting}
        onSelect={(optionKey) => {
          const result = answerCurrentQuestion(optionKey);
          if (result) {
            navigate('/analyzing', { replace: true });
          }
        }}
      />
    </PageContainer>
  );
}
