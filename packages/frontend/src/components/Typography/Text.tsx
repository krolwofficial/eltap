import React from "react";
import { classNames } from "../../utils";

import type {
  ElementType,
  ReactElement,
  ReactNode,
  ComponentPropsWithoutRef,
} from "react";

const sizeVariants = {
  xs: "tw-text-xs",
  sm: "tw-text-sm",
  md: "tw-text-md",
  lg: "tw-text-lg",
  xl: "tw-text-xl",
};

const weightVariants = {
  regular: "tw-font-normal",
  medium: "tw-font-medium",
  semiBold: "tw-font-semibold",
};

const appearanceVariants = {
  disabled: "tw-text-disabled",
  primary: "tw-text-default",
};

export type TextProps<T = Omit<ComponentPropsWithoutRef<"p">, "className">> =
  T & {
    addClassName?: string;
    appearance?: keyof typeof appearanceVariants;
    children: ReactNode;
    dataTestId?: string;
    /**
     * The type of element to render.
     *
     * By default, `Text` renders a `p` element, but any element type can be used.
     */
    as?: ElementType;
    size?: keyof typeof sizeVariants;
    weight?: keyof typeof weightVariants;
  };

export function Text<T = Omit<ComponentPropsWithoutRef<"p">, "className">>({
  addClassName,
  appearance = "primary",
  children,
  dataTestId,
  as: Component = "p",
  size = "md",
  weight = "regular",
  ...passThrough
}: TextProps<T>): ReactElement {
  const className = classNames(
    "tw-m-0 tw-p-0 tw-font-inter",
    appearanceVariants[appearance],
    sizeVariants[size],
    weightVariants[weight],
    addClassName
  );

  return (
    <Component
      data-testid={dataTestId || "text"}
      className={className}
      {...passThrough}
    >
      {children}
    </Component>
  );
}
