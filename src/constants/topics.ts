import { questions1, questions2, questions3, questions4 } from './questions';

export const TOPICS_MAP = new Map([
  [1, { id: 1, name: 'Группа-1', questions: questions1 }],
  [2, { id: 2, name: 'Группа-2', questions: questions2 }],
  [3, { id: 3, name: 'Группа-3', questions: questions3 }],
  [4, { id: 4, name: 'Группа-4', questions: questions4 }],
  [5, { id: 5, name: 'Группа-5', questions: questions1 }],
  [6, { id: 6, name: 'Группа-6', questions: questions1 }],
  [7, { id: 7, name: 'Группа-7', questions: questions1 }],
  [8, { id: 8, name: 'Группа-8', questions: questions1 }],
  [9, { id: 9, name: 'Группа-9', questions: questions1 }],
  [10, { id: 10, name: 'Группа-10', questions: questions1 }]
]);

export const TOPICS = Array.from(TOPICS_MAP.values());
