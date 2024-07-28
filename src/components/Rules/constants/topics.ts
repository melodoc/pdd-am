import { RULE2, RULE3 } from "./rules";

export type TRule = {
  id: string;
  name: string;
  rules: string;
};

export const RULES_MAP: Map<number, TRule> = new Map([
  // [1, { id: "rule_1", name: "Группа-1", rules: RULE2 }],
  [2, { id: "rule_2", name: "Группа-2", rules: RULE2 }],
  [3, { id: "rule_3", name: "Группа-3", rules: RULE3 }],
  [4, { id: "rule_4", name: "Группа-4", rules: RULE2 }],
  [5, { id: "rule_5", name: "Группа-5", rules: RULE2 }],
  [6, { id: "rule_6", name: "Группа-6", rules: RULE2 }],
  [7, { id: "rule_7", name: "Группа-7", rules: RULE2 }],
  [8, { id: "rule_8", name: "Группа-8", rules: RULE2 }],
  [9, { id: "rule_9", name: "Группа-9", rules: RULE2 }],
  [10, { id: "rule_10", name: "Группа-10", rules: RULE2 }],
]);

export const RULES = Array.from(RULES_MAP.values());
