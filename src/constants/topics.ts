import { questions1, questions2 } from './questions';

export const TOPICS_MAP = new Map([
  [1, { id: 1, name: 'Тема 1', questions: questions1 }],
  [2, { id: 2, name: 'Тема 2', questions: questions2 }],
  [3, { id: 3, name: 'Тема 3', questions: questions1 }],
  [4, { id: 4, name: 'Тема 4', questions: questions1 }],
  [5, { id: 5, name: 'Тема 5', questions: questions1 }],
  [6, { id: 6, name: 'Тема 6', questions: questions1 }],
  [7, { id: 7, name: 'Тема 7', questions: questions1 }],
  [8, { id: 8, name: 'Тема 8', questions: questions1 }],
  [9, { id: 9, name: 'Тема 9', questions: questions1 }],
  [10, { id: 10, name: 'Тема 10', questions: questions1 }]
]);

export const TOPICS = Array.from(TOPICS_MAP.values());
