"use client";

import React from "react";
import { Select } from "@/components/Select";

import type { SelectProps, SelectItem } from "@/components/Select";

export default function Home() {
  const items = React.useMemo<SelectItem[]>(
    () =>
      new Array(10).fill(0).map((_val, i) => ({
        value: `Item ${i}`,
        context: {
          title: `Item ${i}`,
        },
      })),
    []
  );
  const [selectedItem, setSelectedItem] = React.useState<SelectItem>(items[3]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Select
        items={items}
        placeholder={"placeholder"}
        selectedItem={selectedItem}
        onChange={({ selectedItem }) => {
          setSelectedItem(selectedItem);
        }}
      />
    </main>
  );
}
