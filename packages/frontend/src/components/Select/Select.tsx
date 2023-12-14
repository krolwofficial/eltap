import { List, ListItem } from "../List";
import React, { useEffect, ReactNode } from "react";

import type { ReactElement } from "react";
import { useSelect } from "downshift";
import { Text } from "../Typography";
import { MenuIcon } from "../Icon";

export interface SelectItem {
  id: number;
  name: string;
}

export type Changes = {
  selectedItem: SelectItem;
  highlightedIndex?: number;
  isOpen?: boolean;
};

export type SelectProps = {
  items: SelectItem[] | null;
  dataTestId?: string;
  onChange?: (changes: Changes) => void;
  selectedItem?: SelectItem | null;
  placeholder: string;
  children?: ReactNode;
  updateSelectedItem: (item: SelectItem) => void;
};

export function Select({
  items,
  placeholder = "Select one",
  children,
  updateSelectedItem,
}: SelectProps): ReactElement {
  const [selectedItem, setSelectedItem] = React.useState<SelectItem | null>(
    null
  );

  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items: items || [],
    onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
      if (newSelectedItem !== undefined) {
        setSelectedItem(newSelectedItem);
      }
      updateSelectedItem(highlightedIndex);
    },
  });

  return (
    <>
      <div className="tw-mb-3 tw-border-solid tw-border-neutral-700 tw-border tw-cursor-pointer tw-whitespace-nowrap tw-rounded tw-leading-none tw-outline-none tw-flex tw-items-center tw-relative tw-box-content">
        <div
          className="tw-px-4 tw-py-3 tw-items-center tw-w-full tw-flex tw-direction-row tw-justify-between"
          {...getToggleButtonProps()}
        >
          <Text>{selectedItem !== null ? selectedItem.name : placeholder}</Text>
          <MenuIcon isOpen={isOpen} />
        </div>
      </div>
      {!items ? (
        <p>Loading</p>
      ) : (
        <List style={{ height: "330px" }} isOpen={isOpen} {...getMenuProps()}>
          {isOpen &&
            items.map((item, index) => (
              <ListItem
                key={item.id}
                {...getItemProps({ item, index })}
                active={highlightedIndex === index}
              >
                <span>{item.name}</span>
              </ListItem>
            ))}
          {children}
        </List>
      )}
    </>
  );
}
