import { useMemo, useState } from 'react';
import { questions } from '../data/questions';
import { AnswerMap, calculateDiagnosis } from '../features/diagnosis/diagnosis';
import { saveDiagnosisResult } from '../features/diagnosis/diagnosisStorage';

export function useDiagnosis() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const canGoBack = currentQuestionIndex > 0;

  const selectedOptionKey = currentQuestion ? answers[currentQuestion.id] : undefined;

  const answerCurrentQuestion = (optionKey: string) => {
    if (!currentQuestion) {
      return null;
    }

    const nextAnswers = {
      ...answers,
      [currentQuestion.id]: optionKey,
    };
    setAnswers(nextAnswers);

    if (!isLastQuestion) {
      setCurrentQuestionIndex((index) => index + 1);
      return null;
    }

    setIsSubmitting(true);
    const result = calculateDiagnosis(nextAnswers);
    saveDiagnosisResult(result);
    return result;
  };

  const goBack = () => {
    if (!canGoBack) {
      return;
    }

    setCurrentQuestionIndex((index) => index - 1);
  };

  const reset = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setIsSubmitting(false);
  };

  return useMemo(
    () => ({
      currentQuestionIndex,
      currentQuestion,
      totalQuestions: questions.length,
      answers,
      selectedOptionKey,
      progress,
      isFirstQuestion,
      canGoBack,
      isSubmitting,
      answerCurrentQuestion,
      goBack,
      reset,
    }),
    [
      answers,
      canGoBack,
      currentQuestion,
      currentQuestionIndex,
      isFirstQuestion,
      isSubmitting,
      progress,
      selectedOptionKey,
    ],
  );
}
