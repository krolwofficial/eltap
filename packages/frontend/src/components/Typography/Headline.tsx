import React from "react";
import { classNames } from "../../utils";

import type {
  ComponentPropsWithoutRef,
  ElementType,
  ReactElement,
  ReactNode,
} from "react";

const sizeVariants = {
  xxs: "tw-text-base",
  xs: "tw-text-2xl",
  sm: "tw-text-3xl",
  md: "tw-text-4xl",
  lg: "tw-text-5xl",
  xl: "tw-text-6xl",
  dm: "tw-text-7xl",
  dl: "tw-text-8xl",
};

const weightVariants = {
  light: "tw-font-normal",
  regular: "tw-font-normal",
  medium: "tw-font-medium",
  semiBold: "tw-font-semibold",
  bold: "tw-font-bold",
  heavy: "tw-font-extrabold",
};

export type HeadlineProps<
  T = Omit<ComponentPropsWithoutRef<"h1">, "className">
> = T & {
  addClassName?: string;
  children: ReactNode;
  dataTestId?: string;
  /**
   * The heading level of the rendered html element.
   *
   * The level represents the semantic level of the heading within the larger
   * page hierarchy. It is unrelated to the size of the content.
   *
   * In general, there should only be one level 1 heading on the page, and each
   * heading below should incrememted by one for each semantic level.
   *
   * The heading information can be used to generate a table of contents of the
   * document to facilitate accessible navigation. Set heading levels with this
   * in mind.
   *
   * See [MDN Heading](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#usage_notes)
   * for more guidance on usage.
   */
  level: 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * The size of the text.
   *
   * Note that size is separate from level. Size is purely visual - how large the font size is.
   * Level, on the otherhand is semantic - where the headline fits in within the page hierarchy. The highest
   * level headline may (and often won't) be the largest headline.
   */
  size?: keyof typeof sizeVariants;
  weight?: keyof typeof weightVariants;
};

export function Headline<
  T = Omit<ComponentPropsWithoutRef<"h1">, "className">
>({
  addClassName,
  children,
  dataTestId,
  level,
  size = "md",
  weight = "regular",
  ...passThrough
}: HeadlineProps<T>): ReactElement {
  const Component = `h${level}` as ElementType;
  const className = classNames(
    "tw-font-lato tw-text-default dark:tw-text-gray-100 tw-box-border tw-m-0 tw-p-0 tw-border-0",
    sizeVariants[size],
    weightVariants[weight],
    addClassName
  );
  const datatestid = dataTestId || `headline-${level}${size && `-${size}`}`;

  return (
    <Component data-testid={datatestid} className={className} {...passThrough}>
      {children}
    </Component>
  );
}
