import { LOCAL_STORAGE_KEYS } from "../constants/local-storage-keys";
import { TSavedAnswers } from "../types/answers";

export const getSavedIncorrectAnswers = (): TSavedAnswers => {
  const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.answers);
  return saved ? JSON.parse(saved) : {};
};

export const saveIncorrectAnswers = (incorrectAnswers: {
    [key: number]: number[];
}) => localStorage.setItem(LOCAL_STORAGE_KEYS.answers, JSON.stringify(incorrectAnswers));

export const clearSavedIncorrectAnswers = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEYS.answers);
};
