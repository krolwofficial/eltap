import React, { ReactElement, useState } from "react";
import { Text } from "../Typography";
import { Button } from "./";
import {
  PlaceholderIcon,
  ArrowBarIcon,
  BentArrowIcon,
  MenuIcon,
} from "../Icon";

export default {
  title: "Inputs/Button",
  component: Button,
};

export function NoIcon(): ReactElement {
  return (
    <div>
      <div className="tw-flex-col tw-space-y-4">
        <div className="tw-flex tw-space-x-4">
          <Button size="sm">Button</Button>
          <Button>Button</Button>
          <Button size="lg">Button</Button>
        </div>
      </div>
      <br />
    </div>
  );
}

export function IconOnly(): ReactElement {
  /**
   * For any button that displays an icon, other than the MenuIcon, make sure to set the icon size inside the Icon component.
   * If you omit to set this, then the default is medium size (16px x 16px), but if you are using a small button size, set the icon size to "size="xs"" (12px X 12px).
   * aria-label is mandatory for Icon Only Button.
   */
  return (
    <div className="tw-flex tw-space-x-4">
      <Button
        aria-label={"It is an Icon-only button"}
        icon={<PlaceholderIcon size="md" />}
      />
      <Button
        aria-label={"It is an Icon-only button"}
        icon={<ArrowBarIcon size="md" />}
      />
      <Button
        aria-label={"It is an Icon-only button"}
        icon={<BentArrowIcon size="md" />}
      />
      <Button
        aria-label={"It is an Icon-only button"}
        icon={<MenuIcon size="md" />}
      />
    </div>
  );
}

export function Default(): ReactElement {
  return (
    <div>
      <div className="tw-flex-col tw-space-y-4">
        <div className="tw-flex tw-space-x-4">
          <Button
            icon={<PlaceholderIcon />}
            iconAfter={<PlaceholderIcon />}
            size="sm"
          >
            Button
          </Button>
          <Button icon={<PlaceholderIcon />} iconAfter={<PlaceholderIcon />}>
            Button
          </Button>
          <Button
            icon={<PlaceholderIcon />}
            iconAfter={<PlaceholderIcon />}
            size="lg"
          >
            Button
          </Button>
        </div>
      </div>
      <br />
    </div>
  );
}
