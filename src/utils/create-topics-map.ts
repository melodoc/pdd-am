import { TTopic } from "../constants/topics";
import { TQuestions } from "../types/question";

export const createTopicsMap = (groupedQuestions: Array<Array<TQuestions>>, group: number)
: Map<number, TTopic> => {
  const topicsMap = new Map<number, TTopic>();

  groupedQuestions.forEach((questionsGroup, index) => {
    const topicId = index + 1;
    const id = group * 10 + topicId;
    const name = `Группа-${group}`;
    const subGroupName = `Подгруппа-${topicId}`;

    topicsMap.set(id, {
      id,
      name,
      group,
      subGroupName,
      questions: questionsGroup,
    });
  });

  return topicsMap;
};
