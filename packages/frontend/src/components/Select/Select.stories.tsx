import React, { ReactElement, useMemo, useState } from "react";
import { Select } from "./Select";

import type { SelectItem } from "./Select";

export default {
  title: "Inputs/Select",
  component: Select,
};

export function SingleSelect(): ReactElement {
  /**
   * You can provide your custom "dataTestId" prop as well, if not, it will just be automatically generated.
   * You can customize the dropdown (<ul>) with the "menuStyle" prop and the list items (<li>) with the "listItemStyle".
   */
  const items = useMemo<SelectItem[]>(
    () =>
      new Array(100).fill(0).map((_val, i) => ({
        id: i,
        name: `Item ${i}`,
      })),
    []
  );
  // const [selectedItem, setSelectedItem] = useState<SelectItem | null>(null);
  const [selectedItem, setSelectedItem] = useState<SelectItem>(items[3]);

  return (
    <Select
      items={items}
      placeholder={"Pick item nr"}
      selectedItem={selectedItem}
      onChange={({ selectedItem }) => {
        setSelectedItem(selectedItem);
      }}
    />
  );
}
