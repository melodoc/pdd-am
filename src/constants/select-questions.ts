import { questions1 } from './questions';

export const TOPICS_MAP = new Map([
  [1, { id: 1, name: 'Тема 1', questions: questions1 }],
  [2, { id: 2, name: 'Тема 2', questions: questions1 }],
  [3, { id: 2, name: 'Тема 2', questions: questions1 }],
  [4, { id: 2, name: 'Тема 2', questions: questions1 }],
  [5, { id: 2, name: 'Тема 2', questions: questions1 }],
  [6, { id: 2, name: 'Тема 2', questions: questions1 }],
  [7, { id: 2, name: 'Тема 2', questions: questions1 }],
  [8, { id: 2, name: 'Тема 2', questions: questions1 }],
  [9, { id: 2, name: 'Тема 2', questions: questions1 }],
  [10, { id: 10, name: 'Тема 10', questions: questions1 }]
]);

export const TOPICS = Array.from(TOPICS_MAP.values());
