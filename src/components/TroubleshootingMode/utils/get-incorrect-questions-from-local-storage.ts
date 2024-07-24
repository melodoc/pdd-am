import { TOPICS_MAP, TTopic } from "../../../constants/topics";
import { getSavedIncorrectAnswers } from "../../../utils/local-storage-helper";

// Главная функция для формирования вопросов
export function getIncorrectQuestionsFromLocalStorage(): Map<number, TTopic> {
  const incorrectAnswers = getSavedIncorrectAnswers();

  const incorrectQuestionsMap = new Map<number, TTopic>();

  Object.entries(incorrectAnswers).forEach(([topicId, questionIndices]) => {
    const topicIdNumber = Number(topicId);
    const topic = TOPICS_MAP.get(topicIdNumber);
    if (topic) {
      const incorrectQuestions = questionIndices.map((index) => topic.questions[index]);
      incorrectQuestionsMap.set(topicIdNumber, { ...topic, questions: incorrectQuestions });
    }
  });

  return incorrectQuestionsMap;
}
