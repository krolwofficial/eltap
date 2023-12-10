import type { MutableRefObject, LegacyRef, RefCallback } from "react";

/**
 * Merges an array of refs into a single ref
 *
 * Inspired by https://github.com/gregberge/react-merge-refs/blob/main/src/index.tsx
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mergeRefs<T = any>(
  refs: Array<MutableRefObject<T> | LegacyRef<T> | undefined>
): RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        (ref as MutableRefObject<T | null>).current = value;
      }
    });
  };
}
