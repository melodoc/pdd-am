import { TTopic } from "../constants/topics";
import { TQuestions } from "../types/question";

export const createTopicsMap = (groupedQuestions: Array<Array<TQuestions>>, group: number)
: Map<number, TTopic> => {
  const topicsMap = new Map<number, TTopic>();

  groupedQuestions.forEach((questionsGroup, index) => {
    const topicId = index + 1;
    // Формирование уникального ключа с учетом group
    const topicKey = group * 100 + topicId;
    const topicName = `Группа-${group}-${topicId}`;

    topicsMap.set(topicKey, {
      id: topicKey,
      name: topicName,
      questions: questionsGroup,
    });
  });

  return topicsMap;
};
