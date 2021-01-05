import { differenceWith, isEqual } from "lodash";

export const areObjectArraysEqual = (arr1, arr2) => {
  const mergedLayoutState = arr1.map((obj, idx) => {
    return {
      ...arr2[idx],
      ...obj,
    };
  });

  const diff = differenceWith(arr2, mergedLayoutState, isEqual);

  return diff.length === 0;
};

export const getLayoutFromConfig = (config) => {
  return config?.widgets?.map(w => w.layout);
}
