import React, { useCallback, useMemo, useRef } from "react";
import { createPopper } from "@popperjs/core";
import { noop } from "./noop";

import type { RefCallback, RefObject } from "react";
import type { Options, Placement } from "@popperjs/core";
export type { Placement };

export function usePopper(options?: Partial<Options>): {
  containerRef: RefCallback<HTMLElement | null>;
  rawContainerRef: RefObject<HTMLElement>;
  triggerRef: RefCallback<HTMLElement | null>;
  rawTriggerRef: RefObject<HTMLElement>;
} {
  const trigger = useRef<HTMLElement>(null);
  const container = useRef<HTMLElement>(null);

  const cleanupCallback = useRef(noop);

  const instantiatePopper = useCallback(() => {
    if (!trigger.current) return;
    if (!container.current) return;

    if (cleanupCallback.current) cleanupCallback.current();

    cleanupCallback.current = createPopper(
      trigger.current,
      container.current,
      options
    ).destroy;
  }, [trigger, container, cleanupCallback, options]);

  return useMemo(
    () => ({
      triggerRef: (triggerDomNode) => {
        (trigger as React.MutableRefObject<HTMLElement | null>).current =
          triggerDomNode;
        instantiatePopper();
      },
      containerRef: (popperDomNode) => {
        (container as React.MutableRefObject<HTMLElement | null>).current =
          popperDomNode;
        instantiatePopper();
      },
      rawTriggerRef: trigger,
      rawContainerRef: container,
    }),
    [trigger, container, instantiatePopper]
  );
}
