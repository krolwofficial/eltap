import { FC, ReactNode, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

export interface PortalProps {
  children: ReactNode;
  /**
   * Add a data test id to the portal
   */
  dataTestId?: string;
}

export const Portal: FC<PortalProps> = ({
  children,
  dataTestId,
}: PortalProps) => {
  // support server side rendering
  if (typeof document === "undefined") return null;

  const portalEl = useMemo(() => document.createElement("div"), []);
  portalEl.setAttribute("data-testid", dataTestId || "portal");

  useEffect(() => {
    document.body.appendChild(portalEl);

    return () => {
      document.body.removeChild(portalEl);
    };
  }, []);

  return createPortal(children, portalEl);
};
