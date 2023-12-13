import React, { ReactElement, useMemo, useState } from "react";
import { ChartsDiagram } from "./ChartsDiagram";

export default {
  title: "Data representation/ChartsDiagram",
  component: ChartsDiagram,
};

export function Default(): ReactElement {
  /**
   * You can provide your custom "dataTestId" prop as well, if not, it will just be automatically generated.
   */

  return <ChartsDiagram />;
}
