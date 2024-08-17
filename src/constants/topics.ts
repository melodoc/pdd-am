import { TQuestions } from "../types/question";
import { createTopicsMap } from "../utils/create-topics-map";
import { mergeTopicMaps } from "../utils/merge-topic-maps";
import { splitQuestions } from "../utils/split-questions";
import {
  questions1,
  questions2,
  questions3,
  questions4,
  questions5,
  questions6,
  questions7,
  questions8,
  questions9,
  questions10,
} from "./questions";

export type TTopic = {
  id: number;
  name: string;
  group: number;
  subGroupName: string;
  questions: TQuestions[];
};

const topicsMaps = [
  questions1,
  questions2,
  questions3,
  questions4,
  questions5,
  questions6,
  questions7,
  questions8,
  questions9,
  questions10,
].map((questions, index) => createTopicsMap(splitQuestions(questions), index + 1));

export const TOPICS_MAP = mergeTopicMaps(...topicsMaps);

export const TOPICS = Array.from(TOPICS_MAP.values());
