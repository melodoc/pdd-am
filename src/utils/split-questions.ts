import { TQuestions } from "../types/question";

const CHUNK_SIZE = 20;

export const splitQuestions = (questions: Array<TQuestions>): Array<Array<TQuestions>> => {
  const result: Array<Array<TQuestions>> = [];
  for (let i = 0; i < questions.length; i += CHUNK_SIZE) {
    const chunk = questions.slice(i, i + CHUNK_SIZE);
    result.push(chunk);
  }
  return result;
};
