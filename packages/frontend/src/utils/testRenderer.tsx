import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

import type { ReactElement, ReactNode } from "react";
import type { RenderResult } from "@testing-library/react";

function render(ui: ReactElement, options = {}): RenderResult {
  return rtlRender(ui, { ...options });
}

export * from "@testing-library/react";

// override render method
export { render, renderHook };
