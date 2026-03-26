import { GroupQuestion, questions } from '../../data/questions';
import { BaseGroup } from '../../data/types';

export const groupPriority: BaseGroup[] = ['blue', 'purple', 'gold', 'gray'];

export function isGroupQuestion(
  question: (typeof questions)[number],
): question is GroupQuestion {
  return ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8'].includes(question.id);
}

export function createGroupScoreRecord() {
  return {
    purple: 0,
    blue: 0,
    gold: 0,
    gray: 0,
  } satisfies Record<BaseGroup, number>;
}

export function pickTopGroups(scores: Record<BaseGroup, number>) {
  const maxScore = Math.max(...Object.values(scores));
  return (Object.keys(scores) as BaseGroup[]).filter((group) => scores[group] === maxScore);
}
