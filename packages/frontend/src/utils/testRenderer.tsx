import React from "react";
import { IntlProvider } from "react-intl";
import { render as rtlRender } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

import type { ReactElement, ReactNode } from "react";
import type { RenderResult } from "@testing-library/react";

const Providers = ({ children }: { children?: ReactNode }) => {
  return (
    <IntlProvider defaultLocale="en-US" locale="en-US">
      {children}
    </IntlProvider>
  );
};

function render(ui: ReactElement, options = {}): RenderResult {
  return rtlRender(ui, { wrapper: Providers, ...options });
}

export * from "@testing-library/react";

// override render method
export { render, renderHook };
