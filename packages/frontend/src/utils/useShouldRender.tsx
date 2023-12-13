import { useEffect, useState } from "react";

export function useShouldRender(isOpen: boolean): boolean {
  const [shouldRenderChildren, setShouldRenderChildren] =
    useState<boolean>(isOpen);

  useEffect(() => {
    let timeout: number;

    if (isOpen) {
      setShouldRenderChildren(true);
    } else {
      timeout = window.setTimeout(() => {
        setShouldRenderChildren(false);
      }, 200);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isOpen]);

  return isOpen || shouldRenderChildren;
}
