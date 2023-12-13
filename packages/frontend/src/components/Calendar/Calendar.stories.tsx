import React, { ReactElement, useMemo, useState } from "react";
import { Calendar } from "./Calendar";

export default {
  title: "Inputs/Calendar",
  component: Calendar,
};

export function Default(): ReactElement {
  /**
   * You can provide your custom "dataTestId" prop as well, if not, it will just be automatically generated.
   */

  return <Calendar />;
}
