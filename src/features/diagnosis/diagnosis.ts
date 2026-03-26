import { DensityQuestion, questions, VividnessQuestion } from '../../data/questions';
import { BaseGroup, Density, DiagnosisResult, TypeId, Vividness } from '../../data/types';
import { createGroupScoreRecord, groupPriority, isGroupQuestion, pickTopGroups } from './diagnosisHelpers';

export type AnswerMap = Record<string, string>;

function resolveGroup(answers: AnswerMap): BaseGroup {
  const totalScores = createGroupScoreRecord();
  const coreScores = createGroupScoreRecord();

  questions.forEach((question) => {
    if (!isGroupQuestion(question)) {
      return;
    }

    const answerKey = answers[question.id];
    const picked = question.options.find((option) => option.key === answerKey);
    if (!picked) {
      return;
    }

    totalScores[picked.group] += question.weight;
    if (question.weight === 2) {
      coreScores[picked.group] += question.weight;
    }
  });

  let candidates = pickTopGroups(totalScores);
  if (candidates.length === 1) {
    return candidates[0];
  }

  const topCore = Math.max(...candidates.map((group) => coreScores[group]));
  candidates = candidates.filter((group) => coreScores[group] === topCore);
  if (candidates.length === 1) {
    return candidates[0];
  }

  const coreQuestionIds = ['q1', 'q2', 'q3', 'q4'] as const;
  for (const questionId of coreQuestionIds) {
    const answerKey = answers[questionId];
    const question = questions.find((item) => item.id === questionId);
    if (!question || !isGroupQuestion(question)) {
      continue;
    }

    const picked = question.options.find((option) => option.key === answerKey);
    if (picked && candidates.includes(picked.group)) {
      return picked.group;
    }
  }

  return groupPriority.find((group) => candidates.includes(group)) ?? 'blue';
}

function resolveDensity(answers: AnswerMap): Density {
  const q9 = questions.find((question): question is DensityQuestion => question.id === 'q9');
  const q10 = questions.find((question): question is DensityQuestion => question.id === 'q10');
  const pickedQ9 = q9?.options.find((option) => option.key === answers.q9);
  const pickedQ10 = q10?.options.find((option) => option.key === answers.q10);

  const denseCount = [pickedQ9, pickedQ10].filter((option) => option?.value === 'dense').length;
  const lightCount = [pickedQ9, pickedQ10].filter((option) => option?.value === 'light').length;

  if (denseCount === lightCount) {
    return pickedQ9?.value === 'light' ? 'light' : 'dense';
  }

  return denseCount > lightCount ? 'dense' : 'light';
}

function resolveVividness(answers: AnswerMap): Vividness {
  const q11 = questions.find((question): question is VividnessQuestion => question.id === 'q11');
  const q12 = questions.find((question): question is VividnessQuestion => question.id === 'q12');
  const pickedQ11 = q11?.options.find((option) => option.key === answers.q11);
  const pickedQ12 = q12?.options.find((option) => option.key === answers.q12);

  const vividCount = [pickedQ11, pickedQ12].filter((option) => option?.value === 'vivid').length;
  const mutedCount = [pickedQ11, pickedQ12].filter((option) => option?.value === 'muted').length;

  if (vividCount === mutedCount) {
    return pickedQ11?.value === 'muted' ? 'muted' : 'vivid';
  }

  return vividCount > mutedCount ? 'vivid' : 'muted';
}

export function calculateDiagnosis(answers: AnswerMap): DiagnosisResult {
  const group = resolveGroup(answers);
  const density = resolveDensity(answers);
  const vividness = resolveVividness(answers);
  const typeId = `${group}_${density}_${vividness}` as TypeId;

  return {
    typeId,
    answers,
    createdAt: new Date().toISOString(),
  };
}
