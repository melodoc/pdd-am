import { TTopic } from "../../../constants/topics";
import { TQuestions } from "../../../types/question";

function getRandomQuestions(questions: TQuestions[], count: number) {
  return questions
    .map((question) => ({ question, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .slice(0, count)
    .map(({ question }) => question);
}

// Главная функция для формирования 25 вопросов
export function generateExamQuestions(
  TOPICS_MAP: Map<number, TTopic>,
) {
  const totalQuestions = 25;
  const numTopics = TOPICS_MAP.size;
  const questionsPerTopic = Math.floor(totalQuestions / numTopics);
  const remainingQuestions = totalQuestions % numTopics;

  // Распределение дополнительных вопросов
  const additionalQuestionsIndices = Array.from(
    { length: remainingQuestions },
    () => Math.floor(Math.random() * numTopics),
  );

  // Формирование итогового массива вопросов
  const examQuestions: TQuestions[] = Array.from(TOPICS_MAP.values())
    .reduce((acc: TQuestions[], topic, index) => {
      const count = questionsPerTopic + additionalQuestionsIndices
        .filter((i) => i === index).length;
      return acc.concat(getRandomQuestions(topic.questions, count));
    }, []);

  return examQuestions;
}
