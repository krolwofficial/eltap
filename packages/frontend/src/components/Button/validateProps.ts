import invariant from "tiny-invariant";
import isIconOnly from "./isIconOnly";

import type { ButtonProps } from "./Button";

export default function validateProps(props: ButtonProps): void {
  invariant(
    isIconOnly(props)
      ? !!props["aria-label"] || !!props["aria-labelledby"]
      : true,
    "`aria-label` or `aria-labelledby` is required for icon-only buttons."
  );
}
