import React, { forwardRef, ReactNode } from "react";
import { classNames } from "../../utils";
import { useShouldRender } from "../../utils/useShouldRender";

import type { CSSProperties, ComponentPropsWithRef } from "react";

export interface ListProps
  extends Omit<ComponentPropsWithRef<"ul">, "className"> {
  /**
   * Generally expects children to be `<ListItem />`s, but this is not enforced.
   */
  children: ReactNode;
  dataTestId?: string;
  /**
   * Shows if the List is visible.
   */
  isOpen?: boolean;
  /**
   * Apply custom styles to the List.
   */
  style?: CSSProperties;
}

/**
 * Displays a list of elements to the user.
 *
 * This component is not used directly. Used for Select.
 */
export const List = forwardRef<HTMLUListElement, ListProps>(
  (
    {
      children,
      dataTestId,
      isOpen = true,
      style = {},
      ...passThrough
    }: ListProps,
    ref
  ) => {
    const shouldRender = useShouldRender(isOpen);

    const className = classNames(
      "tw-bg-white tw-absolute tw-w-full tw-box-border tw-m-0 tw-py-1 tw-border-solid tw-border-neutral-700 tw-border tw-rounded tw-overflow-auto focus:tw-outline-none tw-shadow-popover tw-transition-opacity",
      "tw-text-default dark:tw-text-gray-100",
      isOpen ? "tw-z-20" : "tw-opacity-0 tw-z-0"
    );

    return (
      <ul
        data-testid={dataTestId || "unordered-list"}
        className={className}
        style={style}
        {...passThrough}
        ref={ref}
      >
        {shouldRender && children}
      </ul>
    );
  }
);
List.displayName = "List";
