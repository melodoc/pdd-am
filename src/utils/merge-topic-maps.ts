import { TTopic } from "../constants/topics";

export const mergeTopicMaps = (
  ...maps: Array<Map<number, TTopic>>
): Map<number, TTopic> => {
  const mergedMap = new Map<number, TTopic>();

  maps.forEach((map) => {
    map.forEach((value, key) => {
      mergedMap.set(key, value);
    });
  });

  return mergedMap;
};
