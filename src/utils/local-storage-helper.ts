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

export const getSelectedGroup = (): number | null => {
  const selectedGroup = localStorage.getItem(LOCAL_STORAGE_KEYS.selectedGroup);
  return selectedGroup ? JSON.parse(selectedGroup) : null;
};

export const saveSelectedGroup = (group: number) => localStorage
  .setItem(LOCAL_STORAGE_KEYS.selectedGroup, JSON.stringify(group));

export const getSelectedSubGroup = (): number | null => {
  const selectedSubGroup = localStorage.getItem(LOCAL_STORAGE_KEYS.selectedSubGroup);
  return selectedSubGroup ? JSON.parse(selectedSubGroup) : null;
};

export const saveSelectedSubGroup = (subGroup: number) => localStorage
  .setItem(LOCAL_STORAGE_KEYS.selectedSubGroup, JSON.stringify(subGroup));

export const clearSelectedSubGroup = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEYS.selectedSubGroup);
};
