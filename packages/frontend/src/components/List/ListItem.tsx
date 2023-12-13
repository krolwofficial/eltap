import React, { CSSProperties, forwardRef, useMemo } from "react";
import { v4 as uuidV4 } from "uuid";
import { classNames, noop } from "../../utils";

import type { MouseEvent, ReactNode, ComponentPropsWithRef } from "react";
import { Text } from "../Typography";

export interface ListItemProps
  extends Omit<ComponentPropsWithRef<"li">, "className"> {
  /**
   * The ListItem has been clicked on.
   */
  active?: boolean;
  /**
   * Add a custom classname to the ListItem.
   */
  addClassName?: string;
  /**
   * The text or other elements passed into the ListItem.
   */
  children: ReactNode | string;
  /**
   * The disabled state of the ListItem.
   */
  disabled?: boolean;
  /**
   * Showing an icon on the left side.
   */
  iconLeft?: ReactNode;
  /**
   * Apply styles to the list Item.
   */
  listItemStyle?: CSSProperties;
  /**
   * You can pass custom behavior here when it is clicked.
   */
  onClick?: (event: MouseEvent<HTMLLIElement>) => void;
}

/**
 * A ListItem, expected to be used as children of `List`.
 */
export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  (
    {
      addClassName = "",
      children,
      disabled = false,
      active = false,
      iconLeft,
      listItemStyle,
      ...passThrough
    }: ListItemProps,
    ref
  ) => {
    const itemId = useMemo((): string => `list-item-${uuidV4()}`, []);
    const className = classNames(
      "tw-box-border tw-flex tw-items-center tw-text-xs tw-px-4 tw-py-3 tw-space-x-1 tw-w-full",
      "tw-text-default",
      disabled
        ? "tw-cursor-not-allowed tw-text-disabled "
        : "hover:tw-bg-neutral-100 active:tw-bg-neutral-100 tw-cursor-pointer ",
      // active ? "tw-bg-neutral-100" : "tw-bg-white",
      active ? "tw-text-neutral-100" : "tw-bg-white",
      addClassName
    );
    return (
      <li
        style={listItemStyle}
        className={className}
        {...{ disabled }}
        {...passThrough}
        ref={ref}
      >
        {iconLeft && <span className="tw-flex">{iconLeft}</span>}
        <Text addClassName="tw-flex-auto" id={itemId}>
          {children}
        </Text>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
